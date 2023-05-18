import { win77 } from "../dne-cli.js";

const toggleHUD = () => {
    document.querySelector("body").classList.toggle("hide-hud");
}

win77.toggleHUD = toggleHUD;
