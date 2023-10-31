import { win77 } from "../dne-cli.js";
import { PIPELINES } from "./const.router.js";

const swap = () => {
    if (win77.game.player.id === win77.game.alliance.savior) {
        win77.switchPlayer(win77.game.alliance.host);
    } else {
        win77.switchPlayer(win77.game.alliance.savior);
    }
}

const startPipe = (id) => {
    win77.router.pipeline = PIPELINES[id];
    win77.router.nextPageIndex = 1;
    addOptionalNextBtn(`loot`);

    return win77.router;
}

win77.startPipe = startPipe;

const addOptionalNextBtn = (btnText, clickHandler) => {
    const parent = document.querySelector(".js-next-btns");
    const btn = document.createElement("button");
    btn.classList.add("js-optional-next");
    btn.classList.add("cp-button");
    btn.classList.add("next-btn");
    btn.classList.add("--visible");
    btn.id = btnText;
    btn.textContent = btnText;

    const goToPage = () => {
        win77.pokeButton.dia.goToPage(btnText);
        btn.remove();
    }

    btn.addEventListener("click", clickHandler ? clickHandler : goToPage);

    parent.appendChild(btn);
    console.log("add new btn", parent, btn);
}

export { addOptionalNextBtn, swap };
