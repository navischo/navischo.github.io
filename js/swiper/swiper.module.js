// components imports
import { adminMarkup } from "./markup/admin.markup.js";
import { cardCatalogMarkup } from "./markup/cardCatalog.markup.js";
import { hudMarkup } from "./markup/hud.markup.js";
import { eventMarkup } from "./markup/event.markup.js";

import { win77 } from "../dne-cli.js";

// API code
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    simulateTouch: false,
    hashNavigation: {
        watchState: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    virtual: {
        slides: (function () {
            const slides = [];
            return slides;
        })(),
    },
});

const PAGES_ID = {
    cards: 0,
    admin: 1,
    play: 2,
    event: 3
};

document
    .querySelectorAll('.js-swipe-page')
    .forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(PAGES_ID[e.target.textContent.toLowerCase()], 0);
        });
    });

swiper.virtual.prependSlide([
    eventMarkup,
    hudMarkup,
    adminMarkup,
    cardCatalogMarkup
]);
swiper.on('slideChange', function (e) {
    const pageName = Object.keys(PAGES_ID)[e.activeIndex];
    document.querySelector("body").dataset.hash = pageName;
    console.log('slide changed', pageName, e);
    document.querySelector(".head-title").textContent = pageName.toUpperCase();
});
// swiper.slideTo(0, 0);
win77.swiper = swiper;

// single exports output
export { swiper };

