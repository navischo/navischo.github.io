import { initScore, updScore } from "../hud/score.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { win77 } from "../dne-cli.js";
import { updTable, updHand } from "../cards/dom.cards.js";
import { moveCardById } from "../utils/getCardById.js";

const reloadTheday = () => {
    initScore();
    updScore();
    win77.pokeButton.dia.clearSmithsSet();
    win77.game.event.settings.guests.set.clear();

    document.querySelector("#dne-page-up").classList.remove("js-open");
    console.log("Cards from table", win77.game.table);
    win77.game.table.forEach((card) => {
        moveCardById(card.id, win77.game.table, win77.game.player.sound);
    });

    win77.giveIncomeToPlayer(win77.game.event.result.income);
    win77.giveSkillPointsToPlayer(1);
    win77.updBalanceHUD();

    console.log(`Event is finished. You archive ${win77.game.event.result.income} income`, win77.game.event);

    initInventory();
    updTable();
    win77.putCardAtPlayersHand(5 - win77.game.player.hand.size);
    updHand();
}

win77.reloadTheday = reloadTheday;

export { reloadTheday };
