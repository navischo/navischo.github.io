import { Page } from "../core.structure.js";
import { drawLootCards } from "../../cards/dom.cards.js";
import { win77 } from "../../dne-cli.js";

const drawClass = () => {
    const classInput = document.querySelector(".js-profile-class");
    classInput.value = Array.from(win77.game.player.class)[0]?.id.replace(`class-`, ``);
    classInput.setAttribute("readonly", true);
}

const drawDias = () => {
    const diaInputs = document.querySelectorAll(".js-profile-dia");
    const playerDias = Array.from(win77.game.player.dia);
    if (playerDias.length > 0) {
        diaInputs.forEach((diaInput, i) => {
            const playerDia = playerDias[i];
            if (playerDia) {
                diaInput.value = playerDia.id.replace(`dia-`, ``);
                diaInput.setAttribute("readonly", true);
            } else {
                diaInput.value = ``;
                diaInput.style.display = "none";
            }
        });
    }
}

const drawCharacter = () => {
    const loadButton = document.querySelector(".js-profile-character-load");
    const characterWrap = document.querySelector(".js-profile-avatar");
    const characterImg = document.querySelector(".js-profile-character-img");

    loadButton.addEventListener("click", () => {
        characterImg.src = `img/avatar.jpg`;
        characterWrap.classList.add("--custom");
    });
}

const initProfilePage = () => {
    const parent = document.querySelector(".js-profile-page");
    const link = () => {
        console.log("Go to Profile page");
    }
    const init = () => {
        // run all scripts to make Profile work
        drawClass();
        drawDias();
        drawCharacter();
        drawLootCards(win77.game.player.loot, ".js-profile-inventory");
        drawLootCards(win77.game.player.npc, ".js-profile-crew");
    };

    return new Page(parent, link, init);
}
const ProfilePage = initProfilePage();

export { ProfilePage };
