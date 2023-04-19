import { win77 } from "../dne-cli.js";

const page = document.querySelector("#dne-page");

const placeholderMarkup = `
<div class="pokeball-wrap">
    <div class="pokeball">
        <div id="poke-button" class="pokeball__button"></div>
    </div>
</div>
`;

page.innerHTML = placeholderMarkup;
const pokeButton = document.querySelector("#poke-button");

win77.page = {
    node: page
};
win77.pokeButton = {
    node: pokeButton,
    dia: {
        log: () => {
            console.log(win77);
        }
    }
};
win77.pokeButton.node.addEventListener("click", win77.pokeButton.dia.log);
