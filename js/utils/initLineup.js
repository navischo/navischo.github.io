import { win77 } from "../dne-cli.js";

const initLineup = () => {
    let countdown = win77.game.event.lineupLength;
    const lineupNode = document.querySelector("#lineup");
    lineupNode.style.animation = `slideLineup ${countdown}s linear`;

    const interval = setInterval(() => {
        if (+countdown > 0) {
            countdown--;

            // infinite social points temporary off
            // if (win77.game.event.settings.socialPoints < 5) {
            //     win77.game.event.settings.socialPoints++;
            // }
        } else {
            clearInterval(interval);
            console.log("Your door time is complete!");
            const exitPortal = document.querySelector(".js-rick-portal");
            exitPortal ? exitPortal.classList.add("--exit-label") : "";
            win77.getSocialPointsFromPlayer(win77.game.event.settings.socialPoints);
            win77.game.event.settings.socialPoints = 0;
        }
    }, 1000);
}

export { initLineup };
