/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Módulo do Mapa Anatômico dos 60 Kyūsho (Vetor Anatômico de Altíssima Definição & Motor de Pan/Zoom Interativo)
 * Bujinkan Nenriki Dojo
 */

class NenrikiKyusho {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.kyushoList = [];
    this.activeRegion = "all"; // 'all' | 'head' | 'torso' | 'arms' | 'legs' | 'back'
    this.selectedKyusho = null;
    this.activeView = "both"; // 'front' | 'back' | 'both' (Padrão: Ambos)
    this.searchQuery = "";

    // Sub-visão da Cabeça ('all' | 'front' | 'profile' | 'back')
    this.headSubView = "all";

    // Motor de Navegação, Pan e Zoom
    this.zoom = 1;
    this.panX = 0;
    this.panY = 110;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.hasDragged = false;
    this.touchStartDist = 0;

    this.init();
  }

  init() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="kyusho-layout">
        <!-- Barra Superior de Filtros e Busca -->
        <div class="kyusho-toolbar">
          <div class="kyusho-filters">
            <button class="kfilter-btn active" data-region="all">Todos (Corpo Inteiro)</button>
            <button class="kfilter-btn" data-region="head">🧠 Cabeça e Pescoço (3 Ângulos)</button>
            <button class="kfilter-btn" data-region="torso">🛡️ Tórax e Abdômen</button>
            <button class="kfilter-btn" data-region="arms">⚔️ Braços e Mãos</button>
            <button class="kfilter-btn" data-region="legs">🦵 Pernas e Pés</button>
            <button class="kfilter-btn" data-region="back">🥋 Dorso e Coluna</button>
          </div>
          <div class="kyusho-search-box">
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"/></svg>
            <input type="text" id="kyushoSearchInput" placeholder="Buscar por ponto, kanji, tradução ou efeito...">
          </div>
        </div>

        <div class="kyusho-main-content">
          <!-- Área dos Diagramas Anatômicos Vetoriais com Navegação e Pan/Zoom -->
          <div class="kyusho-diagrams-container">
            <div class="diagrams-top-bar">
              <!-- Seletor de Visão Contextual com Kanjis Tradicionais -->
              <div class="kview-segmented-group" id="kviewSegmentedGroup">
                <!-- Injetado dinamicamente via JS de acordo com o contexto (Corpo Inteiro vs Cabeça) -->
              </div>

              <!-- Controles de Zoom, Nomes e Centralização -->
              <div class="kyusho-zoom-controls">
                <span class="region-focus-label" id="regionFocusLabel">Visão: Corpo Inteiro</span>
                <button class="kzoom-btn ktoggle-labels-btn active" id="btnToggleKyushoLabels" title="Mostrar ou Ocultar Nomes ao lado dos marcadores">
                  <span class="btn-icon">🏷️</span> <span class="label-btn-text">Nomes</span>
                </button>
                <span class="kzoom-percentage-badge" id="kyushoZoomBadge">100%</span>
                <button class="kzoom-btn" id="btnKyushoZoomIn" title="Aumentar Zoom">+</button>
                <button class="kzoom-btn" id="btnKyushoZoomOut" title="Diminuir Zoom">−</button>
                <button class="kzoom-btn" id="btnKyushoZoomReset" title="Centralizar e Redefinir Vista">🎯</button>
              </div>
            </div>

            <!-- Viewport Interativo com Pan & Zoom Livre -->
            <div class="diagrams-viewport" id="kyushoDiagramsViewport">
              <div class="diagrams-flex" id="kyushoDiagramsFlex">
                <!-- Injetado dinamicamente via JS de acordo com a Região Selecionada -->
              </div>

              <!-- HUD de Instrução de Navegação -->
              <div class="kyusho-nav-hud">
                <span>🖐️ Arraste para mover • 🖱️ Scroll ou pinça para zoom</span>
              </div>
            </div>
          </div>

          <!-- Painel Lateral de Detalhes do Kyūsho Selecionado -->
          <div class="kyusho-side-panel" id="kyushoSidePanel">
            <div class="panel-placeholder" id="kyushoPlaceholder">
              <div class="placeholder-icon">🎯</div>
              <h3>Mapa Anatômico dos 60 Kyūsho</h3>
              <p>Clique em qualquer ponto vital nos diagramas anatômicos detalhados para visualizar o ideograma em Kanji, a localização musculoesquelética exata, os efeitos fisiológicos e as técnicas do Ten-Chi-Jin associadas.</p>
            </div>
            <div class="panel-detail-content hidden" id="kyushoDetailContent">
              <!-- Preenchido dinamicamente -->
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
    this.bindPanZoomEvents();
  }

  setKyushoData(list) {
    this.kyushoList = list || [];
    this.renderDiagrams();
    setTimeout(() => this.resetView(), 60);
  }

  bindEvents() {
    // Alternância de Rótulos Flutuantes de Nomes
    const btnToggleLabels = document.getElementById("btnToggleKyushoLabels");
    if (btnToggleLabels) {
      btnToggleLabels.addEventListener("click", () => {
        this.showLabels = !this.showLabels;
        const viewport = document.getElementById("kyushoDiagramsViewport");
        if (viewport) {
          if (this.showLabels) {
            viewport.classList.remove("labels-hidden");
            btnToggleLabels.classList.add("active");
          } else {
            viewport.classList.add("labels-hidden");
            btnToggleLabels.classList.remove("active");
          }
        }
      });
    }

    // Filtros de Região
    this.container.querySelectorAll(".kfilter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.container.querySelectorAll(".kfilter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeRegion = btn.getAttribute("data-region");
        this.headSubView = "all";

        // Rolar suavemente de volta ao topo da tela
        window.scrollTo({ top: 0, behavior: "smooth" });
        const main = document.querySelector(".app-main") || document.documentElement;
        if (main) main.scrollTo({ top: 0, behavior: "smooth" });

        this.renderDiagrams();
        setTimeout(() => this.resetView(), 40);
      });
    });

    // Controles de Zoom Manual nos botões
    const btnZoomIn = document.getElementById("btnKyushoZoomIn");
    if (btnZoomIn) btnZoomIn.addEventListener("click", () => this.zoomBy(1.18));
    const btnZoomOut = document.getElementById("btnKyushoZoomOut");
    if (btnZoomOut) btnZoomOut.addEventListener("click", () => this.zoomBy(0.85));
    const btnZoomReset = document.getElementById("btnKyushoZoomReset");
    if (btnZoomReset) btnZoomReset.addEventListener("click", () => this.resetView());

    // Busca de Kyusho em tempo real
    const searchInput = document.getElementById("kyushoSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderDiagrams();
      });
    }

    // Navegação entre Kyūsho via Teclado (Setas Esquerda ← / Direita →)
    window.addEventListener("keydown", (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      if (activeTag === "input" || activeTag === "textarea") return;

      const viewKyusho = document.getElementById("viewKyusho");
      if (!viewKyusho || viewKyusho.classList.contains("hidden")) return;
      if (!this.selectedKyusho) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.navigateKyusho(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.navigateKyusho(1);
      }
    });
  }

  navigateKyusho(direction) {
    if (!this.kyushoList || this.kyushoList.length === 0) return;
    const sortedList = [...this.kyushoList].sort((a, b) => (a.number || 0) - (b.number || 0));
    
    let currentIndex = -1;
    if (this.selectedKyusho) {
      currentIndex = sortedList.findIndex(k => k.id === this.selectedKyusho.id || k.number === this.selectedKyusho.number);
    }

    if (currentIndex === -1) {
      this.selectKyusho(sortedList[0]);
      return;
    }

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = sortedList.length - 1;
    if (newIndex >= sortedList.length) newIndex = 0;

    const targetPoint = sortedList[newIndex];
    if (targetPoint) {
      this.selectKyusho(targetPoint);
    }
  }

  // =========================================================================
  // MOTOR DE PAN, ZOOM, SCROLL E PINÇA (ESTABILIZADO NO CENTRO)
  // =========================================================================
  bindPanZoomEvents() {
    const viewport = document.getElementById("kyushoDiagramsViewport");
    if (!viewport) return;

    // 1. Mouse Drag (Pan Livre)
    viewport.addEventListener("mousedown", (e) => {
      if (e.target.closest(".kyusho-marker")) return;

      this.isDragging = true;
      this.hasDragged = false;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
      viewport.classList.add("dragging");
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      this.hasDragged = true;
      this.panX = e.clientX - this.dragStartX;
      this.panY = e.clientY - this.dragStartY;
      this.updateTransform();
    });

    window.addEventListener("mouseup", () => {
      if (this.isDragging) {
        this.isDragging = false;
        viewport.classList.remove("dragging");
      }
    });

    // 2. Mouse Wheel (Zoom com Ponto Focal no Cursor)
    viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const factor = e.deltaY < 0 ? 1.15 : 0.85;
      this.applyFocalZoom(this.zoom * factor, mouseX, mouseY);
    }, { passive: false });

    // 3. Touch Drag e Pinça Focal para Tablets e Celulares
    let touchCenterX = 0;
    let touchCenterY = 0;

    viewport.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        if (e.target.closest(".kyusho-marker")) return;
        this.isDragging = true;
        this.dragStartX = e.touches[0].clientX - this.panX;
        this.dragStartY = e.touches[0].clientY - this.panY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        const rect = viewport.getBoundingClientRect();
        touchCenterX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
        touchCenterY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
        this.touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (this.isDragging && e.touches.length === 1) {
        this.panX = e.touches[0].clientX - this.dragStartX;
        this.panY = e.touches[0].clientY - this.dragStartY;
        this.updateTransform();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (this.touchStartDist > 0) {
          const factor = dist / this.touchStartDist;
          this.applyFocalZoom(this.zoom * factor, touchCenterX, touchCenterY);
          this.touchStartDist = dist;
        }
      }
    }, { passive: true });

    viewport.addEventListener("touchend", () => {
      this.isDragging = false;
      this.touchStartDist = 0;
    });
  }

  applyFocalZoom(newZoom, focalX, focalY) {
    const clampedZoom = Math.max(0.35, Math.min(3.8, newZoom));
    if (clampedZoom === this.zoom) return;

    // Ajusta panX e panY para manter a coordenada focal (focalX, focalY) exatamente no mesmo pixel da tela
    const ratio = clampedZoom / this.zoom;
    this.panX = focalX - (focalX - this.panX) * ratio;
    this.panY = focalY - (focalY - this.panY) * ratio;
    this.zoom = clampedZoom;
    this.updateTransform();
  }

  zoomBy(multiplier) {
    const viewport = document.getElementById("kyushoDiagramsViewport");
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    this.applyFocalZoom(this.zoom * multiplier, centerX, centerY);
  }

  resetView() {
    const viewport = document.getElementById("kyushoDiagramsViewport");
    const flex = document.getElementById("kyushoDiagramsFlex");
    this.zoom = 1;

    // Deslocamento Y inicial para que o topo da cabeça/corpo fique com folga ampla abaixo do menu flutuante
    this.panY = 110;

    if (viewport && flex) {
      const vpWidth = viewport.clientWidth || viewport.getBoundingClientRect().width || 800;
      let flexWidth = flex.offsetWidth || flex.getBoundingClientRect().width || 340;

      // Ajustes específicos de zoom inicial e largura estimada para caber perfeitamente centralizado
      if (this.activeRegion === "head" && this.headSubView === "all") {
        flexWidth = 920;
        if (vpWidth < 960) {
          this.zoom = Math.max(0.55, (vpWidth - 40) / 960);
        }
      } else if (this.activeRegion === "all" && this.activeView === "both") {
        flexWidth = 680;
        if (vpWidth < 740) {
          this.zoom = Math.max(0.65, (vpWidth - 40) / 720);
        }
      } else if (this.activeRegion === "arms") {
        flexWidth = 400;
      } else if (this.activeRegion === "torso" || this.activeRegion === "legs" || this.activeRegion === "back") {
        flexWidth = 360;
      } else {
        flexWidth = 340;
      }

      const scaledWidth = (flex.offsetWidth || flexWidth) * this.zoom;
      this.panX = Math.max(16, (vpWidth - scaledWidth) / 2);
    } else {
      this.panX = 40;
    }

    this.updateTransform();
  }

  updateTransform() {
    const flex = document.getElementById("kyushoDiagramsFlex");
    if (flex) {
      flex.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
      flex.style.transformOrigin = "0 0";
      flex.style.transition = this.isDragging ? "none" : "transform 0.08s ease-out";
    }

    const badge = document.getElementById("kyushoZoomBadge");
    if (badge) {
      badge.innerText = `${Math.round(this.zoom * 100)}%`;
    }
  }

  switchView(view) {
    this.activeView = view;
    
    // Se estiver em uma prancha regional, volta para o corpo inteiro ao mudar a visualização
    if (this.activeRegion !== "all") {
      this.activeRegion = "all";
      this.container.querySelectorAll(".kfilter-btn").forEach(b => {
        if (b.getAttribute("data-region") === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
    }

    this.renderDiagrams();
    setTimeout(() => this.resetView(), 40);
  }

  renderDiagrams() {
    const container = document.getElementById("kyushoDiagramsFlex");
    const labelEl = document.getElementById("regionFocusLabel");
    const viewGroup = document.getElementById("kviewSegmentedGroup");
    if (!container) return;

    const regionNames = {
      all: "Visão Geral: Corpo Inteiro (60 Pontos Anatômicos)",
      head: "Prancha Vetorial: Cabeça, Face e Pescoço",
      torso: "Prancha Vetorial: Tórax, Costelas, Abdômen e Quadril",
      arms: "Prancha Vetorial: Ombros, Bíceps, Cotovelos, Antebraços e Pulsos",
      legs: "Prancha Vetorial: Coxas, Joelhos, Canelas, Panturrilhas e Pés",
      back: "Prancha Vetorial: Nuca, Coluna Vertebral, Escápulas e Rins"
    };
    if (labelEl) labelEl.innerText = regionNames[this.activeRegion] || "Mapa Anatômico";

    // Menu flutuante contextual no topo esquerdo do diagrama
    if (viewGroup) {
      if (this.activeRegion === "all") {
        viewGroup.style.display = "inline-flex";
        viewGroup.innerHTML = `
          <button class="kview-toggle-btn ${this.activeView === 'front' ? 'active' : ''}" id="btnViewFront" data-view="front">
            <span class="btn-kanji">表</span> Frente
          </button>
          <button class="kview-toggle-btn ${this.activeView === 'back' ? 'active' : ''}" id="btnViewBack" data-view="back">
            <span class="btn-kanji">裏</span> Costas
          </button>
          <button class="kview-toggle-btn ${this.activeView === 'both' ? 'active' : ''}" id="btnViewBoth" data-view="both">
            <span class="btn-kanji">両</span> Ambos
          </button>
        `;
        const bf = viewGroup.querySelector("#btnViewFront");
        if (bf) bf.addEventListener("click", () => this.switchView("front"));
        const bb = viewGroup.querySelector("#btnViewBack");
        if (bb) bb.addEventListener("click", () => this.switchView("back"));
        const ba = viewGroup.querySelector("#btnViewBoth");
        if (ba) ba.addEventListener("click", () => this.switchView("both"));
      } else if (this.activeRegion === "head") {
        viewGroup.style.display = "inline-flex";
        viewGroup.innerHTML = `
          <button class="kview-toggle-btn ${this.headSubView === 'all' ? 'active' : ''}" data-headview="all">
            <span class="btn-kanji">全</span> 3 Ângulos
          </button>
          <button class="kview-toggle-btn ${this.headSubView === 'front' ? 'active' : ''}" data-headview="front">
            <span class="btn-kanji">表</span> Frente
          </button>
          <button class="kview-toggle-btn ${this.headSubView === 'profile' ? 'active' : ''}" data-headview="profile">
            <span class="btn-kanji">側</span> Perfil
          </button>
          <button class="kview-toggle-btn ${this.headSubView === 'back' ? 'active' : ''}" data-headview="back">
            <span class="btn-kanji">裏</span> Nuca
          </button>
        `;
        viewGroup.querySelectorAll("[data-headview]").forEach(btn => {
          btn.addEventListener("click", () => {
            this.headSubView = btn.getAttribute("data-headview");
            this.renderDiagrams();
            setTimeout(() => this.resetView(), 40);
          });
        });
      } else {
        viewGroup.style.display = "none";
      }
    }

    if (this.activeRegion === "head") {
      this.renderHeadCloseUp(container);
    } else if (this.activeRegion === "torso") {
      this.renderTorsoCloseUp(container);
    } else if (this.activeRegion === "arms") {
      this.renderArmsCloseUp(container);
    } else if (this.activeRegion === "legs") {
      this.renderLegsCloseUp(container);
    } else if (this.activeRegion === "back") {
      this.renderBackCloseUp(container);
    } else {
      this.renderFullBody(container);
    }

    this.bindPointClicks();
    this.updateTransform();
  }

  // Definições comuns de gradientes e filtros para reutilização em todos os SVGs
  getSvgDefs() {
    return `
      <defs>
        <!-- Gradiente da Silhueta Muscular Principal -->
        <linearGradient id="anatBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#191c2b"/>
          <stop offset="35%" stop-color="#141724"/>
          <stop offset="70%" stop-color="#11131e"/>
          <stop offset="100%" stop-color="#0b0d14"/>
        </linearGradient>

        <!-- Gradiente dos Ventres Musculares / Volumes -->
        <linearGradient id="anatMuscleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#23293f"/>
          <stop offset="100%" stop-color="#171b2b"/>
        </linearGradient>

        <!-- Gradiente das Articulações e Ossos -->
        <linearGradient id="anatBoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c354e"/>
          <stop offset="100%" stop-color="#1c2132"/>
        </linearGradient>

        <!-- Filtro de Sombra Suave -->
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
    `;
  }

  // =========================================================================
  // 1. VISÃO GERAL: CORPO INTEIRO (ZENSHIN) - Vetor Anatômico de Alta Definição
  // =========================================================================
  renderFullBody(container) {
    const showFront = this.activeView === "front" || this.activeView === "both";
    const showBack = this.activeView === "back" || this.activeView === "both";

    const filtered = this.kyushoList.filter(k => {
      if (this.searchQuery) {
        const q = this.searchQuery;
        return k.name.toLowerCase().includes(q) ||
               k.kanji.includes(q) ||
               k.translation.toLowerCase().includes(q) ||
               k.location.toLowerCase().includes(q) ||
               k.effect.toLowerCase().includes(q);
      }
      return true;
    });

    const frontPoints = filtered.filter(k => k.view === "front");
    const backPoints = filtered.filter(k => k.view === "back");

    let html = "";

    // -------------------------------------------------------------
    // VISTA FRONTAL (OMOTE)
    // -------------------------------------------------------------
    if (showFront) {
      html += `
        <div class="diagram-card">
          <div class="diagram-header">
            <span class="diagram-title">Vista Frontal (Omote Kyūsho)</span>
            <span class="badge-tag">${frontPoints.length} Pontos Ativos</span>
          </div>
          <div class="svg-wrapper">
            <svg id="svgBodyFront" viewBox="0 0 320 720" class="body-svg detailed-svg">
              ${this.getSvgDefs()}
              
              <!-- GRUPO ANATÔMICO FRONTAL -->
              <g class="anatomy-vector-group" stroke-linecap="round" stroke-linejoin="round">
                
                <!-- 1. SILHUETA CORPORAL COMPLETA -->
                <path class="anat-silhouette" fill="url(#anatBodyGrad)" stroke="#38435d" stroke-width="1.8"
                  d="
                    M 160 30
                    C 142 30 132 42 132 60
                    C 132 78 136 92 144 100
                    C 134 104 115 112 100 118
                    C 85 124 75 142 70 162
                    C 62 195 52 250 48 285
                    C 42 335 34 395 32 418
                    C 30 428 36 438 46 438
                    C 56 438 60 428 64 410
                    C 74 365 82 305 90 250
                    C 88 285 92 320 96 360
                    C 100 405 106 450 110 495
                    C 114 540 108 595 104 635
                    C 100 675 92 705 92 712
                    C 92 718 128 718 132 710
                    C 136 690 140 640 144 585
                    C 148 535 152 475 152 415
                    L 160 375
                    L 168 415
                    C 168 475 172 535 176 585
                    C 180 640 184 690 188 710
                    C 192 718 228 718 228 712
                    C 228 705 220 675 216 635
                    C 212 595 206 540 210 495
                    C 214 450 220 405 224 360
                    C 228 320 232 285 230 250
                    C 238 305 246 365 256 410
                    C 260 428 264 438 274 438
                    C 284 438 290 428 288 418
                    C 286 395 278 335 272 285
                    C 268 250 258 195 250 162
                    C 245 142 235 124 220 118
                    C 205 112 186 104 176 100
                    C 184 92 188 78 188 60
                    C 188 42 178 30 160 30 Z
                  "
                />

                <!-- 2. CABEÇA E DETALHES FACIAIS -->
                <ellipse cx="160" cy="62" rx="26" ry="32" fill="#1b1f2e" stroke="#475569" stroke-width="1.2"/>
                <!-- Sobrancelhas e Olhos -->
                <path d="M 144 54 Q 152 51 156 55" stroke="#64748b" stroke-width="1.8" fill="none"/>
                <path d="M 176 54 Q 168 51 164 55" stroke="#64748b" stroke-width="1.8" fill="none"/>
                <ellipse cx="150" cy="60" rx="3.5" ry="2" fill="#0b0c12" stroke="#475569" stroke-width="1"/>
                <ellipse cx="170" cy="60" rx="3.5" ry="2" fill="#0b0c12" stroke="#475569" stroke-width="1"/>
                <!-- Nariz e Fossa Nasal -->
                <path d="M 160 56 L 158 70 L 162 70 Z" stroke="#64748b" stroke-width="1.2" fill="#151824"/>
                <!-- Filtro Labial, Boca e Queixo -->
                <line x1="160" y1="71" x2="160" y2="76" stroke="#475569" stroke-width="1"/>
                <path d="M 153 79 Q 160 82 167 79" stroke="#64748b" stroke-width="1.4" fill="none"/>
                <path d="M 155 88 Q 160 91 165 88" stroke="#334155" stroke-width="1.2" fill="none"/>
                <!-- Orelhas com Hélix -->
                <path d="M 134 56 C 130 56 128 72 134 78" stroke="#475569" stroke-width="1.2" fill="none"/>
                <path d="M 186 56 C 190 56 192 72 186 78" stroke="#475569" stroke-width="1.2" fill="none"/>

                <!-- 3. PESCOÇO E CARTILAGEM LARÍNGEA -->
                <path d="M 146 95 Q 154 110 156 120" stroke="#475569" stroke-width="1.6" stroke-dasharray="2 2" fill="none"/>
                <path d="M 174 95 Q 166 110 164 120" stroke="#475569" stroke-width="1.6" stroke-dasharray="2 2" fill="none"/>
                <!-- Pomo de Adão (Ryūge) -->
                <path d="M 157 104 L 160 108 L 163 104 Z" fill="#283044" stroke="#64748b" stroke-width="1.2"/>

                <!-- 4. CINTURA ESCAPULAR E CLAVÍCULAS -->
                <path d="M 102 120 Q 160 134 218 120" stroke="#94a3b8" stroke-width="2.2" fill="none"/>
                <circle cx="160" cy="125" r="3.5" fill="#334155"/>

                <!-- 5. PEITORAIS MAIOR (Fibras Esternais e Claviculares) -->
                <path d="M 104 124 Q 160 136 160 178 Q 102 186 92 152 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.4"/>
                <path d="M 216 124 Q 160 136 160 178 Q 218 186 228 152 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.4"/>
                <!-- Mamilos / Auréolas -->
                <circle cx="124" cy="162" r="3" fill="#2d3748" stroke="#475569" stroke-width="1"/>
                <circle cx="196" cy="162" r="3" fill="#2d3748" stroke="#475569" stroke-width="1"/>

                <!-- 6. ESTERNO E CAIXA TORÁCICA (Arcos Costais 5 a 10) -->
                <line x1="160" y1="128" x2="160" y2="190" stroke="#94a3b8" stroke-width="2.5"/>
                <!-- Processo Xifóide (Suigetsu) -->
                <circle cx="160" cy="190" r="3.5" fill="#eab308" opacity="0.8"/>
                <!-- Arcos Costais -->
                <path d="M 112 188 Q 160 215 208 188" stroke="#475569" stroke-width="1.6" fill="none"/>
                <path d="M 104 215 Q 160 245 216 215" stroke="#475569" stroke-width="1.4" fill="none"/>
                <!-- Serrátil Anterior (Dígitos Musculares nos Flancos) -->
                <path d="M 96 195 Q 104 200 98 210 Q 106 215 100 225 Q 108 230 102 240" stroke="#3b4866" stroke-width="1.6" fill="none"/>
                <path d="M 224 195 Q 216 200 222 210 Q 214 215 220 225 Q 212 230 218 240" stroke="#3b4866" stroke-width="1.6" fill="none"/>

                <!-- 7. RETO ABDOMINAL (6 Gomos com Intersecções Tendíneas e Linha Alba) -->
                <line x1="160" y1="192" x2="160" y2="340" stroke="#64748b" stroke-width="1.8" stroke-dasharray="3 3"/>
                <!-- Gomos Superiores -->
                <rect x="135" y="196" width="22" height="30" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <rect x="163" y="196" width="22" height="30" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <!-- Gomos Médios -->
                <rect x="133" y="234" width="24" height="34" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <rect x="163" y="234" width="24" height="34" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <!-- Umbigo Central -->
                <circle cx="160" cy="272" r="3.5" fill="#0b0c12" stroke="#475569" stroke-width="1.2"/>
                <!-- Gomos Inferiores -->
                <rect x="135" y="278" width="22" height="34" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <rect x="163" y="278" width="22" height="34" rx="4" fill="#181d2c" stroke="#334155" stroke-width="1"/>
                <!-- Oblíquos Externos e Crista Ilíaca -->
                <path d="M 98 250 Q 125 320 160 345 Q 195 320 222 250" stroke="#475569" stroke-width="1.6" fill="none"/>
                <!-- Sulco Inguinal / Virilha -->
                <path d="M 125 335 L 160 375 L 195 335" stroke="#64748b" stroke-width="1.6" fill="none"/>

                <!-- 8. MEMBROS SUPERIORES (Deltoides, Bíceps, Braquiorradial, Punhos e Mãos) -->
                <!-- Deltoides -->
                <path d="M 72 160 Q 95 140 102 120" stroke="#475569" stroke-width="1.6" fill="none"/>
                <path d="M 248 160 Q 225 140 218 120" stroke="#475569" stroke-width="1.6" fill="none"/>
                <!-- Bíceps e Sulco Braquial Interno (Jakkin) -->
                <path d="M 86 175 Q 70 215 80 240" stroke="#475569" stroke-width="1.6" fill="none"/>
                <path d="M 234 175 Q 250 215 240 240" stroke="#475569" stroke-width="1.6" fill="none"/>
                <!-- Fossa Cubital do Cotovelo -->
                <ellipse cx="78" cy="245" rx="8" ry="5" fill="#131722" stroke="#475569" stroke-width="1"/>
                <ellipse cx="242" cy="245" rx="8" ry="5" fill="#131722" stroke="#475569" stroke-width="1"/>
                <!-- Tendões do Antebraço e Flexores (Nagare) -->
                <line x1="74" y1="250" x2="52" y2="350" stroke="#3b4866" stroke-width="1.4"/>
                <line x1="246" y1="250" x2="268" y2="350" stroke="#3b4866" stroke-width="1.4"/>
                <!-- Pregas do Punho (Kote / Kubite) -->
                <line x1="40" y1="375" x2="56" y2="370" stroke="#94a3b8" stroke-width="1.8"/>
                <line x1="280" y1="375" x2="264" y2="370" stroke="#94a3b8" stroke-width="1.8"/>
                <!-- Dedos Articulados e Polegar -->
                <path d="M 40 378 L 34 415 L 42 432 L 48 430 L 52 400" stroke="#475569" stroke-width="1.2" fill="#181c2b"/>
                <path d="M 280 378 L 286 415 L 278 432 L 272 430 L 268 400" stroke="#475569" stroke-width="1.2" fill="#181c2b"/>

                <!-- 9. MEMBROS INFERIORES (Quadríceps, Patela, Tíbia, Panturrilhas e Pés) -->
                <!-- Músculo Reto Femoral Central -->
                <path d="M 125 365 Q 138 435 138 480" stroke="#475569" stroke-width="1.8" fill="none"/>
                <path d="M 195 365 Q 182 435 182 480" stroke="#475569" stroke-width="1.8" fill="none"/>
                <!-- Vasto Lateral (Curva Externa da Coxa) -->
                <path d="M 100 375 Q 112 440 122 475" stroke="#3b4866" stroke-width="1.5" fill="none"/>
                <path d="M 220 375 Q 208 440 198 475" stroke="#3b4866" stroke-width="1.5" fill="none"/>
                <!-- Vasto Medial (Gota Acima do Joelho) -->
                <ellipse cx="145" cy="465" rx="8" ry="15" fill="#1d2336" stroke="#475569" stroke-width="1.2"/>
                <ellipse cx="175" cy="465" rx="8" ry="15" fill="#1d2336" stroke="#475569" stroke-width="1.2"/>
                <!-- Complexo Patelar e Tendão (Hiza) -->
                <ellipse cx="132" cy="495" rx="10" ry="9" fill="#252d44" stroke="#94a3b8" stroke-width="1.8"/>
                <ellipse cx="188" cy="495" rx="10" ry="9" fill="#252d44" stroke="#94a3b8" stroke-width="1.8"/>
                <line x1="132" y1="504" x2="132" y2="520" stroke="#64748b" stroke-width="2"/>
                <line x1="188" y1="504" x2="188" y2="520" stroke="#64748b" stroke-width="2"/>
                <!-- Crista Anterior da Tíbia / Canela (Tsune) -->
                <line x1="132" y1="520" x2="116" y2="650" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
                <line x1="188" y1="520" x2="204" y2="650" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
                <!-- Ventre do Gastrocnêmio / Panturrilha (Kobura / Buda) -->
                <path d="M 110 525 Q 98 575 110 635" stroke="#475569" stroke-width="1.6" fill="none"/>
                <path d="M 210 525 Q 222 575 210 635" stroke="#475569" stroke-width="1.6" fill="none"/>
                <!-- Maléolos do Tornozelo (Kurubushi) -->
                <circle cx="106" cy="668" r="3.5" fill="#2c354e" stroke="#94a3b8" stroke-width="1.2"/>
                <circle cx="132" cy="672" r="3" fill="#2c354e" stroke="#94a3b8" stroke-width="1.2"/>
                <circle cx="214" cy="668" r="3.5" fill="#2c354e" stroke="#94a3b8" stroke-width="1.2"/>
                <circle cx="188" cy="672" r="3" fill="#2c354e" stroke="#94a3b8" stroke-width="1.2"/>
                <!-- Tendões dos Pés e Dedos (Toki / Sōkotsu) -->
                <path d="M 100 705 L 128 705" stroke="#64748b" stroke-width="1.8"/>
                <path d="M 220 705 L 192 705" stroke="#64748b" stroke-width="1.8"/>
              </g>

              <!-- MARCADORES DE KYUSHO (FRONTAL) -->
              <g class="kyusho-points-group">
                ${this.computeSmartLabelPositions(frontPoints).map(({ point: k, px, py, dx, dy, anchor, hasLeaderLine, lineTargetX, lineTargetY }) => {
                  const isSelected = this.selectedKyusho && this.selectedKyusho.id === k.id;
                  const tooltip = `Nº ${k.number}. ${k.name} (${k.kanji}) — ${k.translation}&#10;• Localização: ${k.location}&#10;• Efeito: ${k.effect}`;
                  return `
                    <g class="kyusho-marker ${isSelected ? 'selected' : ''}" data-id="${k.id}" transform="translate(${px}, ${py})">
                      <title>${tooltip}</title>
                      ${hasLeaderLine ? `<line x1="0" y1="0" x2="${lineTargetX}" y2="${lineTargetY}" class="marker-leader-line" />` : ''}
                      <circle cx="0" cy="0" r="13" class="marker-pulse" />
                      <circle cx="0" cy="0" r="6" class="marker-core" />
                      <text x="0" y="3.5" class="marker-number" text-anchor="middle">${k.number}</text>
                      <text x="${dx}" y="${dy}" class="marker-floating-label" text-anchor="${anchor}">${k.name}</text>
                    </g>
                  `;
                }).join("")}
              </g>
            </svg>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------
    // VISTA POSTERIOR (URA)
    // -------------------------------------------------------------
    if (showBack) {
      html += `
        <div class="diagram-card">
          <div class="diagram-header">
            <span class="diagram-title">Vista Posterior (Ura Kyūsho)</span>
            <span class="badge-tag">${backPoints.length} Pontos Ativos</span>
          </div>
          <div class="svg-wrapper">
            <svg id="svgBodyBack" viewBox="0 0 320 720" class="body-svg detailed-svg">
              ${this.getSvgDefs()}

              <!-- GRUPO ANATÔMICO POSTERIOR -->
              <g class="anatomy-vector-group" stroke-linecap="round" stroke-linejoin="round">

                <!-- 1. SILHUETA CORPORAL POSTERIOR -->
                <path class="anat-silhouette" fill="url(#anatBodyGrad)" stroke="#38435d" stroke-width="1.8"
                  d="
                    M 160 30
                    C 142 30 132 42 132 60
                    C 132 78 136 92 144 100
                    C 134 104 115 112 100 118
                    C 85 124 75 142 70 162
                    C 62 195 52 250 48 285
                    C 42 335 34 395 32 418
                    C 30 428 36 438 46 438
                    C 56 438 60 428 64 410
                    C 74 365 82 305 90 250
                    C 88 285 92 320 96 360
                    C 100 405 106 450 110 495
                    C 114 540 108 595 104 635
                    C 100 675 92 705 92 712
                    C 92 718 128 718 132 710
                    C 136 690 140 640 144 585
                    C 148 535 152 475 152 415
                    L 160 375
                    L 168 415
                    C 168 475 172 535 176 585
                    C 180 640 184 690 188 710
                    C 192 718 228 718 228 712
                    C 228 705 220 675 216 635
                    C 212 595 206 540 210 495
                    C 214 450 220 405 224 360
                    C 228 320 232 285 230 250
                    C 238 305 246 365 256 410
                    C 260 428 264 438 274 438
                    C 284 438 290 428 288 418
                    C 286 395 278 335 272 285
                    C 268 250 258 195 250 162
                    C 245 142 235 124 220 118
                    C 205 112 186 104 176 100
                    C 184 92 188 78 188 60
                    C 188 42 178 30 160 30 Z
                  "
                />

                <!-- 2. CRÂNIO POSTERIOR E BASE DA NUCA -->
                <ellipse cx="160" cy="62" rx="26" ry="32" fill="#1b1f2e" stroke="#475569" stroke-width="1.2"/>
                <!-- Linha Nucal e Fossa Suboccipital (Keichū) -->
                <path d="M 144 82 Q 160 90 176 82" stroke="#64748b" stroke-width="1.8" fill="none"/>
                <!-- Orelhas Posteriores e Processo Mastóide (Dokko) -->
                <path d="M 134 56 C 130 56 128 72 134 78" stroke="#475569" stroke-width="1.2" fill="#141724"/>
                <path d="M 186 56 C 190 56 192 72 186 78" stroke="#475569" stroke-width="1.2" fill="#141724"/>

                <!-- 3. MÚSCULO TRAPÉZIO (O Grande Diamante Posterior) -->
                <path d="M 160 85 L 102 120 L 160 195 L 218 120 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.6"/>
                <!-- Vértebra Proeminente C7 (Jūjiro) -->
                <circle cx="160" cy="116" r="4" fill="#eab308" stroke="#fef08a" stroke-width="1.2"/>

                <!-- 4. ESCÁPULAS E ESPINHA DA ESCÁPULA (Ushiro Hane) -->
                <path d="M 104 125 Q 135 140 128 198 L 94 135 Z" fill="url(#anatBoneGrad)" stroke="#94a3b8" stroke-width="1.8"/>
                <path d="M 216 125 Q 185 140 192 198 L 226 135 Z" fill="url(#anatBoneGrad)" stroke="#94a3b8" stroke-width="1.8"/>

                <!-- 5. COLUNA VERTEBRAL COMPLETA (Cervical, Torácica, Lombar e Sacro) -->
                <line x1="160" y1="90" x2="160" y2="350" stroke="#94a3b8" stroke-width="2.6" stroke-dasharray="5 5"/>
                <!-- Músculos Paravertebrais / Eretor da Espinha -->
                <line x1="154" y1="125" x2="154" y2="330" stroke="#3b4866" stroke-width="1.5"/>
                <line x1="166" y1="125" x2="166" y2="330" stroke="#3b4866" stroke-width="1.5"/>

                <!-- 6. GRANDE DORSAL (V-Taper) E FÁSCIA TORACOLOMBAR -->
                <path d="M 94 165 Q 130 200 160 270 Q 190 200 226 165" stroke="#475569" stroke-width="1.8" fill="none"/>
                <!-- Triângulo Lombar e Flancos Posteriores / Rins (Ushiro Inazuma / Getsuei) -->
                <path d="M 100 255 Q 130 295 160 325 Q 190 295 220 255" stroke="#3b4866" stroke-width="1.6" fill="none"/>

                <!-- 7. GLÚTEOS E CÓCCIX (Bitei Kotsu) -->
                <path d="M 100 350 Q 160 380 220 350" stroke="#475569" stroke-width="1.8" fill="none"/>
                <line x1="160" y1="350" x2="160" y2="395" stroke="#475569" stroke-width="2"/>
                <circle cx="160" cy="365" r="3.5" fill="#2c354e" stroke="#94a3b8" stroke-width="1.2"/>

                <!-- 8. POSTERIOR DOS BRAÇOS (Tríceps e Olécrano do Cotovelo - Hiji Hoshi) -->
                <path d="M 72 160 Q 86 215 76 245" stroke="#475569" stroke-width="1.6" fill="none"/>
                <path d="M 248 160 Q 234 215 244 245" stroke="#475569" stroke-width="1.6" fill="none"/>
                <!-- Olécrano do Cotovelo (Hiji Hoshi) -->
                <circle cx="76" cy="248" r="4.5" fill="#252d44" stroke="#94a3b8" stroke-width="1.4"/>
                <circle cx="244" cy="248" r="4.5" fill="#252d44" stroke="#94a3b8" stroke-width="1.4"/>

                <!-- 9. POSTERIOR DAS PERNAS (Isquiotibiais, Fossa Poplítea, Panturrilhas e Aquiles) -->
                <!-- Divisão dos Isquiotibiais (Bíceps Femoral e Semitendíneo) -->
                <line x1="130" y1="390" x2="130" y2="475" stroke="#3b4866" stroke-width="1.6"/>
                <line x1="190" y1="390" x2="190" y2="475" stroke="#3b4866" stroke-width="1.6"/>
                <!-- Fossa Poplítea (Atrás do Joelho - Ushiro Hiza) -->
                <ellipse cx="132" cy="495" rx="9" ry="6" fill="#121520" stroke="#475569" stroke-width="1.4"/>
                <ellipse cx="188" cy="495" rx="9" ry="6" fill="#121520" stroke="#475569" stroke-width="1.4"/>
                <!-- Cabeças Medial e Lateral do Gastrocnêmio / Panturrilha -->
                <path d="M 112 520 Q 132 555 132 590 Q 110 580 110 520" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.2"/>
                <path d="M 208 520 Q 188 555 188 590 Q 210 580 210 520" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.2"/>
                <!-- Tendão de Aquiles e Calcanhar -->
                <line x1="124" y1="595" x2="116" y2="690" stroke="#94a3b8" stroke-width="2.5"/>
                <line x1="196" y1="595" x2="204" y2="690" stroke="#94a3b8" stroke-width="2.5"/>
                <path d="M 104 695 L 128 695" stroke="#64748b" stroke-width="2"/>
                <path d="M 216 695 L 192 695" stroke="#64748b" stroke-width="2"/>
              </g>

              <!-- MARCADORES DE KYUSHO (POSTERIOR) -->
              <g class="kyusho-points-group">
                ${this.computeSmartLabelPositions(backPoints).map(({ point: k, px, py, dx, dy, anchor, hasLeaderLine, lineTargetX, lineTargetY }) => {
                  const isSelected = this.selectedKyusho && this.selectedKyusho.id === k.id;
                  const tooltip = `Nº ${k.number}. ${k.name} (${k.kanji}) — ${k.translation}&#10;• Localização: ${k.location}&#10;• Efeito: ${k.effect}`;
                  return `
                    <g class="kyusho-marker ${isSelected ? 'selected' : ''}" data-id="${k.id}" transform="translate(${px}, ${py})">
                      <title>${tooltip}</title>
                      ${hasLeaderLine ? `<line x1="0" y1="0" x2="${lineTargetX}" y2="${lineTargetY}" class="marker-leader-line" />` : ''}
                      <circle cx="0" cy="0" r="13" class="marker-pulse" />
                      <circle cx="0" cy="0" r="6" class="marker-core" />
                      <text x="0" y="3.5" class="marker-number" text-anchor="middle">${k.number}</text>
                      <text x="${dx}" y="${dy}" class="marker-floating-label" text-anchor="${anchor}">${k.name}</text>
                    </g>
                  `;
                }).join("")}
              </g>
            </svg>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // =========================================================================
  // 2. PRANCHA REGIONAL: CABEÇA E PESCOÇO (3 Ângulos Anatômicos Vetoriais)
  // =========================================================================
  renderHeadCloseUp(container) {
    const headFrontPoints = [
      { id: "kyusho-49", num: 49, name: "Tentō", kanji: "天頭", x: 150, y: 35 },
      { id: "kyusho-38", num: 38, name: "Menbu", kanji: "面部", x: 150, y: 110 },
      { id: "kyusho-1", num: 1, name: "Akiretsu", kanji: "穐烈", x: 95, y: 105 },
      { id: "kyusho-25", num: 25, name: "Kasumi", kanji: "霞", x: 75, y: 135 },
      { id: "kyusho-60", num: 60, name: "Yūgasumi", kanji: "夕霞", x: 215, y: 135 },
      { id: "kyusho-10", num: 10, name: "Ganmen", kanji: "顔面", x: 150, y: 145 },
      { id: "kyusho-9", num: 9, name: "Gankotsu", kanji: "顔骨", x: 110, y: 170 },
      { id: "kyusho-13", num: 13, name: "Hadome", kanji: "歯止", x: 150, y: 190 },
      { id: "kyusho-20", num: 20, name: "Jinchū", kanji: "人中", x: 150, y: 215 },
      { id: "kyusho-3", num: 3, name: "Asagasumi", kanji: "朝霞", x: 150, y: 270 },
      { id: "kyusho-23", num: 23, name: "Kaku", kanji: "角", x: 220, y: 220 },
      { id: "kyusho-43", num: 43, name: "Ryūge", kanji: "竜下", x: 150, y: 300 },
      { id: "kyusho-37", num: 37, name: "Matsukaze", kanji: "松風", x: 115, y: 330 },
      { id: "kyusho-39", num: 39, name: "Murasame", kanji: "村雨", x: 185, y: 330 },
      { id: "kyusho-53", num: 53, name: "Uko", kanji: "右虎", x: 210, y: 350 },
      { id: "kyusho-44", num: 44, name: "Ryūmon", kanji: "竜門", x: 95, y: 395 }
    ];

    const headProfilePoints = [
      { id: "kyusho-49", num: 49, name: "Tentō", kanji: "天頭", x: 140, y: 40 },
      { id: "kyusho-38", num: 38, name: "Menbu", kanji: "面部", x: 75, y: 115 },
      { id: "kyusho-25", num: 25, name: "Kasumi", kanji: "霞", x: 95, y: 140 },
      { id: "kyusho-10", num: 10, name: "Ganmen", kanji: "顔面", x: 55, y: 145 },
      { id: "kyusho-8", num: 8, name: "Dokko", kanji: "独鈷", x: 175, y: 200 },
      { id: "kyusho-2", num: 2, name: "Amado", kanji: "天門", x: 180, y: 240 },
      { id: "kyusho-52", num: 52, name: "Tsuyu Gasumi", kanji: "露霞", x: 140, y: 235 },
      { id: "kyusho-23", num: 23, name: "Kaku", kanji: "角", x: 110, y: 235 },
      { id: "kyusho-3", num: 3, name: "Asagasumi", kanji: "朝霞", x: 50, y: 265 },
      { id: "kyusho-37", num: 37, name: "Matsukaze", kanji: "松風", x: 110, y: 320 },
      { id: "kyusho-27", num: 27, name: "Keichū", kanji: "頸中", x: 200, y: 280 }
    ];

    const headBackPoints = [
      { id: "kyusho-49", num: 49, name: "Tentō", kanji: "天頭", x: 150, y: 35 },
      { id: "kyusho-8", num: 8, name: "Dokko", kanji: "独鈷", x: 95, y: 220 },
      { id: "kyusho-27", num: 27, name: "Keichū", kanji: "頸中", x: 150, y: 270 },
      { id: "kyusho-42", num: 42, name: "Ryūfū", kanji: "竜風", x: 205, y: 290 },
      { id: "kyusho-21", num: 21, name: "Jūjiro", kanji: "十字路", x: 150, y: 385 }
    ];

    const frontCard = `
      <div class="diagram-card zoom-card" style="width: 280px;">
        <span class="diagram-sub-badge">Face e Pescoço (Omote)</span>
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 300 420" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Crânio, Têmporas e Mandíbula -->
              <path d="M 150 35 C 80 35 70 105 70 175 C 70 235 105 275 150 275 C 195 275 230 235 230 175 C 230 105 220 35 150 35 Z" fill="url(#anatMuscleGrad)"/>
              <!-- Orelhas com Hélix e Trago -->
              <path d="M 70 140 C 52 140 48 195 70 210 Z" fill="#141724"/>
              <path d="M 230 140 C 248 140 252 195 230 210 Z" fill="#141724"/>
              <!-- Pescoço e Músculos Esternocleidomastoideos -->
              <path d="M 105 265 C 95 325 65 365 40 410 L 260 410 C 235 365 205 325 195 265 Z" fill="#11131e"/>
              <path d="M 105 270 Q 130 335 145 400" stroke="#475569" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
              <path d="M 195 270 Q 170 335 155 400" stroke="#475569" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
              <!-- Cartilagem Tireóide / Pomo de Adão (Ryūge) -->
              <path d="M 142 295 L 150 308 L 158 295 Z" fill="#2a3246" stroke="#94a3b8" stroke-width="1.6"/>
              <!-- Clavículas -->
              <path d="M 40 405 Q 150 390 260 405" stroke="#94a3b8" stroke-width="2.5" fill="none"/>
              <!-- Olhos, Sobrancelhas, Zigomáticos e Nariz -->
              <path d="M 90 120 Q 115 110 135 120" stroke="#64748b" stroke-width="2.5" fill="none"/>
              <path d="M 165 120 Q 185 110 210 120" stroke="#64748b" stroke-width="2.5" fill="none"/>
              <ellipse cx="112" cy="140" rx="14" ry="7" stroke="#475569" fill="#0b0c12"/>
              <ellipse cx="188" cy="140" rx="14" ry="7" stroke="#475569" fill="#0b0c12"/>
              <path d="M 85 160 Q 110 175 135 160" stroke="#334155" stroke-width="1.5" fill="none"/>
              <path d="M 165 160 Q 190 175 215 160" stroke="#334155" stroke-width="1.5" fill="none"/>
              <path d="M 150 125 L 145 180 L 155 180 Z" stroke="#475569" stroke-width="1.8" fill="#1b1f2e"/>
              <!-- Boca, Filtro Labial e Queixo -->
              <line x1="150" y1="182" x2="150" y2="205" stroke="#475569" stroke-width="1.5"/>
              <path d="M 130 220 Q 150 230 170 220" stroke="#64748b" stroke-width="2" fill="none"/>
              <path d="M 135 250 Q 150 258 165 250" stroke="#334155" stroke-width="1.5" fill="none"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(headFrontPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;

    const profileCard = `
      <div class="diagram-card zoom-card" style="width: 260px;">
        <span class="diagram-sub-badge">Perfil e Têmpora (Sokumen)</span>
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 280 420" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Contorno Lateral do Rosto e Crânio -->
              <path d="M 140 35 C 90 35 60 70 55 110 L 52 140 L 40 165 L 56 175 L 48 200 L 58 215 L 46 250 C 50 270 70 280 100 280 L 140 250 C 165 245 185 220 185 170 C 185 100 170 35 140 35 Z" fill="url(#anatMuscleGrad)"/>
              <!-- Orelha Anatômica com Processo Mastóide (Dokko) -->
              <path d="M 160 145 C 185 145 190 200 165 215 C 160 200 160 160 160 145 Z" fill="#141724"/>
              <path d="M 165 170 C 175 170 175 190 165 195" stroke="#475569" stroke-width="1.5" fill="none"/>
              <!-- Pescoço Lateral e Esternocleidomastoideo -->
              <path d="M 100 280 C 105 340 95 380 70 415 L 240 415 C 225 360 215 310 200 260 Z" fill="#11131e"/>
              <path d="M 170 220 Q 140 310 110 405" stroke="#475569" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
              <!-- Linha Mandibular e Queixo -->
              <path d="M 50 255 L 145 250" stroke="#94a3b8" stroke-width="2" fill="none"/>
              <!-- Olho e Sobrancelha de Perfil -->
              <path d="M 60 120 Q 75 115 90 123" stroke="#64748b" stroke-width="2" fill="none"/>
              <path d="M 65 140 L 80 135 L 78 145 Z" fill="#0b0c12" stroke="#475569"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(headProfilePoints)}
            </g>
          </svg>
        </div>
      </div>
    `;

    const backCard = `
      <div class="diagram-card zoom-card" style="width: 280px;">
        <span class="diagram-sub-badge">Nuca e Base Craniana (Ura)</span>
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 300 420" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Crânio Posterior -->
              <path d="M 150 35 C 80 35 70 105 70 175 C 70 235 100 265 150 265 C 200 265 230 235 230 175 C 230 105 220 35 150 35 Z" fill="url(#anatMuscleGrad)"/>
              <!-- Orelhas Costas -->
              <path d="M 70 140 C 52 140 48 195 70 210 Z" fill="#141724"/>
              <path d="M 230 140 C 248 140 252 195 230 210 Z" fill="#141724"/>
              <!-- Pescoço e Trapézio Superior -->
              <path d="M 100 265 C 85 325 55 365 30 410 L 270 410 C 245 365 215 325 200 265 Z" fill="#11131e"/>
              <!-- Linha Nucal e Fossa Suboccipital (Keichū) -->
              <path d="M 110 215 Q 150 230 190 215" stroke="#94a3b8" stroke-width="2.2" fill="none"/>
              <!-- Coluna Cervical (C1 a C7) -->
              <line x1="150" y1="225" x2="150" y2="395" stroke="#94a3b8" stroke-width="2.6" stroke-dasharray="4 4"/>
              <circle cx="150" cy="385" r="5" fill="#eab308" stroke="#fef08a" stroke-width="1.4"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(headBackPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;

    if (this.headSubView === "front") {
      container.innerHTML = frontCard;
    } else if (this.headSubView === "profile") {
      container.innerHTML = profileCard;
    } else if (this.headSubView === "back") {
      container.innerHTML = backCard;
    } else {
      // Injeta diretamente como filhos flex horizontais
      container.innerHTML = frontCard + profileCard + backCard;
    }
  }

  // =========================================================================
  // 3. PRANCHA REGIONAL: TÓRAX E ABDÔMEN (Alta Definição)
  // =========================================================================
  renderTorsoCloseUp(container) {
    const torsoPoints = [
      { id: "kyusho-36", num: 36, name: "Kyokotsu", kanji: "胸骨", x: 180, y: 75 },
      { id: "kyusho-28", num: 28, name: "Kimon", kanji: "鬼門", x: 115, y: 125 },
      { id: "kyusho-47", num: 47, name: "Suigetsu", kanji: "水月", x: 180, y: 185 },
      { id: "kyusho-7", num: 7, name: "Denkō", kanji: "電光", x: 260, y: 240 },
      { id: "kyusho-6", num: 6, name: "Butsumetsu", kanji: "仏滅", x: 100, y: 240 },
      { id: "kyusho-12", num: 12, name: "Gorin", kanji: "五輪", x: 180, y: 295 },
      { id: "kyusho-11", num: 11, name: "Getsuei", kanji: "月影", x: 265, y: 315 },
      { id: "kyusho-14", num: 14, name: "Hayashi", kanji: "林", x: 95, y: 315 },
      { id: "kyusho-18", num: 18, name: "Inazuma", kanji: "稲妻", x: 265, y: 380 },
      { id: "kyusho-22", num: 22, name: "Kage", kanji: "陰", x: 180, y: 395 },
      { id: "kyusho-30", num: 30, name: "Kin Teki", kanji: "金的", x: 180, y: 430 },
      { id: "kyusho-29", num: 29, name: "Kin", kanji: "金", x: 215, y: 455 },
      { id: "kyusho-48", num: 48, name: "Suzu", kanji: "鈴", x: 145, y: 455 },
      { id: "kyusho-16", num: 16, name: "Hiryūran", kanji: "飛竜卵", x: 180, y: 480 }
    ];

    container.innerHTML = `
      <div class="diagram-card zoom-card">
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 360 520" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Tronco Muscular -->
              <path d="M 100 45 C 50 55 35 120 45 220 C 50 310 90 370 110 480 L 250 480 C 270 370 310 310 315 220 C 325 120 310 55 260 45 Z" fill="url(#anatBodyGrad)"/>
              <!-- Clavículas -->
              <path d="M 100 45 Q 180 65 260 45" stroke="#94a3b8" stroke-width="2.8" fill="none"/>
              <!-- Peitorais Maior -->
              <path d="M 100 50 Q 180 80 180 150 Q 100 165 70 115 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.6"/>
              <path d="M 260 50 Q 180 80 180 150 Q 260 165 290 115 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.6"/>
              <circle cx="115" cy="125" r="4" fill="#2d3748" stroke="#475569"/>
              <circle cx="245" cy="125" r="4" fill="#2d3748" stroke="#475569"/>
              <!-- Esterno e Xifóide (Kyokotsu / Suigetsu) -->
              <line x1="180" y1="58" x2="180" y2="185" stroke="#94a3b8" stroke-width="3"/>
              <!-- Arcos Costais -->
              <path d="M 100 180 Q 180 215 260 180" stroke="#475569" stroke-width="2" fill="none"/>
              <path d="M 80 230 Q 180 270 280 230" stroke="#475569" stroke-width="2" fill="none"/>
              <!-- Gomos do Abdômen com Linha Alba -->
              <line x1="180" y1="185" x2="180" y2="430" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3"/>
              <rect x="145" y="195" width="30" height="40" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <rect x="185" y="195" width="30" height="40" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <rect x="142" y="245" width="33" height="44" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <rect x="185" y="245" width="33" height="44" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <circle cx="180" cy="300" r="5" fill="#0b0c12" stroke="#475569" stroke-width="1.5"/>
              <rect x="145" y="305" width="30" height="44" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <rect x="185" y="305" width="30" height="44" rx="6" fill="#181d2c" stroke="#334155" stroke-width="1.2"/>
              <!-- Cristas Ilíacas e Púbis (Inazuma / Kinteki) -->
              <path d="M 85 365 Q 130 405 180 415 Q 230 405 275 365" stroke="#94a3b8" stroke-width="2" fill="none"/>
              <path d="M 140 435 L 180 480 L 220 435 Z" fill="#10121c" stroke="#475569"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(torsoPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 4. PRANCHA REGIONAL: BRAÇOS E MÃOS (Alta Definição)
  // =========================================================================
  renderArmsCloseUp(container) {
    const armsPoints = [
      { id: "kyusho-26", num: 26, name: "Kata Hoshi", kanji: "肩星", x: 95, y: 65 },
      { id: "kyusho-19", num: 19, name: "Jakkin", kanji: "雀筋", x: 135, y: 155 },
      { id: "kyusho-15", num: 15, name: "Hiji Hoshi", kanji: "肘星", x: 170, y: 235 },
      { id: "kyusho-40", num: 40, name: "Nagare", kanji: "流", x: 200, y: 305 },
      { id: "kyusho-33", num: 33, name: "Kote", kanji: "小手", x: 230, y: 365 },
      { id: "kyusho-34", num: 34, name: "Kubite", kanji: "首手", x: 255, y: 400 },
      { id: "kyusho-41", num: 41, name: "Omote Gyaku", kanji: "表逆", x: 280, y: 440 },
      { id: "kyusho-54", num: 54, name: "Ura Gyaku", kanji: "裏逆", x: 215, y: 440 }
    ];

    container.innerHTML = `
      <div class="diagram-card zoom-card">
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 400 510" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Braço e Deltoide Estendido -->
              <path d="M 55 45 C 110 45 140 75 160 135 L 188 225 L 225 325 L 260 405 L 295 455 L 265 475 L 210 415 L 165 315 L 128 225 L 90 135 C 70 85 50 65 55 45 Z" fill="url(#anatMuscleGrad)"/>
              <!-- Deltoide -->
              <path d="M 60 48 C 105 50 130 75 135 120 C 95 130 70 90 60 48 Z" fill="#1f2438" stroke="#475569"/>
              <!-- Bíceps e Sulco Medial (Jakkin) -->
              <path d="M 128 125 Q 155 170 160 220" stroke="#94a3b8" stroke-width="2" fill="none"/>
              <!-- Fossa Cubital e Olécrano do Cotovelo (Hiji Hoshi) -->
              <ellipse cx="170" cy="235" rx="14" ry="8" fill="#131520" stroke="#94a3b8" stroke-width="2"/>
              <!-- Antebraço e Braquiorradial (Nagare) -->
              <path d="M 170 240 Q 210 310 222 365" stroke="#475569" stroke-width="2" fill="none"/>
              <!-- Punho e Tendões (Kote / Kubite) -->
              <line x1="220" y1="375" x2="252" y2="365" stroke="#94a3b8" stroke-width="2.5"/>
              <!-- Mão e Dedos -->
              <path d="M 252 400 L 275 440 L 295 425 L 270 390 Z" fill="#1c2032" stroke="#475569"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(armsPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 5. PRANCHA REGIONAL: PERNAS E PÉS (Alta Definição)
  // =========================================================================
  renderLegsCloseUp(container) {
    const legsPoints = [
      { id: "kyusho-32", num: 32, name: "Koe", kanji: "小枝", x: 130, y: 55 },
      { id: "kyusho-45", num: 45, name: "Sai", kanji: "塞", x: 160, y: 115 },
      { id: "kyusho-55", num: 55, name: "Usai", kanji: "右塞", x: 215, y: 115 },
      { id: "kyusho-17", num: 17, name: "Hiza", kanji: "膝", x: 180, y: 215 },
      { id: "kyusho-51", num: 51, name: "Tsune", kanji: "常", x: 180, y: 315 },
      { id: "kyusho-5", num: 5, name: "Buda (Kobura)", kanji: "伏陀", x: 115, y: 315 },
      { id: "kyusho-35", num: 35, name: "Kurubushi", kanji: "踝", x: 180, y: 420 },
      { id: "kyusho-50", num: 50, name: "Toki", kanji: "独生", x: 180, y: 460 },
      { id: "kyusho-59", num: 59, name: "Yaku", kanji: "躍", x: 250, y: 145 }
    ];

    container.innerHTML = `
      <div class="diagram-card zoom-card">
        <div class="diagram-header">
          <span class="diagram-title">Membros Inferiores (Coxa, Joelho, Tíbia, Panturrilha e Pé)</span>
          <span class="badge-tag">Quadríceps, Patela e Canela</span>
        </div>
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 360 490" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Silhueta das Pernas -->
              <path d="M 100 35 C 115 120 140 200 145 220 C 150 280 155 350 150 420 L 110 475 L 250 475 L 210 420 C 205 350 210 280 215 220 C 220 200 245 120 260 35 Z" fill="url(#anatBodyGrad)"/>
              <!-- Ventres Musculares do Quadríceps -->
              <path d="M 130 50 Q 170 140 180 200" stroke="#475569" stroke-width="2" fill="none"/>
              <path d="M 230 50 Q 190 140 180 200" stroke="#475569" stroke-width="2" fill="none"/>
              <!-- Vasto Medial em Gota -->
              <ellipse cx="160" cy="180" rx="14" ry="22" fill="#1f2438" stroke="#475569"/>
              <ellipse cx="200" cy="180" rx="14" ry="22" fill="#1f2438" stroke="#475569"/>
              <!-- Articulação do Joelho / Patela e Ligamentos (Hiza) -->
              <ellipse cx="180" cy="215" rx="18" ry="14" fill="#242a40" stroke="#94a3b8" stroke-width="2.2"/>
              <!-- Crista da Tíbia / Canela (Tsune) -->
              <line x1="180" y1="235" x2="180" y2="405" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4 4"/>
              <!-- Músculo Tibial e Panturrilha (Kobura) -->
              <path d="M 150 260 Q 130 315 155 380" stroke="#475569" stroke-width="2" fill="none"/>
              <path d="M 210 260 Q 230 315 205 380" stroke="#475569" stroke-width="2" fill="none"/>
              <!-- Maléolos do Tornozelo (Kurubushi) e Peito do Pé (Toki) -->
              <circle cx="160" cy="425" r="4" fill="#334155" stroke="#94a3b8"/>
              <circle cx="200" cy="425" r="4" fill="#334155" stroke="#94a3b8"/>
              <path d="M 140 455 Q 180 445 220 455" stroke="#94a3b8" stroke-width="2" fill="none"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(legsPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 6. PRANCHA REGIONAL: DORSO E COLUNA (Alta Definição)
  // =========================================================================
  renderBackCloseUp(container) {
    const backPoints = [
      { id: "kyusho-27", num: 27, name: "Keichū", kanji: "頸中", x: 180, y: 55 },
      { id: "kyusho-21", num: 21, name: "Jūjiro", kanji: "十字路", x: 180, y: 105 },
      { id: "kyusho-24", num: 24, name: "Kappō", kanji: "活法", x: 180, y: 145 },
      { id: "kyusho-46", num: 46, name: "Shichibatsu", kanji: "七罰", x: 180, y: 215 },
      { id: "kyusho-58", num: 58, name: "Ushiro Inazuma", kanji: "後稲妻", x: 125, y: 285 },
      { id: "kyusho-57", num: 57, name: "Ushiro Getsuei", kanji: "後月影", x: 235, y: 285 },
      { id: "kyusho-4", num: 4, name: "Bitei Kotsu", kanji: "尾底骨", x: 180, y: 405 }
    ];

    container.innerHTML = `
      <div class="diagram-card zoom-card">
        <div class="diagram-header">
          <span class="diagram-title">Coluna Vertebral, Escápulas e Região Lombar (Ura)</span>
          <span class="badge-tag">Cadeia Posterior e Vértebras</span>
        </div>
        <div class="svg-wrapper zoom-svg-wrapper">
          <svg viewBox="0 0 360 490" class="body-svg detailed-svg">
            ${this.getSvgDefs()}
            <g fill="#161926" stroke="#38435d" stroke-width="1.8">
              <!-- Dorso Posterior -->
              <path d="M 120 40 L 75 95 L 65 250 C 70 350 100 395 110 475 L 250 475 C 260 395 290 350 295 250 L 285 95 L 240 40 Z" fill="url(#anatBodyGrad)"/>
              <!-- Músculo Trapézio -->
              <path d="M 180 40 L 105 105 L 180 180 L 255 105 Z" fill="url(#anatMuscleGrad)" stroke="#475569" stroke-width="1.6"/>
              <!-- Escápulas (Ushiro Hane) -->
              <path d="M 105 105 Q 135 130 125 195 L 90 125 Z" fill="url(#anatBoneGrad)" stroke="#94a3b8" stroke-width="2"/>
              <path d="M 255 105 Q 225 130 235 195 L 270 125 Z" fill="url(#anatBoneGrad)" stroke="#94a3b8" stroke-width="2"/>
              <!-- Grande Dorsal e Paravertebrais -->
              <path d="M 75 220 Q 140 250 180 320 Q 220 250 285 220" stroke="#475569" stroke-width="2" fill="none"/>
              <!-- Coluna Vertebral Completa -->
              <line x1="180" y1="45" x2="180" y2="425" stroke="#94a3b8" stroke-width="3" stroke-dasharray="5 5"/>
              <!-- Glúteos e Cóccix (Bitei Kotsu) -->
              <path d="M 110 400 Q 180 440 250 400" stroke="#475569" stroke-width="2" fill="none"/>
              <circle cx="180" cy="405" r="5" fill="#eab308" stroke="#fef08a" stroke-width="1.5"/>
            </g>
            <g class="kyusho-markers-group">
              ${this.buildDetailedMarkers(backPoints)}
            </g>
          </svg>
        </div>
      </div>
    `;
  }

  // Utilitário para posicionamento inteligente e escalonado de etiquetas evitando sobreposição (Modelo Enciclopédico com Leader Lines)
  computeSmartLabelPositions(points) {
    const items = points.map(k => {
      const px = (k.x / 100) * 320;
      const py = (k.y / 100) * 720;
      
      // Determina hemisfério esquerdo ou direito
      let isLeft = k.x < 50;
      if (k.x >= 46 && k.x <= 54) {
        isLeft = (k.number % 2 !== 0);
      }

      // Posição horizontal segura fora da silhueta do corpo
      let labelX = isLeft ? 100 : 220;
      if (isLeft) {
        if (px < 80) labelX = px - 10;
        else labelX = Math.min(px - 12, 102);
      } else {
        if (px > 240) labelX = px + 10;
        else labelX = Math.max(px + 12, 218);
      }

      return {
        point: k,
        px,
        py,
        isLeft,
        labelX,
        labelY: py,
        anchor: isLeft ? "end" : "start"
      };
    });

    // Relaxamento vertical rigoroso para garantir espaçamento mínimo de 12.5px entre etiquetas vizinhas
    ['left', 'right'].forEach(side => {
      const isL = (side === 'left');
      const sideItems = items.filter(it => it.isLeft === isL).sort((a, b) => a.py - b.py);
      
      for (let i = 0; i < sideItems.length - 1; i++) {
        const cur = sideItems[i];
        const next = sideItems[i + 1];
        if (next.labelY - cur.labelY < 13) {
          next.labelY = cur.labelY + 13;
        }
      }
    });

    return items.map(it => {
      const dx = it.labelX - it.px;
      const dy = (it.labelY - it.py) + 3.5;
      const hasLeaderLine = Math.abs(dx) > 13;
      return {
        point: it.point,
        px: it.px,
        py: it.py,
        dx,
        dy,
        anchor: it.anchor,
        hasLeaderLine,
        lineTargetX: dx + (it.anchor === "end" ? 2 : -2),
        lineTargetY: dy - 3
      };
    });
  }

  // Utilitário para marcadores ampliados de alta resolução com rótulo sem sobreposição
  buildDetailedMarkers(pointList) {
    const items = pointList.map(p => {
      const isSelected = this.selectedKyusho && (this.selectedKyusho.id === p.id || this.selectedKyusho.number === p.num);
      const fullPoint = this.kyushoList.find(k => k.id === p.id || k.number === p.num) || p;
      const tooltip = `Nº ${p.num}. ${p.name} (${p.kanji}) — ${fullPoint.translation || ''}&#10;• Localização: ${fullPoint.location || ''}&#10;• Efeito: ${fullPoint.effect || ''}`;
      
      // Determina lado horizontal
      let isLeft = p.x < 150;
      if (p.x >= 140 && p.x <= 160) {
        isLeft = (p.num % 2 !== 0);
      }

      // Largura compacta calculada dinamicamente
      const labelText = `${p.name} (${p.kanji})`;
      const approxWidth = Math.min(80, Math.max(52, labelText.length * 6.2 + 10));
      const tagX = isLeft ? -(approxWidth + 12) : 12;

      return {
        p,
        isSelected,
        tooltip,
        isLeft,
        tagX,
        tagY: -10,
        width: approxWidth,
        labelText
      };
    });

    // Relaxamento vertical para que nenhuma caixa se sobreponha
    ['left', 'right'].forEach(side => {
      const isL = (side === 'left');
      const sideItems = items.filter(it => it.isLeft === isL).sort((a, b) => a.p.y - b.p.y);
      for (let i = 0; i < sideItems.length - 1; i++) {
        const cur = sideItems[i];
        const next = sideItems[i + 1];
        const distY = (next.p.y + next.tagY) - (cur.p.y + cur.tagY);
        if (distY < 22) {
          const shift = (22 - distY);
          cur.tagY -= Math.ceil(shift / 2);
          next.tagY += Math.ceil(shift / 2);
        }
      }
    });

    return items.map(({ p, isSelected, tooltip, tagX, tagY, width, labelText }) => `
      <g class="kyusho-marker detailed-marker ${isSelected ? 'selected' : ''}" data-id="${p.id}" transform="translate(${p.x}, ${p.y})">
        <title>${tooltip}</title>
        <circle cx="0" cy="0" r="15" class="marker-pulse" />
        <circle cx="0" cy="0" r="7.5" class="marker-core" />
        <text x="0" y="3.8" class="marker-number" text-anchor="middle">${p.num}</text>
        <g class="marker-tag-label" transform="translate(${tagX}, ${tagY})">
          <rect x="0" y="0" width="${width}" height="20" rx="4" class="marker-tag-bg"/>
          <text x="${width / 2}" y="13.5" class="marker-tag-text" text-anchor="middle">${labelText}</text>
        </g>
      </g>
    `).join("");
  }

  bindPointClicks() {
    this.container.querySelectorAll(".kyusho-marker").forEach(el => {
      const handleSelect = (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-id");
        if (!id) return;
        const num = parseInt(id.replace("kyusho-", ""), 10);
        const point = this.kyushoList.find(k => k.id === id || k.number === num);
        if (point) {
          this.selectKyusho(point);
        }
      };

      el.addEventListener("click", handleSelect);
      el.addEventListener("touchend", handleSelect);
    });
  }

  selectKyusho(point) {
    this.selectedKyusho = point;

    // Atualiza classes selecionadas nos marcadores
    this.container.querySelectorAll(".kyusho-marker").forEach(el => {
      const elId = el.getAttribute("data-id");
      if (elId === point.id || elId === `kyusho-${point.number}`) {
        el.classList.add("selected");
      } else {
        el.classList.remove("selected");
      }
    });

    const placeholder = document.getElementById("kyushoPlaceholder");
    const content = document.getElementById("kyushoDetailContent");

    if (!placeholder || !content) return;

    placeholder.classList.add("hidden");
    content.classList.remove("hidden");

    // Lista ordenada por número para navegação sequencial (1 a 60)
    const sortedList = [...this.kyushoList].sort((a, b) => (a.number || 0) - (b.number || 0));
    const currentIndex = sortedList.findIndex(k => k.id === point.id || k.number === point.number);
    const totalPoints = sortedList.length;
    const prevPoint = currentIndex > 0 ? sortedList[currentIndex - 1] : sortedList[totalPoints - 1];
    const nextPoint = currentIndex < totalPoints - 1 ? sortedList[currentIndex + 1] : sortedList[0];

    // Procura técnicas do Densho que citam este Kyūsho
    const database = window.NENRIKI_DATABASE || {};
    const relatedTechs = (database.techniques || []).filter(t => {
      const list = t.kyushoRelated || [];
      return list.some(kName => kName.toLowerCase().includes(point.name.toLowerCase()) || point.name.toLowerCase().includes(kName.toLowerCase()));
    });

    content.innerHTML = `
      <!-- Faixa de Navegação Anterior / Próximo Kyūsho -->
      <div class="kdetail-nav-strip">
        <button class="knav-btn knav-prev" id="btnKyushoPrev" title="Kyūsho Anterior: Nº ${prevPoint ? prevPoint.number : ''} - ${prevPoint ? prevPoint.name : ''} (Seta ←)">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          <span class="knav-text">Anterior</span>
          ${prevPoint ? `<span class="knav-tag">#${prevPoint.number}</span>` : ''}
        </button>

        <div class="knav-counter">
          <span>Nº <strong>${point.number}</strong> de <strong>${totalPoints}</strong></span>
        </div>

        <button class="knav-btn knav-next" id="btnKyushoNext" title="Próximo Kyūsho: Nº ${nextPoint ? nextPoint.number : ''} - ${nextPoint ? nextPoint.name : ''} (Seta →)">
          ${nextPoint ? `<span class="knav-tag">#${nextPoint.number}</span>` : ''}
          <span class="knav-text">Próximo</span>
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>

      <div class="kdetail-header">
        <div class="kdetail-badge">Nº ${point.number} • ${point.view === 'front' ? 'Omote (Frente)' : 'Ura (Costas)'}</div>
        <div class="kdetail-titles">
          <h2 class="kdetail-name">${point.name}</h2>
          <span class="kdetail-kanji">${point.kanji}</span>
        </div>
        <div class="kdetail-trans">${point.translation}</div>
      </div>

      <div class="kdetail-body">
        <div class="kdetail-card">
          <div class="kcard-label">
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#eab308" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Localização Anatômica Precisa
          </div>
          <div class="kcard-text">${point.location}</div>
        </div>

        <div class="kdetail-card">
          <div class="kcard-label">
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#ef4444" d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>
            Efeito Fisiológico e Marcial
          </div>
          <div class="kcard-text alert-effect">${point.effect}</div>
        </div>

        <div class="kdetail-card">
          <div class="kcard-label">
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#38bdf8" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Armas Corporais Recomendadas (Hōken Jū Roppō)
          </div>
          <div class="kcard-text">
            ${this.getRecommendedWeapons(point)}
          </div>
        </div>

        ${relatedTechs.length > 0 ? `
          <div class="kdetail-card">
            <div class="kcard-label">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#a855f7" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
              Técnicas do TCJ que Utilizam este Ponto (${relatedTechs.length})
            </div>
            <div class="kdetail-tech-chips">
              ${relatedTechs.slice(0, 8).map(t => `
                <button class="ktech-chip-btn" data-techid="${t.id}" title="Abrir ficha técnica de ${t.nameRomaji}">
                  ${t.nameRomaji}
                </button>
              `).join("")}
            </div>
          </div>
        ` : ''}

        <div class="kdetail-actions">
          <button class="btn-dojo-primary" id="btnFilterTechsByKyusho">
            Filtrar Técnicas do TCJ com este Ponto
          </button>
        </div>
      </div>
    `;

    // Botões de navegação Anterior / Próximo
    const btnPrev = document.getElementById("btnKyushoPrev");
    if (btnPrev && prevPoint) {
      btnPrev.addEventListener("click", () => this.selectKyusho(prevPoint));
    }
    const btnNext = document.getElementById("btnKyushoNext");
    if (btnNext && nextPoint) {
      btnNext.addEventListener("click", () => this.selectKyusho(nextPoint));
    }

    // Scroll suave do painel lateral para o topo
    const sidePanel = document.getElementById("kyushoSidePanel");
    if (sidePanel) {
      sidePanel.scrollTop = 0;
    }

    // Ações de clique nas técnicas relacionadas do painel lateral
    content.querySelectorAll(".ktech-chip-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const techId = btn.getAttribute("data-techid");
        if (techId && window.NenrikiModal) {
          window.NenrikiModal.open(techId);
        }
      });
    });

    const filterBtn = document.getElementById("btnFilterTechsByKyusho");
    if (filterBtn) {
      filterBtn.addEventListener("click", () => {
        if (window.NenrikiApp) {
          window.NenrikiApp.searchByKyusho(point.name);
        }
      });
    }
  }

  getRecommendedWeapons(point) {
    if (point.y < 20) return "Boshi Ken (polegar), Shutō Ken (lâmina da mão), Kikaku Ken (cabeça), Shikan Ken (nós dos dedos).";
    if (point.y >= 20 && point.y <= 52) return "Boshi Ken, Fudō Ken (punho fechado), Shikan Ken, Sokki Ken (joelhada).";
    return "Soku Yaku (calcanhar), Sokki Ken (joelhada), Soku Gyaku (ponta dos dedos do pé).";
  }
}

if (typeof window !== "undefined") {
  window.NenrikiKyusho = NenrikiKyusho;
}
