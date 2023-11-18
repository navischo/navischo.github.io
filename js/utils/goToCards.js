import { initCatalog } from "../catalog/dom.catalog.js";
import { win77 } from "../dne-cli.js";

const goToCards = () => {
    if (!win77.game.event.lineupLength) {
        win77.swiper.slideTo(0, 0);
        initCatalog();
        const controls = document.querySelector(".js-catalog-controls")
        controls.classList.add("catalog-controls--visible");
        const cardsNavLink = document.querySelector(".js-cards-nav-link")
        cardsNavLink.classList.add("--active");
    }
}

const goToPlay = () => {
    // win77.swiper.slideTo(2, 0);
    console.log("win77.game.event.settings.lineupLength", win77.game.event.settings.lineupLength, win77.game.event.lineupLength ? 3 : 2, 0);
    // if (win77.game.event.settings.lineupLength) {
        win77.swiper.slideTo(win77.game.event.lineupLength ? 3 : 2, 0);
    // }
    const controls = document.querySelector(".js-catalog-controls")
    controls.classList.remove("catalog-controls--visible");
    const cardsNavLink = document.querySelector(".js-cards-nav-link")
    cardsNavLink.classList.remove("--active");
}

export { goToCards, goToPlay };
