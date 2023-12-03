import { goToCards, goToPlay } from "./goToCards.js";
import { closeGameMenu } from "../hud/btn.hud.js";
import { win77 } from "../dne-cli.js";
// const NUMBERS = {
//     IN_MENU: [],
//     IN_PLAY: [],
//     IN_SHOP: [],
//     IN_TALK: []
// }

const KEYS = [
    {
        sign: `Escape`,
        descr: `Main menu`
    },
    {
        sign: `Shift`,
        descr: `Head menu`
    },
    {
        sign: `R`,
        descr: `Play screen`
    },
    {
        sign: `B`,
        descr: `Cards catalog`
    },
    {
        sign: `H`,
        descr: `Cutscenes menu`
    },
    {
        sign: `N`,
        descr: `Hide HUD`
    },
    {
        sign: `F12`,
        descr: `Console`
    }
];

const KEYS_SIGNS = {
    n: ["n", "N", "т", "Т"],
    c: ["b", "B", "и", "И"],
    p: ["r", "R", "к", "К"],
    h: ["h", "H", "р", "Р"],
    shift: ["Shift"],
    escape: ["Escape"]
}

const KEYS_CALLBACKS = {
    n: () => {
        document.querySelector("body").classList.toggle("hide-hud");
    },
    c: () => {
        goToCards();
    },
    p: () => {
        goToPlay();
    },
    h: () => {
        if (!win77.game.event.lineupLength) {
            document.querySelector(".hud-bottom").classList.toggle("hud-bottom--open");
        }
    },
    shift: () => {
        if (!win77.game.event.lineupLength) {
            const controls = document.querySelector(".js-catalog-controls")
            controls.classList.toggle("catalog-controls--visible");
        }
    },
    escape: () => {
        if (!win77.game.event.lineupLength) {
            const gameMenu = document.querySelector(".game-menu");
            gameMenu.classList.toggle("--open");
            if (!gameMenu.classList.contains("--open")) {
                closeGameMenu();
            }
        }
    }
}

const findSign = (signToFind) => {
    let neededSign;
    Object.keys(KEYS_SIGNS).forEach((sign) => {
        if (KEYS_SIGNS[sign].find((signVariant) => signVariant === signToFind)) {
            neededSign = sign;
        }
    });
    return neededSign;
}

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
        const sign = findSign(e.key);
        if (sign) {
            KEYS_CALLBACKS[sign]();
        } else {
            console.log(`You press ${e.key}`);
        }
    });

    initKeyMap();
}

export { initKeyboard };
