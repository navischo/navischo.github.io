import { Page } from "../core.structure.js";
import { drawLootCards } from "../../cards/dom.cards.js";
import { win77 } from "../../dne-cli.js";

const initProfilePage = () => {
    const parent = document.querySelector(".js-profile-page");
    const link = () => {
        console.log("Go to Profile page");
    }
    const init = () => {
        // run all scripts to make Profile work
        drawLootCards(win77.game.player.loot, ".js-inventory-menu");
        drawLootCards(win77.game.player.npc, ".js-crew-menu");
    };

    return new Page(parent, link, init);
}
const ProfilePage = initProfilePage();

export { ProfilePage };
