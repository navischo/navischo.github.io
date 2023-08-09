import { initCatalog } from "../catalog/dom.catalog.js";
import { win77 } from "../dne-cli.js";
// const NUMBERS = {
//     IN_MENU: [],
//     IN_PLAY: [],
//     IN_SHOP: [],
//     IN_TALK: []
// }

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
}

export { initKeyboard };
