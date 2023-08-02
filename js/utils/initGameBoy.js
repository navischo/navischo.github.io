import { win77 } from "../dne-cli.js";

const initGameBoy = () => {
    const controlsBtns = document.querySelectorAll(".js-cs-game-controls a");


    controlsBtns.forEach((controlsBtn) => {
        controlsBtn.addEventListener("mouseover", (e) => {
            console.log(controlsBtn, controlsBtns, e);
            const controlHoverAudio = new Audio("../../mp3/menu-hover.mp3");
            controlHoverAudio.play();
        });
    });

    const getGamePage = () => {
        const gamePage = document.querySelector("#cs-game");
        gamePage.classList.add("--visible");
        return gamePage;
    };

    const drawGame = () => {
        const parent = getGamePage();
        const closeBtn = parent.querySelector(".js-close-cs");

        const audioObj = new Audio("../../mp3/gig-menu.mp3");
        audioObj.play();

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            win77.clearCutscene();
            audioObj.pause();
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
