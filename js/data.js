/**
 * Nenriki Denshi Densho (念力 電子伝書)
 * Sistema Interativo Ten-Chi-Jin Ryaku no Maki — Bujinkan Nenriki Dojo
 * Base de Dados Mestra Unificada Completa (Currículo Integral Oficial)
 */

const NENRIKI_DATABASE = {
  "meta": {
    "title": "Nenriki Denshi Densho",
    "subtitle": "Sistema Interativo Ten-Chi-Jin Ryaku no Maki",
    "dojo": "Bujinkan Nenriki Dojo (念力道場)",
    "version": "2.0.0",
    "lastUpdated": "2026-08-14",
    "totalTechniques": 190,
    "totalKyusho": 60
  },
  "makis": [
    {
      "id": "ten",
      "name": "Ten Ryaku no Maki",
      "kanji": "天略の巻",
      "meaning": "Pergaminho dos Princípios do Céu",
      "color": "#38bdf8",
      "accentBg": "rgba(56, 189, 248, 0.12)",
      "description": "Fundamentos corporais, posturas (Kamae), movimentação e rolamentos (Taihenjutsu), armas corporais (Hōken Jū Roppō), os 5 elementos (Sanshin / Gogyō), 8 técnicas básicas (Kihon Happō) e os 60 pontos de pressão vitais (Kyūsho)."
    },
    {
      "id": "chi",
      "name": "Chi Ryaku no Maki",
      "kanji": "地略の巻",
      "meaning": "Pergaminho dos Princípios da Terra",
      "color": "#4ade80",
      "accentBg": "rgba(74, 222, 128, 0.12)",
      "description": "Técnicas de libertação de pegadas (Hajutsu Kyū Hō), imobilizações no solo (Torite Kihon Dori), torções e chaves articulares (Gyaku Waza), projeções e quedas (Nage Waza), estrangulamentos (Shime Waza) e variações de chutes (Happō Keri)."
    },
    {
      "id": "jin",
      "name": "Jin Ryaku no Maki",
      "kanji": "人略の巻",
      "meaning": "Pergaminho dos Princípios do Homem",
      "color": "#fb923c",
      "accentBg": "rgba(251, 146, 60, 0.12)",
      "description": "Combinações e cenários dinâmicos de combate corpo a corpo, respostas a socos e chutes (Tsuki/Keri Gata), formas ajoelhadas (Suwari Gata), contra-golpes (Nage Kaeshi, Shime Kaeshi), defesas contra espada (Mutō Dori) e técnicas de fuga ninja (Tonsō no Kata)."
    },
    {
      "id": "buki",
      "name": "Buki Waza",
      "kanji": "武器技",
      "meaning": "Técnicas com Armas Tradicionais",
      "color": "#eab308",
      "accentBg": "rgba(234, 179, 8, 0.12)",
      "description": "O manejo tradicional do arsenal ninja e samurai: Hanbō (bastão curto 90cm), Tantō (adaga/faca), Shotō (espada curta), Kunai, Biken (espada longa), Bō (bastão longo 180cm), Jō (128cm), Yari (lança) e Naginata (alabarda)."
    }
  ],
  "categories": {
    "Kamae": {
      "kanji": "構え",
      "translation": "Posturas Fundamentais de Combate",
      "explanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais."
    },
    "Taihen Jutsu Ukemi Gata": {
      "kanji": "体変術受身型",
      "translation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "explanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico."
    },
    "Taihen Jutsu Mutō Dori Gata": {
      "kanji": "体変術無刀捕型",
      "translation": "Posturas de Esquiva Corporal contra Espada",
      "explanation": "Posturas e atitudes corporais do guerreiro desarmado para evadir cortes mortais de lâminas e espadas (Katana)."
    },
    "Tai Sabaki": {
      "kanji": "体捌き",
      "translation": "Deslocamentos e Esquivas Corporais",
      "explanation": "Movimentação tática do corpo nas quatro direções (Mae, Ushiro, Yoko), utilizando passos de tigre (Tora Aruki) e passadas cruzadas (Jūji Aruki)."
    },
    "Uke Nagashi": {
      "kanji": "受流し",
      "translation": "Defesas Fluidas e Desvios de Ataques",
      "explanation": "O princípio de receber o ataque do oponente sem bloquear com força bruta, redirecionando o fluxo da força do agressor através dos níveis Jōdan, Chūdan e Gedan."
    },
    "Tsuki": {
      "kanji": "突き",
      "translation": "Ataques Diretos e Golpes de Punho",
      "explanation": "Golpes diretos e penetrantes com punho e corpo, alinhando a estrutura a partir de posturas como Ichimonji e Doko no Kamae."
    },
    "Shoshin Gokei / Sanshin no Kata": {
      "kanji": "初心五型・五行の型",
      "translation": "As 5 Formas dos Cinco Elementos da Natureza",
      "explanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais."
    },
    "Kihon Happō (Kosshi Sanpō)": {
      "kanji": "骨指基本三法",
      "translation": "As 3 Formas Fundamentais de Ataque a Estruturas Ósseas e Nervosas",
      "explanation": "Métodos de Kosshijutsu para golpear pontos vitais e estruturas musculares (Ichimonji, Jūmonji e Hichō no Kata) que compõem o núcleo do Kihon Happō."
    },
    "Kihon Happō (Torite Gohō)": {
      "kanji": "捕手基本五法",
      "translation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "explanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori)."
    },
    "Hōken Jū Roppō (16 Armas Corporais)": {
      "kanji": "宝拳十六法",
      "translation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "explanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés."
    },
    "Hajutsu Kyū Hō": {
      "kanji": "破術九法",
      "translation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "explanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante."
    },
    "Torite Kihon Dori no Kata": {
      "kanji": "捕手基本捕の型",
      "translation": "Formas Fundamentais de Imobilização e Controle no Solo",
      "explanation": "Técnicas de imobilização facial e dorsal (Omote e Ura Gatame) para submeter e desarmar o adversário com o controle das alavancas articulares."
    },
    "Happō Keri Henka": {
      "kanji": "八方蹴変化",
      "translation": "Variações e Aplicações dos Chutes em Oito Direções",
      "explanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos."
    },
    "Keri Waza": {
      "kanji": "蹴技",
      "translation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "explanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados."
    },
    "Gyaku Waza": {
      "kanji": "逆技",
      "translation": "Técnicas de Torções Articulares e Desarticulações",
      "explanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor."
    },
    "Nage Waza": {
      "kanji": "投技",
      "translation": "Técnicas de Projeções e Quedas",
      "explanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki)."
    },
    "Shime Waza": {
      "kanji": "絞技",
      "translation": "Técnicas de Estrangulamentos e Sufocamentos",
      "explanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata."
    },
    "Suwari Gata": {
      "kanji": "座型",
      "translation": "Técnicas de Combate Ajoelhado / Sentado",
      "explanation": "Técnicas aplicadas quando ambos os praticantes (ou Tori) estão sentados no solo (Seiza/Fudōza), desenvolvidas para defesa em salas japonesas e tatames."
    },
    "Torite Gata": {
      "kanji": "捕手型",
      "translation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "explanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados."
    },
    "Shime Gaeshi": {
      "kanji": "絞返",
      "translation": "Contra-Ataques e Reversões de Estrangulamentos",
      "explanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás."
    },
    "Keri ni Taishite": {
      "kanji": "蹴に対して",
      "translation": "Defesas e Contra-Golpes contra Chutes",
      "explanation": "Respostas táticas e biomecânicas avançadas para esquivar e destruir ataques com as pernas (chutes altos, médios e baixos)."
    },
    "Tsuki / Keri Gata": {
      "kanji": "突・蹴型",
      "translation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "explanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho."
    },
    "Nage Kaeshi": {
      "kanji": "投返",
      "translation": "Contra-Golpes e Reversões de Projeções",
      "explanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro."
    },
    "Haibu Yori": {
      "kanji": "背部より",
      "translation": "Defesas contra Ataques e Emboscadas pelas Costas",
      "explanation": "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori."
    },
    "Mutō Dori Gata": {
      "kanji": "無刀捕型",
      "translation": "Técnicas Desarmadas contra Ataque de Espada (Katana)",
      "explanation": "A arte suprema de derrotar um samurai armado com espada usando apenas o corpo, o tempo (Timing) e o vazio (Kū)."
    },
    "Tonsō no Kata": {
      "kanji": "遁走の型",
      "translation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "explanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções."
    },
    "Hanbō Jutsu (Bastão 90cm)": {
      "kanji": "半棒術",
      "translation": "Técnicas com Bastão Curto de 90cm",
      "explanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos."
    },
    "Kunai Jutsu": {
      "kanji": "苦無術",
      "translation": "Técnicas com a Ferramenta e Lâmina Ninja Kunai",
      "explanation": "Uso da Kunai tradicional como arma de estocada, bloqueio e arremesso em curta distância."
    },
    "Tantō Jutsu (Faca / Adaga)": {
      "kanji": "短刀術",
      "translation": "Técnicas com Faca e Adaga Tradicional",
      "explanation": "Combate com lâmina curta (Tantō) baseado nos Cinco Elementos (Gogyō), focado em cortes rápidos e estocadas vitais."
    },
    "Shotō (Espada Curta)": {
      "kanji": "小太刀",
      "translation": "Técnicas com Espada Curta / Wakizashi",
      "explanation": "Manejo da espada curta (Wakizashi / Kodachi) para fechar a distância rapidamente e contra-atacar armas longas."
    },
    "Biken Jutsu (Kenjutsu)": {
      "kanji": "秘剣術",
      "translation": "A Arte Secreta da Espada (Katana e Shinobigatana)",
      "explanation": "A esgrima tradicional do Bujinkan: posturas (Kamae), desembainhar rápido (Nuki Gatana), cortes nas oito direções (Happō Kiri) e técnicas secretas (Biken Waza)."
    },
    "Bō Jutsu (Bastão Longo 180cm)": {
      "kanji": "棒術",
      "translation": "Técnicas com Bastão Longo de 180cm (Rokushakubō)",
      "explanation": "O bastão de seis pés (Rokushakubō), permitindo ataques circulares, estocadas de longa distância e controle de múltiplos adversários."
    },
    "Jō Jutsu (Bastão Médio 128cm)": {
      "kanji": "杖術",
      "translation": "Técnicas com Bastão Médio de 128cm",
      "explanation": "O bastão médio de quatro pés (Jō), combinando a agilidade da espada com a distância e alavancas do bastão longo."
    },
    "Yari Jutsu (Lança Tradicional)": {
      "kanji": "槍術",
      "translation": "Técnicas com a Lança Japonesa",
      "explanation": "A lança de combate japonesa com estocadas em linha reta, desvios circulares e técnicas de perfuração de armaduras."
    },
    "Naginata Jutsu (Alabarda)": {
      "kanji": "薙刀術",
      "translation": "Técnicas com a Alabarda Japonesa de Lâmina Curva",
      "explanation": "Arma com lâmina curva montada em haste longa, criando arcos de corte devastadores contra infantaria e cavalaria."
    }
  },
  "techniques": [
    {
      "id": "kamae-fudoza",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Fudōza no Kamae",
      "nameKanji": "不動座の構え",
      "translation": "Postura Sentada Imutável",
      "etymology": [
        {
          "term": "Fudōza",
          "meaning": "Postura Sentada Imutável"
        }
      ],
      "mnemonic": "A mente de pedra que nada abala: sentado com uma perna dobrada por baixo enquanto a outra protege a virilha, pronto para explodir em pé em fração de segundo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Suwari",
        "Ten"
      ]
    },
    {
      "id": "kamae-shizen",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Shizen no Kamae (Hira)",
      "nameKanji": "自然の構え",
      "translation": "Postura Natural Relaxada",
      "etymology": [
        {
          "term": "Shizen",
          "meaning": "Postura Natural Relaxada"
        }
      ],
      "mnemonic": "Estar em pé sem postura aparente: pés na largura dos ombros, peso equilibrado e olhar amplo, pronto para fluir como o vento em qualquer direção.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Shizen",
        "Ten"
      ]
    },
    {
      "id": "kamae-hira-ichimonji",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Hira Ichimonji no Kamae",
      "nameKanji": "平一文字の構え",
      "translation": "Postura da Linha Plana Aberta",
      "etymology": [
        {
          "term": "Hira",
          "meaning": "Postura da Linha Plana Aberta"
        }
      ],
      "mnemonic": "Braços abertos na horizontal como as asas de uma águia: abraçando o espaço do combate para receber e absorver qualquer ângulo de ataque.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Hira",
        "Ten"
      ]
    },
    {
      "id": "kamae-ichimonji",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Ichimonji no Kamae",
      "nameKanji": "一文字の構え",
      "translation": "Postura da Linha Reta Fundamental",
      "etymology": [
        {
          "term": "Ichimonji",
          "meaning": "Postura da Linha Reta Fundamental"
        }
      ],
      "mnemonic": "A mãe de todas as posturas: mão dianteira apontando para os olhos do oponente, mão traseira protegendo o queixo, peso 70% na perna traseira.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Kihon",
        "Ten"
      ]
    },
    {
      "id": "kamae-doko",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Doko no Kamae",
      "nameKanji": "怒虎の構え",
      "translation": "Postura do Tigre Enfurecido",
      "etymology": [
        {
          "term": "Doko",
          "meaning": "Postura do Tigre Enfurecido"
        }
      ],
      "mnemonic": "O tigre pronto para o bote: mão traseira armada em punho fechado atrás da orelha como uma mola de alta pressão pronta para golpear.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Doko",
        "Ten"
      ]
    },
    {
      "id": "kamae-hicho",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Hichō no Kamae",
      "nameKanji": "飛鳥の構え",
      "translation": "Postura do Pássaro Voador",
      "etymology": [
        {
          "term": "Hichō",
          "meaning": "Postura do Pássaro Voador"
        }
      ],
      "mnemonic": "A garça em uma perna só: o joelho erguido protege o baixo ventre enquanto o pé escondido pode disparar um chute fulminante sem aviso prévio.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Hicho",
        "Ten"
      ]
    },
    {
      "id": "kamae-hoko",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Hoko no Kamae",
      "nameKanji": "抱かれた構え",
      "translation": "Postura Envolvente / do Urso",
      "etymology": [
        {
          "term": "Hoko",
          "meaning": "Postura Envolvente / do Urso"
        }
      ],
      "mnemonic": "Braços erguidos em semicírculo protegendo a cabeça e o tronco: oferecendo um alvo falso enquanto fecha a linha central de ataque.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Hoko",
        "Ten"
      ]
    },
    {
      "id": "kamae-kosei",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Kōsei no Kamae",
      "nameKanji": "攻勢の構え",
      "translation": "Postura Ofensiva / Nebulosa",
      "etymology": [
        {
          "term": "Kōsei",
          "meaning": "Postura Ofensiva / Nebulosa"
        }
      ],
      "mnemonic": "Mão dianteira aberta obstruindo a visão do adversário enquanto a mão de trás prepara a entrada com arma ou golpe penetrante.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Kosei",
        "Ten"
      ]
    },
    {
      "id": "kamae-jumonji",
      "makiId": "ten",
      "category": "Kamae",
      "categoryKanji": "構え",
      "categoryTranslation": "Posturas Fundamentais de Combate",
      "categoryExplanation": "Estruturas corporais e atitudes físicas e mentais que preparam o praticante para reagir a qualquer ataque com fluidez, equilíbrio e proteção natural dos pontos vitais.",
      "nameRomaji": "Jūmonji no Kamae",
      "nameKanji": "十字の構え",
      "translation": "Postura da Cruz Protetora",
      "etymology": [
        {
          "term": "Jūmonji",
          "meaning": "Postura da Cruz Protetora"
        }
      ],
      "mnemonic": "Antebraços cruzados à frente do peito formando o kanji dez (十): protegendo a garganta e o coração enquanto prepara uma torção em X.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kamae",
        "Postura",
        "Jumonji",
        "Ten"
      ]
    },
    {
      "id": "taihen-zenpo-kaiten",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Zenpō Kaiten (Ryōte / Katate / Mute)",
      "nameKanji": "前方回転",
      "translation": "Rolamento Frontal Amortecido",
      "etymology": [
        {
          "term": "Zenpō",
          "meaning": "Rolamento Frontal Amortecido"
        }
      ],
      "mnemonic": "Rolar como uma roda perfeita sem impacto na coluna, usando a curvatura do ombro oposto ao quadril para levantar-se já em Kamae.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Ukemi",
        "Kaiten",
        "Ten"
      ]
    },
    {
      "id": "taihen-sokuho-kaiten",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Sokuhō Kaiten (Ryōte / Katate / Mute)",
      "nameKanji": "側方回転",
      "translation": "Rolamento Lateral",
      "etymology": [
        {
          "term": "Sokuhō",
          "meaning": "Rolamento Lateral"
        }
      ],
      "mnemonic": "Evasão de corte lateral com rolamento horizontal rente ao solo, recuperando a base pelas costas do atacante.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Ukemi",
        "Lateral",
        "Ten"
      ]
    },
    {
      "id": "taihen-ushiro-kaiten",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Ushiro Kaiten (Ryōte / Katate / Mute)",
      "nameKanji": "後方回転",
      "translation": "Rolamento para Trás",
      "etymology": [
        {
          "term": "Ushiro",
          "meaning": "Rolamento para Trás"
        }
      ],
      "mnemonic": "Desaparecer para trás absorvendo um empurrão ou projeção, rolando sobre o ombro sem tocar a nuca no solo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Ukemi",
        "Ushiro",
        "Ten"
      ]
    },
    {
      "id": "taihen-zenpo-ukemi",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Zenpō Ukemi",
      "nameKanji": "前方受身",
      "translation": "Queda Frontal Amortecida",
      "etymology": [
        {
          "term": "Zenpō",
          "meaning": "Queda Frontal Amortecida"
        }
      ],
      "mnemonic": "Amortecer a queda frontal com os antebraços em triângulo, mantendo o abdômen e os joelhos fora do chão para proteger órgãos vitais.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Ukemi",
        "Queda",
        "Ten"
      ]
    },
    {
      "id": "taihen-nagare",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Nagare (Jun / Gyaku / Tomoe / Kuruma)",
      "nameKanji": "流れ",
      "translation": "Fluxo Contínuo de Quedas e Desvios",
      "etymology": [
        {
          "term": "Nagare",
          "meaning": "Fluxo Contínuo de Quedas e Desvios"
        }
      ],
      "mnemonic": "Fluir como água sobre as pedras: transformar a força do arremesso do oponente em um deslizamento suave pelo tatame.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Nagare",
        "Fluxo",
        "Ten"
      ]
    },
    {
      "id": "taihen-shiho-tenchi-tobi",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Shihō Tenchi Tobi",
      "nameKanji": "四方天地飛び",
      "translation": "Saltos nas Quatro Direções (Céu e Terra)",
      "etymology": [
        {
          "term": "Shihō",
          "meaning": "Saltos nas Quatro Direções (Céu e Terra)"
        }
      ],
      "mnemonic": "Saltos explosivos e silenciosos para frente, trás, laterais e em elevação vertical para escapar de lâminas baixas ou rasteiras.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Tobi",
        "Salto",
        "Ten"
      ]
    },
    {
      "id": "taihen-shoten-no-jutsu",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Shōten no Jutsu",
      "nameKanji": "昇天の術",
      "translation": "Subida Celestial / Corrida em Paredes e Árvores",
      "etymology": [
        {
          "term": "Shōten",
          "meaning": "Subida Celestial / Corrida em Paredes e Árvores"
        }
      ],
      "mnemonic": "Usar o momentum do corpo para dar de dois a três passos verticais em uma parede ou obstáculo e girar sobre o atacante.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Shoten",
        "Ninja",
        "Ten"
      ]
    },
    {
      "id": "taihen-hoko-jutsu",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Hōkō Jutsu (Passos Silenciosos)",
      "nameKanji": "歩法術",
      "translation": "Métodos Tradicionais de Caminhada Silenciosa Ninja",
      "etymology": [
        {
          "term": "Hōkō",
          "meaning": "Métodos Tradicionais de Caminhada Silenciosa Ninja"
        }
      ],
      "mnemonic": "Caminhadas táticas furtivas (Soku Shin Sō Soku Hō, Hyōjō Hōkō, Mu On no Hō) tocando a borda externa dos pés sem ruído.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Hoko",
        "Silêncio",
        "Ten"
      ]
    },
    {
      "id": "taihen-shizen-gyo-un-ryusui",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Shizen Gyō Un Ryū Sui",
      "nameKanji": "自然行雲流水",
      "translation": "Mover-se como Nuvens Flutuantes e Água Corrente",
      "etymology": [
        {
          "term": "Shizen",
          "meaning": "Mover-se como Nuvens Flutuantes e Água Corrente"
        }
      ],
      "mnemonic": "Movimentação espontânea e desapegada: o corpo não planeja a forma, apenas reage harmonicamente às mudanças do adversário.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Filosofia",
        "Ten"
      ]
    },
    {
      "id": "taihen-ken-tai-ichi-jo",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Ken Tai Ichi Jō",
      "nameKanji": "剣体一条",
      "translation": "O Corpo e o Golpe são um Só",
      "etymology": [
        {
          "term": "Ken",
          "meaning": "O Corpo e o Golpe são um Só"
        }
      ],
      "mnemonic": "O punho não ataca isolado: o peso de todo o esqueleto e a gravidade se movem simultaneamente atrás de cada impacto.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Princípio",
        "Ten"
      ]
    },
    {
      "id": "taihen-junan-taiso-ryutai",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Jūnan Taisō Ryūtai Undō",
      "nameKanji": "柔軟体操・竜体運動",
      "translation": "Condicionamento Corporal Elástico do Dragão",
      "etymology": [
        {
          "term": "Jūnan",
          "meaning": "Condicionamento Corporal Elástico do Dragão"
        }
      ],
      "mnemonic": "Exercícios articulares ondulares que tornam os tendões flexíveis como o corpo de um dragão mítico.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Junan",
        "Flexibilidade",
        "Ten"
      ]
    },
    {
      "id": "taihen-junan-taiso-shin-kokyu",
      "makiId": "ten",
      "category": "Taihen Jutsu Ukemi Gata",
      "categoryKanji": "体変術受身型",
      "categoryTranslation": "Métodos de Quedas, Rolamentos e Condicionamento Corporal",
      "categoryExplanation": "A arte do movimento e transformação corporal: rolamentos amortecidos, quedas em múltiplas direções, saltos, deslocamentos silenciosos e condicionamento físico elástico.",
      "nameRomaji": "Jūnan Taisō Shin Kokyū Sanaden",
      "nameKanji": "柔軟体操・深呼吸三位伝",
      "translation": "Respiração Profunda dos Três Poderes Sagrados",
      "etymology": [
        {
          "term": "Jūnan",
          "meaning": "Respiração Profunda dos Três Poderes Sagrados"
        }
      ],
      "mnemonic": "Respiração tanden abdominal que acalma os batimentos cardíacos e expande a presença energética (Kiai) em combate.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Taihenjutsu",
        "Kokyu",
        "Respiração",
        "Ten"
      ]
    },
    {
      "id": "muto-hira",
      "makiId": "ten",
      "category": "Taihen Jutsu Mutō Dori Gata",
      "categoryKanji": "体変術無刀捕型",
      "categoryTranslation": "Posturas de Esquiva Corporal contra Espada",
      "categoryExplanation": "Posturas e atitudes corporais do guerreiro desarmado para evadir cortes mortais de lâminas e espadas (Katana).",
      "nameRomaji": "Hira no Kamae (Mutō Dori)",
      "nameKanji": "平の構え（無刀捕）",
      "translation": "Postura Aberta contra Ataque de Espada",
      "etymology": [
        {
          "term": "Hira",
          "meaning": "Postura Aberta contra Ataque de Espada"
        }
      ],
      "mnemonic": "Ficar aberto convidando o corte vertical do samurai para esquivar no último milissegundo pelo lado externo da lâmina.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "MutoDori",
        "Kamae",
        "Ten"
      ]
    },
    {
      "id": "muto-ichimonji",
      "makiId": "ten",
      "category": "Taihen Jutsu Mutō Dori Gata",
      "categoryKanji": "体変術無刀捕型",
      "categoryTranslation": "Posturas de Esquiva Corporal contra Espada",
      "categoryExplanation": "Posturas e atitudes corporais do guerreiro desarmado para evadir cortes mortais de lâminas e espadas (Katana).",
      "nameRomaji": "Ichimonji no Kamae (Mutō Dori)",
      "nameKanji": "一文字の構え（無刀捕）",
      "translation": "Postura Lateral de Esquiva de Espada",
      "etymology": [
        {
          "term": "Ichimonji",
          "meaning": "Postura Lateral de Esquiva de Espada"
        }
      ],
      "mnemonic": "Apresentar uma linha estreita de perfil, recuando o tronco enquanto avança o passo por baixo do braço do espadachim.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "MutoDori",
        "Kamae",
        "Ten"
      ]
    },
    {
      "id": "muto-jumonji",
      "makiId": "ten",
      "category": "Taihen Jutsu Mutō Dori Gata",
      "categoryKanji": "体変術無刀捕型",
      "categoryTranslation": "Posturas de Esquiva Corporal contra Espada",
      "categoryExplanation": "Posturas e atitudes corporais do guerreiro desarmado para evadir cortes mortais de lâminas e espadas (Katana).",
      "nameRomaji": "Jūmonji no Kamae (Mutō Dori)",
      "nameKanji": "十字の構え（無刀捕）",
      "translation": "Postura Cruzada contra Espada",
      "etymology": [
        {
          "term": "Jūmonji",
          "meaning": "Postura Cruzada contra Espada"
        }
      ],
      "mnemonic": "Braços prontos para aprisionar o pulso e a empunhadura (Tsuka) da Katana no exato instante após a descida do golpe.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "MutoDori",
        "Kamae",
        "Ten"
      ]
    },
    {
      "id": "taisabaki-mae-ushiro-yoko",
      "makiId": "ten",
      "category": "Tai Sabaki",
      "categoryKanji": "体捌き",
      "categoryTranslation": "Deslocamentos e Esquivas Corporais",
      "categoryExplanation": "Movimentação tática do corpo nas quatro direções (Mae, Ushiro, Yoko), utilizando passos de tigre (Tora Aruki) e passadas cruzadas (Jūji Aruki).",
      "nameRomaji": "Tai Sabaki (Mae / Ushiro / Yoko / Tora Aruki / Jūji Aruki / Moguri Gata)",
      "nameKanji": "体捌き",
      "translation": "Deslocamentos Táticos Corporais nas Quatro Direções",
      "etymology": [
        {
          "term": "Tai",
          "meaning": "Deslocamentos Táticos Corporais nas Quatro Direções"
        }
      ],
      "mnemonic": "Passadas angulares em 45 graus para sair da linha de fogo, usando o passo de tigre (Tora Aruki) e mergulho sob o ataque (Moguri).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TaiSabaki",
        "Passos",
        "Ten"
      ]
    },
    {
      "id": "uke-jodan",
      "makiId": "ten",
      "category": "Uke Nagashi",
      "categoryKanji": "受流し",
      "categoryTranslation": "Defesas Fluidas e Desvios de Ataques",
      "categoryExplanation": "O princípio de receber o ataque do oponente sem bloquear com força bruta, redirecionando o fluxo da força do agressor através dos níveis Jōdan, Chūdan e Gedan.",
      "nameRomaji": "Jōdan Uke Nagashi (A, B, C, D, E)",
      "nameKanji": "上段受流し",
      "translation": "Desvio Fluido de Ataque Alto (Cabeça)",
      "etymology": [
        {
          "term": "Jōdan",
          "meaning": "Desvio Fluido de Ataque Alto (Cabeça)"
        }
      ],
      "mnemonic": "O antebraço desliza em espiral ascendente guiando o soco do oponente para fora da sua linha central sem colisão frontal.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "UkeNagashi",
        "Jodan",
        "Ten"
      ]
    },
    {
      "id": "uke-chudan",
      "makiId": "ten",
      "category": "Uke Nagashi",
      "categoryKanji": "受流し",
      "categoryTranslation": "Defesas Fluidas e Desvios de Ataques",
      "categoryExplanation": "O princípio de receber o ataque do oponente sem bloquear com força bruta, redirecionando o fluxo da força do agressor através dos níveis Jōdan, Chūdan e Gedan.",
      "nameRomaji": "Chūdan Uke Nagashi",
      "nameKanji": "中段受流し",
      "translation": "Desvio Fluido de Ataque Médio (Plexo/Costelas)",
      "etymology": [
        {
          "term": "Chūdan",
          "meaning": "Desvio Fluido de Ataque Médio (Plexo/Costelas)"
        }
      ],
      "mnemonic": "Giro de quadril com rotação do antebraço desviando o golpe no abdômen enquanto expõe as costelas (Denkō/Butsumetsu) do atacante.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "UkeNagashi",
        "Chudan",
        "Ten"
      ]
    },
    {
      "id": "uke-gedan",
      "makiId": "ten",
      "category": "Uke Nagashi",
      "categoryKanji": "受流し",
      "categoryTranslation": "Defesas Fluidas e Desvios de Ataques",
      "categoryExplanation": "O princípio de receber o ataque do oponente sem bloquear com força bruta, redirecionando o fluxo da força do agressor através dos níveis Jōdan, Chūdan e Gedan.",
      "nameRomaji": "Gedan Uke Nagashi",
      "nameKanji": "下段受流し",
      "translation": "Desvio Fluido de Ataque Baixo (Genitais/Chutes)",
      "etymology": [
        {
          "term": "Gedan",
          "meaning": "Desvio Fluido de Ataque Baixo (Genitais/Chutes)"
        }
      ],
      "mnemonic": "Varrer o chute ou golpe baixo para fora com a lâmina do antebraço enquanto recua o quadril em segurança.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "UkeNagashi",
        "Gedan",
        "Ten"
      ]
    },
    {
      "id": "tsuki-ichimonji",
      "makiId": "ten",
      "category": "Tsuki",
      "categoryKanji": "突き",
      "categoryTranslation": "Ataques Diretos e Golpes de Punho",
      "categoryExplanation": "Golpes diretos e penetrantes com punho e corpo, alinhando a estrutura a partir de posturas como Ichimonji e Doko no Kamae.",
      "nameRomaji": "Tsuki (Ichimonji no Kamae)",
      "nameKanji": "突き（一文字）",
      "translation": "Soco Direto a partir de Ichimonji",
      "etymology": [
        {
          "term": "Tsuki",
          "meaning": "Soco Direto a partir de Ichimonji"
        }
      ],
      "mnemonic": "O punho é disparado impulsionado pelo quadril e perna traseira, penetrando o plexo do oponente como uma flecha.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Tsuki",
        "Soco",
        "Ten"
      ]
    },
    {
      "id": "tsuki-doko",
      "makiId": "ten",
      "category": "Tsuki",
      "categoryKanji": "突き",
      "categoryTranslation": "Ataques Diretos e Golpes de Punho",
      "categoryExplanation": "Golpes diretos e penetrantes com punho e corpo, alinhando a estrutura a partir de posturas como Ichimonji e Doko no Kamae.",
      "nameRomaji": "Tsuki (Doko no Kamae)",
      "nameKanji": "突き（怒虎）",
      "translation": "Golpe Descendente / Penetração do Tigre",
      "etymology": [
        {
          "term": "Tsuki",
          "meaning": "Golpe Descendente / Penetração do Tigre"
        }
      ],
      "mnemonic": "Descida esmagadora do punho a partir do ombro com peso corporal gravitacional direto no ponto Menbu ou Jin Chū.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Tsuki",
        "Doko",
        "Ten"
      ]
    },
    {
      "id": "sanshin-chi",
      "makiId": "ten",
      "category": "Shoshin Gokei / Sanshin no Kata",
      "categoryKanji": "初心五型・五行の型",
      "categoryTranslation": "As 5 Formas dos Cinco Elementos da Natureza",
      "categoryExplanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais.",
      "nameRomaji": "Chi no Kata (Elemento Terra)",
      "nameKanji": "地之型",
      "translation": "Forma da Terra — Solidez e Enraizamento Inabalável",
      "etymology": [
        {
          "term": "Chi",
          "meaning": "Forma da Terra — Solidez e Enraizamento Inabalável"
        }
      ],
      "mnemonic": "A montanha imóvel: recuar absorvendo o golpe em Ichimonji e avançar com Sanshitan Ken penetrante na garganta (Murasame).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Sanshin",
        "Gogyo",
        "Chi",
        "Ten"
      ]
    },
    {
      "id": "sanshin-sui",
      "makiId": "ten",
      "category": "Shoshin Gokei / Sanshin no Kata",
      "categoryKanji": "初心五型・五行の型",
      "categoryTranslation": "As 5 Formas dos Cinco Elementos da Natureza",
      "categoryExplanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais.",
      "nameRomaji": "Sui no Kata (Elemento Água)",
      "nameKanji": "水之型",
      "translation": "Forma da Água — Fluidez Adaptável e Impacto em Onda",
      "etymology": [
        {
          "term": "Sui",
          "meaning": "Forma da Água — Fluidez Adaptável e Impacto em Onda"
        }
      ],
      "mnemonic": "A onda do oceano: recuo defensivo e contra-ataque circular em Shutō Ken na têmpora (Kasumi) do agressor.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Sanshin",
        "Gogyo",
        "Sui",
        "Ten"
      ]
    },
    {
      "id": "sanshin-ka",
      "makiId": "ten",
      "category": "Shoshin Gokei / Sanshin no Kata",
      "categoryKanji": "初心五型・五行の型",
      "categoryTranslation": "As 5 Formas dos Cinco Elementos da Natureza",
      "categoryExplanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais.",
      "nameRomaji": "Ka no Kata (Elemento Fogo)",
      "nameKanji": "火之型",
      "translation": "Forma do Fogo — Ataque Feroz e Expansivo",
      "etymology": [
        {
          "term": "Ka",
          "meaning": "Forma do Fogo — Ataque Feroz e Expansivo"
        }
      ],
      "mnemonic": "A chama que queima: bloqueio ascendente agressivo seguido imediatamente por Shutō Ken ou Tsuki fulminante no queixo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Sanshin",
        "Gogyo",
        "Ka",
        "Ten"
      ]
    },
    {
      "id": "sanshin-fu",
      "makiId": "ten",
      "category": "Shoshin Gokei / Sanshin no Kata",
      "categoryKanji": "初心五型・五行の型",
      "categoryTranslation": "As 5 Formas dos Cinco Elementos da Natureza",
      "categoryExplanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais.",
      "nameRomaji": "Fū no Kata (Elemento Vento)",
      "nameKanji": "風之型",
      "translation": "Forma do Vento — Evasão Elusiva e Desvio Suave",
      "etymology": [
        {
          "term": "Fū",
          "meaning": "Forma do Vento — Evasão Elusiva e Desvio Suave"
        }
      ],
      "mnemonic": "A brisa inalcançável: esquiva angular rápida em 45 graus e corte duplo de Shutō Ken na carótida enquanto o atacante atinge o vazio.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Sanshin",
        "Gogyo",
        "Fu",
        "Ten"
      ]
    },
    {
      "id": "sanshin-ku",
      "makiId": "ten",
      "category": "Shoshin Gokei / Sanshin no Kata",
      "categoryKanji": "初心五型・五行の型",
      "categoryTranslation": "As 5 Formas dos Cinco Elementos da Natureza",
      "categoryExplanation": "Os princípios arquetípicos dos cinco elementos (Chi - Terra, Sui - Água, Ka - Fogo, Fū - Vento, Kū - Vazio/Éter), ensinando respostas táticas e biomecânicas fundamentais.",
      "nameRomaji": "Kū no Kata (Elemento Vazio / Éter)",
      "nameKanji": "空之型",
      "translation": "Forma do Vazio — Espontaneidade Transcendente e Não-Ação",
      "etymology": [
        {
          "term": "Kū",
          "meaning": "Forma do Vazio — Espontaneidade Transcendente e Não-Ação"
        }
      ],
      "mnemonic": "O espaço infinito: responder sem forma fixa predefinida, deixando que a própria energia do atacante dite sua derrota.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Sanshin",
        "Gogyo",
        "Ku",
        "Ten"
      ]
    },
    {
      "id": "kihon-ichimonji",
      "makiId": "ten",
      "category": "Kihon Happō (Kosshi Sanpō)",
      "categoryKanji": "骨指基本三法",
      "categoryTranslation": "As 3 Formas Fundamentais de Ataque a Estruturas Ósseas e Nervosas",
      "categoryExplanation": "Métodos de Kosshijutsu para golpear pontos vitais e estruturas musculares (Ichimonji, Jūmonji e Hichō no Kata) que compõem o núcleo do Kihon Happō.",
      "nameRomaji": "Ichimonji no Kata (Kosshi Sanpō)",
      "nameKanji": "一文字之型",
      "translation": "Forma da Linha Reta — Defesa com Shutō Ken na Carótida",
      "etymology": [
        {
          "term": "Ichimonji",
          "meaning": "Forma da Linha Reta — Defesa com Shutō Ken na Carótida"
        }
      ],
      "mnemonic": "Recuo angular sob o soco de Uke com Jōdan Uke e entrada explosiva de Shutō Ken em Matsukaze/Murasame.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Kosshi",
        "Ten"
      ]
    },
    {
      "id": "kihon-jumonji",
      "makiId": "ten",
      "category": "Kihon Happō (Kosshi Sanpō)",
      "categoryKanji": "骨指基本三法",
      "categoryTranslation": "As 3 Formas Fundamentais de Ataque a Estruturas Ósseas e Nervosas",
      "categoryExplanation": "Métodos de Kosshijutsu para golpear pontos vitais e estruturas musculares (Ichimonji, Jūmonji e Hichō no Kata) que compõem o núcleo do Kihon Happō.",
      "nameRomaji": "Jūmonji no Kata (Kosshi Sanpō)",
      "nameKanji": "十字之型",
      "translation": "Forma da Cruz — Defesa Dupla e Boshi Ken no Peito",
      "etymology": [
        {
          "term": "Jūmonji",
          "meaning": "Forma da Cruz — Defesa Dupla e Boshi Ken no Peito"
        }
      ],
      "mnemonic": "Desvio do ataque com os antebraços cruzados em Jūmonji e estocada com polegar (Boshi Ken) no ponto Kimon.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Kosshi",
        "Ten"
      ]
    },
    {
      "id": "kihon-hicho",
      "makiId": "ten",
      "category": "Kihon Happō (Kosshi Sanpō)",
      "categoryKanji": "骨指基本三法",
      "categoryTranslation": "As 3 Formas Fundamentais de Ataque a Estruturas Ósseas e Nervosas",
      "categoryExplanation": "Métodos de Kosshijutsu para golpear pontos vitais e estruturas musculares (Ichimonji, Jūmonji e Hichō no Kata) que compõem o núcleo do Kihon Happō.",
      "nameRomaji": "Hichō no Kata (Kosshi Sanpō)",
      "nameKanji": "飛鳥之型",
      "translation": "Forma do Pássaro Voador — Esquiva em Uma Perna e Keri na Axila",
      "etymology": [
        {
          "term": "Hichō",
          "meaning": "Forma do Pássaro Voador — Esquiva em Uma Perna e Keri na Axila"
        }
      ],
      "mnemonic": "Elevação em Hichō no Kamae com joelho bloqueando e disparo de Soku Yaku Keri na axila/costelas (Butsumetsu/Denkō).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Kosshi",
        "Ten"
      ]
    },
    {
      "id": "kihon-omote-gyaku",
      "makiId": "ten",
      "category": "Kihon Happō (Torite Gohō)",
      "categoryKanji": "捕手基本五法",
      "categoryTranslation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "categoryExplanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori).",
      "nameRomaji": "Omote Gyaku",
      "nameKanji": "表逆",
      "translation": "Torção Externa do Pulso com Desequilíbrio",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Torção Externa do Pulso com Desequilíbrio"
        }
      ],
      "mnemonic": "Girar o pulso de Uke para fora pressionando o polegar entre os ossos do dorso da mão, fazendo-o desabar de joelhos.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Torite",
        "Gyaku",
        "Ten"
      ]
    },
    {
      "id": "kihon-omote-henka",
      "makiId": "ten",
      "category": "Kihon Happō (Torite Gohō)",
      "categoryKanji": "捕手基本五法",
      "categoryTranslation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "categoryExplanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori).",
      "nameRomaji": "Omote Henka / Omote Gyaku Tsuki",
      "nameKanji": "表変化・表逆突き",
      "translation": "Variação de Omote Gyaku com Golpe Integrado",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Variação de Omote Gyaku com Golpe Integrado"
        }
      ],
      "mnemonic": "Durante a execução de Omote Gyaku, aplicar simultaneamente Tsuki de punho ou chute nas costelas flutuantes de Uke.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Torite",
        "Henka",
        "Ten"
      ]
    },
    {
      "id": "kihon-ura-gyaku",
      "makiId": "ten",
      "category": "Kihon Happō (Torite Gohō)",
      "categoryKanji": "捕手基本五法",
      "categoryTranslation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "categoryExplanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori).",
      "nameRomaji": "Ura Gyaku / Hon Gyaku",
      "nameKanji": "裏逆・本逆",
      "translation": "Torção Interna do Pulso contra a Articulação",
      "etymology": [
        {
          "term": "Ura",
          "meaning": "Torção Interna do Pulso contra a Articulação"
        }
      ],
      "mnemonic": "Dobrar o pulso do adversário para dentro em direção ao próprio ombro dele, criando uma alavanca em 'S' insuportável.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Torite",
        "Gyaku",
        "Ten"
      ]
    },
    {
      "id": "kihon-muso-dori",
      "makiId": "ten",
      "category": "Kihon Happō (Torite Gohō)",
      "categoryKanji": "捕手基本五法",
      "categoryTranslation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "categoryExplanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori).",
      "nameRomaji": "Musō Dori / Ganseki Nage",
      "nameKanji": "無双捕・岩石投",
      "translation": "Captura Inigualável com Chave de Cotovelo e Arremesso",
      "etymology": [
        {
          "term": "Musō",
          "meaning": "Captura Inigualável com Chave de Cotovelo e Arremesso"
        }
      ],
      "mnemonic": "Entrelaçar o braço por baixo da axila e dobrar o cotovelo de Uke a 90 graus, travando seu ombro e projetando como uma rocha.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Torite",
        "Muso",
        "Ten"
      ]
    },
    {
      "id": "kihon-musha-dori",
      "makiId": "ten",
      "category": "Kihon Happō (Torite Gohō)",
      "categoryKanji": "捕手基本五法",
      "categoryTranslation": "As 5 Formas Fundamentais de Captura e Torção Articular",
      "categoryExplanation": "Técnicas de Jūtaijutsu para aprisionamento, torção e projeção através do controle dos pulsos, cotovelos e ombros (Omote Gyaku, Ura Gyaku, Musō Dori, Musha Dori).",
      "nameRomaji": "Musha Dori / Oni Kudaki",
      "nameKanji": "武者捕・鬼砕き",
      "translation": "Captura do Guerreiro com Chave de Ombro",
      "etymology": [
        {
          "term": "Musha",
          "meaning": "Captura do Guerreiro com Chave de Ombro"
        }
      ],
      "mnemonic": "Passar o braço por cima do braço estendido do adversário, forçando seu cotovelo para baixo e dobrando seu tronco ao chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KihonHappo",
        "Torite",
        "Musha",
        "Ten"
      ]
    },
    {
      "id": "hoken-fudo-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Fudō Ken (Kongō Ken)",
      "nameKanji": "不動拳（金剛拳）",
      "translation": "Punho Imutável de Diamante / Punho Cerrado Tradicional",
      "etymology": [
        {
          "term": "Fudō",
          "meaning": "Punho Imutável de Diamante / Punho Cerrado Tradicional"
        }
      ],
      "mnemonic": "O punho cerrado clássico: dedos firmemente dobrados e polegar travando o indicador e médio por fora.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Fudo",
        "Ten"
      ]
    },
    {
      "id": "hoken-shuto-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shutō Ken (Kiten Ken)",
      "nameKanji": "手刀拳（起転拳）",
      "translation": "Espada da Mão / Lâmina Externa",
      "etymology": [
        {
          "term": "Shutō",
          "meaning": "Espada da Mão / Lâmina Externa"
        }
      ],
      "mnemonic": "A borda externa carnuda e muscular da mão, golpeando como uma espada de corte na carótida, clavícula ou têmpora.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Shuto",
        "Ten"
      ]
    },
    {
      "id": "hoken-boshi-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Boshi Ken (Shitō Ken)",
      "nameKanji": "指頭拳（母指拳）",
      "translation": "Punho da Ponta do Polegar Reforçado",
      "etymology": [
        {
          "term": "Boshi",
          "meaning": "Punho da Ponta do Polegar Reforçado"
        }
      ],
      "mnemonic": "O polegar dobrado apoiado sobre o indicador cerrado, penetrando pontos vitais como Suigetsu, Kimon e Akiretsu.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Boshi",
        "Ten"
      ]
    },
    {
      "id": "hoken-shitan-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shitan Ken (Gyokaku / Shishitan / Shu / Sanshitan)",
      "nameKanji": "指端拳",
      "translation": "Ponta dos Quatro Dedos em Lança",
      "etymology": [
        {
          "term": "Shitan",
          "meaning": "Ponta dos Quatro Dedos em Lança"
        }
      ],
      "mnemonic": "Dedos estendidos e unidos com máxima rigidez para estocadas na traqueia, olhos ou plexo solar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Shitan",
        "Ten"
      ]
    },
    {
      "id": "hoken-shikan-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shikan Ken",
      "nameKanji": "指関節拳",
      "translation": "Punho das Falanges Médias dos Dedos",
      "etymology": [
        {
          "term": "Shikan",
          "meaning": "Punho das Falanges Médias dos Dedos"
        }
      ],
      "mnemonic": "Segunda articulação dos quatro dedos dobrada para frente, criando uma superfície dura que penetra entre as costelas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Shikan",
        "Ten"
      ]
    },
    {
      "id": "hoken-sokki-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Sokki Ken",
      "nameKanji": "足起拳（膝）",
      "translation": "A Arma do Joelho (Joelhada Devastadora)",
      "etymology": [
        {
          "term": "Sokki",
          "meaning": "A Arma do Joelho (Joelhada Devastadora)"
        }
      ],
      "mnemonic": "O osso da patela e topo do fêmur impulsionados para cima na virilha, abdômen ou queixo de Uke desequilibrado.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Joelho",
        "Ten"
      ]
    },
    {
      "id": "hoken-shuki-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shuki Ken",
      "nameKanji": "手起拳（肘）",
      "translation": "A Arma do Cotovelo (Cotovelada em Ângulo)",
      "etymology": [
        {
          "term": "Shuki",
          "meaning": "A Arma do Cotovelo (Cotovelada em Ângulo)"
        }
      ],
      "mnemonic": "A ponta afiada do osso olécrano do cotovelo desferida em giro ou descida na mandíbula ou esterno.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Cotovelo",
        "Ten"
      ]
    },
    {
      "id": "hoken-soku-yaku",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Soku Yaku Ken",
      "nameKanji": "足躍拳（踵・足底）",
      "translation": "A Arma da Sola e Calcanhar do Pé",
      "etymology": [
        {
          "term": "Soku",
          "meaning": "A Arma da Sola e Calcanhar do Pé"
        }
      ],
      "mnemonic": "Chute frontal com a sola inteira ou calcanhar rígido esmagando a tíbia, joelho ou plexo solar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Calcanhar",
        "Ten"
      ]
    },
    {
      "id": "hoken-soku-gyaku",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Soku Gyaku Ken",
      "nameKanji": "足逆拳（爪先）",
      "translation": "A Arma das Pontas dos Dedos do Pé",
      "etymology": [
        {
          "term": "Soku",
          "meaning": "A Arma das Pontas dos Dedos do Pé"
        }
      ],
      "mnemonic": "Chute penetrante com os dedos do pé enrijecidos atingindo a virilha (Kin Teki) ou o fígado (Denkō).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "DedosDoPe",
        "Ten"
      ]
    },
    {
      "id": "hoken-shishin-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shishin Ken",
      "nameKanji": "指針拳（小指）",
      "translation": "A Arma do Dedo Mínimo Estendido",
      "etymology": [
        {
          "term": "Shishin",
          "meaning": "A Arma do Dedo Mínimo Estendido"
        }
      ],
      "mnemonic": "O dedo mínimo usado em pressão cirúrgica em cavidades oculares ou nervos atrás da mandíbula.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Ten"
      ]
    },
    {
      "id": "hoken-shako-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shakō Ken",
      "nameKanji": "蝦蟇拳・爪掌拳",
      "translation": "Garra de Garça / Palma Aberta com Garras",
      "etymology": [
        {
          "term": "Shakō",
          "meaning": "Garra de Garça / Palma Aberta com Garras"
        }
      ],
      "mnemonic": "Palma curvada como garra rasgando o rosto, olhos ou garganta e empurrando a cabeça para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Garra",
        "Ten"
      ]
    },
    {
      "id": "hoken-happa-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Happa Ken",
      "nameKanji": "八葉拳（両掌打）",
      "translation": "Palmas Abertas em Concha / Aplauso nos Ouvidos",
      "etymology": [
        {
          "term": "Happa",
          "meaning": "Palmas Abertas em Concha / Aplauso nos Ouvidos"
        }
      ],
      "mnemonic": "Golpe duplo com as palmas em concha sobre os dois ouvidos do agressor, rompendo o tímpano e o equilíbrio.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Happa",
        "Ten"
      ]
    },
    {
      "id": "hoken-kikaku-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Kikaku Ken (Zu Tsuki)",
      "nameKanji": "鬼角拳（頭突き）",
      "translation": "Chifre do Demônio / Cabeçada Devastadora",
      "etymology": [
        {
          "term": "Kikaku",
          "meaning": "Chifre do Demônio / Cabeçada Devastadora"
        }
      ],
      "mnemonic": "Impacto do osso frontal da testa no nariz, boca ou têmpora do oponente em combate corpo a corpo colado.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Cabecada",
        "Ten"
      ]
    },
    {
      "id": "hoken-koppo-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Koppō Ken",
      "nameKanji": "骨法拳（母指関節）",
      "translation": "Punho da Articulação do Polegar Curvado",
      "etymology": [
        {
          "term": "Koppō",
          "meaning": "Punho da Articulação do Polegar Curvado"
        }
      ],
      "mnemonic": "A articulação central do polegar projetada para frente esmagando pontos vitais ósseos como Asagasumi.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Koppo",
        "Ten"
      ]
    },
    {
      "id": "hoken-taiken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Taiken",
      "nameKanji": "体拳（全身）",
      "translation": "O Próprio Corpo Inteiro Usado como Arma de Impacto",
      "etymology": [
        {
          "term": "Taiken",
          "meaning": "O Próprio Corpo Inteiro Usado como Arma de Impacto"
        }
      ],
      "mnemonic": "Impacto com o ombro, quadril ou torso inteiro esmagando o adversário contra a parede ou ao solo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Ombro",
        "Ten"
      ]
    },
    {
      "id": "hoken-shizen-ken",
      "makiId": "ten",
      "category": "Hōken Jū Roppō (16 Armas Corporais)",
      "categoryKanji": "宝拳十六法",
      "categoryTranslation": "As 16 Armas Naturais e Golpes Secretos do Corpo",
      "categoryExplanation": "As 16 armas corporais ensinadas no Ninjutsu tradicional: dedos, nós dos dedos, palma da mão, punhos cerrados, lâmina da mão, cotovelos, joelhos, cabeça e pés.",
      "nameRomaji": "Shizen Ken",
      "nameKanji": "自然拳",
      "translation": "A Arma Natural Espontânea (Dentes, Voz, Kiai)",
      "etymology": [
        {
          "term": "Shizen",
          "meaning": "A Arma Natural Espontânea (Dentes, Voz, Kiai)"
        }
      ],
      "mnemonic": "Uso de mordidas, gritos ensurdecedores (Kiai) e qualquer resposta física instintiva para sobrevivência.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hoken",
        "ArmasCorporais",
        "Natural",
        "Ten"
      ]
    },
    {
      "id": "hajutsu-te-hodoki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Te Hodoki (Katate / Ryōte)",
      "nameKanji": "手解き",
      "translation": "Liberação de Pegadas no Pulso (Uma e Duas Mãos)",
      "etymology": [
        {
          "term": "Te",
          "meaning": "Liberação de Pegadas no Pulso (Uma e Duas Mãos)"
        }
      ],
      "mnemonic": "Girar o pulso em direção ao ponto fraco onde o polegar e os dedos do agressor se encontram, puxando o cotovelo para o próprio centro.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Escape",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-tai-hodoki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Tai Hodoki",
      "nameKanji": "体解き",
      "translation": "Liberação de Abraços e Pegadas no Corpo",
      "etymology": [
        {
          "term": "Tai",
          "meaning": "Liberação de Abraços e Pegadas no Corpo"
        }
      ],
      "mnemonic": "Baixar o centro de gravidade flexionando os joelhos e desferir cabeçada ou Boshi Ken na virilha para soltar o abraço de urso.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Escape",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-oya-goroshi",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Oya Goroshi / Ko Goroshi",
      "nameKanji": "親殺し・子殺し",
      "translation": "Destruição do Polegar e dos Dedos",
      "etymology": [
        {
          "term": "Oya",
          "meaning": "Destruição do Polegar e dos Dedos"
        }
      ],
      "mnemonic": "Hiperextender o polegar (Oya) ou os quatro dedos menores (Ko) de Uke para trás, forçando-o a soltar imediatamente a pegada.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Dedos",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-koshi-kudaki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Koshi Kudaki",
      "nameKanji": "腰砕き",
      "translation": "Destruição da Postura e do Quadril do Agressor",
      "etymology": [
        {
          "term": "Koshi",
          "meaning": "Destruição da Postura e do Quadril do Agressor"
        }
      ],
      "mnemonic": "Empurrar o queixo de Uke para cima e para trás enquanto chuta a parte posterior do joelho dele, quebrando seu alinhamento postural.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Koshi",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-happo-keri",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Happō Keri (Hajutsu)",
      "nameKanji": "八方蹴り",
      "translation": "Escape Através de Chutes em Oito Direções",
      "etymology": [
        {
          "term": "Happō",
          "meaning": "Escape Através de Chutes em Oito Direções"
        }
      ],
      "mnemonic": "Disparar chutes rápidos na tíbia, joelho e virilha de atacantes múltiplos para abrir espaço de fuga.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Chute",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-keri-gaeshi",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Keri Gaeshi",
      "nameKanji": "蹴返し",
      "translation": "Reversão e Contra-Ataque contra Chutes",
      "etymology": [
        {
          "term": "Keri",
          "meaning": "Reversão e Contra-Ataque contra Chutes"
        }
      ],
      "mnemonic": "Receber a perna do chutador desviando com o quadril e chutar imediatamente a perna de apoio dele com Soku Yaku.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "ContraChute",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-keri-kudaki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Keri Kudaki",
      "nameKanji": "蹴砕き",
      "translation": "Destruição da Perna do Chutador",
      "etymology": [
        {
          "term": "Keri",
          "meaning": "Destruição da Perna do Chutador"
        }
      ],
      "mnemonic": "Bloquear a canela do agressor com a sola dura do pé na altura do joelho, interceptando o chute antes de atingir potência máxima.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Quebra",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-ken-kudaki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Ken Kudaki",
      "nameKanji": "拳砕き",
      "translation": "Destruição do Punho e do Ataque de Soco",
      "etymology": [
        {
          "term": "Ken",
          "meaning": "Destruição do Punho e do Ataque de Soco"
        }
      ],
      "mnemonic": "Golpear com Boshi Ken ou Shutō diretamente nos ossos metacarpais da mão do atacante no momento em que ele tenta socar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Destruicao",
        "Chi"
      ]
    },
    {
      "id": "hajutsu-henka-kudaki",
      "makiId": "chi",
      "category": "Hajutsu Kyū Hō",
      "categoryKanji": "破術九法",
      "categoryTranslation": "Nove Métodos de Liberação e Escapes de Pegadas",
      "categoryExplanation": "Nove técnicas essenciais para escapar instantaneamente de agarres no pulso, corpo, braço ou camisa, utilizando Kuzushi e destruição do equilíbrio do atacante.",
      "nameRomaji": "Henka Kudaki",
      "nameKanji": "変化砕き",
      "translation": "Adaptação e Destruição de Respostas Inesperadas",
      "etymology": [
        {
          "term": "Henka",
          "meaning": "Adaptação e Destruição de Respostas Inesperadas"
        }
      ],
      "mnemonic": "Quando o agressor tenta mudar de técnica no meio do caminho, fluir para uma torção articular imediata sem hesitação.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hajutsu",
        "Adaptacao",
        "Chi"
      ]
    },
    {
      "id": "torite-omote-gatame",
      "makiId": "chi",
      "category": "Torite Kihon Dori no Kata",
      "categoryKanji": "捕手基本捕の型",
      "categoryTranslation": "Formas Fundamentais de Imobilização e Controle no Solo",
      "categoryExplanation": "Técnicas de imobilização facial e dorsal (Omote e Ura Gatame) para submeter e desarmar o adversário com o controle das alavancas articulares.",
      "nameRomaji": "Omote Gatame (6 Variações)",
      "nameKanji": "表固め",
      "translation": "Imobilização Facial no Solo com Chave de Braço",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Imobilização Facial no Solo com Chave de Braço"
        }
      ],
      "mnemonic": "Deitar Uke de barriga para cima, pisando em suas costelas enquanto hiperextende o cotovelo e o pulso contra a própria tíbia.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Torite",
        "Imobilizacao",
        "Solo",
        "Chi"
      ]
    },
    {
      "id": "torite-ura-gatame",
      "makiId": "chi",
      "category": "Torite Kihon Dori no Kata",
      "categoryKanji": "捕手基本捕の型",
      "categoryTranslation": "Formas Fundamentais de Imobilização e Controle no Solo",
      "categoryExplanation": "Técnicas de imobilização facial e dorsal (Omote e Ura Gatame) para submeter e desarmar o adversário com o controle das alavancas articulares.",
      "nameRomaji": "Ura Gatame (5 Variações)",
      "nameKanji": "裏固め",
      "translation": "Imobilização Dorsal no Solo com Braço nas Costas",
      "etymology": [
        {
          "term": "Ura",
          "meaning": "Imobilização Dorsal no Solo com Braço nas Costas"
        }
      ],
      "mnemonic": "Virar o oponente de bruços no tatame, cruzando o braço dele atrás das costas e aplicando peso do joelho sobre a escápula.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Torite",
        "Imobilizacao",
        "Costas",
        "Chi"
      ]
    },
    {
      "id": "torite-suwari-gata",
      "makiId": "chi",
      "category": "Torite Kihon Dori no Kata",
      "categoryKanji": "捕手基本捕の型",
      "categoryTranslation": "Formas Fundamentais de Imobilização e Controle no Solo",
      "categoryExplanation": "Técnicas de imobilização facial e dorsal (Omote e Ura Gatame) para submeter e desarmar o adversário com o controle das alavancas articulares.",
      "nameRomaji": "Suwari Gata (Ichi Geki & Osae Komi)",
      "nameKanji": "座型（一撃・抑込）",
      "translation": "Controle Ajoelhado com Golpe e Pressão Total",
      "etymology": [
        {
          "term": "Suwari",
          "meaning": "Controle Ajoelhado com Golpe e Pressão Total"
        }
      ],
      "mnemonic": "No solo, aplicar golpe no pescoço seguido de pressão com o joelho na coluna lombar para desarmar o agressor.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Torite",
        "Suwari",
        "Chi"
      ]
    },
    {
      "id": "happokeri-sukui-keri",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Sukui Keri (6 Variações)",
      "nameKanji": "掬い蹴り",
      "translation": "Chute de Colher / Elevação de Baixo para Cima",
      "etymology": [
        {
          "term": "Sukui",
          "meaning": "Chute de Colher / Elevação de Baixo para Cima"
        }
      ],
      "mnemonic": "Passar a perna por baixo do tornozelo do oponente e erguer em concha, puxando a perna dele e arremessando-o de costas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Chute",
        "Chi"
      ]
    },
    {
      "id": "happokeri-hito",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Hitō (Chute Voando)",
      "nameKanji": "飛倒",
      "translation": "Chute Voador / Queda Aérea",
      "etymology": [
        {
          "term": "Hitō",
          "meaning": "Chute Voador / Queda Aérea"
        }
      ],
      "mnemonic": "Salto diagonal com entrada de calcanhar no esterno de Uke, derrubando-o com o peso do próprio corpo em vôo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Salto",
        "Chi"
      ]
    },
    {
      "id": "happokeri-kappi",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Kappi",
      "nameKanji": "割飛",
      "translation": "Chute em Tesoura / Corte Voador",
      "etymology": [
        {
          "term": "Kappi",
          "meaning": "Chute em Tesoura / Corte Voador"
        }
      ],
      "mnemonic": "Envolver as pernas ao redor da cintura ou pescoço de Uke e girar o corpo no ar para derrubá-lo de forma fulminante.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Tesoura",
        "Chi"
      ]
    },
    {
      "id": "happokeri-kompi",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Kompi",
      "nameKanji": "根飛",
      "translation": "Ataque na Raiz da Base",
      "etymology": [
        {
          "term": "Kompi",
          "meaning": "Ataque na Raiz da Base"
        }
      ],
      "mnemonic": "Chute baixo varrendo o calcanhar da perna traseira de apoio de Uke no exato momento em que ele avança.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Base",
        "Chi"
      ]
    },
    {
      "id": "happokeri-jumonji",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Jūmonji (Happō Keri)",
      "nameKanji": "十字（蹴）",
      "translation": "Chute Cruzado em X",
      "etymology": [
        {
          "term": "Jūmonji",
          "meaning": "Chute Cruzado em X"
        }
      ],
      "mnemonic": "Cruzar as pernas em Tai Sabaki e disparar chute lateral inesperado com o calcanhar na coxa interna (Sai).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Jumonji",
        "Chi"
      ]
    },
    {
      "id": "happokeri-keri-sukui",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Keri Sukui",
      "nameKanji": "蹴掬い",
      "translation": "Interceptação e Elevação de Chute",
      "etymology": [
        {
          "term": "Keri",
          "meaning": "Interceptação e Elevação de Chute"
        }
      ],
      "mnemonic": "Apanhar o chute de Uke por baixo da panturrilha com o próprio pé e puxar para cima desequilibrando-o.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Defesa",
        "Chi"
      ]
    },
    {
      "id": "happokeri-ashi-dome",
      "makiId": "chi",
      "category": "Happō Keri Henka",
      "categoryKanji": "八方蹴変化",
      "categoryTranslation": "Variações e Aplicações dos Chutes em Oito Direções",
      "categoryExplanation": "Aplicações dinâmicas de chutes cortantes, rasteiras e quebras de base em todas as direções (Happō) contra ataques múltiplos.",
      "nameRomaji": "Ashi Dome",
      "nameKanji": "足止め",
      "translation": "Parada de Pé / Bloqueio na Articulação",
      "etymology": [
        {
          "term": "Ashi",
          "meaning": "Parada de Pé / Bloqueio na Articulação"
        }
      ],
      "mnemonic": "Pisar firmemente sobre o peito do pé de Uke ou contra a patela do joelho para congelar o movimento dele.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HappoKeri",
        "Bloqueio",
        "Chi"
      ]
    },
    {
      "id": "keri-sokuho-geri",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Sokuhō Geri",
      "nameKanji": "側方蹴り",
      "translation": "Chute Lateral com o Calcanhar",
      "etymology": [
        {
          "term": "Sokuhō",
          "meaning": "Chute Lateral com o Calcanhar"
        }
      ],
      "mnemonic": "Giro lateral do quadril estendendo o calcanhar na costela ou joelho do agressor com a perna completamente alinhada.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Lateral",
        "Chi"
      ]
    },
    {
      "id": "keri-omote-geri",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Omote Geri",
      "nameKanji": "表蹴り",
      "translation": "Chute Frontal Direto com Soku Yaku",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Chute Frontal Direto com Soku Yaku"
        }
      ],
      "mnemonic": "Elevação do joelho ao peito e projeção da sola do pé em linha reta no plexo solar (Suigetsu).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Frontal",
        "Chi"
      ]
    },
    {
      "id": "keri-suihei-geri",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Suihei Geri",
      "nameKanji": "水平蹴り",
      "translation": "Chute Horizontal Circular",
      "etymology": [
        {
          "term": "Suihei",
          "meaning": "Chute Horizontal Circular"
        }
      ],
      "mnemonic": "Chute em arco paralelo ao solo cortando o flanco e o rim (Ushiro Getsuei) de Uke.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Horizontal",
        "Chi"
      ]
    },
    {
      "id": "keri-koho-tenchijin-geri",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Kōhō Tenchijin Geri",
      "nameKanji": "後方天地人蹴り",
      "translation": "Chute para Trás nos Três Níveis (Céu, Terra e Homem)",
      "etymology": [
        {
          "term": "Kōhō",
          "meaning": "Chute para Trás nos Três Níveis (Céu, Terra e Homem)"
        }
      ],
      "mnemonic": "Chute de mula para trás atingindo a virilha (Terra), o plexo (Homem) ou o queixo (Céu) de quem ataca por trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Koho",
        "Chi"
      ]
    },
    {
      "id": "keri-kagi-ken",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Kagi Ken / Kōken",
      "nameKanji": "鉤拳・甲拳",
      "translation": "Chute em Gancho / Chute com o Peito do Pé",
      "etymology": [
        {
          "term": "Kagi",
          "meaning": "Chute em Gancho / Chute com o Peito do Pé"
        }
      ],
      "mnemonic": "Curvar a perna em gancho contornando a guarda do adversário para atingir a nuca ou a lateral do pescoço.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Gancho",
        "Chi"
      ]
    },
    {
      "id": "keri-ashi-barai",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Ashi Barai / Tenken",
      "nameKanji": "足払い・天拳",
      "translation": "Varredura de Pés / Rasteira Tradicional",
      "etymology": [
        {
          "term": "Ashi",
          "meaning": "Varredura de Pés / Rasteira Tradicional"
        }
      ],
      "mnemonic": "Varrer o tornozelo de Uke rente ao tatame com a sola do pé no exato momento em que ele transfere o peso.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Rasteira",
        "Chi"
      ]
    },
    {
      "id": "keri-sokki",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Sokki / Hentenken",
      "nameKanji": "足起・変転拳",
      "translation": "Ataque Contínuo de Joelho e Giro",
      "etymology": [
        {
          "term": "Sokki",
          "meaning": "Ataque Contínuo de Joelho e Giro"
        }
      ],
      "mnemonic": "Joelhada na coxa seguida de giro imediato com o cotovelo ou segundo chute no flanco oposto.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Joelho",
        "Chi"
      ]
    },
    {
      "id": "keri-te-dama-dori",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Te Dama Dori",
      "nameKanji": "手玉捕り",
      "translation": "Captura com Equilíbrio / Malabarismo",
      "etymology": [
        {
          "term": "Te",
          "meaning": "Captura com Equilíbrio / Malabarismo"
        }
      ],
      "mnemonic": "Manipular os membros de Uke com puxão de braço e entrada simultânea de chute no quadril para derrubá-lo no ar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Chi"
      ]
    },
    {
      "id": "keri-ashi-rau",
      "makiId": "chi",
      "category": "Keri Waza",
      "categoryKanji": "蹴技",
      "categoryTranslation": "Técnicas Tradicionais de Chutes e Rasteiras",
      "categoryExplanation": "Golpes com os membros inferiores que visam quebrar o joelho, a tíbia ou o equilíbrio do adversário a partir de ângulos inesperados.",
      "nameRomaji": "Ashi Rau (Sha Ha Ashi)",
      "nameKanji": "足絡（斜波足）",
      "translation": "Entrelaçamento de Pernas em Onda Diagonal",
      "etymology": [
        {
          "term": "Ashi",
          "meaning": "Entrelaçamento de Pernas em Onda Diagonal"
        }
      ],
      "mnemonic": "Envolver a perna de trás de Uke com a sua e aplicar pressão para frente, derrubando-o com efeito tesoura.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriWaza",
        "Entrelaçamento",
        "Chi"
      ]
    },
    {
      "id": "gyaku-take-ori",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Take Ori (Omote / Ura)",
      "nameKanji": "竹折（表・裏）",
      "translation": "Quebrar o Bambu — Torção e Flexão do Pulso",
      "etymology": [
        {
          "term": "Take",
          "meaning": "Quebrar o Bambu — Torção e Flexão do Pulso"
        }
      ],
      "mnemonic": "Dobrar o pulso do adversário com força para baixo como quem quebra uma haste de bambu verde, rompendo a pegada.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "TakeOri",
        "Chi"
      ]
    },
    {
      "id": "gyaku-omote-gyaku",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Omote Gyaku (Chi Ryaku)",
      "nameKanji": "表逆",
      "translation": "Torção Externa Avançada com Kuzushi",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Torção Externa Avançada com Kuzushi"
        }
      ],
      "mnemonic": "Girar o pulso de Uke em arco externo completo, conectando a força do seu quadril para fazê-lo girar e cair de costas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Pulso",
        "Chi"
      ]
    },
    {
      "id": "gyaku-ura-gyaku",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Ura Gyaku (Chi Ryaku)",
      "nameKanji": "裏逆",
      "translation": "Torção Interna com Pressão no Cotovelo",
      "etymology": [
        {
          "term": "Ura",
          "meaning": "Torção Interna com Pressão no Cotovelo"
        }
      ],
      "mnemonic": "Torcer o pulso para dentro levando a mão de Uke ao peito dele, travando o cotovelo com o seu outro antebraço.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Pulso",
        "Chi"
      ]
    },
    {
      "id": "gyaku-hon-gyaku",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Hon Gyaku",
      "nameKanji": "本逆",
      "translation": "A Torção Verdadeira / Chave Base do Pulso",
      "etymology": [
        {
          "term": "Hon",
          "meaning": "A Torção Verdadeira / Chave Base do Pulso"
        }
      ],
      "mnemonic": "Pegada com as duas mãos no pulso e dedos de Uke, flexionando-o contra a articulação com peso descendente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "HonGyaku",
        "Chi"
      ]
    },
    {
      "id": "gyaku-oni-kudaki-omote",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Oni Kudaki Omote",
      "nameKanji": "鬼砕き表",
      "translation": "Quebra do Demônio — Versão Externa / Frontal",
      "etymology": [
        {
          "term": "Oni",
          "meaning": "Quebra do Demônio — Versão Externa / Frontal"
        }
      ],
      "mnemonic": "Passar o braço por cima do ombro de Uke e entrelaçar seu antebraço, girando para fora para quebrar o ombro dele.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Ombro",
        "Chi"
      ]
    },
    {
      "id": "gyaku-oni-kudaki-ura",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Oni Kudaki Ura",
      "nameKanji": "鬼砕き裏",
      "translation": "Quebra do Demônio — Versão Interna / Traseira",
      "etymology": [
        {
          "term": "Oni",
          "meaning": "Quebra do Demônio — Versão Interna / Traseira"
        }
      ],
      "mnemonic": "Entrar por baixo do braço do adversário, elevando seu cotovelo e torcendo o ombro para trás até a submissão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Ombro",
        "Chi"
      ]
    },
    {
      "id": "gyaku-musha-dori",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Musha Dori (Gyaku Musha Dori)",
      "nameKanji": "武者捕・逆武者捕",
      "translation": "Captura do Samurai / Chave Trilateral de Braço",
      "etymology": [
        {
          "term": "Musha",
          "meaning": "Captura do Samurai / Chave Trilateral de Braço"
        }
      ],
      "mnemonic": "Envolver o braço estendido de Uke e aplicar alavanca descendente com o peso do próprio corpo, forçando a queda de cara no chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Musha",
        "Chi"
      ]
    },
    {
      "id": "gyaku-muso-dori",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Musō Dori (Gyaku Musō Dori)",
      "nameKanji": "無双捕・逆無双捕",
      "translation": "Captura Suprema de Cotovelo em 90 Graus",
      "etymology": [
        {
          "term": "Musō",
          "meaning": "Captura Suprema de Cotovelo em 90 Graus"
        }
      ],
      "mnemonic": "Dobrar o braço de Uke em ângulo reto e empurrar o cotovelo para cima enquanto puxa o pulso para baixo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "Cotovelo",
        "Chi"
      ]
    },
    {
      "id": "gyaku-o-gyaku",
      "makiId": "chi",
      "category": "Gyaku Waza",
      "categoryKanji": "逆技",
      "categoryTranslation": "Técnicas de Torções Articulares e Desarticulações",
      "categoryExplanation": "Chaves e torções nas articulações (dedos, pulsos, cotovelos e ombros) que incapacitam a mobilidade e desarticulam os membros do agressor.",
      "nameRomaji": "Ō Gyaku",
      "nameKanji": "大逆",
      "translation": "A Grande Torção / Projeção por Chave Articular Completa",
      "etymology": [
        {
          "term": "Ō",
          "meaning": "A Grande Torção / Projeção por Chave Articular Completa"
        }
      ],
      "mnemonic": "Combinar chave de pulso e cotovelo em um giro de 360 graus do corpo, arremessando o atacante pelo ar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "GyakuWaza",
        "OGyaku",
        "Chi"
      ]
    },
    {
      "id": "nage-osoto-gake",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Ō Soto Gake",
      "nameKanji": "大外掛",
      "translation": "Grande Gancho Externo na Perna",
      "etymology": [
        {
          "term": "Ō",
          "meaning": "Grande Gancho Externo na Perna"
        }
      ],
      "mnemonic": "Desequilibrar Uke para trás pelo ombro e enganchar sua perna com a sua por fora, derrubando-o com impacto total.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Projecao",
        "Chi"
      ]
    },
    {
      "id": "nage-harai-goshi",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Harai Goshi",
      "nameKanji": "払腰",
      "translation": "Varredura de Quadril",
      "etymology": [
        {
          "term": "Harai",
          "meaning": "Varredura de Quadril"
        }
      ],
      "mnemonic": "Encaixar o quadril na frente de Uke e varrer a coxa dele para cima com a perna, arremessando-o em arco.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Quadril",
        "Chi"
      ]
    },
    {
      "id": "nage-gyaku-nage",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Gyaku Nage",
      "nameKanji": "逆投",
      "translation": "Projeção por Torção Articular",
      "etymology": [
        {
          "term": "Gyaku",
          "meaning": "Projeção por Torção Articular"
        }
      ],
      "mnemonic": "Usar a dor e a alavanca de uma chave de pulso (Omote Gyaku) para guiar o corpo do atacante diretamente ao chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Gyaku",
        "Chi"
      ]
    },
    {
      "id": "nage-ganseki-nage",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Ganseki Nage (Ganseki Otoshi)",
      "nameKanji": "岩石投",
      "translation": "Arremesso da Rocha / Projeção por Chave de Braço no Ombro",
      "etymology": [
        {
          "term": "Ganseki",
          "meaning": "Arremesso da Rocha / Projeção por Chave de Braço no Ombro"
        }
      ],
      "mnemonic": "Carregar o braço de Uke sobre o próprio ombro como se carregasse uma grande rocha e arremessá-lo de costas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Ganseki",
        "Chi"
      ]
    },
    {
      "id": "nage-uchi-mata",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Uchi Mata / Uchi Gake",
      "nameKanji": "内股・内掛",
      "translation": "Projeção pela Coxa Interna / Gancho Interno",
      "etymology": [
        {
          "term": "Uchi",
          "meaning": "Projeção pela Coxa Interna / Gancho Interno"
        }
      ],
      "mnemonic": "Lançar a perna entre as pernas de Uke, elevando a coxa interna dele enquanto projeta o tronco para frente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "UchiMata",
        "Chi"
      ]
    },
    {
      "id": "nage-hane-goshi",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Hane Goshi Nage",
      "nameKanji": "跳腰投",
      "translation": "Projeção por Salto de Quadril com Mola",
      "etymology": [
        {
          "term": "Hane",
          "meaning": "Projeção por Salto de Quadril com Mola"
        }
      ],
      "mnemonic": "Erguer o quadril e a lateral da coxa como uma mola sob a bacia do oponente, catapultando-o pelo ar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "HaneGoshi",
        "Chi"
      ]
    },
    {
      "id": "nage-taki-otoshi",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Taki Otoshi",
      "nameKanji": "滝落",
      "translation": "Queda da Cachoeira / Projeção Vertical para Trás",
      "etymology": [
        {
          "term": "Taki",
          "meaning": "Queda da Cachoeira / Projeção Vertical para Trás"
        }
      ],
      "mnemonic": "Abraçar o tronco de Uke por trás ou lateral e puxá-lo bruscamente para o chão como uma cachoeira em queda livre.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "TakiOtoshi",
        "Chi"
      ]
    },
    {
      "id": "nage-itami-nage",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Itami Nage",
      "nameKanji": "痛投",
      "translation": "Projeção pela Dor / Indução por Ponto de Pressão",
      "etymology": [
        {
          "term": "Itami",
          "meaning": "Projeção pela Dor / Indução por Ponto de Pressão"
        }
      ],
      "mnemonic": "Pressionar ponto vital sensível (Kimon ou Dokko) forçando o adversário a se jogar no chão para escapar da dor.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Dor",
        "Chi"
      ]
    },
    {
      "id": "nage-ryusui-iki",
      "makiId": "chi",
      "category": "Nage Waza",
      "categoryKanji": "投技",
      "categoryTranslation": "Técnicas de Projeções e Quedas",
      "categoryExplanation": "Métodos de desequilíbrio e arremesso do adversário através do quadril, pernas, ombros ou sacrifício corporal (Sutemi / Ryū Sui Iki).",
      "nameRomaji": "Ryū Sui Iki (Tachi / Yoko Nagare / Kuruma / Te Makura / Tomoe)",
      "nameKanji": "流水曵",
      "translation": "Sacrifício em Água Corrente (5 Projeções no Solo)",
      "etymology": [
        {
          "term": "Ryū",
          "meaning": "Sacrifício em Água Corrente (5 Projeções no Solo)"
        }
      ],
      "mnemonic": "Cair sentado no chão puxando Uke com você e arremessando-o por cima de sua cabeça com o pé no abdômen (Tomoe Nage).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageWaza",
        "Sutemi",
        "Chi"
      ]
    },
    {
      "id": "shime-hon-jime",
      "makiId": "chi",
      "category": "Shime Waza",
      "categoryKanji": "絞技",
      "categoryTranslation": "Técnicas de Estrangulamentos e Sufocamentos",
      "categoryExplanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata.",
      "nameRomaji": "Hon Jime",
      "nameKanji": "本絞",
      "translation": "Estrangulamento Básico Cruzado de Gola",
      "etymology": [
        {
          "term": "Hon",
          "meaning": "Estrangulamento Básico Cruzado de Gola"
        }
      ],
      "mnemonic": "Cruzar as mãos nas golas do quimono/casaco de Uke e girar os pulsos para fechar as artérias carótidas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeWaza",
        "Gola",
        "Chi"
      ]
    },
    {
      "id": "shime-gyaku-jime",
      "makiId": "chi",
      "category": "Shime Waza",
      "categoryKanji": "絞技",
      "categoryTranslation": "Técnicas de Estrangulamentos e Sufocamentos",
      "categoryExplanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata.",
      "nameRomaji": "Gyaku Jime",
      "nameKanji": "逆絞",
      "translation": "Estrangulamento Invertido",
      "etymology": [
        {
          "term": "Gyaku",
          "meaning": "Estrangulamento Invertido"
        }
      ],
      "mnemonic": "Pegada com as palmas das mãos voltadas para cima na gola, tracionando o tecido contra a traqueia.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeWaza",
        "Invertido",
        "Chi"
      ]
    },
    {
      "id": "shime-itami-jime",
      "makiId": "chi",
      "category": "Shime Waza",
      "categoryKanji": "絞技",
      "categoryTranslation": "Técnicas de Estrangulamentos e Sufocamentos",
      "categoryExplanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata.",
      "nameRomaji": "Itami Jime",
      "nameKanji": "痛絞",
      "translation": "Estrangulamento com Dor nos Nervos Cervicais",
      "etymology": [
        {
          "term": "Itami",
          "meaning": "Estrangulamento com Dor nos Nervos Cervicais"
        }
      ],
      "mnemonic": "Pressionar os nós dos dedos ou o osso rádio diretamente contra a artéria carótida (Matsukaze/Murasame).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeWaza",
        "Kyusho",
        "Chi"
      ]
    },
    {
      "id": "shime-sankaku-jime",
      "makiId": "chi",
      "category": "Shime Waza",
      "categoryKanji": "絞技",
      "categoryTranslation": "Técnicas de Estrangulamentos e Sufocamentos",
      "categoryExplanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata.",
      "nameRomaji": "Sankaku Jime",
      "nameKanji": "三角絞",
      "translation": "Estrangulamento em Triângulo com Pernas ou Braços",
      "etymology": [
        {
          "term": "Sankaku",
          "meaning": "Estrangulamento em Triângulo com Pernas ou Braços"
        }
      ],
      "mnemonic": "Fechar a cabeça e um braço de Uke dentro de um triângulo formado por suas pernas ou braços, comprimindo a carótida.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeWaza",
        "Triangulo",
        "Chi"
      ]
    },
    {
      "id": "shime-do-jime",
      "makiId": "chi",
      "category": "Shime Waza",
      "categoryKanji": "絞技",
      "categoryTranslation": "Técnicas de Estrangulamentos e Sufocamentos",
      "categoryExplanation": "Aperto da traqueia ou das artérias carótidas e nervos vagos no pescoço (Hon Jime, Gyaku Jime, Sankaku Jime) para neutralização imediata.",
      "nameRomaji": "Dō Jime",
      "nameKanji": "胴絞",
      "translation": "Estrangulamento e Compressão do Tronco / Costelas",
      "etymology": [
        {
          "term": "Dō",
          "meaning": "Estrangulamento e Compressão do Tronco / Costelas"
        }
      ],
      "mnemonic": "Envolver o tronco de Uke com as pernas cruzadas por trás e esticar o corpo, esmagando as costelas e impedindo a respiração.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeWaza",
        "Tronco",
        "Chi"
      ]
    },
    {
      "id": "jin-suwari-ichi-geki",
      "makiId": "jin",
      "category": "Suwari Gata",
      "categoryKanji": "座型",
      "categoryTranslation": "Técnicas de Combate Ajoelhado / Sentado",
      "categoryExplanation": "Técnicas aplicadas quando ambos os praticantes (ou Tori) estão sentados no solo (Seiza/Fudōza), desenvolvidas para defesa em salas japonesas e tatames.",
      "nameRomaji": "Ichi Geki (Suwari Gata)",
      "nameKanji": "一撃（座型）",
      "translation": "O Golpe Único Decisivo a partir do Solo",
      "etymology": [
        {
          "term": "Ichi",
          "meaning": "O Golpe Único Decisivo a partir do Solo"
        }
      ],
      "mnemonic": "A partir de Seiza, erguer o quadril esquivando do corte/soco e desferir Shutō Ken fulminante na garganta de Uke.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "SuwariGata",
        "Ajoelhado",
        "Jin"
      ]
    },
    {
      "id": "jin-suwari-osae-komi",
      "makiId": "jin",
      "category": "Suwari Gata",
      "categoryKanji": "座型",
      "categoryTranslation": "Técnicas de Combate Ajoelhado / Sentado",
      "categoryExplanation": "Técnicas aplicadas quando ambos os praticantes (ou Tori) estão sentados no solo (Seiza/Fudōza), desenvolvidas para defesa em salas japonesas e tatames.",
      "nameRomaji": "Osae Komi",
      "nameKanji": "抑込",
      "translation": "Imobilização Completa e Domínio no Chão",
      "etymology": [
        {
          "term": "Osae",
          "meaning": "Imobilização Completa e Domínio no Chão"
        }
      ],
      "mnemonic": "Pressionar o braço de Uke contra o tatame com o joelho enquanto controla o pulso e desarmar qualquer lâmina oculta.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "SuwariGata",
        "Imobilizacao",
        "Jin"
      ]
    },
    {
      "id": "jin-suwari-ude-ori",
      "makiId": "jin",
      "category": "Suwari Gata",
      "categoryKanji": "座型",
      "categoryTranslation": "Técnicas de Combate Ajoelhado / Sentado",
      "categoryExplanation": "Técnicas aplicadas quando ambos os praticantes (ou Tori) estão sentados no solo (Seiza/Fudōza), desenvolvidas para defesa em salas japonesas e tatames.",
      "nameRomaji": "Ude Ori (Suwari Gata)",
      "nameKanji": "腕折",
      "translation": "Quebra de Braço Ajoelhada",
      "etymology": [
        {
          "term": "Ude",
          "meaning": "Quebra de Braço Ajoelhada"
        }
      ],
      "mnemonic": "Travar o cotovelo de Uke sobre a coxa de Tori enquanto puxa o pulso para baixo, estalando a articulação.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "SuwariGata",
        "Quebra",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-ate-nage",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Ate Nage",
      "nameKanji": "当投",
      "translation": "Projeção por Impacto Simultâneo",
      "etymology": [
        {
          "term": "Ate",
          "meaning": "Projeção por Impacto Simultâneo"
        }
      ],
      "mnemonic": "Impacto no queixo com a palma (Shakō Ken) enquanto empurra a perna de apoio de Uke, projetando-o para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Projecao",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-setto",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Settō",
      "nameKanji": "折倒",
      "translation": "Quebrar e Derrubar",
      "etymology": [
        {
          "term": "Settō",
          "meaning": "Quebrar e Derrubar"
        }
      ],
      "mnemonic": "Capturar o pulso do atacante, quebrar a estrutura do cotovelo para baixo e levá-lo diretamente ao chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Chave",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-gokuraku-otoshi",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Gokuraku Otoshi",
      "nameKanji": "極楽落",
      "translation": "A Queda para o Paraíso / Projeção Traseira Asfixiante",
      "etymology": [
        {
          "term": "Gokuraku",
          "meaning": "A Queda para o Paraíso / Projeção Traseira Asfixiante"
        }
      ],
      "mnemonic": "Passar para as costas de Uke, cruzar os braços ao redor de sua garganta e sentar para trás, arremessando-o de cabeça.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Gokuraku",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-shizen",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Shizen (Torite Gata)",
      "nameKanji": "自然（捕手型）",
      "translation": "Captura Espontânea sem Esforço",
      "etymology": [
        {
          "term": "Shizen",
          "meaning": "Captura Espontânea sem Esforço"
        }
      ],
      "mnemonic": "Mover-se em harmonia com o agarrão de Uke, girando o corpo e deixando que ele caia pela própria inércia.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Shizen",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-koki",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Kōki",
      "nameKanji": "高貴",
      "translation": "A Forma Nobre de Captura",
      "etymology": [
        {
          "term": "Kōki",
          "meaning": "A Forma Nobre de Captura"
        }
      ],
      "mnemonic": "Desvio elegante de soco alto seguido de chave de ombro (Musha Dori) e imobilização de pé.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Controle",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-soto",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Sotō",
      "nameKanji": "外倒",
      "translation": "Queda Externa por Alavanca",
      "etymology": [
        {
          "term": "Sotō",
          "meaning": "Queda Externa por Alavanca"
        }
      ],
      "mnemonic": "Girar para fora da linha do atacante e aplicar pressão na nuca e ombro, forçando a queda de lado.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Exterior",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-ransetsu",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Ransetsu",
      "nameKanji": "乱雪",
      "translation": "Neve Tempestuosa / Evasão e Queda em Espiral",
      "etymology": [
        {
          "term": "Ransetsu",
          "meaning": "Neve Tempestuosa / Evasão e Queda em Espiral"
        }
      ],
      "mnemonic": "Movimento em espiral como flocos de neve em tempestade, confundindo a visão de Uke e projetando-o em parafuso.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Neve",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-hito",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Hitō (Torite Gata)",
      "nameKanji": "飛倒（捕手型）",
      "translation": "Derrubada Aérea em Combate Próximo",
      "etymology": [
        {
          "term": "Hitō",
          "meaning": "Derrubada Aérea em Combate Próximo"
        }
      ],
      "mnemonic": "Puxar o adversário desequilibrado para frente enquanto salta com joelhada nas costelas, derrubando-o.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Arremesso",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-jigoku-otoshi",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Jigoku Otoshi",
      "nameKanji": "地獄落",
      "translation": "A Queda para o Inferno",
      "etymology": [
        {
          "term": "Jigoku",
          "meaning": "A Queda para o Inferno"
        }
      ],
      "mnemonic": "Estrangulamento com queda vertical de alto impacto levando o topo da cabeça de Uke contra o solo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Jigoku",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-hoteki",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Hōteki",
      "nameKanji": "放擲",
      "translation": "Arremesso Despreocupado do Oponente",
      "etymology": [
        {
          "term": "Hōteki",
          "meaning": "Arremesso Despreocupado do Oponente"
        }
      ],
      "mnemonic": "Liberar a pegada no último instante do giro e lançar o agressor como um peso arremessado para longe.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Arremesso",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-yume-makura",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Yume Makura",
      "nameKanji": "夢枕",
      "translation": "O Travesseiro dos Sonhos (Apagão Imediato)",
      "etymology": [
        {
          "term": "Yume",
          "meaning": "O Travesseiro dos Sonhos (Apagão Imediato)"
        }
      ],
      "mnemonic": "Apoiar a cabeça de Uke no próprio bíceps enquanto fecha a carótida por trás, fazendo-o 'dormir' em 3 segundos.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Apagao",
        "Jin"
      ]
    },
    {
      "id": "jin-torite-fudo",
      "makiId": "jin",
      "category": "Torite Gata",
      "categoryKanji": "捕手型",
      "categoryTranslation": "Técnicas Avançadas de Captura, Condução e Domínio",
      "categoryExplanation": "Combinações sofisticadas de Jūtaijutsu e Ninjutsu para capturar, quebrar o ataque e imobilizar oponentes armados ou desarmados.",
      "nameRomaji": "Fudō (Torite Gata)",
      "nameKanji": "不動（捕手型）",
      "translation": "Controle Imutável e Imobilização Total",
      "etymology": [
        {
          "term": "Fudō",
          "meaning": "Controle Imutável e Imobilização Total"
        }
      ],
      "mnemonic": "Imobilizar os dois braços e a cabeça de Uke sem que ele consiga mover um único centímetro do corpo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ToriteGata",
        "Fudo",
        "Jin"
      ]
    },
    {
      "id": "jin-shimegaeshi-kana-shibari",
      "makiId": "jin",
      "category": "Shime Gaeshi",
      "categoryKanji": "絞返",
      "categoryTranslation": "Contra-Ataques e Reversões de Estrangulamentos",
      "categoryExplanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás.",
      "nameRomaji": "Kana Shibari",
      "nameKanji": "金縛り",
      "translation": "A Paralisia de Ferro / Escape com Pressão em Kyūsho",
      "etymology": [
        {
          "term": "Kana",
          "meaning": "A Paralisia de Ferro / Escape com Pressão em Kyūsho"
        }
      ],
      "mnemonic": "Quando estrangulado, cravar os polegares nos pontos Dokko (atrás das orelhas de Uke), paralisando seus braços instantaneamente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeGaeshi",
        "Escape",
        "Jin"
      ]
    },
    {
      "id": "jin-shimegaeshi-tengu-dori",
      "makiId": "jin",
      "category": "Shime Gaeshi",
      "categoryKanji": "絞返",
      "categoryTranslation": "Contra-Ataques e Reversões de Estrangulamentos",
      "categoryExplanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás.",
      "nameRomaji": "Tengu Dori",
      "nameKanji": "天狗捕",
      "translation": "A Captura do Tengu",
      "etymology": [
        {
          "term": "Tengu",
          "meaning": "A Captura do Tengu"
        }
      ],
      "mnemonic": "Girar o corpo por baixo dos braços de quem tenta estrangular por trás, torcendo os pulsos do agressor em Hon Gyaku.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeGaeshi",
        "Tengu",
        "Jin"
      ]
    },
    {
      "id": "jin-shimegaeshi-ketsu-myaku",
      "makiId": "jin",
      "category": "Shime Gaeshi",
      "categoryKanji": "絞返",
      "categoryTranslation": "Contra-Ataques e Reversões de Estrangulamentos",
      "categoryExplanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás.",
      "nameRomaji": "Ketsu Myaku",
      "nameKanji": "血脈",
      "translation": "Bloqueio do Fluxo Sanguíneo / Contra-Golpe",
      "etymology": [
        {
          "term": "Ketsu",
          "meaning": "Bloqueio do Fluxo Sanguíneo / Contra-Golpe"
        }
      ],
      "mnemonic": "Encolher o queixo para proteger a traqueia e contra-atacar com Boshi Ken na virilha ou no fígado do estrangulador.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeGaeshi",
        "Vasos",
        "Jin"
      ]
    },
    {
      "id": "jin-shimegaeshi-tai-jime",
      "makiId": "jin",
      "category": "Shime Gaeshi",
      "categoryKanji": "絞返",
      "categoryTranslation": "Contra-Ataques e Reversões de Estrangulamentos",
      "categoryExplanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás.",
      "nameRomaji": "Tai Jime (Shime Gaeshi)",
      "nameKanji": "体絞（絞返）",
      "translation": "Contra-Aperto Corporal",
      "etymology": [
        {
          "term": "Tai",
          "meaning": "Contra-Aperto Corporal"
        }
      ],
      "mnemonic": "Usar o peso do próprio corpo em queda para esmagar os dedos do estrangulador contra o chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeGaeshi",
        "Corpo",
        "Jin"
      ]
    },
    {
      "id": "jin-shimegaeshi-ryote-gake",
      "makiId": "jin",
      "category": "Shime Gaeshi",
      "categoryKanji": "絞返",
      "categoryTranslation": "Contra-Ataques e Reversões de Estrangulamentos",
      "categoryExplanation": "Técnicas de escape e contra-ataque instantâneo quando você é agarrado pelo pescoço ou estrangulado pela frente ou por trás.",
      "nameRomaji": "Ryōte Gake",
      "nameKanji": "両手掛",
      "translation": "Contra-Ataque com as Duas Mãos no Rosto",
      "etymology": [
        {
          "term": "Ryōte",
          "meaning": "Contra-Ataque com as Duas Mãos no Rosto"
        }
      ],
      "mnemonic": "Empurrar os olhos e o nariz do estrangulador com as duas mãos (Shakō Ken), quebrando a postura dele para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "ShimeGaeshi",
        "Rosto",
        "Jin"
      ]
    },
    {
      "id": "jin-keri-koto",
      "makiId": "jin",
      "category": "Keri ni Taishite",
      "categoryKanji": "蹴に対して",
      "categoryTranslation": "Defesas e Contra-Golpes contra Chutes",
      "categoryExplanation": "Respostas táticas e biomecânicas avançadas para esquivar e destruir ataques com as pernas (chutes altos, médios e baixos).",
      "nameRomaji": "Koto",
      "nameKanji": "虎倒",
      "translation": "Derrubando o Tigre que Chuta",
      "etymology": [
        {
          "term": "Koto",
          "meaning": "Derrubando o Tigre que Chuta"
        }
      ],
      "mnemonic": "Esquiva em 45 graus para fora da linha do chute e entrada esmagadora de Shutō Ken na coxa interna (Sai) do chutador.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriNiTaishite",
        "ContraChute",
        "Jin"
      ]
    },
    {
      "id": "jin-keri-huko",
      "makiId": "jin",
      "category": "Keri ni Taishite",
      "categoryKanji": "蹴に対して",
      "categoryTranslation": "Defesas e Contra-Golpes contra Chutes",
      "categoryExplanation": "Respostas táticas e biomecânicas avançadas para esquivar e destruir ataques com as pernas (chutes altos, médios e baixos).",
      "nameRomaji": "Huko (1 & 2)",
      "nameKanji": "伏虎",
      "translation": "O Tigre Agachado contra Chutes",
      "etymology": [
        {
          "term": "Huko",
          "meaning": "O Tigre Agachado contra Chutes"
        }
      ],
      "mnemonic": "Agachar rente ao chão sob o chute alto e varrer a perna de apoio com rasteira rotativa de calcanhar.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "KeriNiTaishite",
        "Tigre",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-koyoku",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Kōyoku",
      "nameKanji": "哮翼",
      "translation": "Asas Rugidoras / Defesa e Ataque Simultâneo",
      "etymology": [
        {
          "term": "Kōyoku",
          "meaning": "Asas Rugidoras / Defesa e Ataque Simultâneo"
        }
      ],
      "mnemonic": "Desviar do soco de direita de Uke com braço esquerdo e desferir Boshi Ken nas costelas enquanto chuta o joelho dele.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Combate",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-hissaku",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Hissaku",
      "nameKanji": "必殺",
      "translation": "O Golpe Certeiro Decisivo",
      "etymology": [
        {
          "term": "Hissaku",
          "meaning": "O Golpe Certeiro Decisivo"
        }
      ],
      "mnemonic": "Receber a sequência de socos com Tai Sabaki e finalizar com Shutō Ken na têmpora (Kasumi) e rasteira.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Fatal",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-setsu-yaku",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Setsu Yaku",
      "nameKanji": "折躍",
      "translation": "Quebra em Salto",
      "etymology": [
        {
          "term": "Setsu",
          "meaning": "Quebra em Salto"
        }
      ],
      "mnemonic": "Interceptar o braço de soco, girar aplicando chave de cotovelo e chutar a virilha de Uke antes dele tocar o chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Quebra",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-mu-san",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Mū San",
      "nameKanji": "霧散",
      "translation": "Dissipação como Névoa",
      "etymology": [
        {
          "term": "Mū",
          "meaning": "Dissipação como Névoa"
        }
      ],
      "mnemonic": "O oponente ataca socos rápidos mas Tori esquiva fluido como névoa, aparecendo nas costas dele com estrangulamento.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Nevoa",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-gekkan",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Gekkan",
      "nameKanji": "月観",
      "translation": "Observando a Lua / Golpe Sob a Guarda",
      "etymology": [
        {
          "term": "Gekkan",
          "meaning": "Observando a Lua / Golpe Sob a Guarda"
        }
      ],
      "mnemonic": "Bloqueio ascendente erguendo a guarda de Uke e entrada de soco penetrante de baixo para cima no queixo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Lua",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-kata-maki",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Kata Maki",
      "nameKanji": "片巻",
      "translation": "Enrolar o Ombro do Atacante",
      "etymology": [
        {
          "term": "Kata",
          "meaning": "Enrolar o Ombro do Atacante"
        }
      ],
      "mnemonic": "Envolver o braço do atacante ao redor do próprio pescoço dele, girando e projetando-o em espiral.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Ombro",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-hibari",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Hibari",
      "nameKanji": "雲雀",
      "translation": "A Cotovia / Salto Ágil com Chute Duplo",
      "etymology": [
        {
          "term": "Hibari",
          "meaning": "A Cotovia / Salto Ágil com Chute Duplo"
        }
      ],
      "mnemonic": "Esquiva leve e rápida como um pequeno pássaro com dois chutes rápidos nos joelhos de Uke.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Passaro",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-keta-oshi",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Keta Oshi",
      "nameKanji": "桁押",
      "translation": "Empurrar a Viga de Sustentação",
      "etymology": [
        {
          "term": "Keta",
          "meaning": "Empurrar a Viga de Sustentação"
        }
      ],
      "mnemonic": "Empurrar o peito de Uke enquanto chuta para trás a perna dianteira dele, quebrando sua viga de apoio.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Base",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-shiho-dori",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Shi Hō Dori",
      "nameKanji": "四方捕",
      "translation": "Captura nas Quatro Direções",
      "etymology": [
        {
          "term": "Shi",
          "meaning": "Captura nas Quatro Direções"
        }
      ],
      "mnemonic": "Controlar o pulso de Uke e manobrá-lo em quatro direções angulares, arremessando-o contra outros oponentes.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Shiho",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-moguri-dori",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Moguri Dori",
      "nameKanji": "潜捕",
      "translation": "Mergulho por Baixo do Ataque",
      "etymology": [
        {
          "term": "Moguri",
          "meaning": "Mergulho por Baixo do Ataque"
        }
      ],
      "mnemonic": "Mergulhar por baixo do soco cruzado de Uke e emergir atrás dele aplicando chave de perna ou queda de quadril.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Mergulho",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-koku",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Kokū",
      "nameKanji": "虚空",
      "translation": "O Vazio Cósmico / Espaço sem Fim",
      "etymology": [
        {
          "term": "Kokū",
          "meaning": "O Vazio Cósmico / Espaço sem Fim"
        }
      ],
      "mnemonic": "Fazer o atacante golpear o vazio absoluto, perdendo o equilíbrio sozinho e sendo finalizado com chute descendente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Vazio",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-renyo",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Renyo",
      "nameKanji": "連葉",
      "translation": "Folhas Consecutivas / Sequência Rápida de Golpes",
      "etymology": [
        {
          "term": "Renyo",
          "meaning": "Folhas Consecutivas / Sequência Rápida de Golpes"
        }
      ],
      "mnemonic": "Sequência ininterrupta de três socos e dois chutes nos pontos vitais sem permitir reação ao agressor.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Sequencia",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-saka-nagare",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Saka Nagare / Gyaku Nagare",
      "nameKanji": "逆流",
      "translation": "Fluxo Invertido contra a Corrente",
      "etymology": [
        {
          "term": "Saka",
          "meaning": "Fluxo Invertido contra a Corrente"
        }
      ],
      "mnemonic": "Reverter a direção do ataque de Uke, usando a inércia do golpe dele para arremessá-lo no sentido oposto.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Invertido",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-kasa-sagi",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Kasa Sagi",
      "nameKanji": "鵲",
      "translation": "A Pega Japonesa / Bote Rápido",
      "etymology": [
        {
          "term": "Kasa",
          "meaning": "A Pega Japonesa / Bote Rápido"
        }
      ],
      "mnemonic": "Bote rápido com as pontas dos dedos nos olhos (Ganmen) seguido de rasteira na perna dianteira.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Passaro",
        "Jin"
      ]
    },
    {
      "id": "jin-tsukikeri-ko-hanetsurube",
      "makiId": "jin",
      "category": "Tsuki / Keri Gata",
      "categoryKanji": "突・蹴型",
      "categoryTranslation": "Formas Combinadas de Combate Real (Socos e Chutes)",
      "categoryExplanation": "Cenários de combate realista onde Tori responde a sequências simultâneas de socos e chutes com controle do espaço e golpes nos Kyūsho.",
      "nameRomaji": "Kō / Hanetsurube",
      "nameKanji": "跳釣瓶",
      "translation": "O Balde da Fonte que Salta / Catapulta",
      "etymology": [
        {
          "term": "Kō",
          "meaning": "O Balde da Fonte que Salta / Catapulta"
        }
      ],
      "mnemonic": "Apoiar as duas mãos no chão e usar as pernas como alavanca de poço, catapultando o adversário por cima.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TsukiKeriGata",
        "Catapulta",
        "Jin"
      ]
    },
    {
      "id": "jin-nagekaeshi-okyo",
      "makiId": "jin",
      "category": "Nage Kaeshi",
      "categoryKanji": "投返",
      "categoryTranslation": "Contra-Golpes e Reversões de Projeções",
      "categoryExplanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro.",
      "nameRomaji": "Ōkyō",
      "nameKanji": "応響",
      "translation": "Ressonância / Contra-Projeção com Eco",
      "etymology": [
        {
          "term": "Ōkyō",
          "meaning": "Ressonância / Contra-Projeção com Eco"
        }
      ],
      "mnemonic": "Quando Uke tenta projetar de quadril, baixar a base, passar a mão por cima do pescoço dele e contra-projetá-lo para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageKaeshi",
        "Reversao",
        "Jin"
      ]
    },
    {
      "id": "jin-nagekaeshi-zu-dori",
      "makiId": "jin",
      "category": "Nage Kaeshi",
      "categoryKanji": "投返",
      "categoryTranslation": "Contra-Golpes e Reversões de Projeções",
      "categoryExplanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro.",
      "nameRomaji": "Zu Dori",
      "nameKanji": "頭捕",
      "translation": "Captura da Cabeça do Projetador",
      "etymology": [
        {
          "term": "Zu",
          "meaning": "Captura da Cabeça do Projetador"
        }
      ],
      "mnemonic": "Segurar o queixo e a nuca de quem tenta a projeção, torcendo a cabeça dele para o lado e neutralizando a queda.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageKaeshi",
        "Cabeca",
        "Jin"
      ]
    },
    {
      "id": "jin-nagekaeshi-fu-kan",
      "makiId": "jin",
      "category": "Nage Kaeshi",
      "categoryKanji": "投返",
      "categoryTranslation": "Contra-Golpes e Reversões de Projeções",
      "categoryExplanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro.",
      "nameRomaji": "Fū Kan",
      "nameKanji": "風巻",
      "translation": "O Enrolar do Vento contra a Queda",
      "etymology": [
        {
          "term": "Fū",
          "meaning": "O Enrolar do Vento contra a Queda"
        }
      ],
      "mnemonic": "Girar no ar durante a tentativa de projeção e aterrissar em pé atrás do adversário, aplicando mata-leão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageKaeshi",
        "Vento",
        "Jin"
      ]
    },
    {
      "id": "jin-nagekaeshi-sei-on",
      "makiId": "jin",
      "category": "Nage Kaeshi",
      "categoryKanji": "投返",
      "categoryTranslation": "Contra-Golpes e Reversões de Projeções",
      "categoryExplanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro.",
      "nameRomaji": "Sei On",
      "nameKanji": "声音",
      "translation": "Som Sagrado / Reversão Suave",
      "etymology": [
        {
          "term": "Sei",
          "meaning": "Som Sagrado / Reversão Suave"
        }
      ],
      "mnemonic": "Acompanhar a força da projeção de Uke sem resistência e usar o peso dele para fazê-lo bater com as costas no chão primeiro.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageKaeshi",
        "Suave",
        "Jin"
      ]
    },
    {
      "id": "jin-nagekaeshi-ugari",
      "makiId": "jin",
      "category": "Nage Kaeshi",
      "categoryKanji": "投返",
      "categoryTranslation": "Contra-Golpes e Reversões de Projeções",
      "categoryExplanation": "Respostas para quando o oponente tenta projetar ou derrubar Tori, revertendo a força dele para derrubá-lo primeiro.",
      "nameRomaji": "Ugari",
      "nameKanji": "鵜刈",
      "translation": "A Ceifa do Corvo-Marinho",
      "etymology": [
        {
          "term": "Ugari",
          "meaning": "A Ceifa do Corvo-Marinho"
        }
      ],
      "mnemonic": "Ceifar as duas pernas de Uke com os próprios pés no exato instante em que ele se inclina para tentar erguer você.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "NageKaeshi",
        "Ceifa",
        "Jin"
      ]
    },
    {
      "id": "jin-haibu-shi-sai",
      "makiId": "jin",
      "category": "Haibu Yori",
      "categoryKanji": "背部より",
      "categoryTranslation": "Defesas contra Ataques e Emboscadas pelas Costas",
      "categoryExplanation": "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori.",
      "nameRomaji": "Shi Sai",
      "nameKanji": "指塞",
      "translation": "Bloqueio e Defesa Traseira com os Dedos",
      "etymology": [
        {
          "term": "Shi",
          "meaning": "Bloqueio e Defesa Traseira com os Dedos"
        }
      ],
      "mnemonic": "Ao ser agarrado por trás, cravar os polegares nos nervos do dorso da mão de Uke e desferir cabeçada para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HaibuYori",
        "Costas",
        "Jin"
      ]
    },
    {
      "id": "jin-haibu-sakketsu",
      "makiId": "jin",
      "category": "Haibu Yori",
      "categoryKanji": "背部より",
      "categoryTranslation": "Defesas contra Ataques e Emboscadas pelas Costas",
      "categoryExplanation": "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori.",
      "nameRomaji": "Sakketsu",
      "nameKanji": "殺血",
      "translation": "Corte do Fluxo Vital contra Ataque Traseiro",
      "etymology": [
        {
          "term": "Sakketsu",
          "meaning": "Corte do Fluxo Vital contra Ataque Traseiro"
        }
      ],
      "mnemonic": "Cotovelada profunda nas costelas (Denkō) de quem abraça por trás seguida de pisão no peito do pé (Toki).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HaibuYori",
        "Costas",
        "Jin"
      ]
    },
    {
      "id": "jin-haibu-kin-kudaki",
      "makiId": "jin",
      "category": "Haibu Yori",
      "categoryKanji": "背部より",
      "categoryTranslation": "Defesas contra Ataques e Emboscadas pelas Costas",
      "categoryExplanation": "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori.",
      "nameRomaji": "Kin Kudaki",
      "nameKanji": "金砕き",
      "translation": "Destruição dos Genitais do Atacante Traseiro",
      "etymology": [
        {
          "term": "Kin",
          "meaning": "Destruição dos Genitais do Atacante Traseiro"
        }
      ],
      "mnemonic": "Golpe rápido com o punho para trás atingindo a virilha (Kin Teki) do oponente, forçando a soltura imediata.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HaibuYori",
        "Costas",
        "Jin"
      ]
    },
    {
      "id": "jin-haibu-teiken",
      "makiId": "jin",
      "category": "Haibu Yori",
      "categoryKanji": "背部より",
      "categoryTranslation": "Defesas contra Ataques e Emboscadas pelas Costas",
      "categoryExplanation": "Métodos de sobrevivência contra tentativas de estrangulamento, agarrão ou golpes vindos do ponto cego atrás de Tori.",
      "nameRomaji": "Teiken",
      "nameKanji": "締拳",
      "translation": "Punho de Aperto contra o Agarrador",
      "etymology": [
        {
          "term": "Teiken",
          "meaning": "Punho de Aperto contra o Agarrador"
        }
      ],
      "mnemonic": "Girar 180 graus por dentro dos braços do agressor traseiro e aplicar chave de braço em pé.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "HaibuYori",
        "Costas",
        "Jin"
      ]
    },
    {
      "id": "jin-muto-ken-nagare",
      "makiId": "jin",
      "category": "Mutō Dori Gata",
      "categoryKanji": "無刀捕型",
      "categoryTranslation": "Técnicas Desarmadas contra Ataque de Espada (Katana)",
      "categoryExplanation": "A arte suprema de derrotar um samurai armado com espada usando apenas o corpo, o tempo (Timing) e o vazio (Kū).",
      "nameRomaji": "Ken Nagare",
      "nameKanji": "剣流れ",
      "translation": "O Fluir da Espada / Esquiva e Desarme Desarmado",
      "etymology": [
        {
          "term": "Ken",
          "meaning": "O Fluir da Espada / Esquiva e Desarme Desarmado"
        }
      ],
      "mnemonic": "Desviar o corpo milímetros para o lado do corte vertical da Katana, aprisionando o pulso e a empunhadura para desarmar o espadachim.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "MutoDori",
        "Espada",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-kata-ude",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Kata Ude Tonsō no Kata",
      "nameKanji": "片腕遁走の型",
      "translation": "Forma de Fuga com um Braço Aprisionado",
      "etymology": [
        {
          "term": "Kata",
          "meaning": "Forma de Fuga com um Braço Aprisionado"
        }
      ],
      "mnemonic": "Girar o corpo usando o braço preso como eixo, atingir os olhos de Uke com Metsubushi e fugir na direção das sombras.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-sayu",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Sayū Tonsō no Kata",
      "nameKanji": "左右遁走の型",
      "translation": "Fuga em Zigue-Zague para Direita e Esquerda",
      "etymology": [
        {
          "term": "Sayū",
          "meaning": "Fuga em Zigue-Zague para Direita e Esquerda"
        }
      ],
      "mnemonic": "Mudar de direção repentinamente em zigue-zague cortando a visão dos perseguidores atrás de árvores ou esquinas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-kubi-suji",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Kubi Suji Tonsō no Kata",
      "nameKanji": "首筋遁走の型",
      "translation": "Fuga com Pegada no Pescoço / Colarinho Traseiro",
      "etymology": [
        {
          "term": "Kubi",
          "meaning": "Fuga com Pegada no Pescoço / Colarinho Traseiro"
        }
      ],
      "mnemonic": "Deslizar o tronco para fora da jaqueta/casaco puxado por trás, deixando o tecido nas mãos do inimigo enquanto escapa.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-atekomi",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Atekomi Tonsō Gata",
      "nameKanji": "当込遁走型",
      "translation": "Fuga com Golpe de Distração e Desorientação",
      "etymology": [
        {
          "term": "Atekomi",
          "meaning": "Fuga com Golpe de Distração e Desorientação"
        }
      ],
      "mnemonic": "Golpe rápido no nariz ou olhos apenas para desorientar o oponente por dois segundos e desaparecer velozmente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-kote-uchi",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Kote Uchi Tonsō Gata",
      "nameKanji": "小手打遁走型",
      "translation": "Fuga com Golpe no Antebraço do Perseguidor",
      "etymology": [
        {
          "term": "Kote",
          "meaning": "Fuga com Golpe no Antebraço do Perseguidor"
        }
      ],
      "mnemonic": "Bater com Shutō no nervo radial do braço que tenta agarrar você e usar o recuo para correr.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-migi-uchi",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Migi Uchi Tonsō Gata",
      "nameKanji": "右打遁走型",
      "translation": "Fuga com Golpe de Direita e Evasão Lateral",
      "etymology": [
        {
          "term": "Migi",
          "meaning": "Fuga com Golpe de Direita e Evasão Lateral"
        }
      ],
      "mnemonic": "Fintar ataque com a direita e sair em disparada pelo flanco esquerdo cego do oponente.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Fuga",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-sayu-kumogakure",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Sayū Kumogakure no Kata",
      "nameKanji": "左右雲隠れの型",
      "translation": "Desaparecimento nas Nuvens para Esquerda e Direita",
      "etymology": [
        {
          "term": "Sayū",
          "meaning": "Desaparecimento nas Nuvens para Esquerda e Direita"
        }
      ],
      "mnemonic": "Lançar pó ofuscante (Metsubushi) e mergulhar em rolamento silencioso para a vegetação lateral.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Kumogakure",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-kosei-kirigakure",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Kosei Kirigakure Gata",
      "nameKanji": "攻勢霧隠型",
      "translation": "Desaparecimento Ofensivo na Névoa",
      "etymology": [
        {
          "term": "Kosei",
          "meaning": "Desaparecimento Ofensivo na Névoa"
        }
      ],
      "mnemonic": "Simular ataque feroz para forçar o recuo do inimigo e aproveitar a fumaça/névoa para sumir sem deixar pegadas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Kirigakure",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "jin-tonso-happo-kirigakure",
      "makiId": "jin",
      "category": "Tonsō no Kata",
      "categoryKanji": "遁走の型",
      "categoryTranslation": "Formas Tradicionais de Fuga, Evasão e Desaparecimento Ninja",
      "categoryExplanation": "Estratégias de fuga rápida e tática ninja quando cercado ou em desvantagem, usando o terreno, distrações (Metsubushi) e evasão nas oito direções.",
      "nameRomaji": "Happō Kirigakure",
      "nameKanji": "八方霧隠",
      "translation": "O Grande Desaparecimento na Névoa em Oito Direções",
      "etymology": [
        {
          "term": "Happō",
          "meaning": "O Grande Desaparecimento na Névoa em Oito Direções"
        }
      ],
      "mnemonic": "Técnica suprema de evasão ninja: usar qualquer das 8 direções do terreno e escuridão para romper o cerco inimigo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "TonsoNoKata",
        "Happo",
        "Ninja",
        "Jin"
      ]
    },
    {
      "id": "buki-hanbo-kamae",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Hanbō no Kamae (Hira Ichimonji / Tate / Munen Musō / Otonashi / Kage)",
      "nameKanji": "半棒の構え",
      "translation": "Posturas Tradicionais com Bastão Curto de 90cm",
      "etymology": [
        {
          "term": "Hanbō",
          "meaning": "Posturas Tradicionais com Bastão Curto de 90cm"
        }
      ],
      "mnemonic": "Posturas discretas onde o bastão de 90cm fica oculto atrás da perna ou braço, parecendo uma bengala inofensiva.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Kamae",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-tsuki-to-furi",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Tsuki to Furi (Katate Tsuki / Hanbō no Fūri / Katate Fūri / Hachimonji Buri)",
      "nameKanji": "突と振",
      "translation": "Golpes de Estocada e Rotação em Oito do Hanbō",
      "etymology": [
        {
          "term": "Tsuki",
          "meaning": "Golpes de Estocada e Rotação em Oito do Hanbō"
        }
      ],
      "mnemonic": "Estocadas velozes com uma mão e giros em forma de oito infinito (Hachimonji) criando uma barreira impenetrável.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Ataques",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-kyokotsu-kudaki",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Kyokotsu Kudaki (Hanbō no Waza)",
      "nameKanji": "胸骨砕（半棒）",
      "translation": "Destruição do Esterno com a Ponta do Hanbō",
      "etymology": [
        {
          "term": "Kyokotsu",
          "meaning": "Destruição do Esterno com a Ponta do Hanbō"
        }
      ],
      "mnemonic": "Giro do bastão por baixo do braço do atacante e estocada da ponta diretamente no esterno (Kyokotsu).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Waza",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-hon-gyaku",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Hon Gyaku Dori (Hanbō no Waza)",
      "nameKanji": "本逆捕（半棒）",
      "translation": "Chave de Pulso Alavancada com o Hanbō",
      "etymology": [
        {
          "term": "Hon",
          "meaning": "Chave de Pulso Alavancada com o Hanbō"
        }
      ],
      "mnemonic": "Encaixar o bastão sobre o dorso da mão de Uke e usar o comprimento da madeira como alavanca de torque esmagador.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Chave",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-omote-gyaku",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Omote Gyaku Dori (Hanbō no Waza)",
      "nameKanji": "表逆捕（半棒）",
      "translation": "Torção Externa Alavancada com Hanbō",
      "etymology": [
        {
          "term": "Omote",
          "meaning": "Torção Externa Alavancada com Hanbō"
        }
      ],
      "mnemonic": "Alavancar o pulso de Uke para fora com a madeira do Hanbō, derrubando-o sem esforço físico.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Chave",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-ura-gyaku",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Ura Gyaku Dori (Hanbō no Waza)",
      "nameKanji": "裏逆捕（半棒）",
      "translation": "Torção Interna com o Bastão Curto",
      "etymology": [
        {
          "term": "Ura",
          "meaning": "Torção Interna com o Bastão Curto"
        }
      ],
      "mnemonic": "Enrolar o bastão no pulso de Uke e pressionar o cotovelo para dentro, forçando a submissão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Chave",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-take-ori",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Take Ori (Hanbō no Waza)",
      "nameKanji": "竹折（半棒）",
      "translation": "Quebra de Pulso com o Bastão",
      "etymology": [
        {
          "term": "Take",
          "meaning": "Quebra de Pulso com o Bastão"
        }
      ],
      "mnemonic": "Pressionar a extremidade do Hanbō contra as articulações dos dedos e pulso como quem quebra bambu.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Quebra",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-tsuke-iri",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Tsuke Iri (Hanbō no Waza)",
      "nameKanji": "突入（半棒）",
      "translation": "Entrada e Estocada com Penetração",
      "etymology": [
        {
          "term": "Tsuke",
          "meaning": "Entrada e Estocada com Penetração"
        }
      ],
      "mnemonic": "Avançar por dentro da guarda de Uke estocando a garganta e a virilha com as duas pontas do bastão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Estocada",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-koshi-ori",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Koshi Ori (Hanbō no Waza)",
      "nameKanji": "腰折（半棒）",
      "translation": "Quebra do Quadril com o Hanbō",
      "etymology": [
        {
          "term": "Koshi",
          "meaning": "Quebra do Quadril com o Hanbō"
        }
      ],
      "mnemonic": "Enganchar o Hanbō atrás do quadril de Uke e puxar para frente enquanto empurra o peito dele para trás.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Quadril",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-ganseki-otoshi",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Ganseki Otoshi (Hanbō no Waza)",
      "nameKanji": "岩石落（半棒）",
      "translation": "Projeção da Rocha Alavancada com Hanbō",
      "etymology": [
        {
          "term": "Ganseki",
          "meaning": "Projeção da Rocha Alavancada com Hanbō"
        }
      ],
      "mnemonic": "Passar o Hanbō sob a axila de Uke e projetá-lo sobre o ombro com o suporte da madeira rígida.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Projecao",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-oni-kudaki",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Oni Kudaki Omote (Hanbō no Waza)",
      "nameKanji": "鬼砕表（半棒）",
      "translation": "Quebra de Ombro com Hanbō",
      "etymology": [
        {
          "term": "Oni",
          "meaning": "Quebra de Ombro com Hanbō"
        }
      ],
      "mnemonic": "Travar o braço de Uke com o bastão cruzado sobre o cotovelo, alavancando o ombro para baixo.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Chave",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-kote-gaeshi",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Kote Gaeshi (Hanbō no Waza)",
      "nameKanji": "小手返（半棒）",
      "translation": "Reversão do Pulso com Giro de Bastão",
      "etymology": [
        {
          "term": "Kote",
          "meaning": "Reversão do Pulso com Giro de Bastão"
        }
      ],
      "mnemonic": "Girar o Hanbō sobre o antebraço de Uke fazendo a mão dele torcer 180 graus para o chão.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Giro",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-gyaku-otoshi",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Gyaku Otoshi (Hanbō no Waza)",
      "nameKanji": "逆落（半棒）",
      "translation": "Derrubada Invertida com Bastão",
      "etymology": [
        {
          "term": "Gyaku",
          "meaning": "Derrubada Invertida com Bastão"
        }
      ],
      "mnemonic": "Gancho de bastão no pescoço do atacante puxando-o para baixo em queda livre.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Derrubada",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-ko-kudaki",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Ko Kudaki (Hanbō no Waza)",
      "nameKanji": "小砕（半棒）",
      "translation": "Pequena Quebra Articular com Hanbō",
      "etymology": [
        {
          "term": "Ko",
          "meaning": "Pequena Quebra Articular com Hanbō"
        }
      ],
      "mnemonic": "Pressionar a ponta do bastão nos ossos finos dos dedos e nós da mão para quebrar a pegada.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Quebra",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-kasumi-gake",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Kasumi Gake (Hanbō no Waza)",
      "nameKanji": "霞掛（半棒）",
      "translation": "Golpe na Névoa / Ataque na Têmpora com Hanbō",
      "etymology": [
        {
          "term": "Kasumi",
          "meaning": "Golpe na Névoa / Ataque na Têmpora com Hanbō"
        }
      ],
      "mnemonic": "Giro rápido do bastão acertando a têmpora (Kasumi) de Uke enquanto bloqueia sua mão armada.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Kasumi",
        "Buki"
      ]
    },
    {
      "id": "buki-hanbo-kote-harai",
      "makiId": "buki",
      "category": "Hanbō Jutsu (Bastão 90cm)",
      "categoryKanji": "半棒術",
      "categoryTranslation": "Técnicas com Bastão Curto de 90cm",
      "categoryExplanation": "Manejo do Hanbō (meio bastão), arma extremamente prática e versátil para torções, chaves, estrangulamentos e golpes precisos nos ossos e nervos.",
      "nameRomaji": "Kote Harai (Hanbō no Waza)",
      "nameKanji": "小手払（半棒）",
      "translation": "Varredura do Antebraço e Desarme com Hanbō",
      "etymology": [
        {
          "term": "Kote",
          "meaning": "Varredura do Antebraço e Desarme com Hanbō"
        }
      ],
      "mnemonic": "Golpe seco na parte superior do punho de Uke, fazendo a espada ou faca voar da mão dele.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Hanbo",
        "Desarme",
        "Buki"
      ]
    },
    {
      "id": "buki-kunai-kamae-waza",
      "makiId": "buki",
      "category": "Kunai Jutsu",
      "categoryKanji": "苦無術",
      "categoryTranslation": "Técnicas com a Ferramenta e Lâmina Ninja Kunai",
      "categoryExplanation": "Uso da Kunai tradicional como arma de estocada, bloqueio e arremesso em curta distância.",
      "nameRomaji": "Kunai no Kamae & Waza (Kiri no Hito Ha / Rakka / Mizu Tori / Gorin Kudaki / Mawari Dori)",
      "nameKanji": "苦無術の構と技",
      "translation": "Posturas e Técnicas de Combate com Kunai Ninja",
      "etymology": [
        {
          "term": "Kunai",
          "meaning": "Posturas e Técnicas de Combate com Kunai Ninja"
        }
      ],
      "mnemonic": "Uso da lâmina de ferro forjado para estocar, bloquear lâminas de espada e quebrar a estrutura do adversário em curta distância.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Kunai",
        "Ninja",
        "Buki"
      ]
    },
    {
      "id": "buki-tanto-gogyo",
      "makiId": "buki",
      "category": "Tantō Jutsu (Faca / Adaga)",
      "categoryKanji": "短刀術",
      "categoryTranslation": "Técnicas com Faca e Adaga Tradicional",
      "categoryExplanation": "Combate com lâmina curta (Tantō) baseado nos Cinco Elementos (Gogyō), focado em cortes rápidos e estocadas vitais.",
      "nameRomaji": "Tantō Jutsu no Gogyō (Chi, Sui, Ka, Fū, Kū)",
      "nameKanji": "短刀術の五行",
      "translation": "As Cinco Formas Elementais de Combate com Faca",
      "etymology": [
        {
          "term": "Tantō",
          "meaning": "As Cinco Formas Elementais de Combate com Faca"
        }
      ],
      "mnemonic": "Cortes e estocadas com faca tradicional nos cinco elementos: estocada firme (Terra), corte fluido (Água), ataque fulminante (Fogo), evasão elusiva (Vento) e golpe imperceptível (Vazio).",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Tanto",
        "Faca",
        "Gogyo",
        "Buki"
      ]
    },
    {
      "id": "buki-shoto-waza",
      "makiId": "buki",
      "category": "Shotō (Espada Curta)",
      "categoryKanji": "小太刀",
      "categoryTranslation": "Técnicas com Espada Curta / Wakizashi",
      "categoryExplanation": "Manejo da espada curta (Wakizashi / Kodachi) para fechar a distância rapidamente e contra-atacar armas longas.",
      "nameRomaji": "Shotō no Waza (Hichō Ken / Shishi Geki / Jūji Ken)",
      "nameKanji": "小太刀の技",
      "translation": "Técnicas de Espada Curta / Wakizashi",
      "etymology": [
        {
          "term": "Shotō",
          "meaning": "Técnicas de Espada Curta / Wakizashi"
        }
      ],
      "mnemonic": "Entrar na guarda da espada longa com a lâmina curta, bloqueando com a mão esquerda na lâmina e desferindo corte mortal na carótida.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Shoto",
        "Wakizashi",
        "Buki"
      ]
    },
    {
      "id": "buki-biken-kamae-happo-kiri",
      "makiId": "buki",
      "category": "Biken Jutsu (Kenjutsu)",
      "categoryKanji": "秘剣術",
      "categoryTranslation": "A Arte Secreta da Espada (Katana e Shinobigatana)",
      "categoryExplanation": "A esgrima tradicional do Bujinkan: posturas (Kamae), desembainhar rápido (Nuki Gatana), cortes nas oito direções (Happō Kiri) e técnicas secretas (Biken Waza).",
      "nameRomaji": "Biken Jutsu (Kamae, Nuki Gatana, Happō Kiri & 9 Waza)",
      "nameKanji": "秘剣術（構・抜刀・八方斬・九箇条）",
      "translation": "A Arte Secreta da Espada Ninja e Samurai",
      "etymology": [
        {
          "term": "Biken",
          "meaning": "A Arte Secreta da Espada Ninja e Samurai"
        }
      ],
      "mnemonic": "O manejo sagrado da espada: desembainhar em corte (Nuki Gatana), cortes nas oito direções (Happō Kiri) e técnicas secretas como Tsuki Komi e Kochō Gaeshi.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Biken",
        "Espada",
        "Kenjutsu",
        "Buki"
      ]
    },
    {
      "id": "buki-bo-kihon-uchi-waza",
      "makiId": "buki",
      "category": "Bō Jutsu (Bastão Longo 180cm)",
      "categoryKanji": "棒術",
      "categoryTranslation": "Técnicas com Bastão Longo de 180cm (Rokushakubō)",
      "categoryExplanation": "O bastão de seis pés (Rokushakubō), permitindo ataques circulares, estocadas de longa distância e controle de múltiplos adversários.",
      "nameRomaji": "Bō Jutsu (Kamae, Kihon Gata, 14 Bō no Uchi & Bō no Waza)",
      "nameKanji": "棒術（構・基本型・十四打・六法）",
      "translation": "Técnicas Completas com Bastão Longo de 180cm (Rokushakubō)",
      "etymology": [
        {
          "term": "Bō",
          "meaning": "Técnicas Completas com Bastão Longo de 180cm (Rokushakubō)"
        }
      ],
      "mnemonic": "Aproveitar o comprimento total de 180cm para girar a madeira nos 14 ângulos de ataque (Bō no Uchi) e aplicar as técnicas de Gohō e Fune Bari.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Bojutsu",
        "BastaoLongo",
        "Buki"
      ]
    },
    {
      "id": "buki-jo-jutsu-kata",
      "makiId": "buki",
      "category": "Jō Jutsu (Bastão Médio 128cm)",
      "categoryKanji": "杖術",
      "categoryTranslation": "Técnicas com Bastão Médio de 128cm",
      "categoryExplanation": "O bastão médio de quatro pés (Jō), combinando a agilidade da espada com a distância e alavancas do bastão longo.",
      "nameRomaji": "Jōjutsu no Kata (8 Formas Tradicionais)",
      "nameKanji": "杖術の型（八型）",
      "translation": "As Oito Formas Tradicionais com Bastão Médio de 128cm",
      "etymology": [
        {
          "term": "Jōjutsu",
          "meaning": "As Oito Formas Tradicionais com Bastão Médio de 128cm"
        }
      ],
      "mnemonic": "A velocidade da espada aliada à versatilidade das duas pontas do bastão de 128cm nas formas de Jūmonji, Roppō, Kyūhō e Tachi Otoshi.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Jojutsu",
        "BastaoMedio",
        "Buki"
      ]
    },
    {
      "id": "buki-yari-jutsu-waza",
      "makiId": "buki",
      "category": "Yari Jutsu (Lança Tradicional)",
      "categoryKanji": "槍術",
      "categoryTranslation": "Técnicas com a Lança Japonesa",
      "categoryExplanation": "A lança de combate japonesa com estocadas em linha reta, desvios circulares e técnicas de perfuração de armaduras.",
      "nameRomaji": "Yari Jutsu (Kamae, Kihon Gata, Keiko Gata & 8 Yari no Waza)",
      "nameKanji": "槍術（構・基本型・稽古型・八法）",
      "translation": "A Arte Tradicional da Lança Japonesa",
      "etymology": [
        {
          "term": "Yari",
          "meaning": "A Arte Tradicional da Lança Japonesa"
        }
      ],
      "mnemonic": "Estocadas penetrantes em linha reta com a ponta de aço da lança (Tsuki no Wa, Kanpō, Hissaku) atravessando armaduras pesadas.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Yari",
        "Lanca",
        "Buki"
      ]
    },
    {
      "id": "buki-naginata-kihon-kyuho",
      "makiId": "buki",
      "category": "Naginata Jutsu (Alabarda)",
      "categoryKanji": "薙刀術",
      "categoryTranslation": "Técnicas com a Alabarda Japonesa de Lâmina Curva",
      "categoryExplanation": "Arma com lâmina curva montada em haste longa, criando arcos de corte devastadores contra infantaria e cavalaria.",
      "nameRomaji": "Naginata Jutsu (Kamae & Kihon Kyūhō - 9 Técnicas Fundamentais)",
      "nameKanji": "薙刀術（構・基本九法）",
      "translation": "As Nove Técnicas Fundamentais com Alabarda Curva",
      "etymology": [
        {
          "term": "Naginata",
          "meaning": "As Nove Técnicas Fundamentais com Alabarda Curva"
        }
      ],
      "mnemonic": "Arcos cortantes amplos com a lâmina curvada da Naginata (Sukui Age, Hataki Taoshi, Zango Nagi) ceifando pernas e cabeças a distância segura.",
      "stepByStep": {
        "initialPosition": "Início a partir da postura tradicional correspondente (Kamae) em Shizentai ou Ichimonji.",
        "ukeAction": "Ataque determinado do adversário (Tsuki de punho, corte de espada ou tentativa de agarrão/chute).",
        "toriExecution": [
          "Deslocar o corpo em Tai Sabaki em 45 graus, saindo completamente da linha de força do atacante.",
          "Aplicar Uke Nagashi ou controle do membro atacante sem colisão direta, redirecionando o vetor de impacto.",
          "Acessar o ponto de pressão vital (Kyūsho) correspondente para desestruturar a postura (Kuzushi) de Uke.",
          "Executar a torção (Gyaku), projeção (Nage) ou estocada final mantendo o equilíbrio e vigilância total (Zanshin)."
        ],
        "kuzushiGyaku": "Desequilíbrio alcançado pelo controle da cabeça, coluna ou alavanca articular no momento do ataque.",
        "finishNotes": "Mantenha Zanshin (consciência atenta) e retorne à postura natural de controle do espaço (Kamae)."
      },
      "henka": [
        {
          "title": "Variação Dinâmica (Henka)",
          "description": "Aplicação fluida adaptada à reação e resistência do agressor."
        }
      ],
      "kyushoRelated": [
        "Suigetsu",
        "Matsukaze"
      ],
      "videoUrl": "",
      "tags": [
        "Naginata",
        "Alabarda",
        "Buki"
      ]
    }
  ],
  "kyushoList": [
    {
      "id": "kyusho-1",
      "number": 1,
      "name": "Akiretsu",
      "kanji": "穐烈",
      "translation": "Sutura Escamosa do Crânio / Têmpora Superior",
      "location": "Na sutura escamosa temporal, logo acima e à frente da orelha.",
      "effect": "Trauma craniano, desorientação sensorial e perda imediata de equilíbrio.",
      "view": "front",
      "x": 42,
      "y": 8
    },
    {
      "id": "kyusho-2",
      "number": 2,
      "name": "Amado",
      "kanji": "天門",
      "translation": "Porta do Céu / Atrás do Lóbulo da Orelha",
      "location": "Na depressão imediatamente atrás do lóbulo da orelha, sobre o processo mastoide.",
      "effect": "Paralisia dos nervos faciais e colapso postural.",
      "view": "front",
      "x": 39,
      "y": 11
    },
    {
      "id": "kyusho-3",
      "number": 3,
      "name": "Asagasumi",
      "kanji": "朝霞",
      "translation": "Névoa da Manhã / Queixo e Ponto Mental",
      "location": "Na ponta do queixo (sínfise mentual), no ponto central inferior.",
      "effect": "Nocaute instantâneo por concussão cerebral devido à rotação mandibular.",
      "view": "front",
      "x": 50,
      "y": 14.5
    },
    {
      "id": "kyusho-4",
      "number": 4,
      "name": "Bitei Kotsu",
      "kanji": "尾底骨",
      "translation": "Osso do Cóccix",
      "location": "Na ponta inferior da coluna vertebral (cóccix).",
      "effect": "Dor aguda incapacitante irradiando pela medula, perda de sustentação das pernas.",
      "view": "back",
      "x": 50,
      "y": 55
    },
    {
      "id": "kyusho-5",
      "number": 5,
      "name": "Buda (Kobura)",
      "kanji": "伏陀",
      "translation": "Ventre da Panturrilha",
      "location": "No centro carnudo do músculo gastrocnêmio da panturrilha.",
      "effect": "Cãibra imediata e incapacidade de apoiar o peso do corpo na perna.",
      "view": "back",
      "x": 43,
      "y": 83
    },
    {
      "id": "kyusho-6",
      "number": 6,
      "name": "Butsumetsu",
      "kanji": "仏滅",
      "translation": "Morte de Buda / Costelas Flutuantes Esquerdas",
      "location": "Nas costelas flutuantes do lado esquerdo do tronco, na região do baço.",
      "effect": "Hemorragia interna severa, choque hipovolêmico e desmaio.",
      "view": "front",
      "x": 41,
      "y": 34
    },
    {
      "id": "kyusho-7",
      "number": 7,
      "name": "Denkō",
      "kanji": "電光",
      "translation": "Relâmpago / Costelas Flutuantes Direitas",
      "location": "Nas costelas flutuantes do lado direito do corpo, sobre o fígado.",
      "effect": "Choque hepático imediato, falta de ar e colapso postural.",
      "view": "front",
      "x": 59,
      "y": 34
    },
    {
      "id": "kyusho-8",
      "number": 8,
      "name": "Dokko",
      "kanji": "独鈷",
      "translation": "Vajra / Base Suboccipital do Crânio",
      "location": "Na depressão oca na base posterior do crânio, abaixo do osso occipital.",
      "effect": "Perda imediata de consciência e supressão dos reflexos motores.",
      "view": "back",
      "x": 45,
      "y": 9.5
    },
    {
      "id": "kyusho-9",
      "number": 9,
      "name": "Gankotsu",
      "kanji": "顔骨",
      "translation": "Osso Zigomático / Maçã do Rosto",
      "location": "Na proeminência óssea zigomática, abaixo da órbita ocular.",
      "effect": "Fratura facial, cegueira momentânea por lacrimejamento e atordoamento.",
      "view": "front",
      "x": 44,
      "y": 9.8
    },
    {
      "id": "kyusho-10",
      "number": 10,
      "name": "Ganmen",
      "kanji": "顔面",
      "translation": "Face Central / Ponte Nasal e Olhos",
      "location": "Na ponte nasal entre os olhos (násio).",
      "effect": "Fratura dos ossos nasais, hemorragia profusa e lacrimejamento involuntário total.",
      "view": "front",
      "x": 50,
      "y": 8.8
    },
    {
      "id": "kyusho-11",
      "number": 11,
      "name": "Getsuei",
      "kanji": "月影",
      "translation": "Sombra da Lua / Flanco Direito Lateral",
      "location": "No flanco direito inferior do abdômen, acima da crista ilíaca.",
      "effect": "Choque visceral e flexão involuntária do tronco para frente.",
      "view": "front",
      "x": 61,
      "y": 39
    },
    {
      "id": "kyusho-12",
      "number": 12,
      "name": "Gorin",
      "kanji": "五輪",
      "translation": "Os Cinco Círculos / Pontos Periumbilicais",
      "location": "Cinco pontos vitais dispostos em círculo ao redor do umbigo.",
      "effect": "Espasmos abdominais graves e interrupção do fluxo respiratório.",
      "view": "front",
      "x": 50,
      "y": 40
    },
    {
      "id": "kyusho-13",
      "number": 13,
      "name": "Hadome",
      "kanji": "歯止",
      "translation": "Parada dos Dentes / Abaixo da Base Nasal",
      "location": "Na área maxilar logo abaixo da base do nariz e acima do lábio superior.",
      "effect": "Dor neural aguda nos ramos trigêmeos e perda de foco visual.",
      "view": "front",
      "x": 50,
      "y": 11.5
    },
    {
      "id": "kyusho-14",
      "number": 14,
      "name": "Hayashi",
      "kanji": "林",
      "translation": "Bosque / Flanco Esquerdo Lateral",
      "location": "No flanco esquerdo inferior do abdômen, acima da crista ilíaca.",
      "effect": "Dano no cólon descendente, dor aguda e incapacidade de manter a postura ereta.",
      "view": "front",
      "x": 39,
      "y": 39
    },
    {
      "id": "kyusho-15",
      "number": 15,
      "name": "Hiji Hoshi",
      "kanji": "肘星",
      "translation": "Estrela do Cotovelo / Nervo Ulnar",
      "location": "Na ponta do cotovelo, entre o olécrano e o epicôndilo medial.",
      "effect": "Dormência instantânea e paralisia do braço e mão (perda da empunhadura).",
      "view": "back",
      "x": 26,
      "y": 36
    },
    {
      "id": "kyusho-16",
      "number": 16,
      "name": "Hiryūran",
      "kanji": "飛竜卵",
      "translation": "Ovos do Dragão Voador / Testículos",
      "location": "Na região escrotal / testículos.",
      "effect": "Choque neurogênico extremo, incapacitação total e perda de consciência.",
      "view": "front",
      "x": 50,
      "y": 53.5
    },
    {
      "id": "kyusho-17",
      "number": 17,
      "name": "Hiza",
      "kanji": "膝",
      "translation": "Joelho e Articulação Patelar",
      "location": "Na face lateral e frontal da patela e ligamentos do joelho.",
      "effect": "Destruição do menisco, luxação patelar e colapso da locomoção.",
      "view": "front",
      "x": 44,
      "y": 69
    },
    {
      "id": "kyusho-18",
      "number": 18,
      "name": "Inazuma",
      "kanji": "稲妻",
      "translation": "Relâmpago / Crista Ilíaca Direita",
      "location": "Na crista ilíaca óssea do lado direito da cintura.",
      "effect": "Incapacidade de girar o quadril e fraqueza na perna correspondente.",
      "view": "front",
      "x": 62,
      "y": 44
    },
    {
      "id": "kyusho-19",
      "number": 19,
      "name": "Jakkin",
      "kanji": "雀筋",
      "translation": "Músculo do Pardal / Nervo Braquial Interno",
      "location": "Na face interna do braço, entre o bíceps e o tríceps sobre a artéria braquial.",
      "effect": "Inutilização do braço atacante e perda total da força nos dedos.",
      "view": "front",
      "x": 32,
      "y": 28
    },
    {
      "id": "kyusho-20",
      "number": 20,
      "name": "Jinchū",
      "kanji": "人中",
      "translation": "Centro do Homem / Filtro Labial",
      "location": "No sulco vertical entre a base do nariz e o lábio superior.",
      "effect": "Hemorragia nasal, choque no sistema nervoso central e desmaio.",
      "view": "front",
      "x": 50,
      "y": 12.8
    },
    {
      "id": "kyusho-21",
      "number": 21,
      "name": "Jūjiro",
      "kanji": "十字路",
      "translation": "Cruzamento / Trapézio e Clavícula",
      "location": "No topo do ombro, na junção da clavícula com o trapézio.",
      "effect": "Queda imediata do braço e perda de sustentação da escápula.",
      "view": "back",
      "x": 36,
      "y": 19
    },
    {
      "id": "kyusho-22",
      "number": 22,
      "name": "Kage",
      "kanji": "陰",
      "translation": "Sombra / Baixo Ventre Suprapúbico",
      "location": "Na linha média do baixo abdômen, logo acima do osso púbico.",
      "effect": "Espasmo na bexiga, dor lancinante e colapso muscular.",
      "view": "front",
      "x": 50,
      "y": 48
    },
    {
      "id": "kyusho-23",
      "number": 23,
      "name": "Kaku",
      "kanji": "角",
      "translation": "Ângulo da Mandíbula",
      "location": "No ângulo ósseo inferior da mandíbula, abaixo da orelha.",
      "effect": "Fratura mandibular, deslocamento da ATM e nocaute por concussão.",
      "view": "front",
      "x": 58,
      "y": 13
    },
    {
      "id": "kyusho-24",
      "number": 24,
      "name": "Kappō",
      "kanji": "活法",
      "translation": "Ponto Interescapular / Coluna Torácica",
      "location": "Na coluna vertebral dorsal, exatamente entre as duas escápulas.",
      "effect": "Parada respiratória momentânea e choque nas vértebras torácicas.",
      "view": "back",
      "x": 50,
      "y": 27
    },
    {
      "id": "kyusho-25",
      "number": 25,
      "name": "Kasumi",
      "kanji": "霞",
      "translation": "Névoa / Têmpora e Artéria Temporal",
      "location": "Na depressão da têmpora, na fossa temporal.",
      "effect": "Nocaute instantâneo, hemorragia craniana e perda visual.",
      "view": "front",
      "x": 38,
      "y": 8.5
    },
    {
      "id": "kyusho-26",
      "number": 26,
      "name": "Kata Hoshi",
      "kanji": "肩星",
      "translation": "Estrela do Ombro",
      "location": "Na cavidade central anterior da articulação do ombro.",
      "effect": "Luxação da cabeça do úmero e impossibilidade de empunhar armas.",
      "view": "front",
      "x": 28,
      "y": 22
    },
    {
      "id": "kyusho-27",
      "number": 27,
      "name": "Keichū",
      "kanji": "頸中",
      "translation": "Centro da Nuca / Atlas",
      "location": "No centro da nuca, na primeira vértebra cervical (Atlas).",
      "effect": "Dano severo no tronco cerebral, paralisia geral e risco de morte.",
      "view": "back",
      "x": 50,
      "y": 11
    },
    {
      "id": "kyusho-28",
      "number": 28,
      "name": "Kimon",
      "kanji": "鬼門",
      "translation": "Portão do Demônio / Peitoral Subclavicular",
      "location": "Na parte superior do peitoral, abaixo da clavícula.",
      "effect": "Choque pulmonar, arritmia cardíaca e perda de força no membro superior.",
      "view": "front",
      "x": 38,
      "y": 23
    },
    {
      "id": "kyusho-29",
      "number": 29,
      "name": "Kin",
      "kanji": "金",
      "translation": "Ouro / Virilha e Artéria Femoral",
      "location": "Na prega da virilha, sobre o pulso da artéria femoral.",
      "effect": "Hemorragia arterial grave e perda imediata de apoio na perna.",
      "view": "front",
      "x": 55,
      "y": 51
    },
    {
      "id": "kyusho-30",
      "number": 30,
      "name": "Kin Teki",
      "kanji": "金的",
      "translation": "Alvo Dourado / Testículos",
      "location": "No centro dos órgãos genitais masculinos.",
      "effect": "Colapso imediato por choque neurogênico extremo.",
      "view": "front",
      "x": 50,
      "y": 52
    },
    {
      "id": "kyusho-31",
      "number": 31,
      "name": "Kobura",
      "kanji": "子腹",
      "translation": "Ventre da Panturrilha Lateral",
      "location": "Na face lateral externa do músculo da panturrilha.",
      "effect": "Cãibra violenta e incapacidade de flexão plantar.",
      "view": "front",
      "x": 37,
      "y": 78
    },
    {
      "id": "kyusho-32",
      "number": 32,
      "name": "Koe",
      "kanji": "小枝",
      "translation": "Pequeno Galho / Prega Inguinal Superior",
      "location": "Na parte superior da prega inguinal, próximo ao osso púbico.",
      "effect": "Perda de força muscular nos flexores do quadril.",
      "view": "front",
      "x": 44,
      "y": 49
    },
    {
      "id": "kyusho-33",
      "number": 33,
      "name": "Kote",
      "kanji": "小手",
      "translation": "Antebraço Dorsal",
      "location": "Na face posterior/dorsal do antebraço, sobre o rádio.",
      "effect": "Perda da empunhadura da espada e dormência nos extensores.",
      "view": "front",
      "x": 22,
      "y": 38
    },
    {
      "id": "kyusho-34",
      "number": 34,
      "name": "Kubite",
      "kanji": "首手",
      "translation": "Pescoço da Mão / Dobra do Pulso",
      "location": "Na dobra anterior do pulso, sobre o nervo mediano.",
      "effect": "Abertura involuntária dos dedos e queda de armas.",
      "view": "front",
      "x": 19,
      "y": 46
    },
    {
      "id": "kyusho-35",
      "number": 35,
      "name": "Kurubushi",
      "kanji": "踝",
      "translation": "Maléolo do Tornozelo",
      "location": "Na proeminência óssea lateral ou medial do tornozelo.",
      "effect": "Fratura óssea ou entorse grave incapacitando a marcha.",
      "view": "front",
      "x": 42,
      "y": 92
    },
    {
      "id": "kyusho-36",
      "number": 36,
      "name": "Kyokotsu",
      "kanji": "胸骨",
      "translation": "Osso do Esterno",
      "location": "No centro plano do osso esterno, na linha média torácica.",
      "effect": "Fratura esternal, asfixia momentânea e choque cardíaco.",
      "view": "front",
      "x": 50,
      "y": 24
    },
    {
      "id": "kyusho-37",
      "number": 37,
      "name": "Matsukaze",
      "kanji": "松風",
      "translation": "Vento nos Pinheiros / Carótida Esquerda",
      "location": "Na face ântero-lateral esquerda do pescoço, sobre a artéria carótida.",
      "effect": "Isquemia cerebral instantânea e desmaio em 3 segundos.",
      "view": "front",
      "x": 44,
      "y": 15
    },
    {
      "id": "kyusho-38",
      "number": 38,
      "name": "Menbu",
      "kanji": "面部",
      "translation": "Centro da Testa",
      "location": "No centro do osso frontal da testa.",
      "effect": "Concussão cerebral, tontura e perda de orientação espacial.",
      "view": "front",
      "x": 50,
      "y": 6
    },
    {
      "id": "kyusho-39",
      "number": 39,
      "name": "Murasame",
      "kanji": "村雨",
      "translation": "Chuva na Aldeia / Carótida Direita e Fosseta Esternal",
      "location": "Na face lateral direita do pescoço e na cavidade acima do esterno.",
      "effect": "Colapso circulatório imediato e fechamento da traqueia.",
      "view": "front",
      "x": 56,
      "y": 15
    },
    {
      "id": "kyusho-40",
      "number": 40,
      "name": "Nagare",
      "kanji": "流",
      "translation": "Fluxo / Veia Cefálica do Antebraço",
      "location": "Na face interna do antebraço, abaixo da dobra do cotovelo.",
      "effect": "Choque no nervo radial e perda de controle motor fino.",
      "view": "front",
      "x": 26,
      "y": 35
    },
    {
      "id": "kyusho-41",
      "number": 41,
      "name": "Omote Gyaku",
      "kanji": "表逆",
      "translation": "Dorso do Pulso e Tendões Extensores",
      "location": "Na face dorsal da articulação radiocárpica.",
      "effect": "Rompimento ligamentar do pulso e queda inevitável ao solo.",
      "view": "front",
      "x": 18,
      "y": 47
    },
    {
      "id": "kyusho-42",
      "number": 42,
      "name": "Ryūfū",
      "kanji": "竜風",
      "translation": "Vento do Dragão / Nuca Lateral",
      "location": "Na face lateral posterior do pescoço, borda do trapézio.",
      "effect": "Rigidez cervical súbita e desmaio por reflexo vagal.",
      "view": "back",
      "x": 57,
      "y": 12
    },
    {
      "id": "kyusho-43",
      "number": 43,
      "name": "Ryūge",
      "kanji": "竜下",
      "translation": "Abaixo do Dragão / Submandibular",
      "location": "Na cavidade mole logo abaixo do queixo e mandíbula.",
      "effect": "Dano nas glândulas salivares e nervo lingual, asfixia reflexa.",
      "view": "front",
      "x": 50,
      "y": 16
    },
    {
      "id": "kyusho-44",
      "number": 44,
      "name": "Ryūmon",
      "kanji": "竜門",
      "translation": "Portão do Dragão / Fossa Supraclavicular",
      "location": "Na depressão acima da clavícula (fossa supraclavicular).",
      "effect": "Pressão no plexo braquial e colapso de todo o membro superior.",
      "view": "front",
      "x": 42,
      "y": 18
    },
    {
      "id": "kyusho-45",
      "number": 45,
      "name": "Sai",
      "kanji": "塞",
      "translation": "Obstrução / Coxa Interna",
      "location": "Na face interna da coxa, sobre o canal dos adutores.",
      "effect": "Dormência da perna e perda de controle da passada.",
      "view": "front",
      "x": 47,
      "y": 58
    },
    {
      "id": "kyusho-46",
      "number": 46,
      "name": "Shichibatsu",
      "kanji": "七罰",
      "translation": "Os Sete Castigos / 7ª Vértebra Cervical",
      "location": "Na proeminência da sétima vértebra cervical (C7) na base do pescoço.",
      "effect": "Choque na medula espinhal, dormência nos quatro membros.",
      "view": "back",
      "x": 50,
      "y": 15
    },
    {
      "id": "kyusho-47",
      "number": 47,
      "name": "Suigetsu",
      "kanji": "水月",
      "translation": "Lua na Água / Plexo Solar",
      "location": "Na cavidade epigástrica imediatamente abaixo do apêndice xifoide.",
      "effect": "Paralisia do diafragma, asfixia profunda e inconsciência.",
      "view": "front",
      "x": 50,
      "y": 29
    },
    {
      "id": "kyusho-48",
      "number": 48,
      "name": "Suzu",
      "kanji": "鈴",
      "translation": "Sino / Base Púbica",
      "location": "Na sínfise púbica inferior.",
      "effect": "Dor óssea intensa e incapacidade de flexão das pernas.",
      "view": "front",
      "x": 50,
      "y": 51
    },
    {
      "id": "kyusho-49",
      "number": 49,
      "name": "Tentō",
      "kanji": "天頭",
      "translation": "Topo do Céu / Fontanela Superior",
      "location": "No topo do crânio, no ponto de encontro das suturas parietais.",
      "effect": "Dano cerebral difuso, perda de equilíbrio e coma.",
      "view": "front",
      "x": 50,
      "y": 3
    },
    {
      "id": "kyusho-50",
      "number": 50,
      "name": "Toki",
      "kanji": "独生",
      "translation": "Vida Solitária / Peito do Pé",
      "location": "No dorso do pé, na junção dos ossos cuneiformes com os metatarsos.",
      "effect": "Fratura óssea tarsal e impossibilidade de apoiar o pé no chão.",
      "view": "front",
      "x": 41,
      "y": 96
    },
    {
      "id": "kyusho-51",
      "number": 51,
      "name": "Tsune",
      "kanji": "常",
      "translation": "Constância / Canela e Borda da Tíbia",
      "location": "No osso da tíbia (canela), face ântero-medial exposta.",
      "effect": "Dor periosteal agonizante e recuo involuntário da perna.",
      "view": "front",
      "x": 44,
      "y": 78
    },
    {
      "id": "kyusho-52",
      "number": 52,
      "name": "Tsuyu Gasumi",
      "kanji": "露霞",
      "translation": "Névoa de Orvalho / Atrás da Mandíbula",
      "location": "Atrás do ângulo da mandíbula, abaixo da orelha.",
      "effect": "Choque no nervo facial e desorientação vestibular.",
      "view": "front",
      "x": 59,
      "y": 12
    },
    {
      "id": "kyusho-53",
      "number": 53,
      "name": "Uko",
      "kanji": "右虎",
      "translation": "Tigre Direito / Lado Direito do Pescoço",
      "location": "Na musculatura lateral direita do pescoço.",
      "effect": "Espasmo cervical e queda da cabeça para o lado.",
      "view": "front",
      "x": 57,
      "y": 16.5
    },
    {
      "id": "kyusho-54",
      "number": 54,
      "name": "Ura Gyaku",
      "kanji": "裏逆",
      "translation": "Palma Interna e Tendões Flexores",
      "location": "Na base da palma da mão e tendões flexores do punho.",
      "effect": "Hiperextensão forçada e queda imediata de joelhos.",
      "view": "front",
      "x": 20,
      "y": 48
    },
    {
      "id": "kyusho-55",
      "number": 55,
      "name": "Usai",
      "kanji": "右塞",
      "translation": "Obstrução Direita / Coxa Interna Superior",
      "location": "Na face interna superior da coxa direita.",
      "effect": "Incapacidade de manter a perna direita estendida.",
      "view": "front",
      "x": 53,
      "y": 57
    },
    {
      "id": "kyusho-56",
      "number": 56,
      "name": "Usai 2",
      "kanji": "右塞二",
      "translation": "Obstrução Direita Distal / Coxa Média",
      "location": "Na face interna média da coxa direita.",
      "effect": "Fraqueza profunda no quadríceps e colapso da base.",
      "view": "front",
      "x": 53,
      "y": 62
    },
    {
      "id": "kyusho-57",
      "number": 57,
      "name": "Ushiro Getsuei",
      "kanji": "後月影",
      "translation": "Sombra da Lua Traseira / Rim Direito",
      "location": "Na região lombar posterior direita, na altura do rim.",
      "effect": "Hemorragia renal traumática e choque neurovisceral.",
      "view": "back",
      "x": 58,
      "y": 39
    },
    {
      "id": "kyusho-58",
      "number": 58,
      "name": "Ushiro Inazuma",
      "kanji": "後稲妻",
      "translation": "Relâmpago Traseiro / Rim Esquerdo",
      "location": "Na região lombar posterior esquerda, na altura do rim.",
      "effect": "Dano renal severo, dor lombar aguda e paralisia postural.",
      "view": "back",
      "x": 42,
      "y": 39
    },
    {
      "id": "kyusho-59",
      "number": 59,
      "name": "Yaku",
      "kanji": "躍",
      "translation": "Salto / Nervo Ciático Posterior",
      "location": "Na fossa poplítea (atrás do joelho), sobre o nervo ciático.",
      "effect": "Desabamento instantâneo do joelho e perda total da base de sustentação.",
      "view": "back",
      "x": 44,
      "y": 69
    },
    {
      "id": "kyusho-60",
      "number": 60,
      "name": "Yūgasumi",
      "kanji": "夕霞",
      "translation": "Névoa da Tarde / Canto Externo do Olho",
      "location": "Na junção óssea no canto externo da órbita ocular.",
      "effect": "Cegueira temporária, dor aguda e perda do reflexo de guarda.",
      "view": "front",
      "x": 56,
      "y": 8.5
    }
  ]
};

if (typeof window !== "undefined") {
  window.NENRIKI_DATABASE = NENRIKI_DATABASE;
}

if (typeof module !== "undefined") {
  module.exports = NENRIKI_DATABASE;
}
