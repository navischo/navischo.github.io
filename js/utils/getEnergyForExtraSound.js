import { win77 } from "../dne-cli.js";
import { updBalanceNode } from "../hud/balance.hud.js";

const getEnergyForExtraSound = () => {
    // experimental restriction
    console.log("win77.game.table.size", win77.game.table.size, win77.game.player.balance.energy);
    win77.game.table.size > 6 ? win77.getEnergyPointsFromPlayer(1) : "";
    updBalanceNode();
    console.log("win77.game.player.balance.energy", win77.game.player.balance.energy);
    // END experimental restriction
}

export { getEnergyForExtraSound }
