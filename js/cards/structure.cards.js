import { CARD_TYPES } from "./const.cards.js";
import { DNECards, DNESecretCards } from "./data.cards.js";
import { win77 } from "../dne-cli.js";
import {getCardById, getRandomInt, moveCardById} from "../utils/getCardById.js";
import { initInventory } from "../hud/inventory.hud.js";
import { parseCost } from "../utils/parseCost.js";
import { ContainerIn } from "../utils/initContainer.js";
import { initCalendar } from "../hud/calendar.hud.js";

//=> 0. Все карты(кроме неукомплектованных), в любом кол-ве копий [done]
//=> 1. Строгая коллекция специально для этой игры, без дублей [done]
//=> 2. Игрок выбрал стартовые карты, остальное в магазин
//=> 3. Игрок использует карты
//=> 4. Карты со стола распределяются между игроком и магазином

//=> 1.1. Запуск игры
const initGame = () => {
    const game = {
        catalog: {
            [CARD_TYPES.npc]: new Set(),
            [CARD_TYPES.class]: new Set(),
            [CARD_TYPES.loot]: new Set(),
            [CARD_TYPES.sound]: new Set(),
            [CARD_TYPES.prj]: new Set(),
            [CARD_TYPES.dia]: new Set(),
            [CARD_TYPES.anti]: new Set(),
            all: DNECards,
            _secret: DNESecretCards,
            _custom: new Set()
        },
        event: {
            settings: {},
            result: {
                cashOnEnter: 0,
                cashOnBar: 0,
                // rarity: 0,
                impactBonus: 0,
                income: 0
            }
        },
        final: false
    }

    win77.locationsSet = new Set();

    DNECards.forEach((card) => {
        switch (card.type) {
            case CARD_TYPES.npc:
                game.catalog.npc.add(card);
                break;

            case CARD_TYPES.class:
                game.catalog.class.add(card);
                break;

            case CARD_TYPES.loot:
                game.catalog.loot.add(card);
                break;

            case CARD_TYPES.sound:
                game.catalog.sound.add(card);
                break;

            case CARD_TYPES.prj:
                game.catalog.prj.add(card);
                break;

            case CARD_TYPES.dia:
                game.catalog.dia.add(card);
                break;

            default:
                game.catalog.anti.add(card);
                break;
        }
    });

    // parse cost
    game.catalog.loot.forEach(parseCost);
    game.catalog.sound.forEach(parseCost);

    getCardById("i-case", game.catalog.loot).containerIn = new ContainerIn("case", "21х30х10");
    // game.catalog.loot.forEach(parseContainers);

    return game;
}



win77.setGame(initGame());

//=> 2. Игрок выбрал стартовые карты
const initPlayer = () => {
    console.log(`
          _____                    _____                    _____                    _____                            _____                _____                    _____                    _____                _____                    _____          
         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\                          /\\    \\              /\\    \\                  /\\    \\                  /\\    \\              /\\    \\                  /\\    \\         
        /::\\    \\                /::\\    \\                /::\\____\\                /::\\    \\                        /::\\    \\            /::\\    \\                /::\\    \\                /::\\    \\            /::\\    \\                /::\\    \\        
       /::::\\    \\              /::::\\    \\              /::::|   |               /::::\\    \\                      /::::\\    \\           \\:::\\    \\              /::::\\    \\              /::::\\    \\           \\:::\\    \\              /::::\\    \\       
      /::::::\\    \\            /::::::\\    \\            /:::::|   |              /::::::\\    \\                    /::::::\\    \\           \\:::\\    \\            /::::::\\    \\            /::::::\\    \\           \\:::\\    \\            /::::::\\    \\      
     /:::/\\:::\\    \\          /:::/\\:::\\    \\          /::::::|   |             /:::/\\:::\\    \\                  /:::/\\:::\\    \\           \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\           \\:::\\    \\          /:::/\\:::\\    \\     
    /:::/  \\:::\\    \\        /:::/__\\:::\\    \\        /:::/|::|   |            /:::/__\\:::\\    \\                /:::/__\\:::\\    \\           \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\           \\:::\\    \\        /:::/__\\:::\\    \\    
   /:::/    \\:::\\    \\      /::::\\   \\:::\\    \\      /:::/ |::|   |           /::::\\   \\:::\\    \\               \\:::\\   \\:::\\    \\          /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\          /::::\\    \\       \\:::\\   \\:::\\    \\   
  /:::/    / \\:::\\    \\    /::::::\\   \\:::\\    \\    /:::/  |::|___|______    /::::::\\   \\:::\\    \\            ___\\:::\\   \\:::\\    \\        /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\        /::::::\\    \\    ___\\:::\\   \\:::\\    \\  
 /:::/    /   \\:::\\ ___\\  /:::/\\:::\\   \\:::\\    \\  /:::/   |::::::::\\    \\  /:::/\\:::\\   \\:::\\    \\          /\\   \\:::\\   \\:::\\    \\      /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\    \\  /:::/\\:::\\   \\:::\\____\\      /:::/\\:::\\    \\  /\\   \\:::\\   \\:::\\    \\ 
/:::/____/  ___\\:::|    |/:::/  \\:::\\   \\:::\\____\\/:::/    |:::::::::\\____\\/:::/__\\:::\\   \\:::\\____\\        /::\\   \\:::\\   \\:::\\____\\    /:::/  \\:::\\____\\/:::/  \\:::\\   \\:::\\____\\/:::/  \\:::\\   \\:::|    |    /:::/  \\:::\\____\\/::\\   \\:::\\   \\:::\\____\\
\\:::\\    \\ /\\  /:::|____|\\::/    \\:::\\  /:::/    /\\::/    / ~~~~~/:::/    /\\:::\\   \\:::\\   \\::/    /        \\:::\\   \\:::\\   \\::/    /   /:::/    \\::/    /\\::/    \\:::\\  /:::/    /\\::/   |::::\\  /:::|____|   /:::/    \\::/    /\\:::\\   \\:::\\   \\::/    /
 \\:::\\    /::\\ \\::/    /  \\/____/ \\:::\\/:::/    /  \\/____/      /:::/    /  \\:::\\   \\:::\\   \\/____/          \\:::\\   \\:::\\   \\/____/   /:::/    / \\/____/  \\/____/ \\:::\\/:::/    /  \\/____|:::::\\/:::/    /   /:::/    / \\/____/  \\:::\\   \\:::\\   \\/____/ 
  \\:::\\   \\:::\\ \\/____/            \\::::::/    /               /:::/    /    \\:::\\   \\:::\\    \\               \\:::\\   \\:::\\    \\      /:::/    /                    \\::::::/    /         |:::::::::/    /   /:::/    /            \\:::\\   \\:::\\    \\     
   \\:::\\   \\:::\\____\\               \\::::/    /               /:::/    /      \\:::\\   \\:::\\____\\               \\:::\\   \\:::\\____\\    /:::/    /                      \\::::/    /          |::|\\::::/    /   /:::/    /              \\:::\\   \\:::\\____\\    
    \\:::\\  /:::/    /               /:::/    /               /:::/    /        \\:::\\   \\::/    /                \\:::\\  /:::/    /    \\::/    /                       /:::/    /           |::| \\::/____/    \\::/    /                \\:::\\  /:::/    /    
     \\:::\\/:::/    /               /:::/    /               /:::/    /          \\:::\\   \\/____/                  \\:::\\/:::/    /      \\/____/                       /:::/    /            |::|  ~|           \\/____/                  \\:::\\/:::/    /     
      \\::::::/    /               /:::/    /               /:::/    /            \\:::\\    \\                       \\::::::/    /                                    /:::/    /             |::|   |                                     \\::::::/    /      
       \\::::/    /               /:::/    /               /:::/    /              \\:::\\____\\                       \\::::/    /                                    /:::/    /              \\::|   |                                      \\::::/    /       
        \\::/____/                \\::/    /                \\::/    /                \\::/    /                        \\::/    /                                     \\::/    /                \\:|   |                                       \\::/    /        
                                  \\/____/                  \\/____/                  \\/____/                          \\/____/                                       \\/____/                  \\|___|                                        \\/____/         
                                                                                                                                                                                                                                                          
`);
    const savedBankroll = +localStorage.getItem("bankroll");
    console.log(savedBankroll ? `Your bankroll in amount of ${savedBankroll} was restored from LocalStorage. Enjoy!` : `Your starting bankroll is 14000`, savedBankroll); // 970510

    const savedLvl = +localStorage.getItem("lvl");
    savedLvl ? document.querySelector("body").dataset.lvl = savedLvl : "";
    console.log(savedLvl ? `Level ${savedLvl} was restored from LocalStorage. Good luck in your journey!` : `Your start from lvl 0`, savedBankroll);

    const savedLogin = localStorage.getItem("login");

    const player = {
        id: savedLogin ? savedLogin : "navi",
        lvl: savedLvl ? savedLvl : 0,
        balance: {
            energy: 7,
            bankroll: 14000, // savedBankroll ? savedBankroll :
            skillPoints: 3
        },
        hand: new Set(),
        npc: new Set(),
        class: new Set(),
        dia: new Set(),
        sound: new Set(),
        loot: new Set(),
        cars: new Set(),
        cardsInRentIdSet: new Set(),
        availableLocations: ["summer"],
        currentQuest: null,
        calendar: initCalendar()
    };

    moveCardById("car-cosmos-track", win77.game.catalog.anti, player.cars);
    moveCardById("rick", win77.game.catalog.npc, player.npc);
    moveCardById("felix", win77.game.catalog.npc, player.npc);
    // moveCardById("gm", win77.game.catalog.npc, player.npc);
    // moveCardById("gabe", win77.game.catalog.npc, player.npc);
    // moveCardById("support", win77.game.catalog.npc, player.npc);

    const getRandomClassId = () => {
        const classIdsArr = [...win77.game.catalog.class].map((classObj) => classObj.id);
        return classIdsArr[getRandomInt(classIdsArr.length)];
    };
    moveCardById(getRandomClassId(), win77.game.catalog.class, player.class);

    moveCardById("ddj400", win77.game.catalog.loot, player.loot);
    moveCardById("plx500", win77.game.catalog.loot, player.loot);
    moveCardById("ddjxp2", win77.game.catalog.loot, player.loot);
    // moveCardById("nokia", win77.game.catalog.anti, player.loot);

    moveCardById("dia-play", win77.game.catalog.dia, player.dia);

    console.log(`${player.id} join the game`, player);
    return player;
}
win77.setPlayer(initPlayer());

initInventory();

//=> 3. Игрок использует карты

// todo показать карточку аудитории с анимацией slide-in-blurred-right


