/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Módulo do Mapa Mental Interativo em SVG (Mindmap em Grade Ultra-Compacta em 4 Colunas)
 * Bujinkan Nenriki Dojo
 */

class NenrikiMindmap {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.data = null;
    this.rootNode = null;
    this.collapsedNodes = new Set();
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.highlightQuery = "";

    this.init();
  }

  init() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="mindmap-controls">
        <!-- Controles de Zoom e Expansão -->
        <button class="mindmap-btn" id="btnZoomIn" title="Aumentar Zoom">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </button>
        <button class="mindmap-btn" id="btnZoomOut" title="Diminuir Zoom">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M19 13H5v-2h14v2z"/></svg>
        </button>
        <button class="mindmap-btn" id="btnZoomReset" title="Centralizar e Ajustar">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
        </button>
        <div class="mindmap-divider"></div>
        <button class="mindmap-btn" id="btnExpandAll" title="Expandir Todos os Ramos da Árvore">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>
        </button>
        <button class="mindmap-btn" id="btnCollapseAll" title="Recolher Todos os Ramos">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 8.17L8.83 5 7.41 6.41 12 11l4.59-4.59L15.17 5 12 8.17zm0 7.66L15.17 19l1.41-1.41L12 13l-4.59 4.59L8.83 19 12 15.83z"/></svg>
        </button>
        <div class="mindmap-legend">
          <span class="legend-item" style="--c:#38bdf8"><span class="dot"></span> Céu (Ten)</span>
          <span class="legend-item" style="--c:#4ade80"><span class="dot"></span> Terra (Chi)</span>
          <span class="legend-item" style="--c:#fb923c"><span class="dot"></span> Homem (Jin)</span>
          <span class="legend-item" style="--c:#eab308"><span class="dot"></span> Armas (Buki)</span>
        </div>
      </div>
      <div class="mindmap-canvas-wrapper" id="mindmapCanvasWrapper">
        <svg id="mindmapSvg" class="mindmap-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="linkGradientTen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c59b27" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.8"/>
            </linearGradient>
            <linearGradient id="linkGradientChi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c59b27" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#4ade80" stop-opacity="0.8"/>
            </linearGradient>
            <linearGradient id="linkGradientJin" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c59b27" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#fb923c" stop-opacity="0.8"/>
            </linearGradient>
            <linearGradient id="linkGradientBuki" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c59b27" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#eab308" stop-opacity="0.8"/>
            </linearGradient>
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.7"/>
            </filter>
            <filter id="activeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#eab308" flood-opacity="0.9"/>
            </filter>
          </defs>
          <g id="mindmapViewport" class="mindmap-viewport">
            <g id="mindmapLinks" class="mindmap-links"></g>
            <g id="mindmapNodes" class="mindmap-nodes"></g>
          </g>
        </svg>
      </div>
    `;

    this.svg = document.getElementById("mindmapSvg");
    this.viewport = document.getElementById("mindmapViewport");
    this.linksGroup = document.getElementById("mindmapLinks");
    this.nodesGroup = document.getElementById("mindmapNodes");
    this.wrapper = document.getElementById("mindmapCanvasWrapper");

    this.bindEvents();
  }

  bindEvents() {
    document.getElementById("btnZoomIn").addEventListener("click", () => this.zoomBy(1.2));
    document.getElementById("btnZoomOut").addEventListener("click", () => this.zoomBy(0.8));
    document.getElementById("btnZoomReset").addEventListener("click", () => this.resetView());
    document.getElementById("btnExpandAll").addEventListener("click", () => {
      this.collapsedNodes.clear();
      this.render();
    });
    document.getElementById("btnCollapseAll").addEventListener("click", () => {
      if (this.rootNode && this.rootNode.children) {
        this.rootNode.children.forEach(c => this.collapsedNodes.add(c.id));
      }
      this.render();
    });

    // Eventos de Pan e Drag
    this.wrapper.addEventListener("mousedown", (e) => {
      if (e.target.closest(".mindmap-node")) return;
      this.isDragging = true;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
      this.wrapper.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      this.panX = e.clientX - this.dragStartX;
      this.panY = e.clientY - this.dragStartY;
      this.updateTransform();
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
      this.wrapper.style.cursor = "grab";
    });

    // Zoom com a roda do mouse (wheel)
    this.wrapper.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = this.wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const factor = e.deltaY < 0 ? 1.12 : 0.88;
      const newZoom = Math.max(0.2, Math.min(3.5, this.zoom * factor));
      
      // Zoom centrado na posição do cursor do mouse
      this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
      this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;
      this.updateTransform();
    }, { passive: false });

    // Suporte para Touch (Dispositivos móveis e tablets)
    let touchStartDist = 0;
    this.wrapper.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.dragStartX = e.touches[0].clientX - this.panX;
        this.dragStartY = e.touches[0].clientY - this.panY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    this.wrapper.addEventListener("touchmove", (e) => {
      if (this.isDragging && e.touches.length === 1) {
        this.panX = e.touches[0].clientX - this.dragStartX;
        this.panY = e.touches[0].clientY - this.dragStartY;
        this.updateTransform();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (touchStartDist > 0) {
          const factor = dist / touchStartDist;
          this.zoom = Math.max(0.2, Math.min(3.5, this.zoom * factor));
          touchStartDist = dist;
          this.updateTransform();
        }
      }
    }, { passive: true });

    this.wrapper.addEventListener("touchend", () => {
      this.isDragging = false;
      touchStartDist = 0;
    });
  }

  setData(fullData) {
    this.data = fullData;
    this.buildHierarchy();
    setTimeout(() => {
      this.resetView();
    }, 100);
  }

  buildHierarchy() {
    if (!this.data) return;

    // Constrói a árvore a partir dos Makis e das Técnicas
    const root = {
      id: "root-tcj",
      title: "Ten-Chi-Jin Ryaku no Maki",
      kanji: "天地人略の巻",
      sub: "Bujinkan Nenriki Dojo",
      type: "root",
      color: "#eab308",
      children: []
    };

    this.data.makis.forEach(maki => {
      const makiNode = {
        id: `maki-${maki.id}`,
        makiId: maki.id,
        title: maki.name,
        kanji: maki.kanji,
        sub: maki.meaning,
        type: "maki",
        color: maki.color,
        children: []
      };

      // Agrupa as técnicas deste maki por categoria
      const makiTechs = this.data.techniques.filter(t => t.makiId === maki.id);
      const categoriesMap = new Map();

      makiTechs.forEach(tech => {
        const catName = tech.category;
        if (!categoriesMap.has(catName)) {
          const catMeta = (this.data.categories && this.data.categories[catName]) || {};
          categoriesMap.set(catName, {
            id: `cat-${maki.id}-${catName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
            makiId: maki.id,
            title: catName,
            kanji: catMeta.kanji || tech.categoryKanji || "",
            translation: catMeta.translation || tech.categoryTranslation || "",
            explanation: catMeta.explanation || tech.categoryExplanation || "",
            type: "category",
            color: maki.color,
            children: []
          });
        }
        
        categoriesMap.get(catName).children.push({
          id: tech.id,
          techniqueId: tech.id,
          makiId: maki.id,
          title: tech.nameRomaji,
          kanji: tech.nameKanji,
          translation: tech.translation,
          mnemonic: tech.mnemonic,
          type: "technique",
          color: maki.color,
          data: tech
        });
      });

      // Se for o Maki Ten, adicionar também o nó especial dos 60 Kyūsho
      if (maki.id === "ten" && this.data.kyushoList && this.data.kyushoList.length > 0) {
        const kyushoCatNode = {
          id: "cat-ten-kyusho-60",
          makiId: "ten",
          title: "Kyūsho (60 Pontos Vitais)",
          kanji: "急所六十法",
          type: "category",
          color: "#38bdf8",
          children: this.data.kyushoList.slice(0, 16).map(k => ({
            id: `kyusho-node-${k.number}`,
            title: `${k.number}. ${k.name}`,
            kanji: k.kanji,
            translation: k.translation,
            type: "kyusho",
            color: "#38bdf8",
            kyushoData: k
          }))
        };
        categoriesMap.set("Kyūsho", kyushoCatNode);
      }

      makiNode.children = Array.from(categoriesMap.values());
      root.children.push(makiNode);
    });

    this.rootNode = root;
    // Iniciar com todos os ramos dos Makis recolhidos por padrão
    this.collapsedNodes.clear();
    root.children.forEach(mNode => {
      this.collapsedNodes.add(mNode.id);
    });

    this.render();
    setTimeout(() => {
      this.resetView();
    }, 50);
  }

  // =========================================================================
  // MOTOR DE CÁLCULO DE LAYOUT: GRADE ULTRA-COMPACTA EM 4 COLUNAS PARALELAS
  // =========================================================================
  computeLayout() {
    if (!this.rootNode) return { nodes: [], links: [] };

    const visibleNodes = [];
    const visibleLinks = [];

    const root = { ...this.rootNode, x: 0, y: 0, depth: 0 };
    visibleNodes.push(root);

    if (this.collapsedNodes.has(root.id)) return { nodes: visibleNodes, links: visibleLinks };

    const leftMakis = root.children.filter(c => c.makiId === "ten" || c.makiId === "jin");
    const rightMakis = root.children.filter(c => c.makiId === "chi" || c.makiId === "buki");

    this.layoutSide4Cols(leftMakis, root, -1, visibleNodes, visibleLinks);
    this.layoutSide4Cols(rightMakis, root, 1, visibleNodes, visibleLinks);

    return { nodes: visibleNodes, links: visibleLinks };
  }

  layoutSide4Cols(makiList, parentNode, direction, nodesOut, linksOut) {
    // 1. Calcular altura compacta de cada categoria com até 4 colunas
    const makiHeights = makiList.map(maki => {
      if (this.collapsedNodes.has(maki.id) || !maki.children || maki.children.length === 0) {
        return { maki, height: 80, catHeights: [] };
      }

      const catHeights = maki.children.map(cat => {
        if (this.collapsedNodes.has(cat.id) || !cat.children || cat.children.length === 0) {
          return { cat, height: 50 };
        }
        const numTechs = cat.children.length;
        // Distribui em até 4 colunas paralelas
        const numCols = Math.min(4, Math.max(1, numTechs));
        const numRows = Math.ceil(numTechs / numCols);
        const techHeight = Math.max(50, numRows * 46 + 6);
        return { cat, height: techHeight, numCols, numRows };
      });

      const totalCatsHeight = catHeights.reduce((acc, c) => acc + c.height, 0) + (catHeights.length - 1) * 16;
      const makiHeight = Math.max(85, totalCatsHeight);
      return { maki, height: makiHeight, catHeights };
    });

    const totalSideHeight = makiHeights.reduce((acc, m) => acc + m.height, 0) + (makiHeights.length - 1) * 55;
    let currentMakiY = parentNode.y - totalSideHeight / 2;

    makiHeights.forEach(({ maki, height: makiHeight, catHeights }) => {
      const makiTopY = currentMakiY;
      const makiX = parentNode.x + direction * 310;

      if (this.collapsedNodes.has(maki.id) || !maki.children || maki.children.length === 0) {
        const mNode = { ...maki, x: makiX, y: makiTopY + makiHeight / 2, depth: 1, direction };
        nodesOut.push(mNode);
        linksOut.push({ source: parentNode, target: mNode, color: maki.color });
        currentMakiY += makiHeight + 55;
        return;
      }

      let currentCatY = makiTopY;
      const categoryNodes = [];

      catHeights.forEach(({ cat, height: catHeight, numCols, numRows }) => {
        const catTopY = currentCatY;
        const catX = makiX + direction * 270;

        if (this.collapsedNodes.has(cat.id) || !cat.children || cat.children.length === 0) {
          const cNode = { ...cat, x: catX, y: catTopY + catHeight / 2, depth: 2, direction };
          nodesOut.push(cNode);
          categoryNodes.push(cNode);
          currentCatY += catHeight + 16;
          return;
        }

        const techList = cat.children;
        const techNodes = [];

        techList.forEach((tech, idx) => {
          // Ordenação coluna a coluna (leitura vertical natural para cada coluna)
          const colIndex = Math.floor(idx / numRows);
          const rowIndex = idx % numRows;

          const techX = catX + direction * (225 + colIndex * 204);
          const techY = catTopY + rowIndex * 46 + 22;
          const tNode = { ...tech, x: techX, y: techY, depth: 3, direction };
          nodesOut.push(tNode);
          techNodes.push(tNode);
        });

        // Posição Y da categoria no centro vertical das técnicas
        const firstColLastIdx = Math.min(techNodes.length - 1, numRows - 1);
        const catMidY = (techNodes[0].y + techNodes[firstColLastIdx].y) / 2;
        const cNode = { ...cat, x: catX, y: catMidY, depth: 2, direction };
        nodesOut.push(cNode);
        categoryNodes.push(cNode);

        techNodes.forEach(tNode => {
          linksOut.push({ source: cNode, target: tNode, color: maki.color });
        });

        currentCatY += catHeight + 16;
      });

      const makiMidY = (categoryNodes[0].y + categoryNodes[categoryNodes.length - 1].y) / 2;
      const mNode = { ...maki, x: makiX, y: makiMidY, depth: 1, direction };
      nodesOut.push(mNode);
      linksOut.push({ source: parentNode, target: mNode, color: maki.color });

      categoryNodes.forEach(cNode => {
        linksOut.push({ source: mNode, target: cNode, color: maki.color });
      });

      currentMakiY += makiHeight + 55;
    });
  }

  // =========================================================================
  // RENDERIZAÇÃO DO GRAFO (LINKS + NÓS)
  // =========================================================================
  render() {
    if (!this.rootNode) return;
    const { nodes, links } = this.computeLayout();

    // Renderiza Links (Curvas de Bézier suaves)
    this.linksGroup.innerHTML = links.map(link => {
      const sx = link.source.x;
      const sy = link.source.y;
      const tx = link.target.x;
      const ty = link.target.y;
      const dx = (tx - sx) / 2;
      const pathD = `M ${sx} ${sy} C ${sx + dx} ${sy}, ${tx - dx} ${ty}, ${tx} ${ty}`;

      return `
        <path d="${pathD}" 
              class="mindmap-link" 
              stroke="${link.color}" 
              stroke-width="${link.target.depth === 1 ? 3.5 : (link.target.depth === 2 ? 2.2 : 1.4)}"
              stroke-opacity="${link.target.depth === 3 ? '0.45' : '0.75'}"
              fill="none"/>
      `;
    }).join("");

    // Renderiza Nós
    this.nodesGroup.innerHTML = nodes.map(node => {
      const isCollapsed = this.collapsedNodes.has(node.id);
      const hasChildren = node.children && node.children.length > 0;
      const isMatch = this.highlightQuery && (
        (node.title && node.title.toLowerCase().includes(this.highlightQuery)) ||
        (node.kanji && node.kanji.includes(this.highlightQuery)) ||
        (node.translation && node.translation.toLowerCase().includes(this.highlightQuery))
      );

      let nodeClass = `mindmap-node node-${node.type}`;
      if (isMatch) nodeClass += " node-highlight";
      if (hasChildren && isCollapsed) nodeClass += " node-collapsed";

      let content = "";

      if (node.type === "root") {
        content = `
          <g class="${nodeClass}" transform="translate(${node.x}, ${node.y})" data-id="${node.id}">
            <rect x="-140" y="-45" width="280" height="90" rx="16" class="root-rect"/>
            <circle cx="0" cy="0" r="42" class="root-circle-bg"/>
            <text y="-14" class="root-kanji" text-anchor="middle">${node.kanji}</text>
            <text y="10" class="root-title" text-anchor="middle">${node.title}</text>
            <text y="28" class="root-sub" text-anchor="middle">${node.sub}</text>
          </g>
        `;
      } else if (node.type === "maki") {
        content = `
          <g class="${nodeClass}" transform="translate(${node.x}, ${node.y})" data-id="${node.id}" style="--maki-color: ${node.color}">
            <rect x="-120" y="-36" width="240" height="72" rx="12" class="maki-rect"/>
            <text y="-10" class="maki-kanji" text-anchor="middle">${node.kanji}</text>
            <text y="10" class="maki-title" text-anchor="middle">${node.title}</text>
            <text y="24" class="maki-sub" text-anchor="middle">${node.sub}</text>
            ${hasChildren ? `
              <circle cx="${node.direction === 1 ? 120 : -120}" cy="0" r="11" class="collapse-toggle-circle"/>
              <text x="${node.direction === 1 ? 120 : -120}" y="4" class="collapse-toggle-text" text-anchor="middle">${isCollapsed ? '+' : '−'}</text>
            ` : ""}
          </g>
        `;
      } else if (node.type === "category") {
        const count = node.children ? node.children.length : 0;
        const tooltipText = `${node.title}${node.translation ? ' (' + node.translation + ')' : ''}${node.explanation ? '\n' + node.explanation : ''}`;
        content = `
          <g class="${nodeClass}" transform="translate(${node.x}, ${node.y})" data-id="${node.id}" style="--node-color: ${node.color}">
            <title>${tooltipText}</title>
            <rect x="-105" y="-22" width="210" height="44" rx="8" class="category-rect"/>
            <text y="-2" class="category-title" text-anchor="middle">${node.title}</text>
            <text y="14" class="category-kanji" text-anchor="middle">${node.kanji} (${count})</text>
            ${hasChildren ? `
              <circle cx="${node.direction === 1 ? 105 : -105}" cy="0" r="9" class="collapse-toggle-circle"/>
              <text x="${node.direction === 1 ? 105 : -105}" y="3.5" class="collapse-toggle-text" text-anchor="middle">${isCollapsed ? '+' : '−'}</text>
            ` : ""}
          </g>
        `;
      } else {
        // Técnica ou Kyūsho
        const techId = node.techniqueId;
        const isTrained = techId && window.NenrikiStorage && window.NenrikiStorage.getTechniqueTrainingHistory(techId).length > 0;
        const rawTitle = node.title || "";
        const displayTitle = this.cleanDisplayTitle(rawTitle);
        const tooltipText = `${rawTitle}${node.translation ? ' — ' + node.translation : ''}`;

        content = `
          <g class="${nodeClass}" transform="translate(${node.x}, ${node.y})" data-id="${node.id}" data-tech-id="${node.techniqueId || ''}" style="--tech-color: ${node.color}">
            <title>${tooltipText}</title>
            <rect x="-95" y="-18" width="190" height="36" rx="6" class="technique-rect ${isTrained ? 'node-trained-rect' : ''}"/>
            <text y="-2" class="tech-title" text-anchor="middle">${displayTitle} ${isTrained ? '🥋' : ''}</text>
            <text y="11" class="tech-kanji" text-anchor="middle">${node.kanji || ''}</text>
            ${isTrained ? `<circle cx="${node.direction === 1 ? 90 : -90}" cy="0" r="4" fill="#4ade80"/>` : ''}
          </g>
        `;
      }

      return content;
    }).join("");

    this.bindNodeClicks();
  }

  cleanDisplayTitle(title) {
    if (!title) return "";
    const idx = title.indexOf("(");
    if (idx !== -1) {
      const clean = title.substring(0, idx).trim();
      if (clean.length > 0) return clean;
    }
    return title;
  }

  bindNodeClicks() {
    this.nodesGroup.querySelectorAll(".mindmap-node").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-id");
        const techId = el.getAttribute("data-tech-id");

        if (techId && window.NenrikiModal) {
          window.NenrikiModal.open(techId);
          return;
        }

        // Se for um nó de categoria ou maki, alternar expansão/recolhimento
        if (id && id !== "root-tcj") {
          if (this.collapsedNodes.has(id)) {
            this.collapsedNodes.delete(id);
          } else {
            this.collapsedNodes.add(id);
          }
          this.render();
        }
      });
    });
  }

  setHighlight(query) {
    this.highlightQuery = (query || "").trim().toLowerCase();
    
    // Se houver busca ativa, descolapsar tudo para exibir os resultados
    if (this.highlightQuery.length >= 2) {
      this.collapsedNodes.clear();
    }
    this.render();
  }

  zoomBy(factor) {
    const newZoom = Math.max(0.2, Math.min(3.5, this.zoom * factor));
    this.zoom = newZoom;
    this.updateTransform();
  }

  resetView() {
    if (!this.wrapper) return;
    const rect = this.wrapper.getBoundingClientRect();
    const w = (rect && rect.width > 50) ? rect.width : (window.innerWidth || 1200);
    const h = (rect && rect.height > 50) ? rect.height : ((window.innerHeight ? window.innerHeight - 110 : 700));

    this.panX = w / 2;
    this.panY = h / 2;
    
    // Ajustar o zoom inicial para que todo o mapa mental caiba perfeitamente centralizado
    if (w < 768) {
      this.zoom = 0.45;
    } else if (w < 1200) {
      this.zoom = 0.68;
    } else if (w < 1600) {
      this.zoom = 0.82;
    } else {
      this.zoom = 0.95;
    }

    this.updateTransform();
  }

  updateTransform() {
    if (this.viewport) {
      this.viewport.setAttribute("transform", `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
    }
  }
}

if (typeof window !== "undefined") {
  window.NenrikiMindmap = NenrikiMindmap;
}
