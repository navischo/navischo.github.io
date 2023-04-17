// START getCardsInHand()

const btnToGetCardsInHand = document.querySelector(".js-get-cards");

const isHandFull = (playerObj) => playerObj.hand.length > 4;

const isThisCardAlredyInHand = (newCardId, playerObj) => {
	return playerObj.hand.find((card) => {
		// console.log("card.id === newCard.id", card.id === newCardId, card.id, newCardId);
		return card.id === newCardId;
	});
}

const getCardsInHand = (count, playerObj) => {
	// Выбираем случайную карту, пушим в руку
	for (let i = 0; i < count;) {
		if (isHandFull(playerObj)) {
			console.log(`Hand of ${playerObj.id} are full`);
			break;
		} else {
		    const newCard = DNELootArr[getRandomInt(DNELootArr.length)];

		    // console.log("isThisCardAlredyInHand", !!isThisCardAlredyInHand, isThisCardAlredyInHand(newCard.id, playerObj));
		    if (newCard.isBuild && (newCard.type === "sound") && !isThisCardAlredyInHand(newCard.id, playerObj)) {
		      playerObj.hand.push(newCard);
		      i++
		    }
		}
	}
}

const onGetCardsBtnClick = () => {
	getCardsInHand(5, currentPlayer);
	updHand(currentPlayer.hand);
};

btnToGetCardsInHand.addEventListener("click", onGetCardsBtnClick);

// END getCardsInHand()


// START getOneMoreCardInHand()

const btnGetOneMore = document.querySelector(".js-get-one-card");

btnGetOneMore.addEventListener("click", () => {
	getCardsInHand(1, currentPlayer);
	updHand(currentPlayer.hand);
});


// START updHand()

const bottomHandNode = document.querySelector("#bottom-hand");

const updHand = (cardsArr) => {
    // console.log("cardsArr", cardsArr);
    bottomHandNode.innerHTML = "";
    drawLootCards(cardsArr);

    const cardsInYourHand = bottomHandNode.querySelectorAll(".swiper-slide");
    cardsInYourHand.forEach(drawedCard => {
		const plusBtn = drawedCard.querySelector("button");
		plusBtn.addEventListener("click", (e) => {
            const id = drawedCard.id.substring(9);
            const newCard = getCardById(id);
            appendCardsOnTable([newCard]);
            game.table.push(newCard);
            currentPlayer.score = currentPlayer.score + newCard.bonus;
            updScore();

            bottomHandNode.querySelector(`#dne-card-${id}`).remove();
            currentPlayer.hand.splice(currentPlayer.hand.findIndex(card => card.id === id), 1);
        });
    });
}

// END updHand()


const initHand = (playerObj) => {
	playerObj.hand = [];

	getCardsInHand(5, playerObj);

	// todo добавить методы

	// раздать карты всем игрокам
	// использовать карту
	// playerObj.useCard = (id) => {

	// }
	// дораздать N кол-во карт
}
