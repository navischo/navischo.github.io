import { swiper } from "../swiper/swiper.module.js";
import { win77 } from "../dne-cli.js";
import { CARD_TYPES } from "../cards/const.cards.js";

import { hudMarkup } from "./dom.hud.js";
import { updHand } from "../cards/dom.cards.js";
import { initScore, updScore } from "./score.hud.js";
import {initCatalog} from "../catalog/dom.catalog.js";

const PAGE_NAMES = {
    enter: "enter",
    cards: "cards",
    npc: CARD_TYPES.npc,
    class: CARD_TYPES.class,
    loot: CARD_TYPES.loot,
    sound: CARD_TYPES.sound,
    play: "play",
    hud: "hud",
    event: "event",
    admin: "admin",
    board: "board"
};

const isItCardsPage = (name) => name === PAGE_NAMES.npc || name === PAGE_NAMES.class || name === PAGE_NAMES.loot;


const PIPELINES = {
    init: [PAGE_NAMES.enter, PAGE_NAMES.npc, PAGE_NAMES.class, PAGE_NAMES.loot, PAGE_NAMES.hud, PAGE_NAMES.event, PAGE_NAMES.board],
    easy: [PAGE_NAMES.play, PAGE_NAMES.event, PAGE_NAMES.admin, PAGE_NAMES.loot]
};

const body = document.querySelector("body");
const title = document.querySelector(".head-title");
let currentPage = PAGE_NAMES.hud;

const initNav = () => {
    const nav = {};
    nav.pipe = PIPELINES.easy;

    nav.pipe.forEach((page) => {
        nav[page] = {};
        nav[page].go = () => {
            goToPage(page);
        };
    });


    return nav;
}

win77.router = {
    isLogin: true,
    pipeline: PIPELINES.easy,
    currentPage: currentPage,
    nextPageIndex: 0,
    nav: initNav()
};

const swipePage = (name) => {
    // console.log(`We use swiper to go on ${name}`, swiper);
    if (name === PAGE_NAMES.npc || name === PAGE_NAMES.class || name === PAGE_NAMES.loot || name === PAGE_NAMES.sound) {
        swiper.slideTo(0, 0);
        initCatalog(name);
    } else if (name === PAGE_NAMES.play) {
        swiper.slideTo(2, 0);
        // HUDModule.init();
    } else if (name === PAGE_NAMES.event) {
        swiper.slideTo(3, 0);
    } else if (name === PAGE_NAMES.admin) {
        swiper.slideTo(1, 0);
    } else {
        swiper.slideTo(1, 0);
    }

    win77.router.nextPageIndex++;
    if (win77.router.nextPageIndex >= win77.router.pipeline.length) {
        win77.router.nextPageIndex = 0;
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

const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener("click", () => {
    win77.pokeButton.dia.goToPage(win77.router.pipeline[win77.router.nextPageIndex]);
    win77.router.nextPageIndex !== 1 ? hideArrows() : showArrows();
});

const hideArrows = () => body.classList.add("hide-arrows");
const showArrows = () => body.classList.remove("hide-arrows");

const startPipe = () => {
    hideArrows();
}

win77.startPipe = startPipe;

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
