import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { PAGE_NAMES, isItCardsPage } from "../hud/router.hud.js";

const SCREEN_NAMES = [
    `screen-nohud--on-bike`,
    `screen-no-hud--in-ferrari`,
    `screen-nohud--shoot-n-fly`,
    `screen-nohud--rain`,
    `screen-nohud--pro-mafia`,
    `screen-nohud--combat-master`,
    `screen-nohud--aldecaldos`,
    `screen-hud--spalah`,
    `screen-hud--spalah-2@2x1`,
    `screen-hud--spalah-3`,
    `screen-nohud--popshop`,
    `screen-nohud--rider`,
    `screen-nohud--afterafterlife`,
    `screen-nohud--braindance`,
    `screen-nohud--hotfix`,
    `screen-nohud--doll`,
    `screen-nohud--beach-day`,
    `screen-nohud--chill-johny`,
    `screen-nohud--driver`,
    `screen-nohud--city-center`,
    `screen-nohud--enter-afterlife`,
    `screen-nohud--escape`,
    `screen-nohud--drugracer`,
    `screen-nohud--gun`,
    `screen-nohud--fight`,
    `screen-nohud--fight-2`,
    `screen-nohud--fight-gang`,
    `screen-nohud--new-place`,
    `screen-nohud--garden`,
    `screen-nohud--indoor`,
    `screen-nohud--netlab`,
    `screen-nohud--coding`,
    `screen-nohud--night-session`,
    `screen-nohud--padic`,
    `screen-nohud--park`,
    `screen-nohud--tramway`,
    `screen-nohud--rasklad`,
    `screen-nohud--witcher-2077`
];

const initScreen = () => {
    const body = document.querySelector("body");
    body.style.backgroundImage = `url('./libs/screen/${SCREEN_NAMES[getRandomInt(SCREEN_NAMES.length)]}.jpg')`;
}

const initIntervalScreen = () => {
    // console.log("Its hud?", win77.router.currentPage === PAGE_NAMES.hud, win77.router.currentPage, PAGE_NAMES.hud);
    initScreen();
    setInterval(() => {
        initScreen();
    }, 30000);
}

export { initIntervalScreen };
