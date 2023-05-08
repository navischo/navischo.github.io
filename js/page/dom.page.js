import { win77 } from "../dne-cli.js";
import { initTheday } from "../theday/init.theday.js";
import { pokeButtonMarkup } from "../utils/pokeButtonMarkup.js";

const body = document.querySelector("body");
const page = document.querySelector("#dne-page");
const pageUp = document.querySelector("#dne-page-up");



pageUp.innerHTML = pokeButtonMarkup;
const pokeButton = document.querySelector("#poke-button");

win77.body = {
    node: body
};
win77.page = {
    node: page
};
win77.pokeButton = {
    node: pokeButton,
    dia: {
        log: () => {
            console.log(win77);
        },
        start: () => {
            initTheday();
        }
    }
};
win77.pokeButton.node.addEventListener("click", win77.pokeButton.dia.start);
