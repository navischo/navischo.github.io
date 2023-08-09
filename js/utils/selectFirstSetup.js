import { win77 } from "../dne-cli.js";
import { getRandomInt, moveCardById } from "./getCardById.js";

const getRandomClassId = () => {
    const classIdsArr = [...win77.game.catalog.class].map((classObj) => classObj.id);
    return classIdsArr[getRandomInt(classIdsArr.length)];
};

const selectFirstSetup = (player) => {
    moveCardById("car-cosmos-track", win77.game.catalog.anti, player.cars);
    moveCardById("rick", win77.game.catalog.npc, player.npc);
    moveCardById("felix", win77.game.catalog.npc, player.npc);
    // moveCardById("gm", win77.game.catalog.npc, player.npc);
    // moveCardById("gabe", win77.game.catalog.npc, player.npc);
    // moveCardById("support", win77.game.catalog.npc, player.npc);


    // moveCardById("class-writer", win77.game.catalog.class, player.class);
    moveCardById(getRandomClassId(), win77.game.catalog.class, player.class);


    moveCardById("sps585", win77.game.catalog.loot, player.loot);

    moveCardById("ddj400", win77.game.catalog.loot, player.loot);
    // moveCardById("plx500", win77.game.catalog.loot, player.loot);
    // moveCardById("ddjxp2", win77.game.catalog.loot, player.loot);
    // moveCardById("nokia", win77.game.catalog.anti, player.loot);

    moveCardById("dia-play", win77.game.catalog.dia, player.dia);

    Array.from(win77.game.catalog._custom).forEach((customCard) => {
        player.sound.add(customCard);
    });

    console.log(`Player select first setup via js/utils/selectFirstSetup.js`, player);
}

export { selectFirstSetup };
