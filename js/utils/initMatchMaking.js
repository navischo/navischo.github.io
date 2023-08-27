import { win77 } from "../dne-cli.js";
import { drawCard, updHand } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import { getRandomInt } from "./getCardById.js";
import { initPlayer } from "../cards/structure.cards.js";
import { updScore } from "../hud/score.hud.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { setExecutive } from "../hud/table.hud.js";
import { dialog } from "../hud/dialog.hud.js";
import { openPopup } from "../popup/dom.popup.jquery.js";
import { setTiming, initNextBtn } from "../hud/router.hud.js";

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
        const playerObj = initPlayer(playerById.id);
        win77.lobby.add(playerObj);
        console.log("playerObj", playerObj, win77.lobby);
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

const getPlayerItemMarkup = (playerObj) =>
    `
        <div class="player-for-mm">
            <div class="player-for-mm__controls">
                <button class="js-invite" data-id="${playerObj.id}">+</button>
            </div>
            <div class="player-for-mm__id">${playerObj.id}</div>
        </div>
    `;

const initPlayersList = () => {
    const parent = document.querySelector(".js-players-matchmaking");
    parent.innerHTML = Array.from(win77.players).map((playerObj) => getPlayerItemMarkup(playerObj)).join(``);
    parent.addEventListener("click", (e) => {
        if (e.target.classList.contains("js-invite")) {
            const newPlayerId = e.target.dataset.id;
            const isPlayerInLobby = Array.from(win77.lobby).find((playerObj) => playerObj.id === newPlayerId);
            if (!isPlayerInLobby) {
                win77.invite(newPlayerId);
            }
        }
    });
};

const showPlayersList = () => {
    const parent = document.querySelector(".js-players-wrap");
    parent.classList.add("--visible");
}

const switchPlayer = (id) => {
    const playerById = Array.from(win77.lobby).find((PlayerObj) => PlayerObj.id === id);
    const prevPlayer = win77.game.player;
    win77.lobby.delete(playerById);
    win77.lobby.add(prevPlayer);
    win77.game.player = playerById;
    console.log("win77.game.player", win77.game.player, win77.lobby);
    updScore();
    updBalanceNode();
    initInventory();
    if (win77.game.player.hand.size < 5) {
        win77.putCardAtPlayersHand(5 - win77.game.player.hand.size);
    }
    updHand();
    setExecutive(win77.game.player.id);
}

win77.switchPlayer = switchPlayer;

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

const getMatchMakingOptionsMarkup = () => `
    <fieldset class="field --dialog">
        <label class="glow text" for="win-condition">Win conditions</label>
        <select id="win-condition">
            <option value="highest-bankroll" selected>Highest bankroll</option>
        </select>
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="fin-condition">Fin conditions</label>
        <select id="fin-condition">
            <option value="round-limit" selected>Reach round limit</option>
        </select>
    </fieldset>

    <fieldset class="field --dialog">
        <label class="glow text" for="round-limit">Round limit</label>
        <input id="round-limit" type="number" placeholder="7">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="max-time-per-round">Max time per round</label>
        <input id="max-time-per-round" type="number" placeholder="unlimited">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="start-bankroll">Starting bankroll</label>
        <input id="start-bankroll" type="number" placeholder="16000">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="start-souls">Starting souls</label>
        <input id="start-souls" type="number" placeholder="3">
    </fieldset>
`;

const toggleSearch = () => {
    const parent = document.querySelector("#matchmaking");
    const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
    const setMatchmakingBtn = document.querySelector(".js-set-matchmaking");
    const playerMatchmakingBtn = document.querySelector(".js-player-matchmaking");

    parent.classList.toggle("--search");
    setMatchmakingBtn.classList.toggle("--search");
    startMatchmakingBtn.classList.toggle("--active");
    playerMatchmakingBtn.classList.toggle("--ready");
}

const startMatch = () => {
    const matchmakingWindow = document.querySelector("#matchmaking");
    matchmakingWindow.classList.remove("--visible");

    toggleSearch();
    setTiming(win77.router.pipeline[0]);
    initNextBtn();
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
        const openSettingsBtn = document.querySelector(".js-open-mm-settings");
        const inviteRandomBtns = document.querySelectorAll(".js-invite-random");

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            // closeBtn.removeEventListener("click", closeBtnHandler);
            // if (!parent.classList.contains("--search")) {
            //     startMatchmakingBtn.removeEventListener("click", startBtnHandler);
            // }
        };

        const setOptions = () => {
            const maxTimeInput = document.querySelector("#max-time-per-round");
            const startBankrollInput = document.querySelector("#start-bankroll");
            const startSoulsInput = document.querySelector("#start-souls");
            const options = {
                maxTime: null,
                startBankroll: null,
                startSouls: null,
            }
            if (+maxTimeInput?.value > 5) {
                options.maxTime = +maxTimeInput.value;
            }
            if (+startBankrollInput?.value > 1000) {
                options.startBankroll = +startBankrollInput.value;
            }
            if (+startSoulsInput?.value >= 0) {
                options.startSouls = +startSoulsInput.value;
            }
            win77.game.options = options;
            win77.game.player.balance.bankroll = win77.game.options.startBankroll;
            win77.game.player.balance.skillPoints = win77.game.options.startSouls;
            if (win77.lobby.size > 0) {
                win77.lobby.forEach((player) => {
                    player.balance.bankroll = win77.game.options.startBankroll;
                    player.balance.skillPoints = win77.game.options.startSouls;
                });
            }
            updBalanceNode();
            console.log("win77.game.options", win77.game.options, win77);
        }

        const startBtnHandler = () => {
            toggleSearch();

            const startTimeout = setTimeout(() => {
                startMatch();
                clearTimeout(startTimeout);
            }, 3000);
        }

        const openSettingsHandler = () => {
            console.log(openSettingsBtn, dialog);
            dialog.init(dialog.DIALOG_ID.options);
            openPopup("#dialog-popup");
        }

        win77.setMatchmakingOptions = setOptions;
        closeBtn.addEventListener("click", closeBtnHandler);
        startMatchmakingBtn.addEventListener("click", startBtnHandler);
        win77.startMatchmaking = startBtnHandler;
        openSettingsBtn.addEventListener("click", openSettingsHandler);
        inviteRandomBtns.forEach((inviteRandomBtn) => {
            inviteRandomBtn.addEventListener("click", () => {
                showPlayersList();
                // todo invite random player not from lobby
                // win77.invite(Array.from(win77.players)[getRandomInt(win77.players.size)].id);
            });
        });
        initPlayersList();
    }

    initHandlers();
    const openMatchmakingBtn = document.querySelector(".js-open-matchmaking");
    openMatchmakingBtn.addEventListener("click", () => {
        updPlayer(win77.game.player.id);
        openMatchmakingPage();
    });
}

export { initMatchMaking, getMatchMakingOptionsMarkup };
