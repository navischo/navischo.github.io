import { initNokiaPopup } from "../hud/nokia.hud.js";
import { closePopup, openPopup } from "../popup/dom.popup.jquery.js";
import { addOptionalNextBtn } from "./addOptionalNextBtn.js";
import { moveCardById } from "../utils/getCardById.js";
import { updTable } from "../cards/dom.cards.js";
import { updScore } from "../hud/score.hud.js";
import { dialog } from "../hud/dialog.hud.js";

const getFriendItem = (name) => {
    return {
                href: "#",
                text: name,
                callback: (e) => {
                    e.preventDefault();

                    const originalPlayerId = win77.game.player.id;
                    const tableNode = document.querySelector("#table");

                    console.log(`Hotline to ${name}`);
                    win77.game.alliance = {
                        host: originalPlayerId,
                        savior: name
                    };
                    // acceptAlliance
                    // win77.switchPlayer(name);
                    // tableNode.dataset.owner = `${originalPlayerId}+${name}`;
                    closePopup();
                    setTimeout(() => {
                        dialog.init(dialog.DIALOG_ID.acceptAlliance);
                        openPopup("#dialog-popup");
                    }, 100);
                }
            }
}

const callFriend = () => {
    console.log("Lets try to draw a friend phone");
    const nokiaContainer = document.querySelector("#nokia-popup");
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: Array.from(win77.lobby).map((player) => getFriendItem(player.id))
    });
    closePopup();
    setTimeout(() => {
        openPopup("#nokia-popup");
    }, 100);
}

const react = () => {
    if (win77.game.player.id === win77.game.invasion.invader) {
        win77.switchPlayer(win77.game.invasion.host);
    } else {
        win77.switchPlayer(win77.game.invasion.invader, false);
    }
}

const pass = () => {
    if (win77.game.player.id === win77.game.invasion.invader) {
        win77.switchPlayer(win77.game.invasion.host);
        console.log("You repelled the invasion");
    } else {
        win77.switchPlayer(win77.game.invasion.invader, false);
        const hostTable = document.querySelector ("#table");
        hostTable.dataset.owner = `${win77.game.invasion.invader}`;
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
                host: win77.game.player.id,
                invader: name,
                table: new Set()
            };

            const parent = document.querySelector(".table");
            const tableNode = document.createElement("div");
            tableNode.id = "table-invader";
            tableNode.classList.add("table__cards");
            parent.appendChild(tableNode);

            win77.switchPlayer(win77.game.invasion.invader);

            const hostTable = parent.querySelector ("#table");
            const invaderTable = parent.querySelector("#table-invader");

            hostTable.dataset.owner = `${win77.game.invasion.host}`;
            invaderTable.dataset.owner = `${win77.game.invasion.invader}`;

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
    console.log("Lets try to draw a invader phone");
    const nokiaContainer = document.querySelector("#nokia-popup");
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: Array.from(win77.lobby).map((player) => getInvaderItem(player.id))
    }, "--red");
    openPopup("#nokia-popup");
}

export { callFriend, callInvader };
