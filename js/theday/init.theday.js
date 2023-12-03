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

const getSocialPointsMarkup = () => {
    console.log("win77.game.event.settings.socialPoints", win77.game.event.settings);
    let markup = ``;
    for (let i = 0; i < win77.game.event.settings.socialPoints; i++) {
        markup = markup + `<div class="squad-unit__bars-item"></div>`;
        console.log("markup", markup);
    }
    return markup;
}

const getSquadUnitElement = () => {
    const element = document.createElement("section");
    element.classList.add("squad-unit");
    element.innerHTML = `
    <b class="squad-unit__lvl ${win77.game.player.lvl > 9 ? "--double" : ""}"><span>${win77.game.player.lvl}</span></b>
    <div class="squad-unit__stats">
        <div class="js-player-social-points squad-unit__bars">
            ${getSocialPointsMarkup()}
        </div>
        <h3 class="squad-unit__name">${win77.game.player.id}</h3>
    </div>
    `;
    return element;
}

const thedayMarkup = `
<code id="player-title" class="theday__player-title">
    <span class="theday__player-title-text"></span>
</code>
<code id="round-title" class="theday__round-title">
    <span class="theday__round-title-text"></span>
</code>
<code id="ascii-title" class="theday__dunge-title"></code>
<div id="main-scene">
    <div id="avatar"></div>
    <div class="swiper executive">
        <div id="executive" class="swiper-wrapper"></div>
    </div>
</div>
<!--executive-->
<div id="squad"></div>
<div id="queue"></div>
<div id="lineup" class="hand"></div>
<div id="gradient" style=""/>
`;



const initTheday = () => {
    console.log(`${win77.game.player.id} starts an Event in dunge by name..`, win77);

    const dungeASCII = getDungeNameInASCII(win77.game.event.settings.dungeObj.name);
    const playerTitleElement = document.querySelector(`#player-title`);
    const playerTitleTextElement = document.querySelector(`#player-title .theday__player-title-text`);
    const roundTitleElement = document.querySelector(`#round-title`);
    const roundTitleTextElement = document.querySelector(`#round-title .theday__round-title-text`);
    const dungeTitleElement = document.querySelector(`#ascii-title`);

    dungeTitleElement.innerHTML = `${win77.game.event.settings.dungeObj.name}`;
    dungeTitleElement.classList.add("--visible");
    setTimeout(() => {
        dungeTitleElement.classList.remove("--visible");
    }, 3000);
    console.log(dungeASCII);

    playerTitleTextElement.innerHTML = `${win77.game.player.id}`;
    playerTitleTextElement.dataset.playerId = `${win77.game.player.id}`;
    playerTitleElement.classList.add("--visible");
    setTimeout(() => {
        playerTitleElement.classList.remove("--visible");

        roundTitleTextElement.innerHTML = `${win77.game.round}`;
        roundTitleElement.classList.add("--visible");
        setTimeout(() => {
            roundTitleElement.classList.add("--fade-out");
            roundTitleElement.classList.remove("--visible");
        }, 7000);
    }, 3000);



    initGradient();

    document.querySelector(".js-rick-portal").style.display = "block";
    win77.pokeButton.dia.useSmithsCards();
}

const getThedayElement = () => {
    const pageUpContainer = document.createElement("section");
    pageUpContainer.innerHTML = thedayMarkup;
    pageUpContainer.appendChild(getPortalElement());

    return pageUpContainer;
}

const drawTheday = () => {
    swiper.slideTo(3, 0);
    const parent = document.querySelector("#dne-page-up");
    parent.innerHTML = "";
    parent.appendChild(getThedayElement());
    parent.appendChild(getSquadUnitElement());
}

export { drawTheday, initTheday };
