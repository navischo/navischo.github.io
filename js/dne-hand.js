const initHand = (playerObj) => {
	playerObj.hand = [];

	// Функция которая возвращает случайное число
	function getRandomInt(max) {
	  return Math.floor(Math.random() * max);
	}

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
	// дораздать N кол-во карт
}