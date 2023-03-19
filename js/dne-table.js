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