import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { PAGE_NAMES } from "../hud/router.hud.js";

const SCREEN_NAMES = [
    `screen-nohud--on-bike`,
    `screen-no-hud--in-ferrari`,
    `screen-nohud--shoot-n-fly`,
    `screen-nohud--rain`,
    `screen-nohud--pro-mafia`,
    `screen-nohud--combat-master`,
    `screen-nohud--aldecaldos`,
    `screen-hud--spalah`,
    `screen-nohud--popshop`,
    `screen-nohud--rider`,
    `screen-nohud--braindance`,
    `screen-nohud--hotfix`,
    `screen-nohud--beach-day`,
    `screen-nohud--chill-johny`,
    `screen-nohud--city-center`,
    `screen-nohud--enter-afterlife`,
    `screen-nohud--escape`,
    `screen-nohud--fight`
];

const initScreen = () => {
    const body = document.querySelector("body");
    if (win77.router.currentPage === PAGE_NAMES.hud) {
        body.classList.remove("background-hidden");
        body.style.backgroundImage = `url('./libs/screen/${SCREEN_NAMES[getRandomInt(SCREEN_NAMES.length)]}.jpg')`;
    } else {
        body.classList.add("background-hidden");
    }
}

const initIntervalScreen = () => {
    // console.log("Its hud?", win77.router.currentPage === PAGE_NAMES.hud, win77.router.currentPage, PAGE_NAMES.hud);
    initScreen();
    setInterval(() => {
        initScreen();
    }, 30000);
}

export { initIntervalScreen };
