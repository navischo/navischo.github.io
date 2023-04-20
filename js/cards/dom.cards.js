import { win77 } from "../dne-cli.js";
import { getCardElement } from "./template.cards.js";
import { COMMANDS } from "./const.cards.js";
import { drawImgLazy } from "../utils/drawImgLazy.js";
import { createNode } from "../utils/createNode.js";
import { initInventory } from "../hud/inventory.hud.js";
import {moveCardById} from "../utils/getCardById.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { isSetHasId } from "../utils/isSetHasId.js";

const initHandlers = (cardData, controls) => {
    const catalog = win77.game.catalog[cardData.type];
    const plusButtonHandler = () => {
        console.log(`You are ${COMMANDS.plus} ${cardData.id}`);

        if (isSetHasId(catalog, cardData.id)) {
            win77.getSkillPointsFromPlayer(1);
            updBalanceNode();
            moveCardById(cardData.id, catalog, win77.game.player[cardData.type]);
            initInventory();
        }
    };

    const buyButtonHandler = () => {
        const catalog = win77.game.catalog[cardData.type];
        // console.log("win get cost", cardData.cost, cardData);
        // console.log("isSetHasId(catalog, cardData.id)", isSetHasId(catalog, cardData.id));
        if (isSetHasId(catalog, cardData.id)) {
            win77.getCostFromPlayer(cardData.cost);
            updBalanceNode();
            moveCardById(cardData.id, catalog, win77.game.player[cardData.type]);
            initInventory();
        } else {
            console.log(`Item ${cardData.name} was already sold`);
        }
    };

    controls.btns.forEach((btn) => {
        if (btn.textContent === COMMANDS.plus) {
            btn.addEventListener("click", plusButtonHandler);
        } else if (btn.textContent === COMMANDS.buy) {
            btn.addEventListener("click", buyButtonHandler);
        }
    });
}

const addCardControls = (newCard, cardData) => {
    const controls = {};
    controls.parent = newCard.querySelector(".js-card-controls");
    if (cardData.type === "loot") {
        createNode(controls.parent, "button", COMMANDS.buy, COMMANDS.buy);
        createNode(controls.parent, "button", COMMANDS.rent, COMMANDS.rent);
    }
    if (cardData.type === "npc") {
        createNode(controls.parent, "button", COMMANDS.talk, COMMANDS.talk);
    }
    controls.btns = controls.parent.querySelectorAll("button");

    initHandlers(cardData, controls);
}

const drawCard = (cardContainer, cardTemplate, cardData) => {
    const newCard = cardTemplate(cardData);

    addCardControls(newCard, cardData);

    const isLazyLoad = document.querySelector("body").classList.contains("lazy");

    if (isLazyLoad) {
        drawImgLazy(newCard.querySelector(".card__preview-img"), cardData.img);
    } else {
        newCard.querySelector(".card__preview-img").src = cardData.img;
    }

    cardContainer.appendChild(newCard);
};

const drawLootCards = (cardData, parent = "#dne-page") => {
    const cardContainer = document.querySelector(parent);

    const drawIt = (DNELootCard) => {
        drawCard(cardContainer, getCardElement, DNELootCard);
    }

    // console.log("cardDataforEach", cardData);
    Array.from(cardData).forEach(drawIt);
}

// drawLootCards(win77.game.catalog.class);

export { drawLootCards };
