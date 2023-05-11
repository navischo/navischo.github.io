import { win77 } from "../dne-cli.js";
import { getRandomInt } from "../utils/getCardById.js";
import { openPopup } from "../popup/dom.popup.jquery.js";

const initScore = () => {
    let crewPoints = 0;
    let soundPoints = 0;
    let lootPoints = 0;

    win77.game.player.score = crewPoints + soundPoints + lootPoints;
    win77.game.versusScore = getRandomInt(20);
}

const isItWin = () => {
    if (win77.game.player.score > win77.game.versusScore) {
        console.log("You are win");
        openPopup("#dialog-popup");
    }
}

const updScore = (bonus = 0) => {
    const playerScoreNode = document.querySelector("#player-score");
    const versusScoreNode = document.querySelector("#versus-score");

    win77.game.player.score = win77.game.player.score + +bonus;

    playerScoreNode.innerHTML = win77.game.player.score;
    versusScoreNode.innerHTML = win77.game.versusScore;

    isItWin();
}

win77.pokeButton.dia.updScore = updScore;

export { initScore, updScore };
