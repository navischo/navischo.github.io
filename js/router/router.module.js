import { swiper } from "../swiper/swiper.module.js";
import { win77 } from "../dne-cli.js";
import { PAGE_NAMES, PIPELINES } from "./const.router.js";

import { hudMarkup } from "../hud/dom.hud.js";
import { updHand } from "../cards/dom.cards.js";
import { initScore, updScore } from "../hud/score.hud.js";
import { initCatalog } from "../catalog/dom.catalog.js";
import { openPopup } from "../popup/dom.popup.jquery.js";
import { finishRoundForPlayer } from "../utils/finishRoundForPlayer.js";

const isItCardsPage = (name) => name === PAGE_NAMES.npc || name === PAGE_NAMES.class || name === PAGE_NAMES.loot;

const body = document.querySelector("body");
const title = document.querySelector(".head-title");
let currentPage = PAGE_NAMES.hud;

const initNav = () => {
    const nav = {};
    nav.pipe = PIPELINES.easy;

    nav.pipe.forEach((step) => {
        nav[step.pageId] = {};
        nav[step.pageId].go = () => {
            goToPage(step.pageId);
        };
    });


    return nav;
}

win77.router = {
    isLogin: true,
    matchmaking: false,
    pipeline: PIPELINES.easy.map(el => el),
    currentPage: currentPage,
    nextPageIndex: 1,
    nav: initNav(),
    currentPlayer: win77.game.player.id,
    playersQueue: [win77.game.player.id]
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
    } else if (name === PAGE_NAMES.map) {
        openPopup(`#map-popup`);
    } else if (name === PAGE_NAMES.setting) {
        openPopup(`#setting-popup`);
    } else {
        swiper.slideTo(1, 0);
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

const clearTimingNodes = () => document.querySelector(".timing").remove();

const setTiming = (pipeObj) => {
    const parent = document.querySelector("body");
    const timingNode = document.createElement("section");
    timingNode.classList.add("timing");
    timingNode.innerHTML =
        `
            <div class="js-timing-sec timing__sec">${pipeObj.sec}</div>
            <div class="js-timing-tip timing__line">${pipeObj.line}</div>
        `;
    const secondsDisplayNode = timingNode.querySelector(".js-timing-sec");
    let sec = pipeObj.sec;

    win77.router.nextStep = () => {
        const currentPipeObj = win77.router.nextPageIndex === 0 ? win77.router.pipeline[win77.router.nextPageIndex] : win77.router.pipeline[win77.router.nextPageIndex - 1];
        console.log("currentPipeObj", win77.router.pipeline, win77.router.currentPage, currentPipeObj);
        if (!currentPipeObj.disableNext) {
            clearInterval(win77.secInterval);
            clearTimingNodes();
            win77.router.changePage(setTiming);
        }
    }

    const secIntervalHandler = () => {
        console.log(`win77.secInterval`, win77.secInterval);
        sec = sec - 1;
        secondsDisplayNode.textContent = sec;
        if (sec === 0) {
            secondsDisplayNode.remove();
            win77.router.matchmaking ? win77.router.nextStep() : "";
        }
    };
    win77.secInterval = setInterval(secIntervalHandler, 1000);

    parent.appendChild(timingNode);
    return timingNode;
}

win77.router.enableNext = () => {
    win77.router.pipeline[win77.router.nextPageIndex - 1].disableNext = false;
}

win77.router.resetDisable = () => {
    win77.router.pipeline[1].disableNext = true;
    win77.router.pipeline[2].disableNext = true;
}

const initNextBtn = () => {
    setTiming(win77.router.pipeline[0]);

    win77.router.matchmaking = true;
    win77.router.nextBtn = document.querySelector("#next-btn");
    win77.router.nextBtn.classList.add("--visible");
    win77.router.currentPage = "play";

    win77.router.changePage = (setTimingByCallback = null) => {
        let currentPipeObj;
        if (win77.router.nextPageIndex === 0) {
            win77.router.resetDisable();
            currentPipeObj = win77.router.pipeline[win77.router.nextPageIndex];
        } else {
            currentPipeObj = win77.router.pipeline[win77.router.nextPageIndex - 1];
        }
        // const currentPipeObj = win77.router.nextPageIndex === 0 ? win77.router.pipeline[win77.router.nextPageIndex] : win77.router.pipeline[win77.router.nextPageIndex - 1];
        if (currentPipeObj.disableNext) {
            win77.router.nextBtn.setAttribute("disable", "true");
        } else {
            const nextPipeObj = win77.router.pipeline[win77.router.nextPageIndex];
            win77.pokeButton.dia.goToPage(nextPipeObj.pageId);

            win77.router.nextPageIndex++;
            if (win77.router.nextPageIndex >= win77.router.pipeline.length) {
                win77.router.nextPageIndex = 0;
            }

            win77.router.nextBtn.textContent = win77.router.pipeline[win77.router.nextPageIndex].pageId;

            if (setTimingByCallback) {
                setTimingByCallback(nextPipeObj);
            }

            if (win77.router.nextPageIndex === 1) {
                finishRoundForPlayer();
                showArrows();
            } else {
                hideArrows();
            }
        }
    }

    win77.router.nextBtn.addEventListener("click", win77.router.nextStep);
}

const hideArrows = () => body.classList.add("hide-arrows");
const showArrows = () => body.classList.remove("hide-arrows");

const startPipe = (id) => {
    win77.router.pipeline = PIPELINES[id];
    win77.router.nextPageIndex = 1;
    addOptionalNextBtn(`loot`);

    return win77.router;
}

win77.startPipe = startPipe;

const addOptionalNextBtn = (pageToGo) => {
    const parent = document.querySelector(".js-next-btns");
    const btn = document.createElement("button");
    btn.classList.add("js-optional-next");
    btn.classList.add("cp-button");
    btn.classList.add("next-btn");
    btn.textContent = pageToGo;

    btn.addEventListener("click", () => {
        win77.pokeButton.dia.goToPage(pageToGo);
        btn.remove();
    });

    parent.appendChild(btn);
}

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

export { goToPage, PAGE_NAMES, isItCardsPage, initNextBtn };
