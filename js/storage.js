/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Módulo de Armazenamento Local e Sincronização (Storage Manager)
 * Bujinkan Nenriki Dojo
 */

const NenrikiStorage = {
  STORAGE_KEY: "nenriki_densho_custom_data_v1",
  NOTES_KEY: "nenriki_densho_user_notes_v1",
  STUDY_PROGRESS_KEY: "nenriki_densho_study_progress_v1",

  // Carregar dados salvos ou mesclar com o banco mestre
  loadData() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (!saved) {
        return this.cloneMasterData();
      }
      
      const customData = JSON.parse(saved);
      // Mesclar para garantir que novas técnicas adicionadas na master continuem existindo
      const master = this.cloneMasterData();
      
      // Mapear técnicas modificadas
      const customMap = new Map(customData.techniques.map(t => [t.id, t]));
      const mergedTechniques = master.techniques.map(t => {
        if (customMap.has(t.id)) {
          return { ...t, ...customMap.get(t.id), isCustomized: true };
        }
        return t;
      });

      // Incluir técnicas criadas pelo usuário (novos IDs)
      customData.techniques.forEach(t => {
        if (!master.techniques.some(mt => mt.id === t.id)) {
          mergedTechniques.push({ ...t, isUserCreated: true });
        }
      });

      return {
        ...master,
        techniques: mergedTechniques,
        customizedCount: customData.techniques ? customData.techniques.filter(t => t.isCustomized || t.isUserCreated).length : 0
      };
    } catch (e) {
      console.error("Erro ao carregar dados do LocalStorage:", e);
      return this.cloneMasterData();
    }
  },

  // Salvar uma técnica individualmente
  saveTechnique(technique) {
    try {
      const currentData = this.loadData();
      const index = currentData.techniques.findIndex(t => t.id === technique.id);
      
      technique.isCustomized = true;
      technique.updatedAt = new Date().toISOString();

      if (index >= 0) {
        currentData.techniques[index] = technique;
      } else {
        currentData.techniques.push(technique);
      }

      // Filtrar apenas as técnicas customizadas ou criadas para salvar no storage de forma limpa
      const toSave = {
        meta: currentData.meta,
        savedAt: new Date().toISOString(),
        techniques: currentData.techniques.filter(t => t.isCustomized || t.isUserCreated)
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toSave));
      return true;
    } catch (e) {
      console.error("Erro ao salvar técnica no LocalStorage:", e);
      return false;
    }
  },

  // Restaurar uma técnica específica para o padrão da tradição
  resetTechnique(techniqueId) {
    try {
      const master = this.cloneMasterData();
      const masterTech = master.techniques.find(t => t.id === techniqueId);
      
      const currentSaved = localStorage.getItem(this.STORAGE_KEY);
      if (currentSaved) {
        const customData = JSON.parse(currentSaved);
        customData.techniques = customData.techniques.filter(t => t.id !== techniqueId);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customData));
      }
      return masterTech || null;
    } catch (e) {
      console.error("Erro ao resetar técnica:", e);
      return null;
    }
  },

  // Restaurar toda a base para o padrão do Densho
  resetAll() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.NOTES_KEY);
      return this.cloneMasterData();
    } catch (e) {
      console.error("Erro ao resetar banco:", e);
      return null;
    }
  },

  // Exportar banco de dados completo para arquivo JSON
  exportJSON() {
    const data = this.loadData();
    const exportObject = {
      exportVersion: "1.0",
      exportedAt: new Date().toISOString(),
      dojo: "Bujinkan Nenriki Dojo",
      system: "Nenriki Denshi Densho",
      data: data
    };

    const blob = new Blob([JSON.stringify(exportObject, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Nenriki_Denshi_Densho_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Importar arquivo JSON de backup
  importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      const incomingData = parsed.data || parsed;
      if (!incomingData.techniques || !Array.isArray(incomingData.techniques)) {
        throw new Error("Formato de arquivo inválido. Lista de técnicas não encontrada.");
      }

      const toSave = {
        meta: incomingData.meta || window.NENRIKI_DATABASE.meta,
        importedAt: new Date().toISOString(),
        techniques: incomingData.techniques
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toSave));
      return true;
    } catch (e) {
      console.error("Erro ao importar JSON:", e);
      alert("Erro ao importar arquivo JSON: " + e.message);
      return false;
    }
  },

  // Obter progresso de estudo (Flashcards / Checklist de treino)
  getStudyProgress() {
    try {
      const progress = localStorage.getItem(this.STUDY_PROGRESS_KEY);
      return progress ? JSON.parse(progress) : { mastered: [], reviewing: [] };
    } catch (e) {
      return { mastered: [], reviewing: [] };
    }
  },

  saveStudyStatus(techniqueId, status) { // status: 'mastered' | 'reviewing' | 'neutral'
    try {
      const progress = this.getStudyProgress();
      progress.mastered = progress.mastered.filter(id => id !== techniqueId);
      progress.reviewing = progress.reviewing.filter(id => id !== techniqueId);

      if (status === "mastered") {
        progress.mastered.push(techniqueId);
      } else if (status === "reviewing") {
        progress.reviewing.push(techniqueId);
      }

      localStorage.setItem(this.STUDY_PROGRESS_KEY, JSON.stringify(progress));
      return progress;
    } catch (e) {
      console.error("Erro ao salvar progresso de estudo:", e);
      return null;
    }
  },

  // ==========================================
  // REGISTRO DE TREINO DO DOJO (KEIKO TRACKER)
  // ==========================================
  TRAINING_LOG_KEY: "nenriki_densho_training_log_v1",

  getTrainingLog() {
    try {
      const log = localStorage.getItem(this.TRAINING_LOG_KEY);
      return log ? JSON.parse(log) : {}; // { "YYYY-MM-DD": ["tech-id-1", "tech-id-2"] }
    } catch (e) {
      return {};
    }
  },

  // Marcar técnica como treinada em uma data específica
  markTrainedDate(techniqueId, dateStr, notes = "") {
    try {
      const log = this.getTrainingLog();
      if (!log[dateStr]) {
        log[dateStr] = [];
      }
      if (!log[dateStr].includes(techniqueId)) {
        log[dateStr].push(techniqueId);
      }
      localStorage.setItem(this.TRAINING_LOG_KEY, JSON.stringify(log));

      // Atualiza também na técnica diretamente
      const currentData = this.loadData();
      const tech = currentData.techniques.find(t => t.id === techniqueId);
      if (tech) {
        if (!tech.trainingHistory) tech.trainingHistory = [];
        if (!tech.trainingHistory.some(h => (typeof h === 'string' ? h === dateStr : h.date === dateStr))) {
          tech.trainingHistory.push({ date: dateStr, notes: notes, loggedAt: new Date().toISOString() });
        }
        this.saveTechnique(tech);
      }
      return true;
    } catch (e) {
      console.error("Erro ao registrar treino:", e);
      return false;
    }
  },

  // Remover marcação de treino
  removeTrainedDate(techniqueId, dateStr) {
    try {
      const log = this.getTrainingLog();
      if (log[dateStr]) {
        log[dateStr] = log[dateStr].filter(id => id !== techniqueId);
        if (log[dateStr].length === 0) delete log[dateStr];
        localStorage.setItem(this.TRAINING_LOG_KEY, JSON.stringify(log));
      }

      const currentData = this.loadData();
      const tech = currentData.techniques.find(t => t.id === techniqueId);
      if (tech && tech.trainingHistory) {
        tech.trainingHistory = tech.trainingHistory.filter(h => (typeof h === 'string' ? h !== dateStr : h.date !== dateStr));
        this.saveTechnique(tech);
      }
      return true;
    } catch (e) {
      console.error("Erro ao remover registro de treino:", e);
      return false;
    }
  },

  // Obter todas as técnicas treinadas em uma data específica
  getTechniquesTrainedOn(dateStr) {
    const log = this.getTrainingLog();
    return log[dateStr] || [];
  },

  // Obter histórico de datas de uma técnica
  getTechniqueTrainingHistory(techniqueId) {
    const currentData = this.loadData();
    const tech = currentData.techniques.find(t => t.id === techniqueId);
    if (!tech || !tech.trainingHistory) return [];
    return tech.trainingHistory.map(h => typeof h === 'string' ? { date: h, notes: "" } : h);
  },

  // Utilitário para clonar profundamente o banco de dados mestre
  cloneMasterData() {
    return JSON.parse(JSON.stringify(window.NENRIKI_DATABASE));
  }
};

if (typeof window !== "undefined") {
  window.NenrikiStorage = NenrikiStorage;
}
