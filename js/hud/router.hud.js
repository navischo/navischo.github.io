import { swiper } from "../swiper/swiper.module.js";
import { win77 } from "../dne-cli.js";
import { CARD_TYPES } from "../cards/const.cards.js";

import { hudMarkup, initHud } from "./dom.hud.js";
import { updHand } from "../cards/dom.cards.js";
import { initIntervalScreen } from "../page/screen.page.js";
import { initScore, updScore } from "./score.hud.js";
// import { HUDModule } from "./hud.module.js";

const PAGE_NAMES = {
    enter: "enter",
    cards: "cards",
    npc: CARD_TYPES.npc,
    class: CARD_TYPES.class,
    loot: CARD_TYPES.loot,
    sound: CARD_TYPES.sound,
    hud: "hud",
    event: "event",
    board: "board"
};

const isItCardsPage = (name) => name === PAGE_NAMES.npc || name === PAGE_NAMES.class || name === PAGE_NAMES.loot;

const pipeline = [PAGE_NAMES.enter, PAGE_NAMES.npc, PAGE_NAMES.class, PAGE_NAMES.loot, PAGE_NAMES.hud, PAGE_NAMES.event, PAGE_NAMES.board];
const body = document.querySelector("body");
const title = document.querySelector(".head-title");
// todo по-умолчанию худ не отрисовывается, открыт каталог звука
// todo если открыт hud => запустить генерацию худа
let currentPage = PAGE_NAMES.hud;

const initNav = () => {
    const nav = {};

    pipeline.forEach((page) => {
        nav[page] = {};
        nav[page].go = () => {
            goToPage(page);
        };
    });

    nav.pipe = pipeline;

    return nav;
}

win77.router = {
    isLogin: true,
    pipeline: pipeline,
    currentPage: currentPage,
    nav: initNav()
};

const swipePage = (name) => {
    // console.log(`We use swiper to go on ${name}`, swiper);
    if (name === PAGE_NAMES.npc || name === PAGE_NAMES.class || name === PAGE_NAMES.loot || name === PAGE_NAMES.sound) {
        swiper.slideTo(0, 0);
    } else {
        swiper.slideTo(1, 0);
        // HUDModule.init();
    }
}

const goToPage = (name) => {
    win77.router.currentPage = name;
    swipePage(name);
    // body.setAttribute("data-hash", `${name}`);
    localStorage.currentPage = win77.router.currentPage;
    body.classList.remove("hud-body-background");
    title.textContent = win77.router.currentPage.toUpperCase();

    if (name === PAGE_NAMES.hud) {
        body.querySelector("#dne-page").innerHTML = hudMarkup();
        initScore();
        updScore();
        updHand();
        body.classList.add("hud-body-background");
    }

    return name;
}
win77.pokeButton.dia.goToPage = goToPage;

// const portalParent = document.querySelector(".js-portals-parent");
// const portalNodes = portalParent.querySelectorAll(".js-portal");
//
// portalNodes.forEach((portalNode) => {
//     portalNode.addEventListener("click", () => {
//        // console.log("portalNode.dataset", portalNode.dataset, portalNode.textContent);
//         goToPage(portalNode.dataset.portal);
//         console.log("win77.router", win77.router.currentPage);
//     });
// });

export { goToPage, PAGE_NAMES, isItCardsPage };
