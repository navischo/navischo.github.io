import { win77 } from "../dne-cli.js";
import { closePopup } from "../popup/dom.popup.jquery.js";
import { switchTime } from "../hud/time.hud.js";
import { settings } from "./const.theday.js";

const setupTheday = () => {
    let lineupLength = 0;
    const limitsStrings = document.querySelectorAll("#table .card__limits");

    limitsStrings.forEach((limitsString) => {
        console.log("time", lineupLength, limitsString);
        const wordsArr = limitsString.textContent.split(" ");
        const time = +(wordsArr[1].replace("m", ""));
        lineupLength = lineupLength + time;
    });
    win77.setLineupLength(lineupLength);

    document.querySelector("#dne-page-up").classList.add("js-open");
    closePopup();

    switchTime(win77.game.event.lineupLength);
    win77.setEventSettings(Object.assign({}, settings));
    console.log("Starting event..", win77.game.event.lineupLength, win77.pokeButton.node);
}

export { setupTheday };
