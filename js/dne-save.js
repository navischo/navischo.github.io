const saveStorage = window.localStorage;

const saveGame = () => {
	saveStorage.setItem('myGame', JSON.stringify(game));
    const myGame = saveStorage.getItem('myGame');
    console.log("Game saved", JSON.parse(myGame));
}

const loadSave = () => {
	const myGame = JSON.parse(saveStorage.getItem('myGame'));
	game = undefined;
	game = myGame;
	// game = JSON.parse(saveStorage.getItem('myGame'));
	console.log("Game succesfully loaded from your last save", game);
}
