import { win77 } from "../dne-cli.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { drawDoorCards } from "../cards/doorDom.cards.js";
import { clearChips, drawChips } from "./chips.catalog.js";

const CATALOG_TYPE = {
    npc: "npc",
    class: "class",
    loot: "loot",
    sound: "sound",
    project: "project",
    dia: "dia",
    anti: "anti"
}

const catalogSaveCeil = "currentCatalog";
const saveCatalog = (currentType) => {
    localStorage.setItem(catalogSaveCeil, `${currentType}`);
}

const loadCatalog = () => {
    return localStorage.getItem(catalogSaveCeil);
}

const initCatalog = (type) => {
    let currentCatalogSave = loadCatalog();

    if (!currentCatalogSave) {
        saveCatalog(type);
    } else {
        type = currentCatalogSave;
    }

    document.querySelector(".js-cards-catalog").innerHTML = "";
    document.querySelector(".head-title").innerHTML = `${type.toUpperCase()} CATALOG`;
    if (type === "project") {
        drawDoorCards(win77.game.doors);
        clearChips();
        drawChips(win77.game.doors, ".js-doors");
    }  if (type === "" || type === "anti") {
        clearChips();

        drawDoorCards(win77.game.doors);
        drawChips(win77.game.doors, ".js-doors");

        drawLootCards(win77.game.loot);
        drawChips(win77.game.loot, ".js-items");
    } else {
        const DNENewCardsArr = Array.from(win77.game.loot).filter(card => card.type === type);
        drawLootCards(DNENewCardsArr);
        clearChips();
        drawChips(DNENewCardsArr, ".js-items");
    }
}

const catalogTypeControls = document.querySelectorAll(".js-init-catalog");

catalogTypeControls.forEach((catalogTypeControl) => {
    catalogTypeControl.addEventListener("click", () => {
        const type = catalogTypeControl.textContent.toLowerCase();
        console.log("type", type);
        saveCatalog(type);
        initCatalog(CATALOG_TYPE[type]);
    });
});
