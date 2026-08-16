/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Controlador Principal da Aplicação (App Controller)
 * Bujinkan Nenriki Dojo
 */

class NenrikiApp {
  constructor() {
    this.currentView = "viewMindmap"; // 'viewMindmap' | 'viewTree' | 'viewGrid' | 'viewKyusho' | 'viewFlashcards'
    this.data = null;
    this.searchEngine = null;
    this.mindmap = null;
    this.kyushoModule = null;
    this.flashcardsModule = null;

    this.init();
  }

  init() {
    // Carrega os dados mesclados do Storage
    this.data = window.NenrikiStorage ? window.NenrikiStorage.loadData() : window.NENRIKI_DATABASE;

    // Inicializa os submódulos
    this.mindmap = new NenrikiMindmap("mindmapContainer");
    this.kyushoModule = new NenrikiKyusho("kyushoContainer");
    this.flashcardsModule = new NenrikiFlashcards("flashcardsContainer");

    // Inicializa o Motor de Busca
    this.searchEngine = new NenrikiSearch(this.data.techniques, (results, query) => {
      this.handleSearchResults(results, query);
    });

    // Passa os dados para os módulos
    this.refreshData();

    // Vincula eventos globais de UI
    this.bindEvents();

    // Atualiza contadores
    this.updateStats();
  }

  refreshData() {
    this.data = window.NenrikiStorage ? window.NenrikiStorage.loadData() : window.NENRIKI_DATABASE;
    this.searchEngine.updateData(this.data.techniques);
    this.mindmap.setData(this.data);
    this.kyushoModule.setKyushoData(this.data.kyushoList);
    this.flashcardsModule.setTechniques(this.data.techniques);

    this.renderTree();
    this.renderGrid();
    this.updateStats();
  }

  bindEvents() {
    // Alternância de Visualizações (Tabs Principais)
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.getAttribute("data-view");
        this.switchView(targetView);
      });
    });

    // Barra de Busca Global
    const globalSearchInput = document.getElementById("globalSearchInput");
    if (globalSearchInput) {
      globalSearchInput.addEventListener("input", (e) => {
        const q = e.target.value;
        this.searchEngine.search(q);
      });
    }

    // Filtros Rápidos por Maki
    document.querySelectorAll(".maki-filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".maki-filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const makiId = pill.getAttribute("data-maki");
        this.searchEngine.setMakiFilter(makiId);
      });
    });

    // Botões de Backup / Export / Import
    const btnExport = document.getElementById("btnExportData");
    if (btnExport) {
      btnExport.addEventListener("click", () => {
        if (window.NenrikiStorage) {
          window.NenrikiStorage.exportJSON();
        }
      });
    }

    const btnImport = document.getElementById("btnImportData");
    const fileInput = document.getElementById("importFileInput");
    if (btnImport && fileInput) {
      btnImport.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (window.NenrikiStorage.importJSON(event.target.result)) {
              alert("Banco de dados do Densho importado com sucesso!");
              this.refreshData();
            }
          };
          reader.readAsText(file);
        }
      });
    }

    const btnResetAll = document.getElementById("btnResetAllData");
    if (btnResetAll) {
      btnResetAll.addEventListener("click", () => {
        if (confirm("Deseja restaurar todo o Densho para os dados padrão originais? Todas as anotações e edições serão redefinidas.")) {
          window.NenrikiStorage.resetAll();
          this.refreshData();
          alert("Densho restaurado com sucesso!");
        }
      });
    }

    // Botão de Recolher / Expandir Cabeçalho (Modo Imersivo)
    const btnToggleHeader = document.getElementById("btnToggleHeader");
    if (btnToggleHeader) {
      btnToggleHeader.addEventListener("click", () => {
        document.body.classList.toggle("header-collapsed");
        const isCollapsed = document.body.classList.contains("header-collapsed");
        const text = btnToggleHeader.querySelector(".toggle-header-text");
        const svg = btnToggleHeader.querySelector("svg");
        if (isCollapsed) {
          if (text) text.innerText = "Expandir Topo";
          if (svg) svg.innerHTML = '<path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>';
          btnToggleHeader.classList.add("active");
        } else {
          if (text) text.innerText = "Recolher Topo";
          if (svg) svg.innerHTML = '<path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>';
          btnToggleHeader.classList.remove("active");
        }
        // Redimensiona o canvas ativo para o novo espaço disponível
        if (this.mindmap && this.currentView === "viewMindmap") {
          setTimeout(() => this.mindmap.resetView(), 150);
        } else if (this.kyushoModule && this.currentView === "viewKyusho") {
          setTimeout(() => this.kyushoModule.resetView(), 150);
        }
      });
    }

    // Atalhos de Teclado
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const search = document.getElementById("globalSearchInput");
        if (search) search.focus();
      }
    });
  }

  switchView(viewId) {
    this.currentView = viewId;

    // Atualiza botões da navegação
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      if (btn.getAttribute("data-view") === viewId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Alterna os contêineres de tela
    document.querySelectorAll(".view-section").forEach(sec => {
      if (sec.id === viewId) {
        sec.classList.remove("hidden");
      } else {
        sec.classList.add("hidden");
      }
    });

    // Se mudou para o Mindmap, recalcular posicionamento e centralização
    if (viewId === "viewMindmap" && this.mindmap) {
      this.mindmap.render();
      setTimeout(() => {
        this.mindmap.resetView();
      }, 50);
    } else if (viewId === "viewKyusho" && this.kyushoModule) {
      this.kyushoModule.renderDiagrams();
      setTimeout(() => {
        this.kyushoModule.resetView();
      }, 50);
    }
  }

  handleSearchResults(results, query) {
    // Atualiza o Mindmap com destaque
    if (this.mindmap) {
      this.mindmap.setHighlight(query);
    }

    // Atualiza as visualizações de Árvore e Grade
    this.renderTree(results);
    this.renderGrid(results);

    // Atualiza badge de contagem de resultados
    const countBadge = document.getElementById("searchResultCount");
    if (countBadge) {
      if (query.trim().length > 0) {
        countBadge.innerText = `${results.length} técnica(s) encontrada(s)`;
        countBadge.classList.remove("hidden");
      } else {
        countBadge.classList.add("hidden");
      }
    }
  }

  renderTree(filteredTechs = null) {
    const container = document.getElementById("treeContainer");
    if (!container) return;

    const listToRender = filteredTechs || this.data.techniques;

    container.innerHTML = this.data.makis.map(maki => {
      const makiTechs = listToRender.filter(t => t.makiId === maki.id);
      if (makiTechs.length === 0) return "";

      // Agrupa por categoria
      const catMap = new Map();
      makiTechs.forEach(t => {
        if (!catMap.has(t.category)) catMap.set(t.category, []);
        catMap.get(t.category).push(t);
      });

      return `
        <div class="tree-maki-card" style="--maki-color: ${maki.color}">
          <div class="tree-maki-header">
            <div class="tree-maki-titles">
              <span class="tree-maki-kanji">${maki.kanji}</span>
              <h2 class="tree-maki-name">${maki.name}</h2>
            </div>
            <span class="tree-maki-count">${makiTechs.length} técnicas</span>
          </div>
          <p class="tree-maki-desc">${maki.description}</p>

          <div class="tree-categories-list">
            ${Array.from(catMap.entries()).map(([catName, techs]) => {
              const sampleTech = techs[0] || {};
              const catMeta = (this.data.categories && this.data.categories[catName]) || {
                kanji: sampleTech.categoryKanji || "",
                translation: sampleTech.categoryTranslation || "",
                explanation: sampleTech.categoryExplanation || ""
              };

              return `
              <div class="tree-category-group">
                <div class="tree-cat-header">
                  <div class="tree-cat-title-group">
                    <div class="tree-cat-title-row">
                      ${catMeta.kanji ? `<span class="tree-cat-kanji">${catMeta.kanji}</span>` : ''}
                      <h3 class="tree-cat-title">${catName}</h3>
                      ${catMeta.translation ? `<span class="tree-cat-translation">(${catMeta.translation})</span>` : ''}
                    </div>
                    ${catMeta.explanation ? `<p class="tree-cat-explanation">${catMeta.explanation}</p>` : ''}
                  </div>
                  <span class="tree-cat-badge">${techs.length}</span>
                </div>
                <div class="tree-tech-items-grid">
                  ${techs.map(t => {
                    const history = window.NenrikiStorage ? window.NenrikiStorage.getTechniqueTrainingHistory(t.id) : (t.trainingHistory || []);
                    const lastTrained = history.length > 0 ? history[history.length - 1] : null;

                    return `
                      <div class="tree-tech-item" onclick="window.NenrikiModal.open('${t.id}')">
                        <div class="tech-item-left">
                          <span class="t-romaji">
                            ${t.nameRomaji}
                            ${lastTrained ? `<span class="badge-trained-mini" title="Último treino: ${lastTrained.date}">🥋</span>` : ''}
                          </span>
                          <span class="t-trans">${t.translation}</span>
                        </div>
                        <span class="t-kanji">${t.nameKanji || ''}</span>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  renderGrid(filteredTechs = null) {
    const container = document.getElementById("gridContainer");
    if (!container) return;

    const listToRender = filteredTechs || this.data.techniques;

    if (listToRender.length === 0) {
      const isTrainedFilter = this.searchEngine && this.searchEngine.activeMakiFilter === "trained";
      container.innerHTML = `
        <div class="empty-search-state">
          <div class="empty-icon">${isTrainedFilter ? '🥋' : '🔍'}</div>
          <h3>${isTrainedFilter ? 'Nenhuma técnica registrada como treinada ainda' : 'Nenhuma técnica encontrada com este filtro'}</h3>
          <p>${isTrainedFilter ? 'Abra qualquer técnica do Ten-Chi-Jin e clique no botão "🥋 Marcar como Treinada" para registrá-la no seu diário de treinos!' : 'Tente buscar por outro termo, categoria ou nome em japonês.'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = listToRender.map(tech => {
      const maki = this.data.makis.find(m => m.id === tech.makiId) || { color: "#eab308", name: "Densho" };
      const history = window.NenrikiStorage ? window.NenrikiStorage.getTechniqueTrainingHistory(tech.id) : (tech.trainingHistory || []);
      const lastTrained = history.length > 0 ? history[history.length - 1] : null;

      return `
        <div class="tech-card ${lastTrained ? 'is-trained' : ''}" style="--card-theme: ${maki.color}" onclick="window.NenrikiModal.open('${tech.id}')">
          <div class="tcard-top">
            <span class="tcard-badge" style="color: ${maki.color}" title="${tech.categoryExplanation || ''}">
              ${tech.categoryKanji ? tech.categoryKanji + ' ' : ''}${tech.category}
            </span>
            <div class="tcard-top-right">
              ${lastTrained ? `<span class="badge-trained-pill" title="Treinada ${history.length} vezes">🥋 ${this.formatMiniDate(lastTrained.date)}</span>` : ''}
              <span class="tcard-kanji">${tech.nameKanji || ''}</span>
            </div>
          </div>
          <h3 class="tcard-title">${tech.nameRomaji}</h3>
          <p class="tcard-translation">${tech.translation}</p>
          <div class="tcard-mnemonic-snippet">
            <span class="mnem-quote">"${(tech.mnemonic || '').slice(0, 85)}..."</span>
          </div>
          <div class="tcard-footer">
            <span class="maki-indicator" style="background:${maki.color}"></span>
            <span class="maki-label">${maki.name.split(" ")[0]}</span>
            <span class="tcard-cta">Ver Passo a Passo →</span>
          </div>
        </div>
      `;
    }).join("");
  }

  formatMiniDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}`;
    }
    return dateStr;
  }

  updateStats() {
    const totalTechs = this.data.techniques.length;
    const totalKyusho = this.data.kyushoList ? this.data.kyushoList.length : 60;
    const customCount = this.data.techniques.filter(t => t.isCustomized).length;
    
    // Contagem de técnicas treinadas
    const trainedCount = this.data.techniques.filter(t => {
      const history = window.NenrikiStorage ? window.NenrikiStorage.getTechniqueTrainingHistory(t.id) : (t.trainingHistory || []);
      return history.length > 0;
    }).length;

    const elTotal = document.getElementById("statTotalTechs");
    const elKyusho = document.getElementById("statTotalKyusho");
    const elCustom = document.getElementById("statCustomCount");
    const elTrained = document.getElementById("statTrainedCount");

    if (elTotal) elTotal.innerText = totalTechs;
    if (elKyusho) elKyusho.innerText = totalKyusho;
    if (elCustom) elCustom.innerText = customCount;
    if (elTrained) elTrained.innerText = trainedCount;
  }

  searchByKyusho(kyushoName) {
    this.switchView("viewGrid");
    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) {
      searchInput.value = kyushoName;
    }
    this.searchEngine.search(kyushoName);
  }
}

if (typeof window !== "undefined") {
  window.NenrikiApp = NenrikiApp;
  document.addEventListener("DOMContentLoaded", () => {
    window.nenrikiApp = new NenrikiApp();
  });
}
