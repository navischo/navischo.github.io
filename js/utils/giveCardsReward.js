import {getCardById, getRandomId, moveCardById} from "./getCardById.js";
import { win77 } from "../dne-cli.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { initInventory } from "../hud/inventory.hud.js";
import { rentCard } from "./rentCard.js";
import { PAGE_NAMES } from "../router/router.module.js";

const drawCardsReward = () => {
    const parent = document.querySelector("body");
    const cardsRewardElement = document.createElement("section");
    cardsRewardElement.id = "cards-reward";
    cardsRewardElement.classList.add("cards-reward");
    parent.appendChild(cardsRewardElement);

    giveCardsReward();
}



const giveCardsReward = (count = 2) => {
    const rewardCardsSet = new Set();

    const getRandomCard = () => {
        const randomCardId = getRandomId(win77.game.catalog.loot);
        const newCard = Array.from(win77.game.catalog.loot).find((lootCard) => lootCard.id === randomCardId);
        const isItAlreadyInReward = Array.from(rewardCardsSet).find((lootCard) => lootCard === newCard);
        console.log(randomCardId, newCard, rewardCardsSet);
        return (!isItAlreadyInReward && newCard.costObj.rentAvailable) ? newCard : getRandomCard();
    }

    for (let i = 0; i < count; i++) {
        rewardCardsSet.add(getRandomCard());
    }

    drawLootCards(rewardCardsSet, `#cards-reward`);

    const cardElements = document.querySelectorAll("#cards-reward .card");
    console.log("cardElements", cardElements);
    cardElements.forEach((card) => {
        const cardWrap = card.parentElement;
        cardWrap.addEventListener("click", (e) => {
            console.log("e", e.target);
            const cardId = cardWrap.id.replace("dne-card-", "");
            rentCard(getCardById(cardId, win77.game.catalog.loot), true);

            cardWrap.classList.add("--slide-out-bottom");
            setTimeout(() => {
                cardWrap.remove();
                document.querySelector("#cards-reward").remove();
                initInventory();
                win77.pokeButton.dia.goToPage(PAGE_NAMES.play);
                win77.router.enableNext();
            }, 500);
        });
    });
}

export { drawCardsReward };
