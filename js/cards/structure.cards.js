import { CARD_TYPES } from "./const.cards.js";
import { DNECards } from "./data.cards.js";
import { win77 } from "../dne-cli.js";
import { getCardById, getRandomInt, moveCardById, grabCost } from "../utils/getCardById.js";
import { initInventory } from "../inventory/dom.inventory.js";

//=> 0. Все карты(кроме неукомплектованных), в любом кол-ве копий [done]
//=> 1. Строгая коллекция специально для этой игры, без дублей [done]
//=> 2. Игрок выбрал стартовые карты, остальное в магазин
//=> 3. Игрок использует карты
//=> 4. Карты со стола распределяются между игроком и магазином

//=> 1.
const gameSet = DNECards;

//=> 1.1. Запуск игры
const initGame = () => {
    const game = {
        cards: DNECards
    }

    return game;
}



//=> 1.2. Карты на группы в game
// npc class loot sound project dia anti
const initCardGroups = (set) => {
    const npcCatalog = new Set();
    const classCatalog = new Set();
    const lootCatalog = new Set();
    const soundCatalog = new Set();
    const projectCatalog = new Set();
    const diaCatalog = new Set();
    const antiCatalog = new Set();

    set.forEach((card) => {
        switch (card.type) {
            case CARD_TYPES.npc:
                npcCatalog.add(card);
                break;

            case CARD_TYPES.class:
                classCatalog.add(card);
                break;

            case CARD_TYPES.loot:
                lootCatalog.add(card);
                break;

            case CARD_TYPES.sound:
                soundCatalog.add(card);
                break;

            case CARD_TYPES.prj:
                projectCatalog.add(card);
                break;

            case CARD_TYPES.dia:
                diaCatalog.add(card);
                break;

            default:
                antiCatalog.add(card);
                break;
        }
    });

    win77.setCardGroup(CARD_TYPES.npc, npcCatalog);
    win77.setCardGroup(CARD_TYPES.class, classCatalog);
    win77.setCardGroup(CARD_TYPES.loot, lootCatalog);
    win77.setCardGroup(CARD_TYPES.sound, soundCatalog);
    win77.setCardGroup(CARD_TYPES.prj, projectCatalog);
    win77.setCardGroup(CARD_TYPES.dia, diaCatalog);
    console.log("antiCatalog", antiCatalog);
    win77.setCardGroup(CARD_TYPES.anti, antiCatalog);
}


win77.setGame(initGame());
initCardGroups(win77.game.cards);


//=> 2. Игрок выбрал стартовые карты
const initPlayer = () => {
    const player = {
        id: "navischo",
        balance: {
            energy: 40,
            bankroll: 12000
        },
        hand: new Set(),
        crew: new Set(),
        classArr: new Set(),
        sound: new Set(),
        loot: new Set()
    };

    console.log("win77.game.catalog.npc", win77, win77.game.npc);
    moveCardById("v", win77.game.npc, player.crew);
    moveCardById("a", win77.game.npc, player.crew);

    moveCardById("class-ttter", win77.game.class, player.classArr);

    // todo getCardsInHand(5)
    moveCardById("vinyl-igor", win77.game.sound, player.sound);
    moveCardById("vinyl-aleph", win77.game.sound, player.sound);
    moveCardById("album-toxic", win77.game.sound, player.sound);
    moveCardById("demo-jelz", win77.game.sound, player.sound);
    moveCardById("demo-fracture", win77.game.sound, player.sound);

    moveCardById("ddj400", win77.game.loot, player.loot);

    return player;
}
win77.setPlayer(initPlayer());

win77.getCostFromPlayer(500);

//=> 2.1. Oстальное из game переносим в game.shop
win77.setCatalog("crew");
win77.setCatalog("class");
win77.setCatalog("loot");
win77.setCatalog("sound");
win77.setCatalog("prj");
win77.setCatalog("dia");
win77.setCatalog("anti");
console.log(win77);

initInventory();

//=> 3. Игрок использует карты
const initTable = () => {
    win77.setTable();
    moveCardById("demo-fracture", win77.game.player.sound, win77.game.table);
}

initTable();

