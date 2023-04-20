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
        catalog: {
            [CARD_TYPES.npc]: new Set(),
            [CARD_TYPES.class]: new Set(),
            [CARD_TYPES.loot]: new Set(),
            [CARD_TYPES.sound]: new Set(),
            [CARD_TYPES.prj]: new Set(),
            [CARD_TYPES.dia]: new Set(),
            [CARD_TYPES.anti]: new Set(),
            all: DNECards
        }
    }

    console.log("game", game);

    DNECards.forEach((card) => {
        switch (card.type) {
            case CARD_TYPES.npc:
                game.catalog.npc.add(card);
                break;

            case CARD_TYPES.class:
                game.catalog.class.add(card);
                console.log("catalog switch", game.catalog.class, DNECards);
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

    console.log("catalog switch finish", game.catalog.class, DNECards);
    console.log("game", game.catalog.class, game.catalog.anti, game, DNECards);

    return game;
}



//=> 1.2. Карты на группы в game
// npc class loot sound project dia anti
const initCardGroups = (set) => {

}


win77.setGame(initGame());


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

    console.log("win77.game.catalog.npc", win77, win77.game.catalog.npc);
    moveCardById("v", win77.game.catalog.npc, player.crew);
    moveCardById("a", win77.game.catalog.npc, player.crew);

    moveCardById("class-ttter", win77.game.catalog.class, player.classArr);

    // todo getCardsInHand(5)
    moveCardById("vinyl-igor", win77.game.catalog.sound, player.sound);
    moveCardById("vinyl-aleph", win77.game.catalog.sound, player.sound);
    moveCardById("album-toxic", win77.game.catalog.sound, player.sound);
    moveCardById("demo-jelz", win77.game.catalog.sound, player.sound);
    moveCardById("demo-fracture", win77.game.catalog.sound, player.sound);

    moveCardById("ddj400", win77.game.catalog.loot, player.loot);

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

