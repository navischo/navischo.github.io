import {win77} from "../dne-cli.js";

const classSelector = "js-tab";

document.addEventListener("keydown", (e) => {
    if (e.key === "CapsLock") {
        win77.page.node.classList.add(classSelector);
        document.addEventListener("keyup", (e) => {
            win77.page.node.classList.remove(classSelector);
        });
    }
    e.stopPropagation();
});

const openWithTimer = () => {
    win77.page.node.classList.add(classSelector);

    setTimeout(() => {
        win77.page.node.classList.remove(classSelector);
    }, 2000);
}

export { openWithTimer };
