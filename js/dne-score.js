const playerScoreNode = document.querySelector("#player-score");
const versusScoreNode = document.querySelector("#versus-score");

// todo добавить бонус от класса и инвентаря
const initScore = () => {
	let crewPoints = 0; // 5 наемнички
	let soundPoints = 0; // 18+3+3+6+15 саунд
	let lootPoints = 0; // 4+9 аппаратура
	currentPlayer.score = crewPoints + soundPoints + lootPoints;
	// console.log("currentPlayer", currentPlayer, currentPlayer.score);
// 	currentPlayer.classArr.forEach((card) => {
// 		console.log("card", card);
// 		updScore(+card.bonus);
// 	});
}

//
const updScore = (bonus = 0) => {
	currentPlayer.score = currentPlayer.score + +bonus;
	playerScoreNode.innerHTML = currentPlayer.score;
	versusScoreNode.innerHTML = game.versusScore;
}

const compareScore = (LEVEL_COUNT, LOOT_COUNT) => {
	if (currentPlayer.score > versusScoreNode.innerHTML) {
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

