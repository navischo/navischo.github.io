const initHand = (playerObj) => {
	playerObj.hand = [];

	// Выбираем случайную карту, пушим в руку
	for (let i = 0; i < 5;) {
	  const newCard = DNELootArr[getRandomInt(DNELootArr.length)];
	  if (newCard.isBuild && (newCard.type === "sound")) {
	    playerObj.hand.push(newCard);
	    i++
	  }
	}
	// console.log(hand);

	// todo добавить методы

	// раздать карты всем игрокам
	// использовать карту
	// playerObj.useCard = (id) => {
		
	// }
	// дораздать N кол-во карт
}