const playerScoreNode = document.querySelector("#player-score");
const needScoreNode = document.querySelector("#need-score");

// todo добавить бонус от класса и инвентаря
const initScore = () => {
	let crewPoints = 5; //  наемнички
	let soundPoints = 18+3+3+6+15; //  саунд
	let lootPoints = 4+9; // аппаратура
	currentPlayer.score = crewPoints + soundPoints + lootPoints;
// 	console.log("currentPlayer.classArr", currentPlayer.classArr);
// 	currentPlayer.classArr.forEach((card) => {
// 		console.log("card", card);
// 		updScore(+card.bonus);
// 	});
}

// 
const updScore = (bonus = 0) => {
	currentPlayer.score = currentPlayer.score + +bonus;
	playerScoreNode.value = currentPlayer.score;
	needScoreNode.value = 36;
}

const compareScore = () => {
	if (currentPlayer.score > needScoreNode.innerHTML) {
		const LEVEL_COUNT = 2;
		const LOOT_COUNT = 15;
		const YOU_WIN = `You made it. Get ${LOOT_COUNT} treasure and ${LEVEL_COUNT} levels!`
		console.log(YOU_WIN);
	}
}

// const scoreValArr = document.querySelectorAll(".js-score-val");
// const editScore = (scoreValNode) => {
// 		scoreValNode.innerHTML = `
// 			<input class="js-score-val-input" type="number">
// 			<button class="js-score-val-submit">
// 		`;
// 		scoreValNode.removeEventListener("click", editScore);
// 	};

// scoreValArr.forEach((scoreValNode) => {
	// scoreValNode.addEventListener("click", editScore);
// });

