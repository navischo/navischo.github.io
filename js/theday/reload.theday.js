import { initScore, updScore } from "../hud/score.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { win77 } from "../dne-cli.js";
import { updTable, updHand } from "../cards/dom.cards.js";
import { moveCardById } from "../utils/getCardById.js";
import { matchEventIncome } from "./const.theday.js";
import { drawCheck } from "./check.theday.js";
import { parseTopsString, topsString } from "./endgame.theday.js";

const reloadTheday = () => {
    Array.from(win77.game.event.settings.guests.set).forEach((smithsCard) => {
        matchEventIncome(smithsCard);
    });

    console.log(`Event is finished. You archive ${win77.game.event.result.income} income and some sound to play next time`, win77.game.event);
    document.querySelector("body").classList.remove("background-single");

    document.querySelector("#dne-page-up").classList.remove("js-open");
    document.querySelector("#dne-page-up").innerHTML = "";

    win77.giveIncomeToPlayer(win77.game.event.result.income);
    win77.giveSkillPointsToPlayer(1);
    console.log("!win77.game.final", win77.game.final, win77.game.player.balance.skillPoints, win77.game.player.balance.skillPoints === 4);
    if (win77.game.final === false) {
        drawCheck(win77.game.event.result, "#dne-page-up");
    } else {
        drawCheck(parseTopsString(localStorage.getItem("tops")), "#dne-page-up");
    }

    initScore();
    updScore();
    // win77.pokeButton.dia.clearSmithsSet();
    win77.game.event.settings.guests.set.clear();
    win77.game.player.rareGuestsSet.forEach((guest) => {
        guest.isOnBoard = false;
    });


    console.log("Cards from table", win77.game.table);
    win77.game.table.forEach((card) => {
        moveCardById(card.id, win77.game.table, win77.game.player.sound);
    });

    win77.updBalanceHUD();

    initInventory();
    updTable();
    win77.putCardAtPlayersHand(5 - win77.game.player.hand.size);
    updHand();
}

win77.reloadTheday = reloadTheday;

export { reloadTheday };
