import { win77 } from "../dne-cli.js";
import { closePopup } from "../popup/dom.popup.jquery.js";
import { switchTime } from "../hud/time.hud.js";
import { settings } from "./const.theday.js";
import { drawTheday } from "./init.theday.js";

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

    try {
        document.querySelector("#dne-page-up").classList.add("js-open");
    }
    catch (e) {
        console.log("Seems like error in setup.theday: #dne-page-up not found");
    }
    // document.querySelector("#dne-page-up").classList.add("js-open");
    closePopup();

    // switchTime(win77.game.event.lineupLength); // time temporary disabled
    win77.setEventSettings(Object.assign({}, settings));
    win77.game.event.settings.dungeObj = Array.from(win77.locationsSet).find((dungeObj) => dungeObj.name === win77.game.event.settings.dungeName);


    console.log(`Starting event..`, win77.game.event);
    drawTheday();
}

export { setupTheday };
