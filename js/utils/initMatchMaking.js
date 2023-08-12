import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import { getRandomInt } from "./getCardById.js";

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
    DNEPlayersSet.add(new DNEPlayer("asura", `${PLAYERS_AVATAR_PATH}avatar-7.png`, "Читати думки"));

    return DNEPlayersSet;
}

win77.players = initDNEPlayersSet();
win77.lobby = new Set();

const invitePlayer = (id) => {
    const playerById = Array.from(win77.players).find((DNEPlayer) => DNEPlayer.id === id);
    console.log("playerById", playerById);
    if (playerById) {
        win77.lobby.add(playerById);
        const mateCell = document.querySelector(".js-squad-mate:not(.--active)");
        if (mateCell) {
            mateCell.dataset.playerId = id;
            mateCell.innerHTML = ``;
            mateCell.innerHTML = getPlayerMarkup();
            updPlayer(id);
            mateCell.classList.add("--active");
        } else {
            console.log("All mate slots are full");
        }
    } else {
        console.log(`Player with id ${id} does not exits`);
    }
}

win77.invite = invitePlayer;

const getPlayerMarkup = () => `
    <header class="js-player-matchmaking squad__player">
        <b class="squad__player-lvl"><span class="js-player-lvl"></span></b>
        <h3 class="js-player-name squad__player-name"></h3>
    </header>
    <div class="js-player-card">
    </div>
`;

const updPlayer = (id) => {
    const parent = document.querySelector(`[data-player-id="${id}"]`);
    const playerLvlNode = parent.querySelector(".js-player-lvl");
    const playerNameNode = parent.querySelector(".js-player-name");
    const playerCardNode = parent.querySelector(".js-player-card");

    if (win77.game.player.id === id) {
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
    } else {
        // win77.lobby
        const mateClass = Array.from(win77.game.catalog.class)[getRandomInt(win77.game.catalog.class.size)];
        console.log("win77.game.player", mateClass, win77.lobby);
        playerCardNode.innerHTML = ``;
        drawCard(playerCardNode, getCardElement, mateClass);

        const playerLvl = 0;
        if (playerLvl > 9) {
            playerLvlNode.parentNode.classList.add("--double");
        }
        playerLvlNode.textContent = playerLvl;
        playerNameNode.textContent = id;
    }
}

const initMatchMaking = () => {
    const parent = document.querySelector("#matchmaking");
    const hostNode = document.querySelector(".js-squad-host");
    // const mateNodes = document.querySelectorAll(".js-squad-mate");

    hostNode.dataset.playerId = win77.game.player.id;

    const openMatchmakingPage = () => {
        parent.classList.add("--visible");
        return parent;
    };

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-matchmaking");

        const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
        const setMatchmakingBtn = document.querySelector(".js-set-matchmaking");
        const playerMatchmakingBtn = document.querySelector(".js-player-matchmaking");
        const inviteRandomBtns = document.querySelectorAll(".js-invite-random");

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
        inviteRandomBtns.forEach((inviteRandomBtn) => {
            inviteRandomBtn.addEventListener("click", () => {
                // todo invite random player not from lobby
                // win77.invite(Array.from(win77.players)[getRandomInt(win77.players.size)].id);
            });
        });
    }

    initHandlers();
    const openMatchmakingBtn = document.querySelector(".js-open-matchmaking");
    openMatchmakingBtn.addEventListener("click", () => {
        updPlayer(win77.game.player.id);
        openMatchmakingPage();
    });
}

export { initMatchMaking };
