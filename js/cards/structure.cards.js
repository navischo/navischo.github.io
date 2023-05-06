import { CARD_TYPES } from "./const.cards.js";
import { DNECards, DNESecretCards } from "./data.cards.js";
import { win77 } from "../dne-cli.js";
import { moveCardById } from "../utils/getCardById.js";
import { initInventory } from "../hud/inventory.hud.js";

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
            all: DNECards,
            _secret: DNESecretCards
        },
        event: {
            settings: {},
            result: {
                income: 0
            }
        }
    }

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

    return game;
}



win77.setGame(initGame());


//=> 2. Игрок выбрал стартовые карты
const initPlayer = () => {
    const player = {
        id: "navischo",
        lvl: 1,
        balance: {
            energy: 40,
            bankroll: 12000,
            skillPoints: 3
        },
        hand: new Set(),
        npc: new Set(),
        class: new Set(),
        sound: new Set(),
        loot: new Set(),
        cars: new Set()
    };

    moveCardById("car-cosmos-track", win77.game.catalog.anti, player.cars);
    moveCardById("v", win77.game.catalog.npc, player.npc);
    moveCardById("a", win77.game.catalog.npc, player.npc);

    moveCardById("class-ttter", win77.game.catalog.class, player.class);

    moveCardById("ddj400", win77.game.catalog.loot, player.loot);
    moveCardById("nokia", win77.game.catalog.anti, player.loot);

    return player;
}
win77.setPlayer(initPlayer());

initInventory();

//=> 3. Игрок использует карты


