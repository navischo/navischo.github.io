import { win77 } from "../dne-cli.js";
import { initNokiaPopup } from "../hud/nokia.hud.js";
import { closePopup, openPopup } from "../popup/dom.popup.jquery.js";
import { addOptionalNextBtn } from "./addOptionalNextBtn.js";
import { moveCardById } from "../utils/getCardById.js";
import { updHand, updTable } from "../cards/dom.cards.js";
import { updScore, transferScoreFromTo } from "../hud/score.hud.js";
import { dialog } from "../hud/dialog.hud.js";

const getFriendItem = (name) => {
    return {
                href: "#",
                text: name,
                callback: (e) => {
                    e.preventDefault();
                    if (win77.router.currentPipe.stepId !== "easy-lineup") {
                        return;
                    }

                    console.log(`Hotline to ${name}`);
                    win77.game.alliance = {
                        host: win77.game.player.id,
                        savior: name
                    };

                    closePopup();
                    setTimeout(() => {
                        dialog.init(dialog.DIALOG_ID.acceptAlliance);
                        const popup = document.querySelector("#dialog-popup");
                        popup.querySelector("#alliance-host").textContent = win77.game.alliance.host;
                        popup.querySelector("#alliance-savior").textContent = win77.game.alliance.savior;
                        openPopup("#dialog-popup");
                    }, 100);
                }
            }
}

const updNokiaLobby = () => {
    const nokiaContainer = document.querySelector("#nokia-popup");
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: Array.from(win77.lobby).map((player) => getFriendItem(player.id))
    });
}

const callFriend = () => {
    console.log("Lets try to draw a friend phone");
    updNokiaLobby();
    closePopup();
    setTimeout(() => {
        openPopup("#nokia-popup");
    }, 100);
}

const react = () => {
    if (win77.game.player.id === win77.game.invasion.invader) {
        win77.switchPlayer(win77.game.invasion.host);
    } else {
        win77.switchPlayer(win77.game.invasion.invader);
    }
}

const pass = () => {
    if (win77.game.player.id === win77.game.invasion.invader) {
        win77.switchPlayer(win77.game.invasion.host);
        transferScoreFromTo(win77.game.invasion.invader, win77.game.invasion.host);
        console.log("You repelled the invasion");
    } else {
        win77.switchPlayer(win77.game.invasion.invader);
        transferScoreFromTo(win77.game.invasion.host, win77.game.invasion.invader);
        const hostTable = document.querySelector("#table");
        hostTable.dataset.owner = `${win77.game.invasion.invader}`;
        win77.game.alliance = false;
        console.log("You invade the event");
    }

    document.querySelector("#invader-score").remove();
    document.querySelector("#table-invader").remove();
    document.querySelector("#react").remove();
    document.querySelector("#pass").remove();
    document.querySelector("#rts-btn").classList.remove("fw-d-none-i");
    document.querySelector("#one-more").classList.remove("fw-d-none-i");
    document.querySelector(".js-phone").classList.remove("fw-d-none-i");

    win77.game.invasion.table.forEach((card) => {
        moveCardById(card.id, win77.game.invasion.table, win77.game.table);
    });
    win77.game.invasion = false;

    updTable();
    updScore();
    const nokiaContainer = document.querySelector("#nokia-popup");
    nokiaContainer.classList.remove("--red");
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: Array.from(win77.lobby).map((player) => getFriendItem(player.id))
    });
}

const getInvaderItem = (name) => {
    return {
        href: "#",
        text: name,
        callback: (e) => {
            e.preventDefault();
            win77.game.invasion = {
                host: win77.game.alliance ? win77.game.alliance.host : win77.game.player.id,
                invader: name,
                table: new Set()
            };

            const parent = document.querySelector(".table");
            const tableNode = document.createElement("div");
            tableNode.id = "table-invader";
            tableNode.classList.add("table__cards");
            parent.appendChild(tableNode);

            win77.switchPlayer(win77.game.invasion.invader);
            win77.fillPlayersHand();
            updHand();

            closePopup();
            document.querySelector("#invade").remove();
            document.querySelector("#rts-btn").classList.add("fw-d-none-i");
            document.querySelector("#one-more").classList.add("fw-d-none-i");
            document.querySelector(".js-phone").classList.add("fw-d-none-i");
            addOptionalNextBtn("react", react);
            addOptionalNextBtn("pass", pass);
            document.querySelector("#pass").classList.add("--red");
            console.log(`Invasion by ${win77.game.invasion.invader}`);
        }
    }
}

const callInvader = () => {
    console.log("Invaders list in your phone");
    const nokiaContainer = document.querySelector("#nokia-popup");
    const potentialInvaders = [];
    Array.from(win77.lobby).forEach((player) => {
        if (win77.game.alliance) {
            if (win77.game.alliance.host !== player.id && win77.game.alliance.savior !== player.id) {
                potentialInvaders.push(getInvaderItem(player.id));
            }
        } else {
            potentialInvaders.push(getInvaderItem(player.id));
        }
    });
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: potentialInvaders
    }, "--red");
    openPopup("#nokia-popup");
}

export { callFriend, callInvader, updNokiaLobby };
