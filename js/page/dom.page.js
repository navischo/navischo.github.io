import { win77 } from "../dne-cli.js";
import { initTheday } from "../theday/init.theday.js";

const body = document.querySelector("body");
const page = document.querySelector("#dne-page");
const pageUp = document.querySelector("#dne-page-up");

const placeholderMarkup = `
<div class="pokeball-wrap">
    <div class="pokeball">
        <div id="poke-button" class="pokeball__button"></div>
    </div>
</div>
<div id="gradient" style=""/>
`;

pageUp.innerHTML = placeholderMarkup;
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



export { placeholderMarkup };
