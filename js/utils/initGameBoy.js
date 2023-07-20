import { win77 } from "../dne-cli.js";

const initGameBoy = () => {
    const getGamePage = () => {
        const gamePage = document.querySelector("#cs-game");
        gamePage.classList.add("--visible");
        return gamePage;
    };

    const drawGame = () => {
        const parent = getGamePage();
        const closeBtn = parent.querySelector(".js-close-cs");
        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            win77.clearCutscene();
            closeBtn.removeEventListener("click", closeBtnHandler);
        };
        closeBtn.addEventListener("click", closeBtnHandler);
    }

    const openCSBtn = document.querySelector(".js-open-cs");
    openCSBtn.addEventListener("click", () => {
        drawGame();
        win77.startCutscene(`cs`, true);
    });
}

export { initGameBoy };
