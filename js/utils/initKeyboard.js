import { initCatalog } from "../catalog/dom.catalog.js";
import { win77 } from "../dne-cli.js";
// const NUMBERS = {
//     IN_MENU: [],
//     IN_PLAY: [],
//     IN_SHOP: [],
//     IN_TALK: []
// }

const KEYS = [
    {
        sign: `Shift`,
        descr: `Head menu`
    },
    {
        sign: `N`,
        descr: `Hide HUD`
    },
    {
        sign: `H`,
        descr: `Cutscenes menu`
    },
    {
        sign: `C`,
        descr: `Cards catalog`
    }
];

const keyItemMarkup = (sign, descr) =>
    `
        <li class="ctrl-key">
            <button class="ctrl-key__sign">${sign}</button>
            <b class="ctrl-key__descr">${descr}</b>
        </li>
    `;

const initKeyMap = () => {
    const listParent = document.querySelector(".js-keys");
    listParent.innerHTML = KEYS.map((keyObj) => keyItemMarkup(keyObj.sign, keyObj.descr)).join(``);

    const keyMapParent = document.querySelector("#key-map");
    const closeKeyMapHandler = () => {
        keyMapParent.classList.remove("--visible");
        return keyMapParent;
    };
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeKeyMapHandler();
        }
    });

    const openKeyMapBtn = document.querySelector(".js-open-key-map");

    const openKeyMapHandler = () => {
        keyMapParent.classList.add("--visible");
        return keyMapParent;
    };

    openKeyMapBtn.addEventListener("click", openKeyMapHandler);
}

const initKeyboard = () => {
    document.addEventListener("keydown", (e) => {
        // console.log(e.key, e);
        if (e.key === "n" || e.key === "N") {
            document.querySelector("body").classList.toggle("hide-hud");
        } else if (e.key === "Shift") {
            const controls = document.querySelector(".js-catalog-controls")
            controls.classList.toggle("catalog-controls--visible");
        } else if (e.key === "h" || e.key === "H") {
            document.querySelector(".hud-bottom").classList.toggle("hud-bottom--open");
        } else if (e.key === "Escape") {
            document.querySelector(".game-menu").classList.toggle("--open");
        } else if (e.key === "c" || e.key === "C") {
            win77.swiper.slideTo(0, 0);
            initCatalog();
            const controls = document.querySelector(".js-catalog-controls")
            controls.classList.add("catalog-controls--visible");
            const cardsNavLink = document.querySelector(".js-cards-nav-link")
            cardsNavLink.classList.add("--active");
        }
    });

    initKeyMap();
}

export { initKeyboard };
