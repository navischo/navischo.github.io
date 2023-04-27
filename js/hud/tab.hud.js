import {win77} from "../dne-cli.js";

const classSelector = "js-tab";
win77.page.node.addEventListener("keydown", (e) => {
    console.log(e, e.code);
    win77.page.node.classList.toggle(classSelector);
});

