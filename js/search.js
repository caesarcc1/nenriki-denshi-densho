/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Motor de Busca Inteligente e Filtragem Dinâmica
 * Bujinkan Nenriki Dojo
 */

class NenrikiSearch {
  constructor(techniques, onSearchCallback) {
    this.techniques = techniques || [];
    this.onSearch = onSearchCallback;
    this.currentQuery = "";
    this.activeMakiFilter = "all";
  }

  updateData(techList) {
    this.techniques = techList || [];
  }

  setMakiFilter(makiId) {
    this.activeMakiFilter = makiId;
    return this.executeSearch(this.currentQuery);
  }

  search(query) {
    this.currentQuery = (query || "").trim().toLowerCase();
    return this.executeSearch(this.currentQuery);
  }

  executeSearch(query) {
    let results = this.techniques;

    // Filtro por Maki ou Treino
    if (this.activeMakiFilter === "trained") {
      results = results.filter(t => (t.trainingHistory && t.trainingHistory.length > 0) || (window.NenrikiStorage && window.NenrikiStorage.getTechniqueTrainingHistory(t.id).length > 0));
    } else if (this.activeMakiFilter !== "all") {
      results = results.filter(t => t.makiId === this.activeMakiFilter);
    }

    // Se não há texto de busca, retorna o conjunto filtrado
    if (!query) {
      if (this.onSearch) this.onSearch(results, query);
      return results;
    }

    // Busca multi-termo (fuzzy-friendly)
    const terms = query.split(/\s+/).filter(t => t.length > 0);

    results = results.filter(tech => {
      const targetString = [
        tech.nameRomaji,
        tech.nameKanji || "",
        tech.translation || "",
        tech.category || "",
        tech.categoryKanji || "",
        tech.mnemonic || "",
        ...(tech.tags || []),
        ...(tech.kyushoRelated || []),
        (tech.etymology || []).map(e => `${e.term} ${e.meaning}`).join(" ")
      ].join(" ").toLowerCase();

      return terms.every(term => targetString.includes(term));
    });

    if (this.onSearch) this.onSearch(results, query);
    return results;
  }
}

if (typeof window !== "undefined") {
  window.NenrikiSearch = NenrikiSearch;
}
