class DNECli {
    constructor() {}

    log(command) {
        console.log(command);
    }

    setGame(gameObj) {
        this.game = gameObj;
        this.game.shop = {};
    }

    setPlayer(playerObj) {
        this.game.player = playerObj;
    }

    setCardGroup(name, cardSet) {
        this.game[name] = cardSet;
    }

    setShop(category) {
        this.game.shop[category] = this.game[category];
        delete this.game[category];
    }
}

const win77 = new DNECli();

export { win77 };
