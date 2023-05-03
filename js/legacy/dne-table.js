const tableNode = document.querySelector("#table");
let cardsOnTable = tableNode.querySelectorAll(".swiper-slide");
const appendCardsOnTable = (cardsArr) => {
    console.log("Card on table updated", cardsArr);
    drawLootCards(cardsArr, "#table");
    cardsOnTable = tableNode.querySelectorAll(".swiper-slide");
    if (cardsOnTable.length > game.colsNum) {
        tableNode.classList.add("round-two");
        console.log("Round 2");
    }
}
const clearTable = () => tableNode.innerHTML = "";

clearTable();

const initTable = () => {
	game.table = [];
    game.colsNum = 5;

}
