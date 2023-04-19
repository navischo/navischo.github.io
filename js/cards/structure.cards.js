import { DNECards } from "./data.cards.js";
import { win77 } from "../dne-cli.js";
import { getCardById, getRandomInt, moveCardById, grabCost } from "../utils/getCardById.js";

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
        cards: DNECards,
        doors: new Set(),
        loot: new Set()
    }

    gameSet.forEach((card) => {
        if (card.type === "prj") {
            game.doors.add(card);
        } else {
            game.loot.add(card);
        }
     })

    return game;
}



//=> 1.2. Карты на группы в game
const initCardGroups = (lootSet) => {
    const soundCards = new Set();
    const classCards = new Set();
    const npcCards = new Set();
    const antiCards = new Set();

    lootSet.forEach((lootCard) => {
        switch (lootCard.type) {
            case `sound`:
                soundCards.add(lootCard);
                break;

            case `class`:
                classCards.add(lootCard);
                break;

            case `npc`:
                npcCards.add(lootCard);
                break;

            case `anti`:
                antiCards.add(lootCard);
                break;
        }
    });

    win77.setCardGroup("sound", soundCards);
    win77.setCardGroup("class", classCards);
    win77.setCardGroup("crew", npcCards);
    win77.setCardGroup("anti", antiCards);
}


win77.setGame(initGame());
initCardGroups(win77.game.loot);


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

    moveCardById("v", win77.game.crew, player.crew);
    moveCardById("a", win77.game.crew, player.crew);

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
win77.setCatalog("sound");
win77.setCatalog("crew");
win77.setCatalog("class");
win77.setCatalog("anti");
console.log(win77);

//=> 3. Игрок использует карты
const initTable = () => {
    win77.setTable();
    moveCardById("demo-fracture", win77.game.player.sound, win77.game.table);
}

initTable();

