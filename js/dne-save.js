const saveStorage = window.localStorage;

const saveGame = () => {
	const newSave = game;
	newSave.playersArr[0].crew = makeUniq(newSave.playersArr[0].crew);
	console.log("Game check newSave", newSave);
	saveStorage.setItem('myGame', "");
		console.log("Game check saveStorage", saveStorage);
	saveStorage.setItem('myGame', JSON.stringify(newSave));
	console.log("Game check saveStorage.getItem('myGame')", saveStorage.getItem('myGame'));
    const myGame = saveStorage.getItem('myGame');
    console.log("Game saved", JSON.parse(myGame));
}

const loadSave = () => {
	const myGame = JSON.parse(saveStorage.getItem('myGame'));
	console.log("myGame", myGame);
	game = undefined;
	game = myGame;
	// game = JSON.parse(saveStorage.getItem('myGame'));
	console.log("Game succesfully loaded from your last save", game);
}
