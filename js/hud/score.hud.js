import { createNode } from "../utils/createNode.js";
import { win77 } from "../dne-cli.js";

const body = document.querySelector("body");

const markup = `
<span id="player-score" class="js-score-val">5</span> vs <span id="versus-score" class="js-score-val">12</span>
`;

const createMarkupNode = () => {
    createNode(body, "h1", markup, "score");
}

createMarkupNode();

const playerScoreNode = document.querySelector("#player-score");
const versusScoreNode = document.querySelector("#versus-score");

const initScore = () => {
    let crewPoints = 0;
    let soundPoints = 0;
    let lootPoints = 0;

    win77.game.player.score = crewPoints + soundPoints + lootPoints;
    win77.game.versusScore = 0;
}

const updScore = (bonus = 0) => {
    let score = win77.game.player.score;
    score = score + +bonus;

    playerScoreNode.innerHTML = score;
    versusScoreNode.innerHTML = win77.game.versusScore;

    return score;
}

win77.pokeButton.dia.updScore = updScore;

initScore();
updScore();
