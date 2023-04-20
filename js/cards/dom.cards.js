import { win77 } from "../dne-cli.js";
import { getCardElement } from "./template.cards.js";
import { COMMANDS } from "./const.cards.js";
import { drawImgLazy } from "../utils/drawImgLazy.js";
import { createNode } from "../utils/createNode.js";
import { initInventory } from "../inventory/dom.inventory.js";
import {moveCardById} from "../utils/getCardById.js";
const addCardControls = (newCard, cardData) => {
    const controls = {};
    controls.parent = newCard.querySelector(".js-card-controls");
    if (cardData.type === "loot") {
        createNode(controls.parent, "button", COMMANDS.buy);
        createNode(controls.parent, "button", COMMANDS.rent);
    }
    if (cardData.type === "npc") {
        createNode(controls.parent, "button", COMMANDS.talk);
    }
    controls.btns = controls.parent.querySelectorAll("button");

    controls.btns.forEach((btn) => {
        if (btn.textContent === COMMANDS.plus) {
            btn.addEventListener("click", () => {
                console.log(`You are ${COMMANDS.plus} ${cardData.id}`);
                // берем id карты
                // каталог[типкарты]
                // вставить в каталог[типкарты] игрока
                console.log("cardData.type", cardData.type, win77.game.catalog[cardData.type], win77.game.player[cardData.type], cardData, win77.game);
                moveCardById(cardData.id, win77.game.catalog[cardData.type], win77.game.player[cardData.type]);
                console.log("cardData, win77.game", cardData, win77.game);
                initInventory();
            });
        }
    });
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

    console.log("cardDataforEach", cardData);
    Array.from(cardData).forEach(drawIt);
}

// drawLootCards(win77.game.catalog.class);

export { drawLootCards };
