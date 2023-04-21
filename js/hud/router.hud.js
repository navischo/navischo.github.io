import { win77 } from "../dne-cli.js";
import { CARD_TYPES } from "../cards/const.cards.js";

const pipeline = ["enter", CARD_TYPES.npc, CARD_TYPES.class, CARD_TYPES.loot, "hud", "event", "board"];

const goToPage = (name) => {
    currentPage = name;

    return name;
}
win77.pokeButton.dia.goToPage = goToPage;

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

let currentPage = CARD_TYPES.npc;
goToPage("hud");

win77.router = {
    isLogin: true,
    pipeline: pipeline,
    currentPage: currentPage,
    nav: initNav()
};

const portalParent = document.querySelector(".js-portals-parent");
const portalNodes = portalParent.querySelectorAll(".js-portal");

portalNodes.forEach((portalNode) => {
    portalNode.addEventListener("click", () => {
       console.log("portalNode.dataset", portalNode.dataset, portalNode.textContent);
        goToPage(portalNode.dataset.portal);
        console.log("win77.router", win77.router.currentPage);
    });
});
