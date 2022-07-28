const cgList = [{
    key: '0000',
    name: 'Minions',
    image: require('../assets/images/minions.png'),
    description: 'Tropas são unidades associadas a um dos times. Elas surgem periodicamente do próprio nexus e avançam '+
    'pelas rotas em direção ao nexus inimigo. Tropas atacam automaticamente qualquer unidade inimiga ou estrutura que '+
    'encontrarem no seu caminho. São controladas por inteligência artificial, e somente dominam o uso de atques básicos. '+
    'No jogo existem quatro tipos de tropas:\n\nAs Tropas do time azul e vermelho nascem a cada 30 segundos no nexus para '+
    'ajudar os campeões. As tropas começam a nascer 1 minuto e 30 segundos depois que o jogo começa e a cada 3 minutos '+
    'vão ficar mais fortes com cada tipo de tropa ganhando status diferentes. As Tropas dão 50% de dano a mais em torres '+
    'e 15% a menos em campeões inimigos.\n\nTropas corpo-a-corpo lutam de Corpo-a-Corpo com tropas ou campeões inimigos. '+
    'São resistentes porem não possuem grande dano.\n\nTropas Magas atacam inimigos à uma distância de 550 com fagulhas de '+
    'energia que são da mesma cor do seu time. Elas causam mais dano do que as Tropas Corpo-a-Corpo mas possuem defesa '+
    'inferior.\n\nTropas Grandes atacam inimigos à uma distância de 450 com bolas de canhão. Elas recebem 30% de dano a '+
    'menos de torres. Tropas grandes tem a maior quantidade de vida do que qualquer outra tropa e causam mais dano do que '+
    'qualquer outra tropa Regular.\n\nUma tropa grande que é promovida se torna um Canhão Anti-Torre (ATC sigla em Inglês) '+
    'e então recebe Velocidade de Ataque, Armadura, Resistência Mágica e Vida além de dar o ouro das tropas inimigas '+
    'eliminadas por ele, ao campeão que as promoveu. As ATCs são as melhores e mais fortes tropas das tropas regulares.'+
    '\n\nUma Super Tropa nasce em hordas na rota em que for destruído o inibidor inimigo. Elas vão continuar a nascer até '+
    'que o inibidor que foi destruído tenha ressurgido (o qual leva 4 minutos.) Ela substitui as tropas grandes e '+
    'igualmente recebe 30% a menos de dano proveniente de torres. Elas também dão mais dano e tem mais vida do que qualquer '+
    'outra tropa, porém, tem menor armadura e resistência mágica.\n\nComportamento\n\nUma Super Tropa nasce em hordas na '+
    'rota em que for destruído o inibidor inimigo. Elas vão continuar a nascer até que o inibidor que foi destruído tenha '+
    'ressurgido (o qual leva 4 minutos.) Ela substitui as tropas grandes e igualmente recebe 30% a menos de dano '+
    'proveniente de torres. Elas também dão mais dano e tem mais vida do que qualquer outra tropa, porém, tem menor '+
    'armadura e resistência mágica.\n\nNotas\n\nSe campeões não interferirem na batalha, um time de tropas vai '+
    'eventualmente ganhar o jogo.\nO time que vai ganhar vai ser totalmente aleatório, dependendo de qual time focar as '+
    'tropas inimigas mais corretamente.\nQuando tropas procuram por um alvo, é possivel que um campeão seja o selecionado '+
    'várias vezes por uma Tropa.\nTropas podem te selecionar várias vezes e seguir você até mesmo na selva.',
},
{
    key: '0001',
    name: 'Aronguejo',
    image: require('../assets/images/aronguejo.jpg'),
    description: 'O Aronguejo é um mini objetivo no jogo para os caçadores de selva, primeiro que ele concede bastante '+
    'ouro, regenera mana e deixa a fonte de velocidade no terreno e por fim que ele é um campo extra de fácil eliminação '+
    'que acaba não custando vida do caçador.\n\nO aronguejo nasce pela primeira vez aos 3:15, ele possui um escudo que é '+
    'quebraco quando utilizado um cc.\n\nAo morrer ele volta ao seu local de nascimento em frente ao covil do Dragão ou '+
    'Barão e se torna uma fonte de velocidade que concede visão em área e um buff de velocidade de movimento aos campeões '+
    'do time que o abateu quando passam por cima da fonte.\n\nProcure fazer objetivos quando você tiver matado o arauto, '+
    'dessa forma terá vantagem de terreno caso os inimigos contestem o objetivo.',
},
{
    key: '0002',
    name: 'Arauto',
    image: require('../assets/images/arauto.jpg'),
    description: 'O primeiro arauto nasce aos 8 minutos de partida e serve para conseguir derrubar uma primeira torre e '+
    'conseguir o ouro total das barricadas + bônus da primeira torre abatida.\n\n O arauto possui um olho nas costas, '+
    'sempre que o olho estiver aberto, bata nele para que o arauto sofra um dano considerável. Após isso, o arauto irá '+
    'fechar o olho e dar uma patada com mais dano que os ataques comuns dele, você pode esquivar andando para o lado '+
    'oposto da patada.\n\nApós morrer, o arauto deixa um buff no chao, passe em cima para adquirir. Esse buff tem tempo '+
    'limitado, acelera o recall e permite que solte o arauto, que ataca tropas, e, caso esteja perto de uma torre, '+
    'dá uma cabeçada nela com cerca de 2100 de dano real.\n\nO melhor momento para soltar um arauto é quando está atacando '+
    'uma torre e já quebrou 2 barricadas, o tempo que o arauto leva para nascer normalmente é o tempo que você leva para '+
    'deixar a o resto da torre com cerca de 2100 de vida, e ai o arauto finaliza a torre. Lembre-se também de soltar o '+
    'arauto antes dos 14 minutos para que potencialize sues ganhos de ouro com as barricadas das torres.',
},
{
    key: '0003',
    name: 'Dragões',
    image: require('../assets/images/dragoes.jpg'),
    description: 'No LoL, os Dragões são poderosas criaturas que dão grandes vantagens para toda sua equipe quando '+
    'derrotados. Além de efeitos de status permanentes, eles também criam mudanças no mapa e oferecem uma poderosa '+
    '"Alma elemental" que fortalece toda sua equipe até o final do jogo. Eles são realmente incríveis!\n\nDragão das Nuvens'+
    '\n\nConsiderado por muitos como o menos favorito de todo o jogo, o Dragão das Nuvens é um dos mais comuns de aparecer. '+
    'Seus buffs são mais vantajosos para alguns campeões específicos e isso faz com que conquista-lo não seja uma grande '+
    'prioridade. Veja suas fases:\n\nEfeito Básico: a cada Dragão das Nuvens conquistado, a equipe recebe +3.5% de '+
    'velocidade de movimento fora de combate e +3.5% de resistência a lentidão;\n\nTerreno: o Dragão das Nuvens faz '+
    'surgir correntes de ar por toda a selva do mapa, causando um buff de velocidade de movimento para campeões que '+
    'passarem pela área;\n\nAlma do Dragão: ao atingir adversários com ataques básicos ou habilidades, o tempo de recarga '+
    'das habilidades base é reduzido.\n\nDragão da Montanha\n\nExtremamente poderoso em algumas situações, o Dragão da '+
    'Montanha é perfeito para times que precisam de um pouco mais de resistência. É a alma favorita dos campeões tanques '+
    'que buscam não morrer no jogo. Sua alma proporciona também novos espaços para combos em curta distância. Veja suas '+
    'fases:\n\nEfeito Básico: a cada Dragão da Montanha conquistado, a equipe recebe +6% de armadura e resistência '+
    'mágica;\n\nTerreno: o Dragão da Montanha realiza um deslocamento sísmico por todo o mapa, fazendo com que enormes '+
    'paredes de pedra surjam do chão;\n\nAlma do Dragão: após ficar sem sofrer dano por cinco segundos ou mais, o campeão '+
    'ganha um escudo que dura até ser destruído por um adversário. A força desse escudo escala de acordo com o seu dano '+
    'de ataque, poder de habilidade e vida adicional.\n\nDragão Infernal\n\nUm dos mais poderosos de todo o jogo, o Dragão '+
    'Infernal pode alterar o rumo de algumas partidas. Sem dúvida, é o preferido de campeões assassinos que desejam seu '+
    'dano amplificado. Sua alma causa uma quantidade massiva de dano na parte final do jogo e isso pode te ajudar a vencer '+
    'uma partida disputada. Veja suas fases:\n\nEfeito Básico: a cada Dragão Infernal conquistado, a equipe recebe +4% de '+
    'dano de ataque e poder de habilidade;\n\nTerreno: o Dragão Infernal cospe fogo por todo o mapa, queimando arbustos e '+
    'abrindo novos caminhos de passagem;\n\nAlma do Dragão: a cada três segundos ou mais, o próximo ataque básico ou '+
    'habilidade de dano causará uma pequena explosão em área no alvo acertado.\n\nDragão do Oceano\n\nO preferido dos '+
    'jogadores profissionais, conquistar o Dragão do Oceano pode facilitar sua vitória. Sua alma é útil para todos os '+
    'tipos de campeões dentro do jogo. Caso apareça em sua partida, criar estratégias que visem a realização do dragão '+
    'pode ser o segredo para um resultado positivo. Veja suas fases:\n\nEfeito Básico: a cada Dragão do Oceano '+
    'conquistado, a equipe terá 2.5% de sua vida perdida restaurada a cada 5 segundos;\n\nTerreno: o Dragão do Oceano '+
    'encharca o mapa com uma chuva continua, fazendo com que novos arbustos e poças dágua surjam no terreno. Plantas com '+
    'frutomel também nascem em novos lugares;\n\nAlma do Dragão: ao causar qualquer tipo de dano à um adversário, o campeão '+
    'recebe uma forte regeneração de vida e recursos (como mana ou energia), por três segundos.\n\nDragão Hextec\n\nUma das '+
    'novas almas, o Dragão Hextec vem como uma alternativa ao dragão infernal para equipes que desejam buff de dano. Sua '+
    'modificação de terreno permite a criação de novas jogadas rápidas pelo mapa e pode fazer a diferença durante a '+
    'partida. Veja suas fases:\n\nEfeito Básico: a cada Dragão Hextec conquistado, a equipe recebe um aumento de 5 na '+
    'aceleração de habilidade e 5% de velocidade de ataque;\n\nTerreno: o Dragão Hextec cria portais pelo mapa, permitindo '+
    'que os campeões viajem de um local para outro rapidamente;\n\nAlma do Dragão: a equipe que conquistou a alma recebe '+
    'uma habilidade de relâmpagos em seus ataques ou habilidades de dano que causa lentidão, similar ao antigo item "Faca '+
    'de Statikk".\n\nDragão Ancião\n\n'+
    'O mais poderoso de todo o League of Legends, o Dragão Ancião torna as suas partidas muito mais simples após '+
    'conquistá-lo. Seu buff é capaz de vencer uma luta sozinho e deve ser prioridade máxima dentro do jogo. Contudo, ele '+
    'só aparece após alguma das equipes conquistar quatro dragões. Não possui efeitos básicos e nem modificações de '+
    'terreno.\n\nBuff do Ancião: durante um período de 150 segundos, qualquer inimigo que sofrer dano de um campeão com o '+
    'buff do ancião será automaticamente executado quando estiver com pouca vida.',
},
{
    key: '0004',
    name: 'Barão',
    image: require('../assets/images/baron.png'),
    description: 'O Barão nasce aos 20 minutos de jogo, possui muita vida e normalmente não é uma boa idéia tentar solar '+
    'ele. Evite tentar dar calls de barão quando o time inimigo tiver muitos jogadores vivos, busque sempre wardar ao '+
    'redor para evitar um roubo inexperado.\n\nProvavelmente você não sabia, mas o barão causa mais dano a quem fica nas '+
    'costas dele e quem tanka o barão dá 50% a menos de dano nele.\n\nQuando o barão morre ele fornece um buff aos aliados, '+
    'esse buff tanto fortalece os campeões como as tropas que estiverem próximas ao campeão com buff. As tropas recebem '+
    'aumento de tamanho, força, defesa e velocidade de movimento. Assim como o arauto, o barão também fornece aceleramento '+
    'do recall, mas caso você morra, você perde o buff.',
},
{
    key: '0005',
    name: 'Torres',
    image: require('../assets/images/tower.png'),
    description: 'Uma Torre é uma fortificação pesada que bloqueia o avanço das ondas de tropas do inimigo e o caminho dos '+
    'campeões até o Nexus. Torres são um dos componentes núcleo do gameplay do League of Legends. Elas causam dano, dão '+
    'visão de seus arredores até uma certa distância e ajudam a manter o controle da selva.\n\nNão é uma boa ideia se '+
    'arriscar para dar dano nas torres antes dos 5 minutos de jogo, pois nesse tempo ela possui um bônus em todas suas '+
    'defesas.\n\nAs torres possuem barricadas, que são divisões em sua vida, a cada barricada quebrada o destruidor recebe '+
    'uma recompensa em ouro e a resistência da torre aumenta. Aos 14 minutos de jogo as barricadas somem.',
},
]

export default cgList;