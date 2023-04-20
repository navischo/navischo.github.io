const displaySelector = "#inventory-card-display";
const inventoryCardDisplay = document.querySelector(displaySelector);
const inventoryList = document.querySelector("#inventory-list");
const playerClassList = document.querySelector("#player-class-list");
const playerCrewList = document.querySelector("#player-crew-list");

const cardNodesByType = {
  inventory: inventoryList,
  classArr: playerClassList,
  crew: playerCrewList
}

const CARD_TYPES = {
  inventory: "inventory", // loot
  class: "classArr",
  crew: "crew"
}

const appentCardToInventory = (cardData, cardType = CARD_TYPES.inventory) => {


  const newListItem = document.createElement("a");
  newListItem.classList.add("inventory-item");
  newListItem.id = `dne-card-${cardData.id}`;
  newListItem.textContent = cardData.name;
  newListItem.addEventListener("click", (e) => {
  	
  	if (e.target.classList.contains("selected")) {
	  inventoryCardDisplay.innerHTML = "";
	  e.target.classList.remove("selected");
	} else {
	  const allInventoryItems = inventoryList.querySelectorAll(".inventory-item");
  	  if (allInventoryItems.length) {
  	  	allInventoryItems.forEach(item => item.classList.remove("selected"));
  	  }

	  const id = cardData.id;
	  newListItem.classList.add("selected");
	  inventoryCardDisplay.innerHTML = "";
	  drawLootCards([getCardById(id)], displaySelector);
	}
  });

  currentPlayer[cardType].push(cardData);
  cardNodesByType[cardType].appendChild(newListItem);

  return newListItem;
}

const initInventory = (type = CARD_TYPES.inventory) => {
  if (currentPlayer[type].length) {
    currentPlayer[type].forEach((card) => {
      appentCardToInventory(getCardById(card.id), type);
    });
  }

  // if (currentplayer.npc.length) {
  //   currentplayer.npc.forEach((card) => {
  //     appentCardToInventory(getCardById(card.id));
  //   });
  // }
  // currentPlayer.inventory = [];
  // appentCardToInventory(getCardById("djflx6"));
  // appentCardToInventory(getCardById("i-gamer-sound"));
}

const initProfile = () => {
  // currentplayer.npc = [];
  // appentCardToInventory(getCardById("class-dj"), CARD_TYPES.class);

  // appentCardToInventory(getCardById("machete"), CARD_TYPES.crew);
  // appentCardToInventory(getCardById("tusk"), CARD_TYPES.crew);
};
