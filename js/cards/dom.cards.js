import { win77 } from "../dne-cli.js";
import { getCardElement } from "./template.cards.js";
import { COMMANDS } from "./const.cards.js";
import { drawImgLazy } from "../utils/drawImgLazy.js";
import { createNode } from "../utils/createNode.js";

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
                console.log(`You are ${COMMANDS.plus} ${cardData.name}`);
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
