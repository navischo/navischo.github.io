import { getRandomInt } from "../utils/getCardById.js";

const SCREEN_NAMES = [
    `screen-nohud--on-bike`,
    `screen-no-hud--in-ferrari`,
    `screen-nohud--shoot-n-fly`,
    `screen-nohud--rain`,
    `screen-nohud--pro-mafia`,
    `screen-nohud--combat-master`,
    `screen-nohud--aldecaldos`,
    `screen-hud--spalah`
];

const initScreen = () => {
    const element = document.querySelector(".hud-body-background");
    element.style.backgroundImage = `url('./libs/screen/${SCREEN_NAMES[getRandomInt(SCREEN_NAMES.length)]}.jpg')`;
    console.log(element);
}

initScreen();
