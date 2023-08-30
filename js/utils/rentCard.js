import {win77} from "../dne-cli.js";
import {isSetHasId} from "./isSetHasId.js";
import {updBalanceNode} from "../hud/balance.hud.js";
import {moveCardById, registerRent} from "./getCardById.js";
import {initInventory} from "../hud/inventory.hud.js";

const rentCard = (cardData, isForFree = false) => {
    const catalog = win77.game.catalog[cardData.type];
    if (isSetHasId(catalog, cardData.id) && cardData.costObj.rentAvailable) {
        if (!isForFree) {
            win77.getCostFromPlayer(cardData.costObj.rent);
            updBalanceNode();
        }
        moveCardById(cardData.id, catalog, win77.game.player[cardData.type]);
        registerRent(cardData.id);
        initInventory();
    } else {
        console.log(`Item ${cardData.name} is already in rent`);
    }
}

export { rentCard };
