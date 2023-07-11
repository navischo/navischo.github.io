import {getRandomInt, moveCardById} from "./getCardById.js";
import {win77} from "../dne-cli.js";
import {initInventory} from "../hud/inventory.hud.js";

const confirmInvite = (cardData) => {
    win77.getSkillPointsFromPlayer(1);
    win77.updBalanceHUD();
    moveCardById(cardData.id, win77.game.catalog[cardData.type], win77.game.player[cardData.type]);
    initInventory();
}

const sendInvite = (cardData) => {
    const isAccepted = getRandomInt(2);

    setTimeout(() => {
        if (isAccepted) {
            console.log(`${cardData.name} is accept your invite`);
            confirmInvite(cardData);
        } else {
            console.log(`${cardData.name} is unavailable now. Try a bit later`);
        }
    }, getRandomInt(5000));

}

export { sendInvite };
