import {getRandomInt, moveCardById} from "./getCardById.js";
import {win77} from "../dne-cli.js";
import {initInventory} from "../hud/inventory.hud.js";

const selectRandomCardToSave = () => {
    if (win77.game.table.size > 0 && win77.selectCardToSave) {
        console.log("Random choose card to save");
        const randomCard = Array.from(win77.game.table)[getRandomInt(win77.game.table.size)];
        moveCardById(randomCard.id, win77.game.table, win77.game.player.sound);
        Array.from(win77.game.table).forEach((cardOnTable) => {
            moveCardById(cardOnTable.id, win77.game.table, win77.game.catalog.sound);
        });
        initInventory();
        document.querySelector("#table").innerHTML = "";
        win77.selectCardToSave = false;
    }
}

const selectCardToSave = () => {
    const table = document.querySelector("#table");
    const cardsOnTable = table.querySelectorAll("[id*='dne-card-']");
    console.log("Cards from table", cardsOnTable);
    cardsOnTable.forEach((cardNode) => {
        const btn = cardNode.querySelector(".js-card-controls > button");
        btn.addEventListener("click", (e) => {
            console.log("You are choose card to save");
            const cardId = cardNode.id.replace("dne-card-", "");
            moveCardById(cardId, win77.game.table, win77.game.player.sound);
            initInventory();
            // cardNode.classList.add("--hide");
            // todo flying away animation
            setTimeout(() => cardNode.remove(), 500);
            cardsOnTable.forEach((unselectedCardNode) => {
                const cardId = unselectedCardNode.id.replace("dne-card-", "");
                moveCardById(cardId, win77.game.table, win77.game.catalog.sound);
                cardNode.classList.add("--hide");
                // todo flying away animation
                setTimeout(() => unselectedCardNode.remove(), 500);
            });
            console.log("Saved card is", cardId);
        });
    });
}

export { selectCardToSave, selectRandomCardToSave };
