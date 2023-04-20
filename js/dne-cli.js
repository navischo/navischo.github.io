class DNECli {
    constructor() {}

    log(command) {
        return console.log(command);
    }

    setGame(gameObj) {
        this.game = gameObj;
        this.game.bank = 10000000;
    }

    setPlayer(playerObj) {
        this.game.player = playerObj;
    }

    setCatalog(category) {
        this.game.catalog[category] = this.game[category];
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
