import { swiper } from "../swiper/swiper.module.js";
import { win77 } from "../dne-cli.js";
import { initGradient } from "./gradient.theday.js";
import { pokeButtonMarkup } from "../utils/pokeButtonMarkup.js";
import {getDungeNameInASCII} from "../utils/getDungeNameInASCII.js";


const getPortalElement = () => {
    const portal = document.createElement("div");

    portal.classList.add("js-rick-portal");
    portal.classList.add("card");
    portal.innerHTML = `<img src="img/portal.gif">`;
    portal.style.display = "none";

    // portal.dataset.to = win77.game.event.settings.dungeObj.name;

    return portal;
}

const thedayMarkup = `
<code id="ascii-title" class="theday__dunge-title"></code>
<div id="main-scene">
    <div class="swiper executive">
        <div id="executive" class="swiper-wrapper"></div>
    </div>
    <div class="setup">
        <div class="setup__left"></div>
        <div id="setup" class="setup__controller"></div>
        <div class="setup__right"></div>
    </div>
</div>
<!--executive-->
<div id="queue"></div>
${pokeButtonMarkup}
<div id="lineup" class="hand"></div>
<div id="gradient" style=""/>
`;



const initTheday = () => {
    console.log(`${win77.game.player.id} starts an Event in dunge by name..`, win77);

    const dungeASCII = getDungeNameInASCII(win77.game.event.settings.dungeObj.name);
    const dungeTitle = document.querySelector(`#ascii-title`);
    dungeTitle.innerHTML = `${win77.game.event.settings.dungeObj.name}`;
    dungeTitle.classList.add("--visible");
    setTimeout(() => {
        dungeTitle.classList.remove("--visible");
    }, 5000);
    console.log(dungeASCII);

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
    swiper.slideTo(3, 0);
    const parent = document.querySelector("#dne-page-up");
    parent.innerHTML = "";
    parent.appendChild(getThedayElement());
}

export { drawTheday };
