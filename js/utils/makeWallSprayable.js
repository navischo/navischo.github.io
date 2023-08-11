import { isSetHasId } from "./isSetHasId.js";
import { win77 } from "../dne-cli.js";
import { getRandomInt } from "./getCardById.js";

const makeWallSprayable = () => {
    const wall = document.querySelector(".js-wall");
    if (wall && isSetHasId(win77.game.player.class, "class-writer")) {
        wall.classList.add("--sprayable");
        wall.addEventListener("click", (e) => {
            sprayWall(e);
        });
    }
}

const sprayWall = (event) => {
    console.log(event);
    if (event.target.classList.contains("js-wall")) {
        const audioObj = new Audio("../../mp3/spray-a.mp3");
        audioObj.play();

        const newSpray = document.createElement("div");
        newSpray.classList.add("spray");
        newSpray.classList.add(`--${getRandomInt(7)}`);
        newSpray.style.left = `${event.clientX}px`;
        newSpray.style.top = `${event.clientY}px`;


        setTimeout(() => {
            event.target.appendChild(newSpray);
        }, 2000);
    }
}

export { makeWallSprayable };
