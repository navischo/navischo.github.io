import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";

class DNEPlayer {
    constructor(id, avatar, description) { // дія чи результат?
        this.id = id;
        this.avatar = avatar;
        this.description = description;
    }
}

const PLAYERS_AVATAR_PATH = `libs/players/`; // avatar-1.jpg

const initDNEPlayersSet = () => {
    const DNEPlayersSet = new Set();

    DNEPlayersSet.add(new DNEPlayer("navischo", `${PLAYERS_AVATAR_PATH}avatar-1.jpg`, "Блазень - це карта відкриття та несподіванки. Кожен із нас трохи блазень."));
    DNEPlayersSet.add(new DNEPlayer("yo", `${PLAYERS_AVATAR_PATH}avatar-2.jpg`, "Обожнюю себе натхненного 🌈"));
    DNEPlayersSet.add(new DNEPlayer("videoegor", `${PLAYERS_AVATAR_PATH}avatar-3.jpg`, "Мафіозник"));
    DNEPlayersSet.add(new DNEPlayer("microdozer", `${PLAYERS_AVATAR_PATH}avatar-4.jpg`, "👉💦🍄"));
    DNEPlayersSet.add(new DNEPlayer("olivye", `${PLAYERS_AVATAR_PATH}avatar-5.jpg`, "Jackass нет правил"));
    DNEPlayersSet.add(new DNEPlayer("echomateriya", `${PLAYERS_AVATAR_PATH}avatar-6.jpg`, "visual artist and sculptor"));

    return DNEPlayersSet;
}

win77.players = initDNEPlayersSet();

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
