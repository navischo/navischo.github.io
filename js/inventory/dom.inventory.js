import { CARD_TYPES } from "../cards/const.cards.js";

const displaySelector = "#inventory-card-display";
const inventoryCardDisplay = document.querySelector(displaySelector);
const inventoryList = document.querySelector("#inventory-list");
// const soundList = document.querySelector("#sound-list");
const playerClassList = document.querySelector("#player-class-list");
const playerCrewList = document.querySelector("#player-crew-list");

const cardNodesByType = {
    [CARD_TYPES.loot]: inventoryList,
    // [CARD_TYPES.sound]: soundList,
    [CARD_TYPES.class]: playerClassList,
    [CARD_TYPES.npc]: playerCrewList
}

const appendCardToInventory = (cardData, cardType = CARD_TYPES.loot) => {
    const newListItem = document.createElement("a");
    newListItem.classList.add("inventory-item");
    newListItem.textContent = cardData.name;
    cardNodesByType[cardType].appendChild(newListItem);
}

const initInventory = () => {
    const player = win77.game.player;
    console.log("initInventory", player);

    player.crew.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.npc);
    });

    player.classArr.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.class);
    });

    player.loot.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.loot);
    });
}

export { initInventory, appendCardToInventory };

// todo привязать добавление в инвентарь к кнопкам плюсов на картах
// todo возможность просматривать добавленные карты
