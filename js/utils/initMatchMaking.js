import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";

const updPlayer = () => {
    const playerLvlNode = document.querySelector(".js-player-lvl");
    const playerNameNode = document.querySelector(".js-player-name");
    const playerCardNode = document.querySelector(".js-player-card");
    const playerClass = Array.from(win77.game.player.class)[0];
    console.log("win77.game.player", playerClass, win77.game.player);
    playerCardNode.innerHTML = ``;
    drawCard(playerCardNode, getCardElement, playerClass);

    const playerLvl = win77.game.player.lvl;
    if (playerLvl > 9) {
        playerLvlNode.parentNode.classList.add("--double");
    }
    playerLvlNode.textContent = playerLvl;
    playerNameNode.textContent = win77.game.player.id;
}

const initMatchMaking = () => {
    const parent = document.querySelector("#matchmaking");

    const openMatchmakingPage = () => {
        parent.classList.add("--visible");
        return parent;
    };

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-matchmaking");

        const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
        const setMatchmakingBtn = document.querySelector(".js-set-matchmaking");
        const playerMatchmakingBtn = document.querySelector(".js-player-matchmaking");

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            // closeBtn.removeEventListener("click", closeBtnHandler);
            // if (!parent.classList.contains("--search")) {
            //     startMatchmakingBtn.removeEventListener("click", startBtnHandler);
            // }
        };

        const startBtnHandler = () => {
            parent.classList.toggle("--search");
            setMatchmakingBtn.classList.toggle("--search");
            startMatchmakingBtn.classList.toggle("--active");
            playerMatchmakingBtn.classList.toggle("--ready");
        }

        closeBtn.addEventListener("click", closeBtnHandler);
        startMatchmakingBtn.addEventListener("click", startBtnHandler);
    }

    initHandlers();
    const openMatchmakingBtn = document.querySelector(".js-open-matchmaking");
    openMatchmakingBtn.addEventListener("click", () => {
        updPlayer();
        openMatchmakingPage();
    });
}

export { initMatchMaking };
