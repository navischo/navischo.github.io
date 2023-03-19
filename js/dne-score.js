const playerScoreNode = document.querySelector("#player-score");
const needScoreNode = document.querySelector("#need-score");

// todo добавить бонус от класса и инвентаря
const initScore = () => {
	currentPlayer.score = 0;
// 	console.log("currentPlayer.classArr", currentPlayer.classArr);
// 	currentPlayer.classArr.forEach((card) => {
// 		console.log("card", card);
// 		updScore(+card.bonus);
// 	});
}

// 
const updScore = (bonus = 0) => {
	currentPlayer.score = currentPlayer.score + +bonus;
	playerScoreNode.innerHTML = currentPlayer.score;
	needScoreNode.innerHTML = 12;
}
