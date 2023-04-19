import { DNELootArr, DNEDoorArr } from "./data.cards.js";
import { win77 } from "../dne-cli.js";
import {getCardById, getRandomInt, moveCardById} from "../utils/getCardById.js";

//=> Все карты(кроме неукомплектованных), в любом кол-ве копий

const loot = DNELootArr;
const doors = DNEDoorArr;

//=> Строгая коллекция специально для этой игры, без дублей

const gameSet = new Set(loot.concat(doors));

const initGame = () => {
    const game = {
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

console.log(win77.game);
console.log("gameSet", gameSet);

//=> Игрок выбрал стартовые карты, остальное в магазин

const shop = [];

const initPlayer = () => {
    const player = {
        hand: new Set(),
        crew: new Set(),
        classArr: new Set(),
        sound: new Set(),
        loot: new Set()
    };
    const soundCount = 5;

    // Два Наемничка
    // Один Клас
    // Пять миксов
    // Айтемы по желанию


    moveCardById("v", win77.game.crew, player.crew);
    moveCardById("a", win77.game.crew, player.crew);

    moveCardById("class-ttter", win77.game.class, player.classArr);

    moveCardById("vinyl-igor", win77.game.sound, player.sound);
    moveCardById("vinyl-aleph", win77.game.sound, player.sound);
    moveCardById("album-toxic", win77.game.sound, player.sound);
    moveCardById("demo-jelz", win77.game.sound, player.sound);
    moveCardById("demo-fracture", win77.game.sound, player.sound);

    moveCardById("ddj400", win77.game.loot, player.loot);

    //getRandomInt
    // for (let i = 0; i <= soundCount; i++) {
    //     moveCardById(win77.game.sound[getRandomInt(win77.game.sound.length)].id, win77.game.sound, player.sound);
    // }
    // win77.game.sound.forEach((sound, index) => {
    //     if
    // });

    return player;
}
win77.setPlayer(initPlayer());
win77.setShop("sound");
win77.setShop("crew");
win77.setShop("class");
win77.setShop("anti");
console.log(win77);

//=> Игрок использует карты

const table = [];

//=> Карты со стола распределяются между игроком и магазином
