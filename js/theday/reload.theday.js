import { initScore, updScore } from "../hud/score.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { win77 } from "../dne-cli.js";
import { updTable, updHand } from "../cards/dom.cards.js";
import {moveCardBackAfterRent, moveCardById} from "../utils/getCardById.js";
import { matchEventIncome, matchLootBonus, matchCrewBonus } from "./const.theday.js";
import { drawCheck } from "./check.theday.js";
import { parseTopsString, topsString } from "./endgame.theday.js";
import { isSetHasId } from "../utils/isSetHasId.js";
import { matchGenreBonus } from "../utils/matchGenreBonus.js";
import { giveIncomeTo } from "../utils/giveIncomeTo.js";
import { updExecutive } from "../hud/table.hud.js";
import { selectCardToSave } from "../utils/selectCardToSave.js";

const reloadTheday = () => {
    console.log("win77.game.event.result", win77.game.event.result);
    Array.from(win77.game.event.settings.guests.set).forEach((smithsCard) => {
        matchEventIncome(smithsCard);
    });

    console.log(`Event is finished. You archive ${win77.game.event.result.income} income and some sound to play next time`, win77.game.event);

    const GENRE_BONUS = matchGenreBonus(win77.game.table);
    const LOOT_BONUS = matchLootBonus();
    const CREW_BONUS = matchCrewBonus();
    console.log(`Client expectation was on level ${win77.game.versusScore}.`, win77.game.event);
    console.log(`But with base(${win77.game.player.score})+bonus of your loot(+${LOOT_BONUS}), your crew(+${CREW_BONUS}) and combination of genres(+${GENRE_BONUS}) you blow up on ${win77.game.player.score + GENRE_BONUS + LOOT_BONUS + CREW_BONUS}!`, win77.game.event);
    console.log(`Now, receive ${win77.game.player.score - win77.game.versusScore + GENRE_BONUS + LOOT_BONUS + CREW_BONUS}% more income by Impact bonus!`, win77.game.event);

    if (isSetHasId(win77.game.player.loot, "chaos-green") && isSetHasId(win77.game.player.npc, "shadow")) {
        const insertedIncome = win77.game.event.result.income;
        win77.game.event.result.income = insertedIncome * 3;
        console.log(`Holy shit! Your income was tripled! ${insertedIncome} => ${win77.game.event.result.income}`);
    } else if (isSetHasId(win77.game.player.loot, "chaos-green") && !isSetHasId(win77.game.player.npc, "shadow")) {
        const insertedIncome = win77.game.event.result.income;
        win77.game.event.result.income = insertedIncome * 2;
        console.log(`God damn! Your income was doubled! ${insertedIncome} => ${win77.game.event.result.income}`);
    }

    document.querySelector("body").classList.remove("background-single");

    document.querySelector("#dne-page-up").classList.remove("js-open");
    document.querySelector("#dne-page-up").innerHTML = "";

    const inRent = win77.game.player.cardsInRentIdSet;
    if (inRent) {
        inRent.forEach((cardId) => {
            moveCardBackAfterRent(cardId);
        });
    }

    if (win77.game.alliance) {
        const saviorReward = Math.round(win77.game.event.result.income / 100 * win77.game.alliance.reward);
        win77.giveIncomeToPlayer(win77.game.event.result.income - saviorReward);
        win77.giveSkillPointsToPlayer(1);
        giveIncomeTo(win77.game.alliance.savior, saviorReward);
        win77.giveSkillPointsTo(win77.game.alliance.savior, 1);
        win77.game.alliance = false;
        document.querySelector("#savior-score").remove();
        document.querySelector(".js-phone").classList.remove("fw-d-none-i");
        updExecutive();
    } else {
        win77.giveIncomeToPlayer(win77.game.event.result.income);
        win77.giveSkillPointsToPlayer(2);
    }

    win77.giveEnergyPointsToPlayer(1);
    console.log("!win77.game.final", win77.game.final, win77.game.player.balance.skillPoints, win77.game.player.balance.skillPoints === 4);
    if (win77.game.final === false) { // win77.game.player.balance.skillPoints % 10
        win77.matchGameResult();
        drawCheck(win77.game.event.result, "#dne-page-up");
    } else {
        drawCheck(parseTopsString(localStorage.getItem("tops")), "#dne-page-up");
    }

    initScore();
    updScore();
    // win77.pokeButton.dia.clearSmithsSet();
    win77.game.event.lineupLength = 0;
    win77.game.event.settings.guests.set.clear();
    win77.game.event.result.income = 0;
    win77.game.event.result.cashOnEnter = 0;
    win77.game.event.result.cashOnBar = 0;
    win77.game.event.result.impactBonus = 0;
    win77.game.event.settings.guests.manCount = 0;
    win77.game.event.settings.guests.womanCount = 0;
    win77.budgetAccepted = false;
    win77.game.rareGuestsSet.forEach((guest) => {
        guest.isOnBoard = false;
    });


    win77.selectCardToSave = true;
    // selectCardToSave();
    // win77.game.table.forEach((card) => {
        // moveCardById(card.id, win77.game.table, win77.game.player.sound);
    // });

    win77.updBalanceHUD();

    initInventory();
    updTable();
    // win77.putCardAtPlayersHand(5 - win77.game.player.hand.size);
    win77.giveCardsTo(win77.game.player.id, win77.game.options.cardsAfterTurn); // only 2-5 cards after turn
    updHand();

    document.querySelector(".js-toggle-catalog-controls").classList.remove("fw-d-none-i");

    win77.finishDay(win77.game.event.result.income);
    win77.setCurrentDay();
    win77.resetSetting();
}

win77.reloadTheday = reloadTheday;

export { reloadTheday };
