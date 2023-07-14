import { isSetHasId } from "./isSetHasId.js";
import { win77 } from "../dne-cli.js";

const makeWallSprayable = () => {
    const wall = document.querySelector(".js-wall");
    if (wall && isSetHasId(win77.game.player.class, "class-writer")) {
        wall.classList.add("--sprayable");
    }
}

export { makeWallSprayable };
