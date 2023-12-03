import { win77 } from "../dne-cli.js";
import { closePopup } from "../popup/dom.popup.jquery.js";
import { switchTime } from "../hud/time.hud.js";
import { settings } from "./const.theday.js";
import { drawTheday, initTheday } from "./init.theday.js";
import { PLATFORMS } from "../router/const.router.js";


const setupTheday = (budget = 5000) => {
    let lineupLength = 0;
    const headerMenuBtn = document.querySelector(".js-toggle-catalog-controls");
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

    if (win77.game.options?.maxTime) {
        lineupLength = win77.game.options.maxTime < lineupLength ? win77.game.options.maxTime : lineupLength;
    }

    if (win77.game.options?.platform === PLATFORMS.tabletop) {
        lineupLength = win77.game.options.maxTime;
    }

    win77.setLineup(lineupLength, lineup);
    console.log("win77.router", win77.router);
    win77.router.pipeline[win77.router.nextPageIndex].sec = lineupLength;

    try {
        document.querySelector("#dne-page-up").classList.add("js-open");
    }
    catch (e) {
        console.log("Seems like error in setup.theday: #dne-page-up not found");
    }
    // document.querySelector("#dne-page-up").classList.add("js-open");
    closePopup();

    // switchTime(win77.game.event.lineupLength); // time temporary disabled
    settings.socialPoints = budget / 1000;
    win77.setEventSettings(Object.assign({}, settings));
    win77.game.event.settings.dungeObj = Array.from(win77.locationsSet).find((dungeObj) => dungeObj.name === win77.game.event.settings.dungeName);
    if (win77.setting) {
        win77.game.event.settings.setting = win77.setting;
        console.log(win77.game.event.settings);
    }
    headerMenuBtn.classList.add("fw-d-none-i");

    console.log(`Starting event..`, win77.game.event);
    drawTheday();
    initTheday();
}

export { setupTheday };
