import { win77 } from "../dne-cli.js";
import { drawTheday } from "../theday/init.theday.js";

const body = document.querySelector("body");
const page = document.querySelector("#dne-page");

win77.body = {
    node: body
};
win77.page = {
    node: page
};
win77.pokeButton = {
    // node: pokeButton,
    dia: {
        log: () => {
            console.log(win77);
        },
        start: () => {
            drawTheday();
        }
    }
};
drawTheday();
