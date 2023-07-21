import { win77 } from "../dne-cli.js";

const initLineup = () => {
    let countdown = win77.game.event.lineupLength;
    const sceneNode = document.querySelector("#main-scene");
    const lineupNode = document.querySelector("#lineup");
    const timerNode = document.createElement("div");
    timerNode.classList.add("hand-timer");
    timerNode.textContent = countdown;
    sceneNode.appendChild(timerNode);
    lineupNode.style.animation = `slideLineup ${countdown}s linear`;

    const interval = setInterval(() => {
        if (+countdown > 0 && document.querySelector(".hand-timer")) {
            console.log(countdown, +countdown - 1, timerNode.textContent);
            countdown--;
            timerNode.textContent = countdown;

            if (win77.game.event.settings.socialPoints < 5) {
                win77.game.event.settings.socialPoints++;
            }
        } else {
            timerNode.remove();
            clearInterval(interval);
            console.log("Your door time is complete!");
        }
    }, 1000);
}

export { initLineup };
