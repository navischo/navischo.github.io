import { win77 } from "../dne-cli.js";
import { getCardElement } from "./template.cards.js";
import { COMMANDS } from "./const.cards.js";
import { drawImgLazy } from "../utils/drawImgLazy.js";
import { createNode } from "../utils/createNode.js";
import { initInventory } from "../hud/inventory.hud.js";
import { moveCardById } from "../utils/getCardById.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { isSetHasId } from "../utils/isSetHasId.js";
import { PAGE_NAMES } from "../hud/router.hud.js";
import { openWithTimer } from "../hud/tab.hud.js";

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

const drawCard = (cardContainer, getElementCallback, cardData) => {
    const newCard = getElementCallback(cardData);

    addCardControls(newCard, cardData);

    if (win77.router.currentPage === PAGE_NAMES.hud) {
        newCard.querySelector(".card__preview-img").src = cardData.img;
    } else {
        drawImgLazy(newCard.querySelector(".card__preview-img"), cardData.img);
    }

    cardContainer.appendChild(newCard);
};

win77.pokeButton.dia.drawCard = drawCard;

const drawLootCards = (cardData, parentSelector = "#dne-page") => {
    const cardContainer = document.querySelector(parentSelector);

    const drawIt = (DNELootCard) => {
        drawCard(cardContainer, getCardElement, DNELootCard);
    }

    // console.log("cardDataforEach", cardData);
    Array.from(cardData).forEach(drawIt);
}

// drawLootCards(win77.game.catalog.class);

const updHand = () => {
    const hand = document.querySelector("#bottom-hand");
    hand.innerHTML = ``;
    drawLootCards(win77.game.player.hand, "#bottom-hand");

    const cardsInYourHand = hand.querySelectorAll("div[id*='dne-card']");
    cardsInYourHand.forEach(card => {
        const plusBtn = card.querySelector("button");
        plusBtn.addEventListener("click", (e) => {
            const id = card.id.substring(9);
            const bonus = +(card.querySelector(".card__bonus").textContent);
            console.log(win77);
            openWithTimer();
            moveCardById(id, win77.game.player.hand, win77.game.table);
            updTable();

            win77.pokeButton.dia.updScore(bonus);

            hand.querySelector(`#dne-card-${id}`).remove();
        });
    });
}

win77.putCardAtPlayersHand(5);
// updHand();
win77.pokeButton.dia.goToPage("hud");

// win77.pokeButton.dia.updHand = updHand;

const updTable = () => {
    const node = document.querySelector("#table");
    node.innerHTML = ``;
    drawLootCards(win77.game.table, "#table");
}
updTable();

export { drawLootCards, drawCard, updHand, updTable };
