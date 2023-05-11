// import { inventoryMarkup } from "./inventory.hud.js";
// import { initScore } from "./score.hud.js";
// import { win77 } from "../dne-cli.js";


const onInit = () => {
    // document.querySelector("#dne-page").insertAdjacentHTML("afterend", inventoryMarkup); // todo error
    // initScore();
    // updScore();
    // win77.updBalanceHUD();
}
const HUDModule = {
    init: onInit
}

export { HUDModule };
