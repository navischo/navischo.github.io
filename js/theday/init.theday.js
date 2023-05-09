import { win77 } from "../dne-cli.js";
import { initGradient } from "./gradient.theday.js";
import { pokeButtonMarkup } from "../utils/pokeButtonMarkup.js";


const getPortalElement = () => {
    const portal = document.createElement("div");

    portal.classList.add("js-rick-portal");
    portal.classList.add("card");
    portal.innerHTML = `<img src="img/portal.gif">`;
    portal.style.display = "none";

    return portal;
}

const thedayMarkup = `
<div id="queue"></div>
${pokeButtonMarkup}
<div id="gradient" style=""/>
`;

const initTheday = () => {
    console.log(`${win77.game.player.id} starts an Event`, win77);
    initGradient();
    document.querySelector(".js-rick-portal").style.display = "block";
    win77.pokeButton.dia.useSmithsCards();
}

const getThedayElement = () => {
    const pageUpContainer = document.createElement("section");
    pageUpContainer.innerHTML = thedayMarkup;
    const pokeButton = pageUpContainer.querySelector("#poke-button");
    const clickHandler = () => {
        pokeButton.removeEventListener("click", clickHandler);
        initTheday();
    };
    pokeButton.addEventListener("click", clickHandler);
    pageUpContainer.appendChild(getPortalElement());

    return pageUpContainer;
}

const drawTheday = () => {
    const parent = document.querySelector("#dne-page-up");
    parent.innerHTML = "";
    parent.appendChild(getThedayElement());
}

export { drawTheday };
