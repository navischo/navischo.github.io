import { win77 } from "../dne-cli.js";

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

export { setExecutive };

