import { win77 } from "../dne-cli.js";
import { getRandomInt } from "../utils/getCardById.js";
import { openPopup } from "../popup/dom.popup.jquery.js";

const initScore = () => {
    let crewPoints = 0;
    let soundPoints = 0;
    let lootPoints = 0;


    if (win77.lobby.size > 0) {
        win77.lobby.forEach((mate) => {
            mate.score = 0;
        });
    }

    win77.game.player.score = crewPoints + soundPoints + lootPoints;
    win77.game.totalScore = 0;
    win77.game.versusScore = getRandomInt(20);
}

const readyToStart = () => {
    const body = document.querySelector("body");
    const className = "ready-to-start";
    const isBodyContainsClass = body.classList.contains(className);
    // console.log(body, className, !isBodyContainsClass);
    if (!isBodyContainsClass) {
        body.classList.add(`${className}`);
        console.log(`Please, solve dialog in your HUD`);
        openPopup("#dialog-popup");
        document.querySelector("#rts-btn")
            .addEventListener("click", () => {
                openPopup("#dialog-popup");
            });
    }
};

const isItWin = () => {
    if (win77.game.totalScore > win77.game.versusScore) {
        console.log("You can become executive of this event. Just accept dialog");
        readyToStart();
    }
}

const updInvaderScore = (bonus = 0) => {
    let invaderScoreNode = document.querySelector("#invader-score");
    if (!invaderScoreNode) {
        const playerScoreNode = document.querySelector("#player-score");
        invaderScoreNode = document.createElement("span");
        invaderScoreNode.id = "invader-score";
        invaderScoreNode.classList.add("js-score-val");
        playerScoreNode.after(invaderScoreNode);
    }
    invaderScoreNode.textContent = `/${bonus}`;
}

const updScore = (bonus = 0) => {
    const playerScoreNode = document.querySelector("#player-score");
    const versusScoreNode = document.querySelector("#versus-score");

    win77.game.player.score = win77.game.player.score + +bonus;

    if (win77.lobby.size > 0 && !win77.game.invasion) {
        let initialScore = 0;
        const matesScore = Array.from(win77.lobby).reduce((accumulator, player) => accumulator + player.score, initialScore);
        win77.game.totalScore = win77.game.player.score + matesScore;
    } else {
        win77.game.totalScore = win77.game.player.score;
    }

    if (win77.game.invasion) {
        if (win77.game.player.id === win77.game.invasion.invader) {
            updInvaderScore(win77.game.player.score);
        } else {
            playerScoreNode.innerHTML = win77.game.totalScore;
        }
    } else {
        playerScoreNode.innerHTML = win77.game.totalScore;
    }

    versusScoreNode.innerHTML = win77.game.versusScore;

    isItWin();
}

win77.pokeButton.dia.updScore = updScore;

export { initScore, updScore };
