import { Box,  Collapsible, Image, Text } from '@chakra-ui/react';
import Stats from './stats';
import Spells from './spells';
import Passive from './passive';
import Items from './items';


const Champion = () => {
    const champion = {
        "id": "Aatrox",
        "key": "266",
        "name": "Aatrox",
        "title": "a Espada Darkin",
        "image": {
            "full": "Aatrox.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "skins": [
            {
                "id": "266000",
                "num": 0,
                "name": "default",
                "chromas": false
            },
            {
                "id": "266001",
                "num": 1,
                "name": "Aatrox Justiceiro",
                "chromas": false
            },
            {
                "id": "266002",
                "num": 2,
                "name": "Mech Aatrox",
                "chromas": true
            },
            {
                "id": "266003",
                "num": 3,
                "name": "Aatrox Caçador dos Mares",
                "chromas": false
            },
            {
                "id": "266007",
                "num": 7,
                "name": "Aatrox Lua Sangrenta",
                "chromas": false
            },
            {
                "id": "266008",
                "num": 8,
                "name": "Aatrox Lua Sangrenta de Prestígio",
                "chromas": false
            },
            {
                "id": "266009",
                "num": 9,
                "name": "Aatrox Vitorioso",
                "chromas": true
            },
            {
                "id": "266011",
                "num": 11,
                "name": "Aatrox Odisseia",
                "chromas": true
            },
            {
                "id": "266020",
                "num": 20,
                "name": "Aatrox Lua Sangrenta de Prestígio (2022)",
                "chromas": false
            },
            {
                "id": "266021",
                "num": 21,
                "name": "Aatrox Eclipse Lunar",
                "chromas": true
            },
            {
                "id": "266030",
                "num": 30,
                "name": "Aatrox DRX",
                "chromas": true
            },
            {
                "id": "266031",
                "num": 31,
                "name": "Aatrox DRX de Prestígio",
                "chromas": false
            },
            {
                "id": "266033",
                "num": 33,
                "name": "Aatrox Primordiano",
                "chromas": true
            }
        ],
        "lore": "Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente, e ele saiu corrompendo e transformando quem fosse tolo o suficiente de tentar tocar na arma mágica que continha sua essência. Agora, com um corpo roubado, ele vaga por Runeterra transfigurado, em uma versão bizarra da sua forma anterior, buscando uma vingança apocalíptica.",
        "blurb": "Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de...",
        "allytips": [
            "Use Avanço Umbral quando conjurar A Espada Darkin para aumentar suas chances de acertar um inimigo.",
            "Habilidades de Controle de Grupo, como Correntes Infernais ou efeitos de imobilização vindos dos seus aliados, ajudarão a preparar tudo para A Espada Darkin.",
            "Conjure Aniquilador de Mundos quando tiver certeza que pode forçar uma luta."
        ],
        "enemytips": [
            "Os ataques de Aatrox são bem indicados, então use o tempo de seus movimentos para escapar das zonas de acerto dele.",
            "É mais fácil sair das Correntes Infernais de Aatrox se você correr para os lados ou na direção dele.",
            "Mantenha distância quando Aatrox usar sua ultimate para evitar que ele reviva."
        ],
        "tags": [
            "Fighter"
        ],
        "partype": "Poço de Sangue",
        "info": {
            "attack": 8,
            "defense": 4,
            "magic": 3,
            "difficulty": 4
        },
        "stats": {
            "hp": 650,
            "hpperlevel": 114,
            "mp": 0,
            "mpperlevel": 0,
            "movespeed": 345,
            "armor": 38,
            "armorperlevel": 4.8,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 3,
            "hpregenperlevel": 0.5,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 60,
            "attackdamageperlevel": 5,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.651,
            "abilityPower": 0
        },
        "spells": [
            {
                "id": "AatroxQ",
                "name": "A Espada Darkin",
                "description": "Aatrox bate sua espada no chão, causando Dano Físico. Ele pode bater até três vezes, cada vez em uma área de ação diferente.",
                "tooltip": "Aatrox bate com sua espada no chão, causando \u003CphysicalDamage\u003E{{ qdamage }} de Dano Físico\u003C/physicalDamage\u003E. Inimigos atingidos na área exterior são \u003Cstatus\u003EArremessados ao ar\u003C/status\u003E brevemente e sofrem \u003CphysicalDamage\u003E{{ qedgedamage }} de Dano Físico\u003C/physicalDamage\u003E. A Habilidade pode ser \u003Crecast\u003EReconjurada\u003C/recast\u003E duas vezes, alterando o formato do golpe e causando 25% de dano a mais do que o golpe anterior.{{ spellmodifierdescriptionappend }}",
                "leveltip": {
                    "label": [
                        "Tempo de Recarga",
                        "Dano",
                        "Multiplicador de DdA total"
                    ],
                    "effect": [
                        "{{ cooldown }} -\u003E {{ cooldownNL }}",
                        "{{ qbasedamage }} -\u003E {{ qbasedamageNL }}",
                        "{{ qtotaladratio*100.000000 }}% -\u003E {{ qtotaladrationl*100.000000 }}%"
                    ]
                },
                "maxrank": 5,
                "cooldown": [14, 12, 10, 8, 6],
                "cooldownBurn": "14/12/10/8/6",
                "cost": [0, 0, 0, 0, 0],
                "costBurn": "0",
                "datavalues": {

                },
                "effect": [null, [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ],
                "effectBurn": [null, "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "vars": [],
                "costType": "Sem custo",
                "maxammo": "-1",
                "range": [25000, 25000, 25000, 25000, 25000],
                "rangeBurn": "25000",
                "image": {
                    "full": "AatroxQ.png",
                    "sprite": "spell0.png",
                    "group": "spell",
                    "x": 384,
                    "y": 48,
                    "w": 48,
                    "h": 48
                },
                "resource": "Sem custo"
            },
            {
                "id": "AatroxW",
                "name": "Correntes Infernais",
                "description": "Aatrox bate no chão, causando dano ao primeiro inimigo atingido. Campeões e Monstros Grandes precisam sair da área de impacto rapidamente ou serão arrastados para o centro e receberão dano novamente.",
                "tooltip": "Aatrox dispara uma corrente, causando {{ wslowpercentage*-100 }}% de \u003Cstatus\u003ELentidão\u003C/status\u003E por {{ wslowduration }}s e \u003CmagicDamage\u003E{{ wdamage }} de Dano Mágico\u003C/magicDamage\u003E ao primeiro inimigo atingido. Campeões e monstros grandes da selva têm {{ wslowduration }}s para deixar a área de impacto ou são \u003Cstatus\u003EPuxados\u003C/status\u003E para o centro e sofrem a mesma quantidade de dano.{{ spellmodifierdescriptionappend }}",
                "leveltip": {
                    "label": [
                        "Tempo de Recarga",
                        "Dano",
                        "Redução de velocidade"
                    ],
                    "effect": [
                        "{{ cooldown }} -\u003E {{ cooldownNL }}",
                        "{{ wbasedamage }} -\u003E {{ wbasedamageNL }}",
                        "{{ wslowpercentage*-100.000000 }}% -\u003E {{ wslowpercentagenl*-100.000000 }}%"
                    ]
                },
                "maxrank": 5,
                "cooldown": [20, 18, 16, 14, 12],
                "cooldownBurn": "20/18/16/14/12",
                "cost": [0, 0, 0, 0, 0],
                "costBurn": "0",
                "datavalues": {

                },
                "effect": [null, [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ],
                "effectBurn": [null, "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "vars": [],
                "costType": "Sem custo",
                "maxammo": "-1",
                "range": [825, 825, 825, 825, 825],
                "rangeBurn": "825",
                "image": {
                    "full": "AatroxW.png",
                    "sprite": "spell0.png",
                    "group": "spell",
                    "x": 432,
                    "y": 48,
                    "w": 48,
                    "h": 48
                },
                "resource": "Sem custo"
            },
            {
                "id": "AatroxE",
                "name": "Avanço Umbral",
                "description": "Passivamente, Aatrox se cura quando causa dano a Campeões inimigos. Quando ativado, ele avança em uma direção.",
                "tooltip": "\u003CspellPassive\u003EPassivo:\u003C/spellPassive\u003E Aatrox se cura em \u003ClifeSteal\u003E{{ totalevamp }}\u003C/lifeSteal\u003E do dano causado a Campeões.\u003Cbr /\u003E\u003Cbr /\u003E\u003CspellActive\u003EAtivo:\u003C/spellActive\u003E Aatrox avança. Ele pode usar essa Habilidade durante as animações das outras Habilidades.{{ spellmodifierdescriptionappend }}",
                "leveltip": {
                    "label": [
                        "Tempo de Recarga"
                    ],
                    "effect": [
                        "{{ cooldown }} -\u003E {{ cooldownNL }}"
                    ]
                },
                "maxrank": 5,
                "cooldown": [9, 8, 7, 6, 5],
                "cooldownBurn": "9/8/7/6/5",
                "cost": [0, 0, 0, 0, 0],
                "costBurn": "0",
                "datavalues": {

                },
                "effect": [null, [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ],
                "effectBurn": [null, "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "vars": [],
                "costType": "Sem custo",
                "maxammo": "-1",
                "range": [25000, 25000, 25000, 25000, 25000],
                "rangeBurn": "25000",
                "image": {
                    "full": "AatroxE.png",
                    "sprite": "spell0.png",
                    "group": "spell",
                    "x": 0,
                    "y": 96,
                    "w": 48,
                    "h": 48
                },
                "resource": "Sem custo"
            },
            {
                "id": "AatroxR",
                "name": "Aniquilador de Mundos",
                "description": "Aatrox libera sua forma demoníaca, aterrorizando tropas inimigas próximas, ganhando Dano de Ataque, cura aumentada e Velocidade de Movimento. Se ele conseguir um abate, este efeito é estendido.",
                "tooltip": "Aatrox revela sua verdadeira forma demoníaca, causando \u003Cstatus\u003ETemor\u003C/status\u003E às tropas próximas por {{ rminionfearduration }}s e recebendo \u003Cspeed\u003E{{ rmovementspeedbonus*100 }}% de Velocidade de Movimento\u003C/speed\u003E que decai ao longo de {{ rduration }}s. Ele também recebe \u003CscaleAD\u003E{{ rtotaladamp*100 }}% de Dano de Ataque\u003C/scaleAD\u003E e aumenta a \u003Chealing\u003Eprópria cura em {{ rhealingamp*100 }}%\u003C/healing\u003E ao longo da duração.\u003Cbr /\u003E\u003Cbr /\u003EEliminar Campeões aumenta a duração desse efeito em {{ rextension }}s e redefine o aumento de \u003Cspeed\u003EVelocidade de Movimento\u003C/speed\u003E.{{ spellmodifierdescriptionappend }}",
                "leveltip": {
                    "label": [
                        "Dano de Ataque total aumentado",
                        "Aumento de cura",
                        "Velocidade de Movimento",
                        "Tempo de Recarga"
                    ],
                    "effect": [
                        "{{ rtotaladamp*100.000000 }}% -\u003E {{ rtotaladampnl*100.000000 }}%",
                        "{{ rhealingamp*100.000000 }}% -\u003E {{ rhealingampnl*100.000000 }}%",
                        "{{ rmovementspeedbonus*100.000000 }}% -\u003E {{ rmovementspeedbonusnl*100.000000 }}%",
                        "{{ cooldown }} -\u003E {{ cooldownNL }}"
                    ]
                },
                "maxrank": 3,
                "cooldown": [120, 100, 80],
                "cooldownBurn": "120/100/80",
                "cost": [0, 0, 0],
                "costBurn": "0",
                "datavalues": {

                },
                "effect": [null, [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ],
                "effectBurn": [null, "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "vars": [],
                "costType": "Sem custo",
                "maxammo": "-1",
                "range": [25000, 25000, 25000],
                "rangeBurn": "25000",
                "image": {
                    "full": "AatroxR.png",
                    "sprite": "spell0.png",
                    "group": "spell",
                    "x": 48,
                    "y": 96,
                    "w": 48,
                    "h": 48
                },
                "resource": "Sem custo"
            }
        ],
        "passive": {
            "name": "Postura do Arauto da Morte",
            "description": "Periodicamente, o próximo ataque básico de Aatrox causa \u003CphysicalDamage\u003EDano Físico\u003C/physicalDamage\u003E adicional e o cura com base na Vida máxima do alvo. ",
            "image": {
                "full": "Aatrox_Passive.png",
                "sprite": "passive0.png",
                "group": "passive",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            }
        },
        "recommended": []
    };

    const cdnUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/"

    return (
        <Box>
            <Collapsible.Root bg="white" color="black"  rounded="md" p={2}>
                <Collapsible.Trigger bg="white" >
                    <Box display="flex" gap={2}>
                        <Box>
                            <Image src={`${cdnUrl}${champion.image.full}`} alt={champion.name} />
                            <Text>{champion.name}</Text>
                        </Box>
                        <Stats stats={champion.stats} />
                    </Box>
                </Collapsible.Trigger>
                <Collapsible.Content  textAlign="left" >
                    <Passive passive={champion.passive} />
                    <Box display="flex" w="100%">
                        <Spells passive={champion.passive} spells={champion.spells} />
                        <Items />
                    </Box>
                </Collapsible.Content>

            </Collapsible.Root>
        </Box >
    )
}

export default Champion;