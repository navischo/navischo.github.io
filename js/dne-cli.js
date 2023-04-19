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
        this.game.shop.balance = {
            bankroll: 10000000
        };
        delete this.game[category];
    }

    setTable() {
        this.game.table = new Set();
    }

    getCostFromPlayer(cost) {
        this.game.player.balance.bankroll = this.game.player.balance.bankroll - cost;
    }
}

const win77 = new DNECli();
window.win77 = win77;

export { win77 };
