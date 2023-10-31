import { win77 } from "../dne-cli.js";
import { updScore } from "../hud/score.hud.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { updHand } from "../cards/dom.cards.js";
import { setExecutive, updExecutive } from "../hud/table.hud.js";
import { updNokiaLobby } from "./callFriend.js";

const switchPlayer = (id) => {
    const playerById = Array.from(win77.lobby).find((PlayerObj) => PlayerObj.id === id);
    const prevPlayer = win77.game.player;
    console.log("playerById", playerById, win77.game.player);

    win77.lobby.delete(playerById);
    win77.lobby.add(prevPlayer);
    win77.game.player = playerById;
    win77.router.currentPlayer = win77.game.player.id;
    console.log("win77.game.player", win77.game.player, win77.lobby, win77.router.currentPlayer);
    updScore();
    updBalanceNode();
    initInventory();
    if (win77.router.matchmaking) {
        updNokiaLobby();
    }
    updHand();
    updExecutive();
}

export { switchPlayer };
