/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Módulo de Flashcards e Treinamento Mnemônico Interativo
 * Bujinkan Nenriki Dojo
 */

class NenrikiFlashcards {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.allCards = [];
    this.filteredCards = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.currentMaki = "all";
    this.studyMode = "mnemonic"; // 'mnemonic' | 'biomechanics' | 'kanji'

    this.init();
  }

  init() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="flashcards-layout">
        <!-- Cabeçalho e Controles de Filtro -->
        <div class="flashcards-header">
          <div class="fc-controls-bar">
            <div class="fc-filter-group">
              <label>Pergaminho:</label>
              <select id="fcMakiSelect" class="fc-select">
                <option value="all">Todos os Pergaminhos (Makis)</option>
                <option value="ten">Ten Ryaku no Maki (Céu)</option>
                <option value="chi">Chi Ryaku no Maki (Terra)</option>
                <option value="jin">Jin Ryaku no Maki (Homem)</option>
                <option value="buki">Buki Waza (Armas)</option>
              </select>
            </div>

            <div class="fc-filter-group">
              <label>Foco do Treino:</label>
              <select id="fcModeSelect" class="fc-select">
                <option value="mnemonic">Mnemônica & Etimologia</option>
                <option value="biomechanics">Passo a Passo & Biomecânica</option>
                <option value="kanji">Kanjis & Leitura</option>
              </select>
            </div>

            <button class="fc-action-btn" id="btnShuffleDeck" title="Embaralhar Técnicas">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
              Embaralhar
            </button>
          </div>

          <!-- Barra de Progresso -->
          <div class="fc-progress-container">
            <div class="fc-progress-info">
              <span id="fcProgressText">Cartão 1 de 20</span>
              <span id="fcScoreText">Dominadas: 0 | A Revisar: 0</span>
            </div>
            <div class="fc-progress-bar">
              <div class="fc-progress-fill" id="fcProgressFill" style="width: 5%"></div>
            </div>
          </div>
        </div>

        <!-- Área Central do Cartão 3D -->
        <div class="flashcard-scene" id="flashcardScene">
          <div class="flashcard-3d" id="flashcardElement">
            <!-- Face Frontal -->
            <div class="flashcard-face card-front" id="cardFrontContent">
              <!-- Renderizado via JS -->
            </div>
            <!-- Face Dorsal (Verso) -->
            <div class="flashcard-face card-back" id="cardBackContent">
              <!-- Renderizado via JS -->
            </div>
          </div>
        </div>

        <!-- Controles de Ação Inferiores -->
        <div class="flashcard-actions-bar">
          <button class="fc-btn btn-prev" id="btnPrevCard">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            Anterior
          </button>

          <button class="fc-btn btn-flip" id="btnFlipCard">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
            Virar Cartão (Espaço)
          </button>

          <div class="fc-eval-buttons">
            <button class="fc-btn btn-review" id="btnMarkReview" title="Preciso treinar mais no dojo">
              ❌ Revisar
            </button>
            <button class="fc-btn btn-mastered" id="btnMarkMastered" title="Técnica memorizada e dominada">
              ⭐ Dominado
            </button>
          </div>

          <button class="fc-btn btn-next" id="btnNextCard">
            Próximo
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  setTechniques(techList) {
    this.allCards = techList || [];
    this.applyFilter();
  }

  applyFilter() {
    if (this.currentMaki === "all") {
      this.filteredCards = [...this.allCards];
    } else {
      this.filteredCards = this.allCards.filter(t => t.makiId === this.currentMaki);
    }

    this.currentIndex = 0;
    this.isFlipped = false;
    this.renderCard();
  }

  bindEvents() {
    const makiSelect = document.getElementById("fcMakiSelect");
    const modeSelect = document.getElementById("fcModeSelect");
    const shuffleBtn = document.getElementById("btnShuffleDeck");
    const cardEl = document.getElementById("flashcardElement");

    makiSelect.addEventListener("change", (e) => {
      this.currentMaki = e.target.value;
      this.applyFilter();
    });

    modeSelect.addEventListener("change", (e) => {
      this.studyMode = e.target.value;
      this.renderCard();
    });

    shuffleBtn.addEventListener("click", () => {
      this.shuffle();
    });

    // Clique no cartão para virar
    cardEl.addEventListener("click", () => {
      this.toggleFlip();
    });

    document.getElementById("btnFlipCard").addEventListener("click", () => {
      this.toggleFlip();
    });

    document.getElementById("btnPrevCard").addEventListener("click", () => {
      this.prevCard();
    });

    document.getElementById("btnNextCard").addEventListener("click", () => {
      this.nextCard();
    });

    document.getElementById("btnMarkReview").addEventListener("click", () => {
      this.markCard("reviewing");
    });

    document.getElementById("btnMarkMastered").addEventListener("click", () => {
      this.markCard("mastered");
    });

    // Tecla de Espaço e Setas para navegação rápida
    window.addEventListener("keydown", (e) => {
      // Apenas se o módulo estiver visível
      const section = document.getElementById("viewFlashcards");
      if (!section || section.classList.contains("hidden")) return;

      if (e.code === "Space") {
        e.preventDefault();
        this.toggleFlip();
      } else if (e.code === "ArrowRight") {
        this.nextCard();
      } else if (e.code === "ArrowLeft") {
        this.prevCard();
      }
    });
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    const cardEl = document.getElementById("flashcardElement");
    if (cardEl) {
      if (this.isFlipped) {
        cardEl.classList.add("flipped");
      } else {
        cardEl.classList.remove("flipped");
      }
    }
  }

  prevCard() {
    if (this.filteredCards.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.filteredCards.length) % this.filteredCards.length;
    this.isFlipped = false;
    this.renderCard();
  }

  nextCard() {
    if (this.filteredCards.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredCards.length;
    this.isFlipped = false;
    this.renderCard();
  }

  shuffle() {
    for (let i = this.filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredCards[i], this.filteredCards[j]] = [this.filteredCards[j], this.filteredCards[i]];
    }
    this.currentIndex = 0;
    this.isFlipped = false;
    this.renderCard();
  }

  markCard(status) {
    if (this.filteredCards.length === 0) return;
    const current = this.filteredCards[this.currentIndex];
    if (window.NenrikiStorage) {
      window.NenrikiStorage.saveStudyStatus(current.id, status);
    }
    this.nextCard();
  }

  renderCard() {
    const cardFront = document.getElementById("cardFrontContent");
    const cardBack = document.getElementById("cardBackContent");
    const cardEl = document.getElementById("flashcardElement");
    const progressText = document.getElementById("fcProgressText");
    const scoreText = document.getElementById("fcScoreText");
    const progressFill = document.getElementById("fcProgressFill");

    if (!cardFront || !cardBack || !cardEl) return;

    cardEl.classList.remove("flipped");
    this.isFlipped = false;

    if (this.filteredCards.length === 0) {
      cardFront.innerHTML = `
        <div class="empty-fc">
          <h3>Nenhuma técnica encontrada</h3>
          <p>Selecione outro filtro para continuar seus estudos.</p>
        </div>
      `;
      cardBack.innerHTML = "";
      return;
    }

    const current = this.filteredCards[this.currentIndex];
    const total = this.filteredCards.length;
    const progressPercent = Math.round(((this.currentIndex + 1) / total) * 100);

    progressText.innerText = `Técnica ${this.currentIndex + 1} de ${total}`;
    progressFill.style.width = `${progressPercent}%`;

    // Atualizar pontuações do Storage
    if (window.NenrikiStorage) {
      const prog = window.NenrikiStorage.getStudyProgress();
      scoreText.innerText = `Dominadas: ${prog.mastered.length} | A Revisar: ${prog.reviewing.length}`;
    }

    // Renderizar de acordo com o Modo de Treino
    if (this.studyMode === "mnemonic") {
      cardFront.innerHTML = `
        <div class="fc-badge-top">${current.category} • ${current.makiId.toUpperCase()}</div>
        <div class="fc-big-kanji">${current.nameKanji || "武神館"}</div>
        <h2 class="fc-title-romaji">${current.nameRomaji}</h2>
        <div class="fc-prompt-hint">Qual é o significado literal e o gatilho mnemônico desta técnica?</div>
        <div class="fc-click-hint">Clique ou pressione [Espaço] para revelar o segredo</div>
      `;

      cardBack.innerHTML = `
        <div class="fc-badge-top" style="color:#eab308">Tradução e Mnemônica Visual</div>
        <h3 class="fc-back-title">${current.translation}</h3>
        <div class="fc-mnemonic-box">
          <div class="mnemonic-tag">🎯 Gatilho Mnemônico:</div>
          <p class="mnemonic-quote">"${current.mnemonic}"</p>
        </div>
        <div class="fc-etymology-list">
          ${(current.etymology || []).map(e => `
            <div class="etym-mini-row"><strong>${e.term}:</strong> ${e.meaning}</div>
          `).join("")}
        </div>
        <div class="fc-open-tech-btn" onclick="event.stopPropagation(); window.NenrikiModal.open('${current.id}')">
          📖 Abrir Passo a Passo Completo
        </div>
      `;
    } else if (this.studyMode === "biomechanics") {
      cardFront.innerHTML = `
        <div class="fc-badge-top">${current.category}</div>
        <h2 class="fc-title-romaji">${current.nameRomaji}</h2>
        <div class="fc-big-kanji" style="font-size: 2.2rem; margin: 10px 0;">${current.nameKanji || ""}</div>
        <div class="fc-prompt-hint">Como executar o Tai Sabaki, Uke Nagashi e Kuzushi desta técnica?</div>
        <div class="fc-click-hint">Clique para conferir os passos mecânicos</div>
      `;

      cardBack.innerHTML = `
        <div class="fc-badge-top" style="color:#38bdf8">Passo a Passo Biomecânico</div>
        <div class="fc-step-preview">
          <p><strong>Ataque do Uke:</strong> ${current.stepByStep.ukeAction}</p>
          <p><strong>Movimento do Tori:</strong></p>
          <ul class="fc-steps-ul">
            ${current.stepByStep.toriExecution.slice(0, 3).map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="fc-open-tech-btn" onclick="event.stopPropagation(); window.NenrikiModal.open('${current.id}')">
          🥋 Ver Técnica com Todas as Variações
        </div>
      `;
    } else { // 'kanji'
      cardFront.innerHTML = `
        <div class="fc-badge-top">Leitura de Kanjis Tradicionais</div>
        <div class="fc-big-kanji" style="font-size: 3.6rem; color: #eab308; margin: 20px 0;">${current.nameKanji || "武神館"}</div>
        <div class="fc-prompt-hint">Como se pronuncia este nome em Romaji e qual é a técnica?</div>
        <div class="fc-click-hint">Clique para revelar a pronúncia e etimologia</div>
      `;

      cardBack.innerHTML = `
        <div class="fc-badge-top" style="color:#4ade80">${current.category}</div>
        <h2 class="fc-title-romaji" style="font-size: 1.8rem; margin: 10px 0;">${current.nameRomaji}</h2>
        <h3 class="fc-back-title">${current.translation}</h3>
        <div class="fc-mnemonic-box">
          <p class="mnemonic-quote">"${current.mnemonic}"</p>
        </div>
      `;
    }
  }
}

if (typeof window !== "undefined") {
  window.NenrikiFlashcards = NenrikiFlashcards;
}
