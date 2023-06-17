import { win77 } from "../dne-cli.js";
import { pokeButtonMarkup } from "../utils/pokeButtonMarkup.js";
import { createNode } from "../utils/createNode.js";
import { PAGE_NAMES } from "./router.hud.js";
import { updHand } from "../cards/dom.cards.js";

const hudMarkup = (owner = win77.game.player.id ? win77.game.player.id : "navi") => `
<h1 class="score">
    <span id="player-score" class="js-score-val" data-advice-id="impact">5</span> vs <span id="versus-score" class="js-score-val" data-advice-id="expectations">12</span>
</h1>
<!--<video class="background-house" src="../../mp4/video-place.mp4" autoplay></video>-->
<div id="inventory-card-display"></div>

<div  class="table custom-scrollbar --y">
<div id="table" class="table__cards" data-owner="${owner}"></div>
</div>
<!-- <div id="top-hand" class="hand"></div> -->

<div id="bottom-hand" class="card-container hand"></div>

<!-- ${pokeButtonMarkup} -->
`;

const initHud = () => {
    console.log(`win77.game.player.id`, win77.game.player.id);
    win77.page.node.innerHTML = ``;
    createNode(win77.page.node, "div", hudMarkup(), PAGE_NAMES.hud);
    updHand();
}

export { hudMarkup, initHud };
