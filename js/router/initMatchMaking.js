import { win77 } from "../dne-cli.js";
import { drawCard, updHand } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import { getRandomInt } from "../utils/getCardById.js";
import { initPlayer } from "../cards/structure.cards.js";
import { updScore } from "../hud/score.hud.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { initInventory } from "../hud/inventory.hud.js";
import { setExecutive } from "../hud/table.hud.js";
import { dialog } from "../hud/dialog.hud.js";
import { openPopup } from "../popup/dom.popup.jquery.js";
import { initNextBtn } from "./router.module.js";
import { lightWalkingPlayer } from "../utils/finishRoundForPlayer.js";
import { switchPlayer } from "./switchPlayer.js";
import { PLATFORMS, DEFAULT_OPTIONS } from "./const.router.js";
import { initBonusInput } from "./initBonusInput.js";

class DNEPlayer {
    constructor(id, avatar, description) { // дія чи результат?
        this.id = id;
        this.avatar = avatar;
        this.description = description;
    }
}

const PLAYERS_AVATAR_PATH = `libs/players/`; // avatar-1.jpg

win77.switchPlayer = switchPlayer;

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
        win77.router.playersQueue.push(playerObj.id);
        console.log("playerObj", playerObj, win77.lobby, win77.router.playersQueue);
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
            if (!isPlayerInLobby && newPlayerId !== win77.game.player.id) {
                win77.invite(newPlayerId);
            }
        }
    });
};

const showPlayersList = () => {
    const parent = document.querySelector(".js-players-wrap");
    parent.classList.add("--visible");
}

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
        playerCardNode.innerHTML = ``;
        const playerAvatar = Array.from(win77.game.player.avatar)[0];
        playerAvatar ? drawCard(playerCardNode, getCardElement, playerAvatar) : "";

        // const playerClass = Array.from(win77.game.player.class)[0];
        // console.log("win77.game.player", playerClass, win77.game.player);
        // playerCardNode.innerHTML = ``;
        // drawCard(playerCardNode, getCardElement, playerClass);

        const playerLvl = win77.game.player.lvl;
        if (playerLvl > 9) {
            playerLvlNode.parentNode.classList.add("--double");
        }
        playerLvlNode.textContent = playerLvl;
        playerNameNode.textContent = win77.game.player.id;
    } else {
        // win77.lobby
        playerCardNode.innerHTML = ``;
        const mateAvatar = Array.from(win77.game.catalog.avatar)[getRandomInt(win77.game.catalog.avatar.size)];
        drawCard(playerCardNode, getCardElement, mateAvatar);

        // const mateClass = Array.from(win77.game.catalog.class)[getRandomInt(win77.game.catalog.class.size)];
        // console.log("win77.game.player", mateClass, win77.lobby);
        // playerCardNode.innerHTML = ``;
        // drawCard(playerCardNode, getCardElement, mateClass);

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
        <label class="glow text" for="platform">Platform</label>
        <select id="platform">
            <option value="${PLATFORMS.screen}" selected>Single screen</option>
            <option value="${PLATFORMS.tabletop}">Single screen + Tabletop</option>
        </select>
    </fieldset>
    
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
        <label class="glow text" for="max-time-per-round">Max time per round(sec)</label>
        <input id="max-time-per-round" type="number" placeholder="unlimited">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="start-bankroll">Starting bankroll</label>
        <input id="start-bankroll" type="number" placeholder="16000">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="start-souls">Starting souls</label>
        <input id="start-souls" type="number" placeholder="0">
    </fieldset>
    
    <fieldset class="field --dialog">
        <label class="glow text" for="cards-after-turn">Give cards after turn</label>
        <input id="cards-after-turn" type="number" placeholder="2" min="0" max="5">
    </fieldset>
`;

const getEventParamsMarkup = () => `
    <fieldset class="field --dialog">
        <label class="glow text" for="event-budget">Event budget</label>
        <input id="event-budget" type="number" placeholder="5000">
    </fieldset>
`;

const toggleSearch = () => {
    const parent = document.querySelector("#matchmaking");
    const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
    const setMatchmakingBtn = document.querySelector(".js-set-matchmaking");
    const playerMatchmakingBtnArr = document.querySelectorAll(".js-player-matchmaking");
    const playersList = document.querySelector(".js-players-wrap");

    parent.classList.toggle("--search");
    setMatchmakingBtn.classList.toggle("--search");
    startMatchmakingBtn.classList.toggle("--active");
    playerMatchmakingBtnArr.forEach((playerMatchmakingBtn) => {
        playerMatchmakingBtn.classList.toggle("--ready");
    });
    playersList.classList.remove("--visible");
}

const startMatch = () => {
    const matchmakingWindow = document.querySelector("#matchmaking");
    matchmakingWindow.classList.remove("--visible");
    matchmakingWindow.classList.add("--running");

    // todo применить настройки матча
    win77.mm.setOptions();
    toggleSearch();
    // setTiming(win77.router.pipeline[0]);
    initNextBtn();
    win77.lobby.forEach((player) => {
        win77.giveCardsTo(player.id, 5);
    });
    initInventory();
}

const initMatchMaking = () => {
    const parent = document.querySelector("#matchmaking");
    const hostNode = document.querySelector(".js-squad-host");
    // const mateNodes = document.querySelectorAll(".js-squad-mate");

    hostNode.dataset.playerId = win77.game.player.id;

    const closeMatchmakingPageHandler = (e) => {
        if (e.key === "Escape") {
            parent.classList.remove("--visible");
        }

        document.removeEventListener("keydown", closeMatchmakingPageHandler);
    };
    const openMatchmakingPage = () => {
        updPlayer(win77.game.player.id);
        parent.classList.add("--visible");

        document.addEventListener("keydown", closeMatchmakingPageHandler);
        return parent;
    };

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-matchmaking");

        const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
        const openSettingsBtn = document.querySelector(".js-open-mm-settings");
        const switchPlayerBtn = document.querySelector(".js-switch-player");
        const inviteRandomBtns = document.querySelectorAll(".js-invite-random");
        const playersList = document.querySelector(".js-players-wrap");

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            playersList.classList.remove("--visible");
        };

        const setOptions = () => {
            const platformSelect = document.querySelector("#platform");
            const roundLimitInput = document.querySelector("#round-limit");
            const maxTimeInput = document.querySelector("#max-time-per-round");
            const startBankrollInput = document.querySelector("#start-bankroll");
            const startSoulsInput = document.querySelector("#start-souls");
            const cardsAfterTurnInput = document.querySelector("#cards-after-turn");
            const options = DEFAULT_OPTIONS;
            if (platformSelect && roundLimitInput && maxTimeInput && startBankrollInput && startSoulsInput && cardsAfterTurnInput) {
                console.log("platformSelect", platformSelect.value);
                if (platformSelect.value !== PLATFORMS.screen) {
                    options.platform = platformSelect.value;
                }
                if (+roundLimitInput?.value >= 2) {
                    options.roundLimit = +roundLimitInput.value;
                }
                if (+maxTimeInput?.value > 5) {
                    options.maxTime = +maxTimeInput.value;
                }
                if (+startBankrollInput?.value > 1000) {
                    options.startBankroll = +startBankrollInput.value;
                }
                if (+startSoulsInput?.value >= 0 && startSoulsInput?.value !== "") {
                    options.startSouls = +startSoulsInput.value;
                }
                if (2 <= +cardsAfterTurnInput?.value <= 5) {
                    options.cardsAfterTurn = +cardsAfterTurnInput.value;
                }
            }


            if (options.platform === PLATFORMS.tabletop) {
                initBonusInput();
                if (options.maxTime === null) {
                    options.maxTime = 45;
                }
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

            const roundLimitOutput = document.querySelector(".js-round-limit");
            roundLimitOutput.textContent = win77.game.options.roundLimit;

            lightWalkingPlayer();
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

        const switchPlayerHandler = () => {
            console.log(win77.lobby, win77);
            // win77.switchPlayer();
        }

        closeBtn.addEventListener("click", closeBtnHandler);
        startMatchmakingBtn.addEventListener("click", startBtnHandler);
        openSettingsBtn.addEventListener("click", openSettingsHandler);
        switchPlayerBtn.addEventListener("click", switchPlayerHandler);
        inviteRandomBtns.forEach((inviteRandomBtn) => {
            inviteRandomBtn.addEventListener("click", showPlayersList);
        });
        initPlayersList();

        win77.mm = {
            open: openMatchmakingPage,
            close: closeBtnHandler,
            setOptions: setOptions,
            start: startBtnHandler
        }
    }

    initHandlers();
    const openMatchmakingBtn = document.querySelector(".js-open-matchmaking");
    openMatchmakingBtn.addEventListener("click", openMatchmakingPage);
}

export { initMatchMaking, getMatchMakingOptionsMarkup, getEventParamsMarkup };
