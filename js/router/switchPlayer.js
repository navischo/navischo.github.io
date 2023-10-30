import { win77 } from "../dne-cli.js";
import { updScore } from "../hud/score.hud.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { updHand } from "../cards/dom.cards.js";
import { setExecutive } from "../hud/table.hud.js";

const switchPlayer = (id, isUpdHand = true) => {
    const playerById = Array.from(win77.lobby).find((PlayerObj) => PlayerObj.id === id);
    const prevPlayer = win77.game.player;
    console.log("playerById", playerById, win77.game.player);

    let isItHost;
    if (win77.game.alliance) {
        isItHost = win77.game.alliance.host === playerById.id;
    } else if (win77.game.invasion) {
        isItHost = win77.game.invasion.host === playerById.id;
    }

    win77.lobby.delete(playerById);
    win77.lobby.add(prevPlayer);
    win77.game.player = playerById;
    win77.router.currentPlayer = win77.game.player.id;
    console.log("win77.game.player", win77.game.player, win77.lobby, win77.router.currentPlayer);
    updScore();
    updBalanceNode();
    initInventory();
    if (isUpdHand && win77.game.player.hand.size < 5 && !isItHost) {
        win77.putCardAtPlayersHand(5 - win77.game.player.hand.size);
    }
    updHand();
    if (!win77.game.invasion) {
        setExecutive(win77.game.player.id);
    }
}

export { switchPlayer };
