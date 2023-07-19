import { appendCardToInventory } from "../hud/inventory.hud.js";
import { getCardById } from "./getCardById.js";
const setSetting = (settingObj) => {
    const parent = document.querySelector("#project-obj");
    const name = parent.querySelector(".js-prj-name");
    const executive = parent.querySelector(".js-prj-executive");
    const point = parent.querySelector(".js-prj-point");

    name.textContent = settingObj.title;
    point.textContent = settingObj.point;

    console.log(settingObj.executive, getCardById(settingObj.executive, win77.game.catalog.all), win77.game.catalog.all);
    if (!win77.isPlayerOnMap) {
        executive.textContent = settingObj.executive;
    } else {
        executive.innerHTML = ``;
        const executiveNode = appendCardToInventory(getCardById(settingObj.executive, win77.game.catalog.all), "executive");
        $(executiveNode).magnificPopup({
            type: 'inline',
            midClick: true
        });
    }
    parent.classList.remove("fw-d-none");
}

export { setSetting };
