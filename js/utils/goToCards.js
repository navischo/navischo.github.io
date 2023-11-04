import { initCatalog } from "../catalog/dom.catalog.js";
import { win77 } from "../dne-cli.js";

const goToCards = () => {
    win77.swiper.slideTo(0, 0);
    initCatalog();
    const controls = document.querySelector(".js-catalog-controls")
    controls.classList.add("catalog-controls--visible");
    const cardsNavLink = document.querySelector(".js-cards-nav-link")
    cardsNavLink.classList.add("--active");
}

export { goToCards };
