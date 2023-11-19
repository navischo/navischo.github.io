import { updScore } from "../hud/score.hud.js";
import { win77 } from "../dne-cli.js";

const initBonusInput = () => {
    const parent = document.querySelector("#dne-page");
    const inputField = document.createElement("div");
    const hand = document.querySelector("#bottom-hand");
    hand.classList.add("fw-d-none-i");
    inputField.id = "bonus-counter";
    inputField.innerHTML =
        `
            <fieldset class="field --dialog">
                <label class="visually-hidden glow text" for="bonus">Bonus</label>
                <input id="bonus" type="number" value="1" max="9" min="1">
                <button id="bonus-submit" class="card-btn">+</button>
            </fieldset>
        `;

    const bonusInput = inputField.querySelector("#bonus");
    const bonusSubmitBtn = inputField.querySelector("#bonus-submit");
    bonusSubmitBtn.addEventListener("click", () => {
        if (win77.router.currentPipe.stepId === "easy-prepare") {
            win77.router.matchmaking ? win77.router.nextStep() : "";
        }
        updScore(bonusInput.value);
        bonusInput.value = 1;
    });

    parent.appendChild(inputField);
}

export { initBonusInput }
