import { win77 } from "../dne-cli.js";
import { updHand } from "../cards/dom.cards.js";
import { selectRandomCardToSave } from "./selectCardToSave.js";

const lightWalkingPlayer = () => {
    win77.mm.open();

    const squadCellNodes = document.querySelectorAll(`.js-squad-cell`);
    squadCellNodes.forEach((squadCellNode) => {
        squadCellNode.classList.remove("--walking");
        squadCellNode.dataset.playerId === win77.router.currentPlayer ? squadCellNode.classList.add("--walking") : "";
    });

    setTimeout(() => {
        win77.mm.close();
    }, 3000);
}

const finishRoundForPlayer = () => {
    selectRandomCardToSave();
    if (win77.router.matchmaking && win77.lobby.size > 0) {
        let nextPlayerIndex;
        win77.router.playersQueue.forEach((playerId, currentPlayerIndex) => {
            if (playerId === win77.router.currentPlayerInQueue) {
                if (currentPlayerIndex === win77.router.playersQueue.length - 1) {
                    nextPlayerIndex = 0;
                    win77.game.round = win77.game.round + 1;
                } else {
                    nextPlayerIndex = currentPlayerIndex + 1;
                }
            }
        });
        const nextPlayerId = win77.router.playersQueue[nextPlayerIndex];
        win77.router.currentPlayerInQueue = nextPlayerId;
        if (win77.game.player.id !== nextPlayerId) {
            win77.switchPlayer(nextPlayerId);
        }
        // win77.fillPlayersHand();
        updHand();
        lightWalkingPlayer();

        const roundLeftOutput = document.querySelector(".js-round-left");
        roundLeftOutput.textContent = win77.game.round;
    } else {
        win77.game.round = win77.game.round + 1;
    }
}

export { finishRoundForPlayer, lightWalkingPlayer };
