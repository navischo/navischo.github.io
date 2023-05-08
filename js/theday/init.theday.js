import { win77 } from "../dne-cli.js";
import { setCountdown } from "../hud/time.hud.js";
import { initGradient } from "./gradient.theday.js";
import { pokeButtonMarkup } from "../utils/pokeButtonMarkup.js";


const openPortal = () => {
    const portal = document.createElement("div");

    portal.classList.add("js-rick-portal");
    portal.classList.add("card");
    portal.innerHTML = `<img src="img/portal.gif">`;
    // portal.callback = () => {
    //     console.log("hello");
    // }

    return portal;
}

const thedayMarkup =
    `<div id="queue"></div>
${pokeButtonMarkup}`;

const getThedayMarkup = () => {
    const pageUpContainer = document.createElement("section");
    pageUpContainer.innerHTML = thedayMarkup;

    return pageUpContainer;
}

const initTheday = () => {
    console.log(`${win77.game.player.id} starts an Event`, win77);
    initGradient();
    // setCountdown(win77.game.event.lineupLength);

    const parent = document.querySelector("#dne-page-up");
    parent.appendChild(getThedayMarkup());
    const placeholder = parent.querySelector(".pokeball-wrap");
    const portal = openPortal();

    // portal.addEventListener("click", () => {
    //     win77.pokeButton.dia.useSmithsCard();
    // });

    parent.insertBefore(portal, placeholder);
    placeholder.remove();
    win77.pokeButton.dia.useSmithsCards();
}

export { initTheday };
