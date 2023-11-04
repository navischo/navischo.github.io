import { win77 } from "../dne-cli.js";
import { getRandomInt } from "../utils/getCardById.js";
import { openPopup } from "../popup/dom.popup.jquery.js";
import { dialog } from "./dialog.hud.js";

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
        dialog.init(dialog.DIALOG_ID.start);
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

const updSaviorScore = (bonus = 0) => {
    let saviorScoreNode = document.querySelector("#savior-score");
    if (!saviorScoreNode) {
        const playerScoreNode = document.querySelector("#player-score");
        saviorScoreNode = document.createElement("span");
        saviorScoreNode.id = "savior-score";
        saviorScoreNode.classList.add("js-score-val");
        playerScoreNode.after(saviorScoreNode);
    }
    saviorScoreNode.textContent = `+${bonus}`;
}

const updInvaderScore = (bonus = 0) => {
    let invaderScoreNode = document.querySelector("#invader-score");
    if (!invaderScoreNode) {
        const playerScoreNode = document.querySelector("#player-score");
        const saviorScoreNode = document.querySelector("#savior-score");
        invaderScoreNode = document.createElement("span");
        invaderScoreNode.id = "invader-score";
        invaderScoreNode.classList.add("js-score-val");
        saviorScoreNode ? saviorScoreNode.after(invaderScoreNode) : playerScoreNode.after(invaderScoreNode);
    }
    invaderScoreNode.textContent = `/${bonus}`;
}

const transferScoreFromTo = (senderId, receiverId) => {
    const senderObj = win77.findPlayerObj(senderId);
    const receiverObj = win77.findPlayerObj(receiverId);
    receiverObj.score = receiverObj.score + senderObj.score;
    senderObj.score = 0;
}

const updScore = (bonus = 0) => {
    const playerScoreNode = document.querySelector("#player-score");
    const versusScoreNode = document.querySelector("#versus-score");

    win77.game.player.score = win77.game.player.score + +bonus;

    if (!win77.game.alliance && !win77.game.invasion) {
        win77.game.totalScore = win77.game.player.score;
        playerScoreNode.innerHTML = win77.game.totalScore;

    } else if (win77.game.alliance && !win77.game.invasion) {
        const hostScore = win77.findPlayerObj(win77.game.alliance.host).score;
        const saviorScore = win77.findPlayerObj(win77.game.alliance.savior).score;
        win77.game.totalScore = hostScore + saviorScore;
        updSaviorScore(saviorScore);
        playerScoreNode.innerHTML = hostScore;

    } else if (!win77.game.alliance && win77.game.invasion) {
        if (win77.game.player.id === win77.game.invasion.host) {
            win77.game.totalScore = win77.game.player.score;
            playerScoreNode.innerHTML = win77.game.totalScore;
        } else {
            updInvaderScore(win77.game.player.score);
        }
    } else if (win77.game.alliance && win77.game.invasion) {
        const hostScore = win77.findPlayerObj(win77.game.alliance.host).score;
        const saviorScore = win77.findPlayerObj(win77.game.alliance.savior).score;
        const invaderScore = win77.findPlayerObj(win77.game.invasion.invader).score;
        win77.game.totalScore = hostScore + saviorScore;
        updSaviorScore(saviorScore);
        updInvaderScore(invaderScore);
        playerScoreNode.innerHTML = hostScore;
    }


    versusScoreNode.innerHTML = win77.game.versusScore;

    if (!win77.game.invasion) {
        isItWin();
    }
}

win77.pokeButton.dia.updScore = updScore;

export { initScore, updScore, transferScoreFromTo };
