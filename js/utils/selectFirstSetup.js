import { win77 } from "../dne-cli.js";
import { getRandomId, moveCardById } from "./getCardById.js";

const selectFirstSetup = (player) => {
    // moveCardById("car-cosmos-track", win77.game.catalog.anti, player.cars);
    // moveCardById(getRandomId(win77.game.catalog.npc), win77.game.catalog.npc, player.npc);
    // moveCardById(getRandomId(win77.game.catalog.npc), win77.game.catalog.npc, player.npc);
    // moveCardById("gm", win77.game.catalog.npc, player.npc);
    // moveCardById("gabe", win77.game.catalog.npc, player.npc);
    // moveCardById("support", win77.game.catalog.npc, player.npc);


    // moveCardById("class-writer", win77.game.catalog.class, player.class);
    // moveCardById(getRandomId(win77.game.catalog.class), win77.game.catalog.class, player.class);
    moveCardById(getRandomId(win77.game.catalog.avatar), win77.game.catalog.avatar, player.avatar);


    moveCardById(getRandomId(win77.game.catalog.loot), win77.game.catalog.loot, player.loot);

    // moveCardById(getRandomId(win77.game.catalog.loot), win77.game.catalog.loot, player.loot);
    // moveCardById("plx500", win77.game.catalog.loot, player.loot);
    // moveCardById("ddjxp2", win77.game.catalog.loot, player.loot);
    // moveCardById("nokia", win77.game.catalog.anti, player.loot);

    // moveCardById("dia-play", win77.game.catalog.dia, player.dia);

    Array.from(win77.game.catalog._custom).forEach((customCard) => {
        player.sound.add(customCard);
    });

    console.log(`Player select first setup via js/utils/selectFirstSetup.js`, player);
}

export { selectFirstSetup };
