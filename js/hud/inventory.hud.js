import { CARD_TYPES } from "../cards/const.cards.js";
// import { drawLootCards } from "../cards/dom.cards.js";

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

    newListItem.addEventListener("click", (e) => {
        inventoryCardDisplay.innerHTML = "";
        const allItems = document.querySelectorAll(".inventory-item");
        allItems.forEach((item) => item.classList.remove("selected"));

        if (e.target.classList.contains("selected")) {

            e.target.classList.remove("selected");
        } else {
            const allInventoryItems = inventoryList.querySelectorAll(".inventory-item");
            if (allInventoryItems.length) {
                allInventoryItems.forEach(item => item.classList.remove("selected"));
            }

            const id = cardData.id;
            newListItem.classList.add("selected");
            console.log(cardData);
            // drawLootCards(cardData, displaySelector);
        }
    });

    cardNodesByType[cardType].appendChild(newListItem);
}

const inventory = {
    append: appendCardToInventory,
    clear: () => {
        cardNodesByType.loot.innerHTML = ``;
        cardNodesByType.class.innerHTML = ``;
        cardNodesByType.npc.innerHTML = ``;
    }
}

const initInventory = () => {
    const player = win77.game.player;
    inventory.clear();
    // console.log("initInventory", player, cardNodesByType);

    player.npc.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.npc);
    });

    player.class.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.class);
    });

    player.loot.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.loot);
    });
}

export { initInventory, appendCardToInventory };

// todo возможность просматривать добавленные карты
