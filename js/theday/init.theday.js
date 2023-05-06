import { win77 } from "../dne-cli.js";
import { setCountdown } from "../hud/time.hud.js";
import { initGradient } from "./gradient.theday.js";

const initTheday = () => {
    console.log(`${win77.game.player.id} starts an Event`, win77);
    initGradient();
    setCountdown(win77.game.event.lineupLength);

    const parent = document.querySelector("#dne-page-up");
    const placeholder = parent.querySelector(".pokeball-wrap");
    const portal = document.createElement("div");

    portal.classList.add("js-rick-portal");
    portal.classList.add("card");
    portal.innerHTML = `<img src="img/portal.gif">`;

    portal.addEventListener("click", () => {
        win77.pokeButton.dia.useSmithsCard();
    });

    parent.insertBefore(portal, placeholder);
    placeholder.remove();
}

export { initTheday };
