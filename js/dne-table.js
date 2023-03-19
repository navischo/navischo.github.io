const getCardById = (id) => {
    const card = DNELootArr.find((lootCard) => lootCard.id === id);
    if (card) {
        console.log(`Card with id ${id} finded successfully`);
        return card;
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}

const tableNode = document.querySelector("#table");
const appendCardsOnTable = (cardsArr) => {
    console.log("Card on table updated", cardsArr);
    drawLootCards(cardsArr, "#table");
}
const clearTable = () => tableNode.innerHTML = "";

clearTable();

const initTable = () => {
	game.table = [];


}