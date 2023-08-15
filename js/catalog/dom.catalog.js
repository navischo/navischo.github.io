import { win77 } from "../dne-cli.js";
import { CARD_TYPES } from "../cards/const.cards.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { drawDoorCards } from "../cards/doorDom.cards.js";
import { clearChips, drawChips } from "./chips.catalog.js";
import { splitDoorsAndLoot } from "../utils/setToArr.js";
import { swiper } from "../swiper/swiper.module.js";
import { initCollections, appendFilterButton } from "../utils/initCollection.js";

const catalogSaveCeil = "currentCatalog";
const saveCatalog = (currentType) => {
    localStorage.setItem(catalogSaveCeil, `${currentType}`);
}

const loadCatalog = () => {
    return localStorage.getItem(catalogSaveCeil);
}

const initCatalog = (type = null) => {
    let currentCatalogSave = loadCatalog();

    if (type) {
        saveCatalog(type);
    } else {
        type = currentCatalogSave || `npc`;
    }

    document.querySelector(".js-cards-catalog").innerHTML = "";
    document.querySelector(".head-title").innerHTML = `${type.toUpperCase()} CATALOG`;

    if (type === "prj") {
        drawDoorCards(win77.game.catalog.prj, ".js-cards-catalog");
    } else {
        const DNENewCardsArr = Array.from(win77.game.catalog.all).filter(card => card.type === type);
        drawLootCards(DNENewCardsArr, ".js-cards-catalog");

        if (type === "loot") {
            appendFilterButton();
        }
    }

    // console.log(type, win77);
}

const catalogTypeControls = document.querySelectorAll(".js-init-catalog");


const cardTypesArr = Array.from(Object.keys(CARD_TYPES));

const fora = win77.game.player.lvl;
for (let i = 3 + fora; i < cardTypesArr.length; i++) {
    catalogTypeControls[i].setAttribute("disabled", true);
}

catalogTypeControls.forEach((catalogTypeControl) => {
    catalogTypeControl.addEventListener("click", () => {
        const type = catalogTypeControl.textContent.toLowerCase();
        console.log("type", type);
        swiper.slideTo(0, 0);
        saveCatalog(type);
        // console.log("type CARD_TYPES", type, CARD_TYPES, CARD_TYPES[type]);
        initCatalog(CARD_TYPES[type]);
    });
});

export { initCatalog, loadCatalog };
