import { getRandomInt, moveCardById } from "./utils/getCardById.js";
import { getCardElement } from "./cards/template.cards.js";
import { appendNewTop } from "./theday/endgame.theday.js";

class DNECli {
    constructor() {
        this.isPlayerOnMap = false;
        this.inQuestTime = 0;
    }

    timer(h, m, s, maxSec, maxMin, maxHour) {
        return () => {
            if (s > maxSec) {
                m++;
                if (m > maxMin) {
                    h++;
                    if (h > maxHour) {
                        h = 0;
                        m = 0;
                        s = 0;
                    }
                    m = 0;
                }
                s = 0;
            }

            const node = document.querySelector(".time");
            node.innerHTML = `${h ? `${h}h` : ``} ${m ? `${m}m` : ``} ${s ? `${s}s` : ``}`;

            s++;

        };
    }

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

    setTable() {
        this.game.table = new Set();
    }

    setLineup(min, lineup) {
        this.game.event.lineup = lineup;
        this.game.event.lineupLength = min;
    }

    setEventSettings(settingsObj) {
        this.game.event.settings = settingsObj;
    }

    giveIncomeToPlayer(income) {
        this.game.player.balance.bankroll = this.game.player.balance.bankroll + income;
    }

    getCostFromPlayer(cost) {
        this.game.player.balance.bankroll = this.game.player.balance.bankroll - cost;
    }

    updBalanceHUD() {
        const body = document.querySelector("body");
        body.querySelector(".js-skill-points-balance").textContent = win77.game.player.balance.skillPoints;
        body.querySelector(".js-energy-balance").textContent = win77.game.player.balance.energy;
        body.querySelector(".js-bankroll-balance").textContent = win77.game.player.balance.bankroll;
    }

    giveSkillPointsToPlayer(count) {
        this.game.player.balance.skillPoints = this.game.player.balance.skillPoints + count;
        if (this.game.player.balance.skillPoints >= 10) {
            this.game.final = {
                result: {
                    bankroll: this.game.player.balance.bankroll
                }
            };
            this.game.player.lvl = this.game.player.lvl + 1;

            localStorage.setItem("bankroll", `${this.game.player.balance.bankroll}`);
            localStorage.setItem("lvl", `${this.game.player.lvl}`);
            appendNewTop(this.game.player.id, this.game.player.balance.bankroll);
            console.log("Seems like you win the game. Congratulations!", win77.game);
        }

        return this.game.player.balance.skillPoints;
    }

    getSkillPointsFromPlayer(count) {
        this.game.player.balance.skillPoints = this.game.player.balance.skillPoints - count;
    }

    putCardAtPlayersHand(count = 1) {
        for (let i = 0; i < count; i++) {
            const soundSet = this.game.catalog.sound;
            const randomId = Array.from(soundSet).map((soundCard) => soundCard.id)[getRandomInt(soundSet.size)];
            moveCardById(randomId, soundSet, this.game.player.hand);
        }
    }

    showCard(cardData) {
        const cardParent = document.querySelector("#card-popup");
        cardParent.innerHTML = ``;
        this.pokeButton.dia.drawCard(cardParent, getCardElement, cardData);
        console.log(cardData.id, cardParent);
    }

    getEnergyPointsFromPlayer(count) {
        this.game.player.balance.energy = this.game.player.balance.energy - count;
    }

    giveEnergyPointsToPlayer(count) {
        this.game.player.balance.energy = this.game.player.balance.energy + count;
    }
}

const win77 = new DNECli();
window.win77 = win77;

export { win77 };
