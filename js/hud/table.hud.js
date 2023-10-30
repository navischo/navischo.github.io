import { win77 } from "../dne-cli.js";
import { moveCardById } from "../utils/getCardById.js";

const initTable = () => {
    win77.setTable();
    // moveCardById("demo-fracture", win77.game.player.sound, win77.game.table);
}

initTable();

const setExecutive = (cardId) => {
    console.log(cardId, "Is executive now");
    const table = document.querySelector("#table");
    table.dataset.owner = cardId;
}

const updExecutive = () => {
    const table = document.querySelector("#table");
    const isInvasion = win77.game.invasion;
    const isAlliance = win77.game.alliance;
    if (!isInvasion && !isAlliance) {
        table.dataset.owner = win77.game.player.id;
    } else {
        if (isAlliance) {
            table.dataset.owner = `${win77.game.alliance.host}+${win77.game.alliance.savior}`;
        }
        if (isInvasion) {
            const invaderTable = document.querySelector("#table-invader");
            invaderTable.dataset.owner = `${win77.game.invasion.invader}`;
        }
    }
}

const clearTable = () => {
    const parent = document.querySelector(".table");
    const table = parent.querySelector("#table");
    table.innerHTML = ``;
    win77.game.table.forEach((card) => {
        moveCardById(card.id, win77.game.table, win77.game.catalog.sound);
    });
}

export { setExecutive, updExecutive, clearTable };

