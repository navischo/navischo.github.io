import { isSetHasId } from "./isSetHasId.js";
import { win77 } from "../dne-cli.js";

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
    const audioObj = new Audio("../../mp3/spray-a.mp3");
    audioObj.play();

    const newSpray = document.createElement("div");
    newSpray.classList.add("spray");
    newSpray.classList.add("--0");
    newSpray.style.left = `${event.clientX}px`;
    newSpray.style.top = `${event.clientY}px`;


    setTimeout(() => {
        event.target.appendChild(newSpray);
    }, 2000);
    console.log(event);
}

export { makeWallSprayable };
