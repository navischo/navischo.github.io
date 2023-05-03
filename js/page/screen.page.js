import { getRandomInt } from "../utils/getCardById.js";

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
    const element = document.querySelector(".hud-body-background");
    element.style.backgroundImage = `url('./libs/screen/${SCREEN_NAMES[getRandomInt(SCREEN_NAMES.length)]}.jpg')`;
}

initScreen();

setInterval(() => {
    initScreen();
}, 30000);
