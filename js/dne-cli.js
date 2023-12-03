import { getRandomInt, moveCardById } from "./utils/getCardById.js";
import { getCardElement } from "./cards/template.cards.js";
import { appendNewTop } from "./theday/endgame.theday.js";
import { getAchievement } from "./utils/initAchievements.js"

class DNECli {
    constructor() {
        this.inQuestTime = 0;
        this.mm = null;
        this.budgetAccepted = false;
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

    findPlayerObj(id) {
        if (id === this.game.player.id) {
            return this.game.player;
        } else {
            return Array.from(this.lobby).find((player) => player.id === id);
        }
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

    matchGameResult() {
        const maxRounds = win77.game.options?.roundLimit ? win77.game.options.roundLimit : 7;
        if (this.game.round >= maxRounds) {
            this.game.final = {
                result: {
                    bankroll: this.game.player.balance.bankroll
                }
            };
            this.game.player.lvl = this.game.player.lvl + 1;

            // localStorage.setItem("bankroll", `${this.game.player.balance.bankroll}`);
            localStorage.setItem(`${this.game.player.id}-lvl`, `${this.game.player.lvl}`);
            appendNewTop(this.game.player.id, this.game.player.balance.bankroll);
            console.log("Seems like you win the game. Congratulations!", win77.game);
        }
    }

    giveSkillPointsToPlayer(count) {
        this.game.player.balance.skillPoints = this.game.player.balance.skillPoints + count;
        return this.game.player.balance.skillPoints;
    }

    giveSkillPointsTo(id, count) {
        const playerObj = this.findPlayerObj(id);
        playerObj.balance.skillPoints = playerObj.balance.skillPoints + count;
        return playerObj.balance.skillPoints;
    }

    getSkillPointsFromPlayer(count) {
        this.game.player.balance.skillPoints = this.game.player.balance.skillPoints - count;
        this.game.player.balance.skillPoints < 0 ? this.game.player.balance.skillPoints = 0 : "";
    }

    getSkillPointsFrom(id, count) {
        const playerObj = this.findPlayerObj(id);
        playerObj.balance.skillPoints = playerObj.balance.skillPoints - count;
        playerObj.balance.skillPoints < 0 ? playerObj.balance.skillPoints = 0 : "";
        return playerObj.balance.skillPoints;
    }

    putCardAtPlayersHand(count = 1) {
        for (let i = 0; i < count; i++) {
            const soundSet = this.game.catalog.sound;
            const randomId = Array.from(soundSet).map((soundCard) => soundCard.id)[getRandomInt(soundSet.size)];
            moveCardById(randomId, soundSet, this.game.player.hand);
        }
    }

    giveCardsTo(id, count) {
        const playerObj = this.findPlayerObj(id);
        for (let i = 0; i < count; i++) {
            if (playerObj.hand.size < 5) {
                const soundSet = this.game.catalog.sound;
                const randomId = Array.from(soundSet).map((soundCard) => soundCard.id)[getRandomInt(soundSet.size)];
                moveCardById(randomId, soundSet, playerObj.hand);
            } else {
                return;
            }
        }
        console.log("giveCardsTo", id, count, playerObj.hand);
    }

    fillPlayersHand() {
        if (this.game.player.hand.size < 5) {
            this.putCardAtPlayersHand(5 - this.game.player.hand.size);
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

    getSocialPointsFromPlayer(count = 1) {
        this.game.event.settings.socialPoints = +win77.game.event.settings.socialPoints - +count;

        for (let i = 0; i < count; i++) {
            const bar = document.querySelector(".js-player-social-points > *:last-child");
            bar?.remove();
        }
    }

    giveSocialPointToPlayer() {
        this.game.event.settings.socialPoints++;

        const parent = document.querySelector(".js-player-social-points");
        const bar = document.createElement("div");
        bar.classList.add("squad-unit__bars-item");
        parent?.appendChild(bar);
    }

    getAchievement(id) {
        getAchievement(id);
    }

    clearAchievements() {
        localStorage.removeItem("achievements");
    }
}

const win77 = new DNECli();
window.win77 = win77;

export { win77 };
