import { win77 } from "../dne-cli.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { drawDoorCards } from "../cards/doorDom.cards.js";
import { clearChips, drawChips } from "./chips.catalog.js";
import { splitDoorsAndLoot } from "../utils/setToArr.js";

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
        drawDoorCards(win77.game.catalog.prj);
        clearChips();
        drawChips(win77.game.doors, ".js-doors");
    }  if (type === "" || type === "anti") {
        clearChips();

        const doors = splitDoorsAndLoot(win77.game.cards).doors;
        drawDoorCards(doors);
        drawChips(doors, ".js-doors");

        const loot = splitDoorsAndLoot(win77.game.cards).loot;
        drawLootCards(loot);
        drawChips(loot, ".js-items");
    } else {
        const DNENewCardsArr = Array.from(win77.game.cards).filter(card => card.type === type);
        drawLootCards(DNENewCardsArr);
        clearChips();
        drawChips(DNENewCardsArr, ".js-items");
    }

    getDrawedCards();
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

const getDrawedCards = () => {
    const drawedCards = document.querySelectorAll("[id*=dne-card-]");
    drawedCards.forEach((drawedCard) => {
        const plusBtn = drawedCard.querySelector(".card__controls button");
        plusBtn.addEventListener("click", () => {
            console.log(drawedCard);
        })
    })
}
