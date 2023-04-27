import { CARD_TYPES } from "../cards/const.cards.js";
import { win77 } from "../dne-cli.js";


const inventoryMarkup = `
<div class="player-obj inventory">
    player:<br>&nbsp;&nbsp;{<br>
    &nbsp;&nbsp;class:<br>&nbsp;&nbsp;{&nbsp;
    <span id="player-class-list" class="inventory-items"></span>
    &nbsp;},
    <br>&nbsp;&nbsp;crew:<br>&nbsp;&nbsp;{&nbsp;
    <span id="player-crew-list" class="inventory-items"></span>
    &nbsp;}
    <br>}<br><br><div class="js-in-car"></div>
</div>
<div class="inventory">
    inventory: <br>{<br>
    <span id="inventory-list" class="inventory-items"></span>
    }
</div>

<div id="inventory-card-display"></div>
`;
document.querySelector("#dne-page").insertAdjacentHTML("afterend", inventoryMarkup);


const carInventoryMarkup = `
in Car(<button class="js-car-name">car</button>)<span class="js-car-in">{<br>
<span id="car-inventory-list" class="inventory-items"></span>
}</span>
`;
const carInventoryParent = document.querySelector(".js-in-car");


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


const initCarInventory = (carCard) => {
    carInventoryParent.innerHTML = carInventoryMarkup;
    // carInventoryParent.classList.add("car-inventory");
    const nameNode = carInventoryParent.querySelector(".js-car-name");
    const carIn = carInventoryParent.querySelector(".js-car-in");
    nameNode.textContent = `${carCard.name}`;
    nameNode.addEventListener("click", () => {
        carIn.classList.toggle("js-car-open");
    });
}

const initInventory = () => {
    const player = win77.game.player;
    inventory.clear();
    // console.log("initInventory", player, cardNodesByType);

    player.npc.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.npc);
    });

    player.class.forEach((classCard) => {
        appendCardToInventory(classCard, CARD_TYPES.class);
    });

    player.loot.forEach((lootCard) => {
        appendCardToInventory(lootCard, CARD_TYPES.loot);
    });

    player.cars.forEach((carCard) => {
        initCarInventory(carCard);
    });
}

export { initInventory, appendCardToInventory };

// todo возможность просматривать добавленные карты
