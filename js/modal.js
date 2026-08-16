/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Modal de Detalhes da Técnica, Gestão de Henka e Módulo de Edição
 * Bujinkan Nenriki Dojo
 */

class NenrikiModal {
  constructor() {
    this.currentTech = null;
    this.activeTab = "tab-etymology";
    this.isEditing = false;

    this.init();
  }

  init() {
    // Cria o elemento modal no DOM se não existir
    let modalRoot = document.getElementById("techniqueModalRoot");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "techniqueModalRoot";
      modalRoot.className = "modal-overlay hidden";
      document.body.appendChild(modalRoot);
    }
    this.modalEl = modalRoot;

    // Fechar ao clicar no overlay de fundo ou com tecla ESC
    this.modalEl.addEventListener("click", (e) => {
      if (e.target === this.modalEl) {
        this.close();
      }
    });

    // Teclas de atalho: ESC para fechar, Setas Esquerda/Direita para navegar entre técnicas
    window.addEventListener("keydown", (e) => {
      if (!this.modalEl || this.modalEl.classList.contains("hidden")) return;

      if (e.key === "Escape") {
        this.close();
        return;
      }

      // Evita disparar navegação se o usuário estiver digitando em campos de texto
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      if (activeTag === "input" || activeTag === "textarea") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.navigateRelative(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.navigateRelative(1);
      }
    });
  }

  getMakiTechniques() {
    const data = window.NenrikiStorage ? window.NenrikiStorage.loadData() : window.NENRIKI_DATABASE;
    if (!this.currentTech) return [];
    return (data.techniques || []).filter(t => t.makiId === this.currentTech.makiId);
  }

  navigateRelative(direction) {
    const makiTechs = this.getMakiTechniques();
    if (makiTechs.length <= 1) return;
    const currentIndex = makiTechs.findIndex(t => t.id === this.currentTech.id);
    if (currentIndex === -1) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = makiTechs.length - 1; // loop circular suave
    if (newIndex >= makiTechs.length) newIndex = 0;

    const targetTech = makiTechs[newIndex];
    if (targetTech) {
      this.open(targetTech.id);
    }
  }

  open(techId) {
    const data = window.NenrikiStorage ? window.NenrikiStorage.loadData() : window.NENRIKI_DATABASE;
    const tech = data.techniques.find(t => t.id === techId);
    if (!tech) {
      console.warn("Técnica não encontrada:", techId);
      return;
    }

    this.currentTech = JSON.parse(JSON.stringify(tech));
    this.isEditing = false;
    this.render();
    this.modalEl.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modalEl.classList.add("hidden");
    document.body.style.overflow = "";
    this.currentTech = null;
    this.isEditing = false;
  }

  render() {
    if (!this.currentTech) return;
    const tech = this.currentTech;
    const makiMeta = (window.NENRIKI_DATABASE.makis || []).find(m => m.id === tech.makiId) || {
      name: "Densho",
      color: "#eab308"
    };

    // Técnicas do Maki para navegação
    const makiTechs = this.getMakiTechniques();
    const currentIndex = makiTechs.findIndex(t => t.id === tech.id);
    const totalInMaki = makiTechs.length;
    const prevTech = currentIndex > 0 ? makiTechs[currentIndex - 1] : makiTechs[makiTechs.length - 1];
    const nextTech = currentIndex < makiTechs.length - 1 ? makiTechs[currentIndex + 1] : makiTechs[0];

    // Histórico de Treino (Keiko Tracker)
    const trainingHistory = window.NenrikiStorage ? window.NenrikiStorage.getTechniqueTrainingHistory(tech.id) : (tech.trainingHistory || []);
    const todayStr = new Date().toISOString().slice(0, 10);
    const hasTrainedToday = trainingHistory.some(h => (typeof h === 'string' ? h === todayStr : h.date === todayStr));

    this.modalEl.innerHTML = `
      <!-- Botões de Navegação Flutuantes Laterais -->
      ${totalInMaki > 1 ? `
        <button class="lateral-nav-btn lateral-nav-prev" id="btnLateralPrev" title="Técnica Anterior: ${prevTech ? prevTech.nameRomaji : ''} (Seta ←)">
          <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button class="lateral-nav-btn lateral-nav-next" id="btnLateralNext" title="Próxima Técnica: ${nextTech ? nextTech.nameRomaji : ''} (Seta →)">
          <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      ` : ''}

      <div class="modal-window" style="--maki-theme: ${makiMeta.color}">
        <!-- Cabeçalho do Modal -->
        <div class="modal-header">
          <div class="header-main-content">
            <div class="header-badges">
              <span class="badge-maki" style="background: ${makiMeta.accentBg || 'rgba(234,179,8,0.15)'}; color: ${makiMeta.color}">
                ${makiMeta.kanji || ''} ${makiMeta.name}
              </span>
              <span class="badge-category" title="${tech.categoryExplanation || ''}">
                ${tech.categoryKanji ? `<span class="badge-cat-kanji">${tech.categoryKanji}</span> ` : ''}${tech.category}
                ${tech.categoryTranslation ? `<span class="badge-cat-trans">(${tech.categoryTranslation})</span>` : ''}
              </span>
              ${tech.isCustomized ? '<span class="badge-custom">✏️ Editado no Dojo</span>' : ''}
              ${trainingHistory.length > 0 ? `<span class="keiko-chip">🥋 Treinada ${trainingHistory.length}x</span>` : ''}
            </div>

            <div class="header-titles">
              <div class="title-main-row">
                <h1 class="tech-modal-title">${tech.nameRomaji}</h1>
                <span class="tech-modal-kanji">${tech.nameKanji || ''}</span>
              </div>
              <p class="tech-modal-translation">${tech.translation}</p>
            </div>
          </div>

          <div class="header-actions-col">
            <div class="header-actions-top-row">
              <button class="modal-action-btn ${this.isEditing ? 'active' : ''}" id="btnToggleEdit" title="Editar Informações desta Técnica">
                <svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                ${this.isEditing ? 'Visualizar' : 'Editar'}
              </button>
              <button class="modal-action-btn" id="btnPrintTech" title="Imprimir Ficha Completa da Técnica">
                <svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                Imprimir
              </button>
              <button class="modal-close-btn" id="btnCloseModal" title="Fechar (ESC)">
                &times;
              </button>
            </div>
            <div class="header-actions-bottom-row">
              <button class="btn-modal-back" id="btnModalBack" title="Voltar para a tela anterior">
                <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                Voltar
              </button>
            </div>
          </div>
        </div>

        <!-- Barra de Navegação Entre Técnicas do Maki -->
        ${totalInMaki > 1 ? `
          <div class="modal-nav-strip">
            <button class="nav-arrow-btn nav-prev-btn" id="btnNavPrevTech" title="Técnica Anterior (Seta ←)">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              <span class="nav-btn-text">Anterior</span>
              ${prevTech ? `<span class="nav-tech-preview">${prevTech.nameRomaji}</span>` : ''}
            </button>
            
            <div class="nav-counter-pill">
              <span class="nav-counter-maki">${makiMeta.name}</span>
              <span class="nav-counter-num"><strong>${currentIndex + 1}</strong> de <strong>${totalInMaki}</strong></span>
            </div>

            <button class="nav-arrow-btn nav-next-btn" id="btnNavNextTech" title="Próxima Técnica (Seta →)">
              ${nextTech ? `<span class="nav-tech-preview">${nextTech.nameRomaji}</span>` : ''}
              <span class="nav-btn-text">Próxima</span>
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        ` : ''}

        <!-- Abas de Navegação -->
        <div class="modal-tabs-bar">
          <button class="tab-btn ${this.activeTab === 'tab-etymology' ? 'active' : ''}" data-tab="tab-etymology">
            🔤 Etimologia & Mnemônica
          </button>
          <button class="tab-btn ${this.activeTab === 'tab-steps' ? 'active' : ''}" data-tab="tab-steps">
            🥋 Passo a Passo
          </button>
          <button class="tab-btn ${this.activeTab === 'tab-henka' ? 'active' : ''}" data-tab="tab-henka">
            🌀 Variações (Henka) <span class="tab-badge">${(tech.henka || []).length}</span>
          </button>
          <button class="tab-btn ${this.activeTab === 'tab-media' ? 'active' : ''}" data-tab="tab-media">
            🎥 Mídia & Vídeos
          </button>
          <button class="tab-btn ${this.activeTab === 'tab-notes' ? 'active' : ''}" data-tab="tab-notes">
            📝 Notas do Dojo
          </button>
        </div>

        <!-- Conteúdo das Abas -->
        <div class="modal-body">
          <!-- Widget do Keiko Tracker (Registro de Treino) -->
          <div class="keiko-tracker-card">
            <div class="keiko-tracker-left">
              <div class="keiko-icon">🥋</div>
              <div class="keiko-info-text">
                <span class="keiko-label">Registro de Treino no Tatame (Keiko Tracker)</span>
                <span class="keiko-status-text">
                  ${hasTrainedToday ? '✓ Treinada hoje no Dojo!' : (trainingHistory.length > 0 ? `Último treino em: ${this.formatDate(trainingHistory[trainingHistory.length - 1].date)}` : 'Ainda não registrada em treinos recentes')}
                </span>
                ${trainingHistory.length > 0 ? `
                  <div class="training-history-chips">
                    ${trainingHistory.map(h => `
                      <span class="keiko-chip">
                        ${this.formatDate(h.date)}
                        <button class="keiko-chip-remove" data-date="${h.date}" title="Remover esta data">&times;</button>
                      </span>
                    `).join("")}
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="keiko-tracker-actions">
              <input type="date" id="keikoCustomDate" class="keiko-date-input" value="${todayStr}">
              <button class="btn-mark-trained" id="btnMarkTrained">
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                ${hasTrainedToday ? 'Marcar Novamente' : 'Marcar como Treinada'}
              </button>
            </div>
          </div>

          ${this.isEditing ? this.renderEditForm() : this.renderTabContent()}
        </div>
      </div>
    `;

    this.bindModalEvents();
  }

  formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  renderTabContent() {
    const tech = this.currentTech;

    if (this.activeTab === "tab-etymology") {
      return `
        <div class="tab-pane active">
          <!-- Bloco do Gatilho Mnemônico -->
          <div class="mnemonic-banner">
            <div class="mnemonic-icon">🎯</div>
            <div class="mnemonic-text-area">
              <span class="mnemonic-label">Gatilho Mnemônico (Associação Visual de Memória):</span>
              <p class="mnemonic-content">"${tech.mnemonic || 'Pratique com presença e intenção plena.'}"</p>
            </div>
          </div>

          <!-- Decomposição dos Termos em Kanji -->
          <h3 class="section-title">Decomposição e Significado Literal</h3>
          <div class="etymology-cards-grid">
            ${(tech.etymology || []).map(e => `
              <div class="etym-card">
                <div class="etym-term">${e.term}</div>
                <div class="etym-meaning">${e.meaning}</div>
              </div>
            `).join("")}
          </div>

          <!-- Card Explicativo da Categoria / Módulo -->
          <div class="category-context-banner">
            <div class="cat-banner-header">
              <span class="cat-banner-icon">📂</span>
              <div class="cat-banner-titles">
                <span class="cat-banner-subtitle">Módulo e Categoria do Densho</span>
                <h4 class="cat-banner-name">
                  ${tech.categoryKanji ? `<span class="cat-kanji-highlight">${tech.categoryKanji}</span> ` : ''}${tech.category}
                  ${tech.categoryTranslation ? `<span class="cat-trans-highlight">— ${tech.categoryTranslation}</span>` : ''}
                </h4>
              </div>
            </div>
            <p class="cat-banner-desc">${tech.categoryExplanation || 'Categoria técnica tradicional do Ten-Chi-Jin Ryaku no Maki.'}</p>
          </div>

          <!-- Informações de Categoria e Princípios -->
          <div class="principles-box">
            <h4 class="box-title">Princípio da Tradição</h4>
            <p>Esta técnica pertence ao módulo <strong>${tech.category}</strong> do <strong>${tech.makiId.toUpperCase()} RYAKU NO MAKI</strong>, enfatizando o uso de Tai Sabaki fluido, absorção da força do agressor através de angulação e quebra de equilíbrio postural (Kuzushi).</p>
          </div>
        </div>
      `;
    }

    if (this.activeTab === "tab-steps") {
      return `
        <div class="tab-pane active">
          <div class="steps-flow">
            <!-- Posição Inicial e Ataque -->
            <div class="step-card step-initial">
              <div class="step-icon">🥋</div>
              <div class="step-content">
                <div class="step-label">Posição Inicial e Guarda (Kamae)</div>
                <p>${tech.stepByStep.initialPosition || "Posição em guarda relaxada e firme."}</p>
              </div>
            </div>

            <div class="step-card step-uke">
              <div class="step-icon">⚡</div>
              <div class="step-content">
                <div class="step-label">Ataque do Uke</div>
                <p>${tech.stepByStep.ukeAction || "Ataque direto do Uke."}</p>
              </div>
            </div>

            <!-- Passos do Tori -->
            <div class="step-card step-tori">
              <div class="step-icon">🔄</div>
              <div class="step-content">
                <div class="step-label">Execução do Tori (Passo a Passo Biomecânico)</div>
                <ol class="tori-steps-list">
                  ${(tech.stepByStep.toriExecution || []).map(s => `<li>${s}</li>`).join("")}
                </ol>
              </div>
            </div>

            <!-- Alavanca e Finalização -->
            <div class="step-card step-kuzushi">
              <div class="step-icon">⚖️</div>
              <div class="step-content">
                <div class="step-label">Alavanca, Kuzushi e Chave</div>
                <p>${tech.stepByStep.kuzushiGyaku || "Aplicação da alavanca articular e condução ao solo."}</p>
              </div>
            </div>

            <div class="step-card step-finish">
              <div class="step-icon">🔒</div>
              <div class="step-content">
                <div class="step-label">Finalização e Pontos de Segurança no Treino</div>
                <p>${tech.stepByStep.finishNotes || "Mantenha o controle da postura com Zanshin."}</p>
              </div>
            </div>
          </div>

          <!-- Kyūsho Associados -->
          ${tech.kyushoRelated && tech.kyushoRelated.length > 0 ? `
            <div class="related-kyusho-box">
              <h4 class="box-title">Pontos Vitais (Kyūsho) Associados a esta Técnica:</h4>
              <div class="kyusho-tags-row">
                ${tech.kyushoRelated.map(k => `<span class="kyusho-tag" onclick="window.NenrikiApp.searchByKyusho('${k}')">🎯 ${k}</span>`).join("")}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    if (this.activeTab === "tab-henka") {
      return `
        <div class="tab-pane active">
          <div class="henka-header-row">
            <h3>Variações Praticadas no Dojo</h3>
            <button class="btn-dojo-primary btn-sm" id="btnOpenAddHenka">
              + Adicionar Novo Henka
            </button>
          </div>

          <!-- Formulário Oculto de Novo Henka -->
          <div class="add-henka-form hidden" id="addHenkaForm">
            <h4>Cadastrar Nova Variação</h4>
            <div class="form-group">
              <label>Nome do Henka / Variação:</label>
              <input type="text" id="newHenkaTitle" class="form-input" placeholder="Ex: Henka com Projeção de Quadril">
            </div>
            <div class="form-group">
              <label>Descrição do Movimento:</label>
              <textarea id="newHenkaDesc" class="form-textarea" rows="3" placeholder="Descreva as adaptações de ângulo, pegada ou contra-ataque..."></textarea>
            </div>
            <div class="form-actions">
              <button class="btn-dojo-secondary" id="btnCancelAddHenka">Cancelar</button>
              <button class="btn-dojo-primary" id="btnSaveNewHenka">Salvar Henka</button>
            </div>
          </div>

          <!-- Lista de Henkas -->
          <div class="henka-list">
            ${(tech.henka && tech.henka.length > 0) ? tech.henka.map((h, idx) => `
              <div class="henka-item-card">
                <div class="henka-item-header">
                  <span class="henka-badge">Henka #${idx + 1}</span>
                  <h4 class="henka-title">${h.title}</h4>
                  <button class="henka-delete-btn" data-index="${idx}" title="Excluir Variação">&times;</button>
                </div>
                <p class="henka-desc">${h.description}</p>
              </div>
            `).join("") : `
              <div class="empty-state-card">
                <p>Nenhuma variação personalizada cadastrada para esta técnica.</p>
                <button class="btn-dojo-secondary btn-sm" id="btnOpenAddHenkaEmpty">+ Adicionar a primeira variação</button>
              </div>
            `}
          </div>
        </div>
      `;
    }

    if (this.activeTab === "tab-media") {
      const hasVideo = tech.videoUrl && tech.videoUrl.trim().length > 0;
      const embedUrl = hasVideo ? this.getYouTubeEmbed(tech.videoUrl) : null;

      return `
        <div class="tab-pane active">
          <div class="media-container">
            <h3 class="section-title">Demonstração em Vídeo</h3>
            ${embedUrl ? `
              <div class="video-embed-wrapper">
                <iframe src="${embedUrl}" title="${tech.nameRomaji}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            ` : `
              <div class="video-placeholder">
                <div class="vicon">🎥</div>
                <h4>Nenhum vídeo vinculado</h4>
                <p>Você pode adicionar um link do YouTube (com ou sem marcação de tempo) no campo abaixo para estudar as demonstrações em vídeo desta técnica.</p>
              </div>
            `}

            <div class="video-input-group">
              <label>URL do Vídeo do YouTube:</label>
              <div class="input-with-btn">
                <input type="text" id="inputVideoUrl" class="form-input" placeholder="https://www.youtube.com/watch?v=... ou https://youtu.be/..." value="${tech.videoUrl || ''}">
                <button class="btn-dojo-primary" id="btnSaveVideoUrl">Vincular Vídeo</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (this.activeTab === "tab-notes") {
      return `
        <div class="tab-pane active">
          <div class="notes-container">
            <h3 class="section-title">Anotações Pessoais do Dojo</h3>
            <p class="notes-hint">Registre aqui detalhes ensinados pelo Shihan no tatame, correções de postura, ângulos de alavanca e observações de treino.</p>
            <textarea id="techniqueNotesArea" class="form-textarea notes-area" rows="8" placeholder="Ex: Focar em não levantar o cotovelo durante a rotação... Lembrar de respirar no Tanden antes da entrada...">${tech.dojoNotes || ''}</textarea>
            <div class="notes-actions">
              <span class="save-status-indicator" id="notesSaveIndicator"></span>
              <button class="btn-dojo-primary" id="btnSaveNotes">Salvar Anotações</button>
            </div>
          </div>
        </div>
      `;
    }

    return "";
  }

  renderEditForm() {
    const tech = this.currentTech;

    return `
      <div class="edit-tech-form">
        <div class="form-header-banner">
          <h3>Editando Técnica: ${tech.nameRomaji}</h3>
          <p>Altere os campos necessários para adequar a descrição aos padrões da sua apostila ou anotações do dojo.</p>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Nome em Romaji:</label>
            <input type="text" id="editRomaji" class="form-input" value="${tech.nameRomaji}">
          </div>
          <div class="form-group">
            <label>Nome em Kanji:</label>
            <input type="text" id="editKanji" class="form-input" value="${tech.nameKanji || ''}">
          </div>
        </div>

        <div class="form-group">
          <label>Tradução em Português:</label>
          <input type="text" id="editTranslation" class="form-input" value="${tech.translation}">
        </div>

        <div class="form-group">
          <label>Gatilho Mnemônico (Frase de Associação Visual):</label>
          <textarea id="editMnemonic" class="form-textarea" rows="2">${tech.mnemonic || ''}</textarea>
        </div>

        <div class="form-group">
          <label>Posição Inicial (Kamae):</label>
          <input type="text" id="editInitialPos" class="form-input" value="${tech.stepByStep.initialPosition || ''}">
        </div>

        <div class="form-group">
          <label>Ataque do Uke:</label>
          <input type="text" id="editUkeAction" class="form-input" value="${tech.stepByStep.ukeAction || ''}">
        </div>

        <div class="form-group">
          <label>Passos do Tori (um por linha):</label>
          <textarea id="editToriSteps" class="form-textarea" rows="5">${(tech.stepByStep.toriExecution || []).join("\n")}</textarea>
        </div>

        <div class="form-group">
          <label>Alavanca, Kuzushi e Chave:</label>
          <textarea id="editKuzushi" class="form-textarea" rows="2">${tech.stepByStep.kuzushiGyaku || ''}</textarea>
        </div>

        <div class="form-group">
          <label>Finalização e Segurança:</label>
          <textarea id="editFinishNotes" class="form-textarea" rows="2">${tech.stepByStep.finishNotes || ''}</textarea>
        </div>

        <div class="edit-form-bottom-actions">
          <button class="btn-dojo-danger" id="btnResetToMaster">Restaurar Padrão da Tradição</button>
          <div class="right-buttons">
            <button class="btn-dojo-secondary" id="btnCancelEdit">Cancelar</button>
            <button class="btn-dojo-primary" id="btnSaveFullEdit">Salvar Todas as Alterações</button>
          </div>
        </div>
      </div>
    `;
  }

  bindModalEvents() {
    // Fechar Modal
    const closeBtn = document.getElementById("btnCloseModal");
    if (closeBtn) closeBtn.addEventListener("click", () => this.close());

    // Botão Voltar (Abaixo de Editar e Imprimir)
    const backBtn = document.getElementById("btnModalBack");
    if (backBtn) backBtn.addEventListener("click", () => this.close());

    // Navegação Anterior / Próxima (Barra Superior)
    const btnNavPrev = document.getElementById("btnNavPrevTech");
    if (btnNavPrev) {
      btnNavPrev.addEventListener("click", () => this.navigateRelative(-1));
    }
    const btnNavNext = document.getElementById("btnNavNextTech");
    if (btnNavNext) {
      btnNavNext.addEventListener("click", () => this.navigateRelative(1));
    }

    // Navegação Lateral Flutuante (Chevrons)
    const btnLatPrev = document.getElementById("btnLateralPrev");
    if (btnLatPrev) {
      btnLatPrev.addEventListener("click", () => this.navigateRelative(-1));
    }
    const btnLatNext = document.getElementById("btnLateralNext");
    if (btnLatNext) {
      btnLatNext.addEventListener("click", () => this.navigateRelative(1));
    }

    // Alternar Edição
    const toggleEditBtn = document.getElementById("btnToggleEdit");
    if (toggleEditBtn) {
      toggleEditBtn.addEventListener("click", () => {
        this.isEditing = !this.isEditing;
        this.render();
      });
    }

    // Botão de Impressão Completa da Técnica
    const printBtn = document.getElementById("btnPrintTech");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        this.printTechniqueSheet();
      });
    }

    // Keiko Tracker: Marcar Treino
    const btnMarkTrained = document.getElementById("btnMarkTrained");
    const customDateInput = document.getElementById("keikoCustomDate");
    if (btnMarkTrained && customDateInput) {
      btnMarkTrained.addEventListener("click", () => {
        const chosenDate = customDateInput.value || new Date().toISOString().slice(0, 10);
        if (window.NenrikiStorage) {
          window.NenrikiStorage.markTrainedDate(this.currentTech.id, chosenDate, "Treino registrado no Dojo");
          // Atualiza técnica atual
          this.currentTech.trainingHistory = window.NenrikiStorage.getTechniqueTrainingHistory(this.currentTech.id);
        }
        this.render();
        if (window.NenrikiApp) {
          window.NenrikiApp.refreshData();
        }
      });
    }

    // Keiko Tracker: Remover Data
    this.modalEl.querySelectorAll(".keiko-chip-remove").forEach(chipBtn => {
      chipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dateToRemove = chipBtn.getAttribute("data-date");
        if (dateToRemove && confirm(`Remover o registro do treino do dia ${this.formatDate(dateToRemove)}?`)) {
          if (window.NenrikiStorage) {
            window.NenrikiStorage.removeTrainedDate(this.currentTech.id, dateToRemove);
            this.currentTech.trainingHistory = window.NenrikiStorage.getTechniqueTrainingHistory(this.currentTech.id);
          }
          this.render();
          if (window.NenrikiApp) {
            window.NenrikiApp.refreshData();
          }
        }
      });
    });

    // Alternar Abas
    this.modalEl.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.activeTab = btn.getAttribute("data-tab");
        this.isEditing = false;
        this.render();
      });
    });

    // Salvar Anotações do Dojo
    const btnSaveNotes = document.getElementById("btnSaveNotes");
    if (btnSaveNotes) {
      btnSaveNotes.addEventListener("click", () => {
        const text = document.getElementById("techniqueNotesArea").value;
        this.currentTech.dojoNotes = text;
        if (window.NenrikiStorage) {
          window.NenrikiStorage.saveTechnique(this.currentTech);
        }
        const indicator = document.getElementById("notesSaveIndicator");
        if (indicator) {
          indicator.innerText = "✓ Anotações salvas com sucesso!";
          setTimeout(() => { if (indicator) indicator.innerText = ""; }, 3000);
        }
      });
    }

    // Salvar URL do Vídeo
    const btnSaveVideoUrl = document.getElementById("btnSaveVideoUrl");
    if (btnSaveVideoUrl) {
      btnSaveVideoUrl.addEventListener("click", () => {
        const url = document.getElementById("inputVideoUrl").value.trim();
        this.currentTech.videoUrl = url;
        if (window.NenrikiStorage) {
          window.NenrikiStorage.saveTechnique(this.currentTech);
        }
        this.render();
      });
    }

    // Gestão de Henka
    const openAddHenkaBtn = document.getElementById("btnOpenAddHenka");
    const openAddHenkaEmptyBtn = document.getElementById("btnOpenAddHenkaEmpty");
    const addHenkaForm = document.getElementById("addHenkaForm");
    const cancelAddHenkaBtn = document.getElementById("btnCancelAddHenka");
    const saveNewHenkaBtn = document.getElementById("btnSaveNewHenka");

    if (openAddHenkaBtn && addHenkaForm) {
      openAddHenkaBtn.addEventListener("click", () => addHenkaForm.classList.remove("hidden"));
    }
    if (openAddHenkaEmptyBtn && addHenkaForm) {
      openAddHenkaEmptyBtn.addEventListener("click", () => addHenkaForm.classList.remove("hidden"));
    }
    if (cancelAddHenkaBtn && addHenkaForm) {
      cancelAddHenkaBtn.addEventListener("click", () => addHenkaForm.classList.add("hidden"));
    }
    if (saveNewHenkaBtn) {
      saveNewHenkaBtn.addEventListener("click", () => {
        const title = document.getElementById("newHenkaTitle").value.trim();
        const desc = document.getElementById("newHenkaDesc").value.trim();
        if (!title) {
          alert("Por favor, digite o título do Henka.");
          return;
        }
        if (!this.currentTech.henka) this.currentTech.henka = [];
        this.currentTech.henka.push({ title, description: desc });
        if (window.NenrikiStorage) {
          window.NenrikiStorage.saveTechnique(this.currentTech);
        }
        this.render();
      });
    }

    // Excluir Henka
    this.modalEl.querySelectorAll(".henka-delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = parseInt(btn.getAttribute("data-index"), 10);
        if (confirm("Deseja remover esta variação de Henka?")) {
          this.currentTech.henka.splice(index, 1);
          if (window.NenrikiStorage) {
            window.NenrikiStorage.saveTechnique(this.currentTech);
          }
          this.render();
        }
      });
    });

    // Salvar Formulário Completo de Edição
    const saveFullEditBtn = document.getElementById("btnSaveFullEdit");
    if (saveFullEditBtn) {
      saveFullEditBtn.addEventListener("click", () => {
        this.currentTech.nameRomaji = document.getElementById("editRomaji").value.trim();
        this.currentTech.nameKanji = document.getElementById("editKanji").value.trim();
        this.currentTech.translation = document.getElementById("editTranslation").value.trim();
        this.currentTech.mnemonic = document.getElementById("editMnemonic").value.trim();
        this.currentTech.stepByStep.initialPosition = document.getElementById("editInitialPos").value.trim();
        this.currentTech.stepByStep.ukeAction = document.getElementById("editUkeAction").value.trim();
        this.currentTech.stepByStep.toriExecution = document.getElementById("editToriSteps").value
          .split("\n")
          .map(s => s.trim())
          .filter(s => s.length > 0);
        this.currentTech.stepByStep.kuzushiGyaku = document.getElementById("editKuzushi").value.trim();
        this.currentTech.stepByStep.finishNotes = document.getElementById("editFinishNotes").value.trim();

        if (window.NenrikiStorage) {
          window.NenrikiStorage.saveTechnique(this.currentTech);
        }

        this.isEditing = false;
        this.render();
        
        // Atualiza a visualização principal do App
        if (window.NenrikiApp) {
          window.NenrikiApp.refreshData();
        }
      });
    }

    // Cancelar Edição
    const cancelEditBtn = document.getElementById("btnCancelEdit");
    if (cancelEditBtn) {
      cancelEditBtn.addEventListener("click", () => {
        this.isEditing = false;
        this.render();
      });
    }

    // Restaurar Padrão
    const resetToMasterBtn = document.getElementById("btnResetToMaster");
    if (resetToMasterBtn) {
      resetToMasterBtn.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja restaurar esta técnica para o texto original do Densho? Todas as edições desta técnica serão descartadas.")) {
          if (window.NenrikiStorage) {
            const restored = window.NenrikiStorage.resetTechnique(this.currentTech.id);
            if (restored) {
              this.currentTech = JSON.parse(JSON.stringify(restored));
            }
          }
          this.isEditing = false;
          this.render();
          if (window.NenrikiApp) {
            window.NenrikiApp.refreshData();
          }
        }
      });
    }
  }

  printTechniqueSheet() {
    if (!this.currentTech) return;
    const tech = this.currentTech;
    const makiMeta = (window.NENRIKI_DATABASE.makis || []).find(m => m.id === tech.makiId) || {
      name: "Ten-Chi-Jin Ryaku no Maki",
      kanji: "天地人略の巻",
      meaning: "Pergaminho Tradicional"
    };
    const trainingHistory = window.NenrikiStorage ? window.NenrikiStorage.getTechniqueTrainingHistory(tech.id) : (tech.trainingHistory || []);

    // Remove ficha anterior de impressão se existir
    let existingSheet = document.getElementById("printableDenshoSheet");
    if (existingSheet) existingSheet.remove();

    const printSheet = document.createElement("div");
    printSheet.id = "printableDenshoSheet";
    printSheet.className = "printable-densho-sheet";

    printSheet.innerHTML = `
      <div class="print-page-wrapper">
        <!-- Cabeçalho Oficial do Dojo com Logo Oficial -->
        <div class="print-dojo-header">
          <div class="print-header-brand">
            <img src="img/nenriki_dojo_logo.png" alt="Bujinkan Nenriki Dojo (武神館 念力道場)" class="print-dojo-emblem-img">
            <div class="print-dojo-text">
              <h1 class="print-main-title">BUJINKAN NENRIKI DOJO • 武神館 念力道場</h1>
              <h2 class="print-sub-title">TEN-CHI-JIN RYAKU NO MAKI (天地人略の巻) • FICHA TÉCNICA OFICIAL</h2>
            </div>
          </div>
          <div class="print-maki-badge-box">
            <span class="print-maki-kanji-big">${makiMeta.kanji || ''}</span>
            <span class="print-maki-name-text">${makiMeta.name}</span>
          </div>
        </div>

        <!-- Bloco Principal da Técnica & Categoria -->
        <div class="print-tech-identity">
          <div class="print-category-info">
            <strong>Módulo / Categoria:</strong> ${tech.categoryKanji ? tech.categoryKanji + ' ' : ''}${tech.category} ${tech.categoryTranslation ? '— (' + tech.categoryTranslation + ')' : ''}
            ${tech.categoryExplanation ? `<p class="print-cat-explanation">${tech.categoryExplanation}</p>` : ''}
          </div>
          <div class="print-tech-title-row">
            <h2 class="print-tech-romaji">${tech.nameRomaji}</h2>
            <span class="print-tech-kanji">${tech.nameKanji || ''}</span>
          </div>
          <p class="print-tech-translation">Tradução: <strong>${tech.translation}</strong></p>
        </div>

        <!-- Mnemônica & Etimologia -->
        <div class="print-section-box">
          <h3 class="print-section-header">🎯 Gatilho Mnemônico & Decomposição dos Ideogramas</h3>
          <div class="print-mnemonic-quote">
            "${tech.mnemonic || 'Pratique com presença plena, postura ereta e fluidez.'}"
          </div>
          ${(tech.etymology && tech.etymology.length > 0) ? `
            <table class="print-etym-table">
              <thead>
                <tr>
                  <th style="width: 35%;">Ideograma / Termo</th>
                  <th>Significado Literal Marcial</th>
                </tr>
              </thead>
              <tbody>
                ${tech.etymology.map(e => `
                  <tr>
                    <td><strong>${e.term}</strong></td>
                    <td>${e.meaning}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          ` : ''}
        </div>

        <!-- Passo a Passo Biomecânico Completo -->
        <div class="print-section-box">
          <h3 class="print-section-header">🥋 Execução Biomecânica da Tradição (Passo a Passo)</h3>
          
          <div class="print-step-grid">
            <div class="print-step-col">
              <strong>Posição Inicial (Kamae):</strong>
              <p>${tech.stepByStep.initialPosition || 'Posição em guarda padrão.'}</p>
            </div>
            <div class="print-step-col">
              <strong>Ataque do Uke:</strong>
              <p>${tech.stepByStep.ukeAction || 'Ataque direto do adversário.'}</p>
            </div>
          </div>

          <div class="print-step-block">
            <strong>Sequência de Execução do Tori:</strong>
            <ol class="print-steps-ordered">
              ${(tech.stepByStep.toriExecution || []).map(s => `<li>${s}</li>`).join("")}
            </ol>
          </div>

          <div class="print-step-grid">
            <div class="print-step-col">
              <strong>Alavanca & Desequilíbrio (Kuzushi):</strong>
              <p>${tech.stepByStep.kuzushiGyaku || 'Aplicação da alavanca articular.'}</p>
            </div>
            <div class="print-step-col">
              <strong>Finalização & Zanshin:</strong>
              <p>${tech.stepByStep.finishNotes || 'Mantenha consciência atenta.'}</p>
            </div>
          </div>
        </div>

        <!-- Pontos Vitais (Kyūsho) & Variações (Henka) -->
        <div class="print-two-col-box">
          <div class="print-col-item">
            <h4 class="print-sub-header">🎯 Pontos Vitais (Kyūsho) Associados:</h4>
            <p class="print-kyusho-list">${(tech.kyushoRelated && tech.kyushoRelated.length > 0) ? tech.kyushoRelated.join(" • ") : "Suigetsu • Matsukaze"}</p>
          </div>
          <div class="print-col-item">
            <h4 class="print-sub-header">🌀 Variações Praticadas (Henka):</h4>
            ${(tech.henka && tech.henka.length > 0) ? tech.henka.map(h => `<div class="print-henka-row"><strong>${h.title}:</strong> ${h.description}</div>`).join("") : '<p>Forma base da tradição.</p>'}
          </div>
        </div>

        <!-- Registro de Treino (Keiko Tracker) & Anotações do Dojo -->
        <div class="print-section-box">
          <h3 class="print-section-header">📝 Registro de Treino no Tatame & Anotações do Praticante</h3>
          <div class="print-keiko-summary">
            <strong>Datas Treinadas:</strong> 
            ${trainingHistory.length > 0 ? trainingHistory.map(h => this.formatDate(h.date)).join(" | ") : "Nenhum treino registrado ainda."}
          </div>
          <div class="print-notes-content">
            <strong>Notas Pessoais do Dojo:</strong>
            <p>${tech.dojoNotes ? tech.dojoNotes : "Espaço livre para anotações de aula, correções posturais do Shihan e detalhes de tatame..."}</p>
          </div>
        </div>

        <!-- Rodapé da Ficha -->
        <div class="print-footer-strip">
          <span>Bujinkan Nenriki Dojo • Shinden Fudō Ryū / Takagi Yōshin Ryū / Togakure Ryū</span>
          <span>Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}</span>
          <span>Visto do Instrutor: ____________________</span>
        </div>
      </div>
    `;

    document.body.appendChild(printSheet);

    const triggerPrint = () => {
      window.print();
      setTimeout(() => {
        if (printSheet && printSheet.parentNode) {
          printSheet.parentNode.removeChild(printSheet);
        }
      }, 2000);
    };

    const emblemImg = printSheet.querySelector(".print-dojo-emblem-img");
    if (emblemImg && !emblemImg.complete) {
      emblemImg.onload = triggerPrint;
      emblemImg.onerror = triggerPrint;
    } else {
      setTimeout(triggerPrint, 50);
    }
  }

  getYouTubeEmbed(url) {
    if (!url) return null;
    try {
      let videoId = "";
      let timestamp = 0;

      // Trata formatos: https://www.youtube.com/watch?v=XXXX&t=30s ou https://youtu.be/XXXX?t=30
      if (url.includes("youtu.be/")) {
        const parts = url.split("youtu.be/")[1].split("?");
        videoId = parts[0];
        if (parts[1] && parts[1].includes("t=")) {
          const tPart = parts[1].split("t=")[1].split("&")[0];
          timestamp = parseInt(tPart, 10) || 0;
        }
      } else if (url.includes("youtube.com/watch")) {
        const urlParams = new URLSearchParams(url.split("?")[1]);
        videoId = urlParams.get("v");
        const tParam = urlParams.get("t");
        if (tParam) {
          timestamp = parseInt(tParam, 10) || 0;
        }
      }

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?start=${timestamp}&rel=0`;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}

if (typeof window !== "undefined") {
  window.NenrikiModal = new NenrikiModal();
}

