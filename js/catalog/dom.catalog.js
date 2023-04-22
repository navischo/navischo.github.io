import { win77 } from "../dne-cli.js";
import { CARD_TYPES } from "../cards/const.cards.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { drawDoorCards } from "../cards/doorDom.cards.js";
import { clearChips, drawChips } from "./chips.catalog.js";
import { splitDoorsAndLoot } from "../utils/setToArr.js";
import { goToPage } from "../hud/router.hud.js";

const catalogSaveCeil = "currentCatalog";
const saveCatalog = (currentType) => {
    localStorage.setItem(catalogSaveCeil, `${currentType}`);
}

const loadCatalog = () => {
    return localStorage.getItem(catalogSaveCeil);
}

const initCatalog = (type) => {
    const doors = splitDoorsAndLoot(win77.game.catalog.all).doors;
    const loot = splitDoorsAndLoot(win77.game.catalog.all).loot;

    let currentCatalogSave = loadCatalog();

    if (!currentCatalogSave) {
        saveCatalog(type);
    } else {
        type = currentCatalogSave;
    }

    document.querySelector(".js-cards-catalog").innerHTML = "";
    document.querySelector(".head-title").innerHTML = `${type.toUpperCase()} CATALOG`;
    if (type === "prj") {
        drawDoorCards(doors);
        clearChips();
        drawChips(doors, ".js-doors");
        console.log(document.querySelectorAll(".card:not(.card--door)"));
    }  if (type === "" || type === "anti") {
        clearChips();

        drawDoorCards(doors);
        drawChips(doors, ".js-doors");

        drawLootCards(loot);
        drawChips(loot, ".js-items");
    } else {
        const DNENewCardsArr = Array.from(win77.game.catalog.all).filter(card => card.type === type);
        drawLootCards(DNENewCardsArr);
        clearChips();
        drawChips(DNENewCardsArr, ".js-items");
    }
    console.log(type, win77);
    win77.pokeButton.dia.goToPage(type);

    // если открыта вкладка лута
    // отдельная функция хендлер
    // вешается на все кнопки buy rent на странице

    // if ()

    getDrawedCards();
}

const catalogTypeControls = document.querySelectorAll(".js-init-catalog");

// console.log(Array.from(Object.keys(CARD_TYPES)));

const cardTypesArr = Array.from(Object.keys(CARD_TYPES));

for (let i = 3; i < cardTypesArr.length; i++) {
    catalogTypeControls[i].setAttribute("disabled", true);
}

catalogTypeControls.forEach((catalogTypeControl) => {
    catalogTypeControl.addEventListener("click", () => {
        const type = catalogTypeControl.textContent.toLowerCase();
        // console.log("type", type);
        saveCatalog(type);
        // console.log("type CARD_TYPES", type, CARD_TYPES, CARD_TYPES[type]);
        initCatalog(CARD_TYPES[type]);
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
