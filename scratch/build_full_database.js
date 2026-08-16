/**
 * Gerador da Base de Dados Mestra do Ten-Chi-Jin Ryaku no Maki
 * Bujinkan Nenriki Dojo (念力道場)
 */

const fs = require('fs');
const path = require('path');

// Metadados das Categorias
const categoriesInfo = {
  // TEN RYAKU NO MAKI
  "Kamae": {
    kanji: "構え",
    translation: "Posturas Fundamentais de Combate",
    explanation: "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais."
  },
  "Taihen Jutsu Ukemi Gata": {
    kanji: "体変術受身型",
    translation: "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
    explanation: "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico."
  },
  "Taihen Jutsu Mutō Dori Gata": {
    kanji: "体変術無刀捕型",
    translation: "Posturas de Esquiva Corporal contra Espada",
    explanation: "Posturas e atitudes corporais do guerreiro desarmado para evadir cortes mortais de lâminas e espadas (Katana)."
  },
  "Tai Sabaki": {
    kanji: "体捌き",
    translation: "Deslocamentos e Esquivas Corporais",
    explanation: "Movimentação tática do corpo nas quatro direções (Mae, Ushiro, Yoko), utilizando passos de tigre (Tora Aruki) e passadas cruzadas (Jūji Aruki)."
  },
  "Uke Nagashi": {
    kanji: "受流し",
    translation: "Defesas Fluidas e Desvios de Ataques",
    explanation: "O princípio de receber o ataque do oponente sem bloquear com força bruta, redirecionando o fluxo da força do agressor através dos níveis Jōdan, Chūdan e Gedan."
  },
  "Tsuki": {
    kanji: "突き",
    translation: "Ataques Diretos e Golpes de Punho",
    explanation: "Golpes diretos e penetrantes com punho e corpo, alinhando a estrutura a partir de posturas como Ichimonji e Doko no Kamae."
  },
  "Shoshin Gokei / Sanshin no Kata": {
    kanji: "初心五型・五行の型",
    translation: "As 5 Formas dos Cinco Elementos da Natureza",
    explanation: "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais."
  },
  "Kihon Happō (Kosshi Sanpō)": {
    kanji: "骨指基本三法",
    translation: "As 3 Formas Fundamentais de Ataque a Estruturas Ósseas e Nervosas",
    explanation: "Métodos de Kosshijutsu para golpear pontos vitais e estruturas musculares (Ichimonji, Jūmonji e Hichō no Kata) que compõem o núcleo do Kihon Happō."
  },
  "Kihon Happō (Torite Gohō)": {
    kanji: "捕手基本五法",
    translation: "As 5 Formas Fundamentais de Captura e Torção Articular",
    explanation: "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori)."
  },
  "Hōken Jū Roppō (16 Armas Corporais)": {
    kanji: "宝拳十六法",
    translation: "As 16 Armas Naturais e Golpes Secretos do Corpo",
    explanation: "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés."
  },

  // CHI RYAKU NO MAKI
  "Hajutsu Kyū Hō": {
    kanji: "破術九法",
    translation: "Nove Métodos de Liberação e Escapes de Pegadas",
    explanation: "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante."
  },
  "Torite Kihon Dori no Kata": {
    kanji: "捕手基本捕の型",
    translation: "Formas Fundamentais de Imobilização e Controle no Solo",
    explanation: "Técnicas de imobilização facial e dorsal (Omote e Ura Gatame) para submeter e desarmar o adversário com o controle das alavancas articulares."
  },
  "Happō Keri Henka": {
    kanji: "八方蹴変化",
    translation: "Variações e Aplicações dos Chutes em Oito Direções",
    explanation: "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos."
  },
  "Keri Waza": {
    kanji: "蹴技",
    translation: "Técnicas Tradicionais de Chutes e Rasteiras",
    explanation: "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados."
  },
  "Gyaku Waza": {
    kanji: "逆技",
    translation: "Técnicas de Torções Articulares e Desarticulações",
    explanation: "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor."
  },
  "Nage Waza": {
    kanji: "投技",
    translation: "Técnicas de Projeções e Quedas",
    explanation: "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki)."
  },
  "Shime Waza": {
    kanji: "絞技",
    translation: "Técnicas de Estrangulamentos e Sufocamentos",
    explanation: "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata."
  },

  // JIN RYAKU NO MAKI
  "Suwari Gata": {
    kanji: "座型",
    translation: "Técnicas de Combate Ajoelhado / Sentado",
    explanation: "Técnicas aplicadas quando ambos os praticantes (ou Tori) estão sentados no solo (Seiza/Fudōza), desenvolvidas para defesa em salas japonesas e tatames."
  },
  "Torite Gata": {
    kanji: "捕手型",
    translation: "Técnicas Avançadas de Captura, Condução e Domínio",
    explanation: "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados."
  },
  "Shime Gaeshi": {
    kanji: "絞返",
    translation: "Contra-Ataques e Reversões de Estrangulamentos",
    explanation: "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás."
  },
  "Keri ni Taishite": {
    kanji: "蹴に対して",
    translation: "Defesas e Contra-Golpes contra Chutes",
    explanation: "Respostas táticas e biomecânicas avançadas para esquivar e destruir ataques com as pernas (chutes altos, médios e baixos)."
  },
  "Tsuki / Keri Gata": {
    kanji: "突・蹴型",
    translation: "Formas Combinadas de Combate Real (Socos e Chutes)",
    explanation: "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho."
  },
  "Nage Kaeshi": {
    kanji: "投返",
    translation: "Contra-Golpes e Reversões de Projeções",
    explanation: "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro."
  },
  "Haibu Yori": {
    kanji: "背部より",
    translation: "Defesas contra Ataques e Emboscadas pelas Costas",
    explanation: "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori."
  },
  "Mutō Dori Gata": {
    kanji: "無刀捕型",
    translation: "Técnicas Desarmadas contra Ataque de Espada (Katana)",
    explanation: "A arte suprema de derrotar um samurai armado com espada usando apenas o corpo, o tempo (Timing) e o vazio (Kū)."
  },
  "Tonsō no Kata": {
    kanji: "遁走の型",
    translation: "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
    explanation: "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções."
  },

  // BUKI WAZA
  "Hanbō Jutsu (Bastão 90cm)": {
    kanji: "半棒術",
    translation: "Técnicas com Bastão Curto de 90cm",
    explanation: "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos."
  },
  "Kunai Jutsu": {
    kanji: "苦無術",
    translation: "Técnicas com a Ferramenta e Lâmina Ninja Kunai",
    explanation: "Uso da Kunai tradicional como arma de estocada, bloqueio e arremesso em curta distância."
  },
  "Tantō Jutsu (Faca / Adaga)": {
    kanji: "短刀術",
    translation: "Técnicas com Faca e Adaga Tradicional",
    explanation: "Combate com lâmina curta (Tantō) baseado nos Cinco Elementos (Gogyō), focado em cortes rápidos e estocadas vitais."
  },
  "Shotō (Espada Curta)": {
    kanji: "小太刀",
    translation: "Técnicas com Espada Curta / Wakizashi",
    explanation: "Manejo da espada curta (Wakizashi / Kodachi) para fechar a distância rapidamente e contra-atacar armas longas."
  },
  "Biken Jutsu (Kenjutsu)": {
    kanji: "秘剣術",
    translation: "A Arte Secreta da Espada (Katana e Shinobigatana)",
    explanation: "A esgrima tradicional do Bujinkan: posturas (Kamae), desembainhar rápido (Nuki Gatana), cortes nas oito direções (Happō Kiri) e técnicas secretas (Biken Waza)."
  },
  "Bō Jutsu (Bastão Longo 180cm)": {
    kanji: "棒術",
    translation: "Técnicas com Bastão Longo de 180cm (Rokushakubō)",
    explanation: "O bastão de seis pés (Rokushakubō), permitindo ataques circulares, estocadas de longa distância e controle de múltiplos adversários."
  },
  "Jō Jutsu (Bastão Médio 128cm)": {
    kanji: "杖術",
    translation: "Técnicas com Bastão Médio de 128cm",
    explanation: "O bastão médio de quatro pés (Jō), combinando a agilidade da espada com a distância e alavancas do bastão longo."
  },
  "Yari Jutsu (Lança Tradicional)": {
    kanji: "槍術",
    translation: "Técnicas com a Lança Japonesa",
    explanation: "A lança de combate japonesa com estocadas em linha reta, desvios circulares e técnicas de perfuração de armaduras."
  },
  "Naginata Jutsu (Alabarda)": {
    kanji: "薙刀術",
    translation: "Técnicas com a Alabarda Japonesa de Lâmina Curva",
    explanation: "Arma com lâmina curva montada em haste longa, criando arcos de corte devastadores contra infantaria e cavalaria."
  }
};

// Carrega o data.js original para preservar os 60 Kyusho e técnicas já detalhadas
const existingData = require('../js/data.js');
console.log("Original data loaded. Kyusho count:", existingData.kyushoList.length);
