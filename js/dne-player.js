class DNEPlayer {
    constructor(id, energy, bankroll, classArr) {
        this.id = id;
        this.energy = energy;
        this.bankroll = bankroll;
        this.classArr = classArr;
    }
}

const START_STATS = {
    energy: 40,
    bankroll: 12000
};

class DNEGame {
    constructor(playersArr, startStats = START_STATS) {
        this.playersArr = playersArr;
        this.startStats = startStats;
    }
}

class DNEEvent {
    // Инициатор
    // Крю
    // Ожидаемая аудитория
    // Источники дохода
    // Дата проведения
    // Место
    constructor(owner, playersArr, expectedAudience, incomeSourceArr, theDay, place) {
        this.owner = owner;
        this.playersArr = playersArr;
        this.expectedAudience = expectedAudience;
        this.incomeSourceArr = incomeSourceArr;
        this.theDay = theDay;
        this.place = place;
    }
}

let game;
const startGame = (playersArr, maxTime, dayLenght, startStats) => {
    const playersObjectArr = [];
    playersArr.forEach((id) => {
        console.log(`Player ${id} joined the game`);
       playersObjectArr.push(initPlayer(id, startStats.energy, startStats.bankroll, []));
    });
    setTimer(maxTime);
    // todo В зависимости от времени игры менять время суток: надпись и фон
    playersObjectArr.forEach((playerObj) => {
        drawPlayer("players-list", "players-list-item", playerObj);
    });
    game = new DNEGame(playersObjectArr);
    // Отрисовка
    console.log("Game initiation started", game);
    return game;
}

const initPlayer = (id, energy, bankroll, classArr) => {
    const newPlayer = {
        id: id,
        energy: energy,
        bankroll: bankroll,
        classArr: classArr
    };
    // console.log("newPlayer", newPlayer);
    return newPlayer;
};

const drawPlayer = (parentId, templateClass, playerData) => {
    const parentNode = document.querySelector(`#${parentId}`);
    const newPlayerNode = document.querySelector(`.${templateClass}`).cloneNode(true);

    const id = newPlayerNode.querySelector(".player__id").innerHTML = playerData.id;
    const energy = newPlayerNode.querySelector(".player__energy").innerText = playerData.energy;
    const bankroll = newPlayerNode.querySelector(".player__bankroll").innerText = playerData.bankroll;

    newPlayerNode.style.display = "flex";

    parentNode.appendChild(newPlayerNode);
}

const startEvent = (owner, playersArr, expectedAudience, incomeSourceArr, theDay, place) => {
    const newEvent = new DNEEvent(owner, playersArr, expectedAudience, incomeSourceArr, theDay, place);

    return newEvent;
}