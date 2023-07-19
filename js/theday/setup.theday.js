import { win77 } from "../dne-cli.js";
import { closePopup } from "../popup/dom.popup.jquery.js";
import { switchTime } from "../hud/time.hud.js";
import { settings } from "./const.theday.js";
import { drawTheday } from "./init.theday.js";


const setupTheday = () => {
    let lineupLength = 0;
    const cardTitleArr = document.querySelectorAll("#table .card__title");
    const limitsStrings = document.querySelectorAll("#table .card__limits");
    const lineup = [];

    limitsStrings.forEach((limitsString, i) => {
        // console.log("time", lineupLength, limitsString);
        const wordsArr = limitsString.textContent.split(" ");
        const time = +(wordsArr[1].replace("m", ""));
        lineupLength = lineupLength + time;

        lineup.push({line: cardTitleArr[i], time: time});
    });
    win77.setLineup(lineupLength, lineup);

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
    if (win77.setting) {
        win77.game.event.settings.setting = win77.setting;
        console.log(win77.game.event.settings);
    }

    console.log(`Starting event..`, win77.game.event);
    drawTheday();
}

export { setupTheday };
