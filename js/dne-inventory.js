const displaySelector = "#inventory-card-display";
const inventoryCardDisplay = document.querySelector(displaySelector);
const inventoryList = document.querySelector("#inventory-list");

const appentCardToInventory = (cardData, parentNode = inventoryList) => {
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

  parentNode.appendChild(newListItem);
  currentPlayer.inventory.push(cardData);

  return newListItem;
}

const initInventory = () => {
  currentPlayer.inventory = [];
  appentCardToInventory(getCardById("djflx6"));
  appentCardToInventory(getCardById("i-gamer-sound"));
}

const playerClassList = document.querySelector("#player-class-list");
const playerCrewList = document.querySelector("#player-crew-list");
const initProfile = () => {
  currentPlayer.crew = [];
  appentCardToInventory(getCardById("class-dj"), playerClassList);

  appentCardToInventory(getCardById("machete"), playerCrewList);
  appentCardToInventory(getCardById("tusk"), playerCrewList);
};