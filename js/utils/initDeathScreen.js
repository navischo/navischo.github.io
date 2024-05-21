import {win77} from "../dne-cli.js";
import { KEYS_CALLBACKS } from "./initKeyboard.js";

const clearBlackScreen = () => {
    const element = document.querySelector(".black-screen");
    element ? element.remove() : "";
}

const initDeathScreen = () => {
    const parent = document.querySelector("#death-menu");
    const acceptBtn = parent.querySelector(".js-death-accept");
    const escapeBtn = parent.querySelector(".js-death-escape");

    escapeBtn.classList.add("--hide");

    acceptBtn.addEventListener("click", () => {
        location.reload();
    });

    escapeBtn.addEventListener("click", () => {
        const parent = document.querySelector("#death-menu");
        parent.classList.remove("--open");
        win77.startCutscene("hyrool");
        KEYS_CALLBACKS.n();
        clearBlackScreen();
    });

    // acceptBtn
}

const showEscape = () => {
    const escapeBtn = document.querySelector(".js-death-escape");
    escapeBtn.classList.remove("--hide");
}

export { initDeathScreen, showEscape };
