import { getRandomInt } from "./getCardById.js";

const loadLogo = document.querySelector("#load-logo");
if (loadLogo) {
    const handler = () => {
        const logoElement = document.querySelector(".windows__logo");
        if (logoElement) {
            logoElement.style.filter = `hue-rotate(${getRandomInt(360)}deg)`;
        }
    }
    handler();
    const interval = setInterval(handler, 15000);

    const finishHandler = () => {
        const sudoPage = document.querySelector(".sudo-page");
        if (sudoPage) {
            sudoPage.remove();
            clearInterval(interval);
            clearTimeout(loadingFinishTimeout);
        }
    };
    const loadingFinishTimeout = setTimeout(finishHandler, getRandomInt(30000));
    const burnSudoPage = () => {
        const sudoPage = document.querySelector(".sudo-page");
        if (sudoPage) {
            sudoPage.remove();
        } else {
            document.removeEventListener("click", burnSudoPage);
        }
    };
    document.addEventListener("keydown", burnSudoPage);
}
