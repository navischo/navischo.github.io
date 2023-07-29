// components imports
import { adminMarkup } from "./markup/admin.markup.js";
import { cardCatalogMarkup } from "./markup/cardCatalog.markup.js";
import { hudMarkup } from "./markup/hud.markup.js";
import { eventMarkup } from "./markup/event.markup.js";
import { initCollector } from "../utils/initCollector.js";

import { win77 } from "../dne-cli.js";
import { makeWallSprayable } from "../utils/makeWallSprayable.js";
// import { initProfile } from "../hud/chat.hud.js";

// API code
const swiper = new Swiper('.js-swiper-screen', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    simulateTouch: false,
    // hashNavigation: {
    //     watchState: true,
    // },
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

const PAGE_NAMES = {
    cards: "cards",
    admin: "admin",
    play: "play",
    event: "event"
}

const pagesLexicon = [
    PAGE_NAMES.cards,
    PAGE_NAMES.admin,
    PAGE_NAMES.play,
    PAGE_NAMES.event
];

const PAGES_ID = {
    cards: 0,
    admin: 1,
    play: 2,
    event: 3
};

const swipeNextLocation = (name = "blank") => {
    swiper.virtual.appendSlide(`Slide by name ${name}`);
    const id = pagesLexicon.length;
    PAGES_ID[name] = id;
    PAGE_NAMES[name] = name;
    pagesLexicon.push(PAGE_NAMES[name]);
    swiper.slideTo(id, 0);
    console.log(`Slide by name ${name} successfully delivered[id, PAGES_ID, PAGE_NAMES, pagesLexicon]`, id, PAGES_ID, PAGE_NAMES, pagesLexicon);
}

win77.swipeNextLocation = swipeNextLocation;

document
    .querySelectorAll('.js-swipe-page')
    .forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const id = PAGES_ID[e.target.textContent.toLowerCase()];
            swiper.slideTo(id, 0);

            // if (id === PAGES_ID.admin) {
            //     initProfile();
            // }
        });
    });

swiper.virtual.prependSlide([
    eventMarkup,
    hudMarkup,
    adminMarkup,
    cardCatalogMarkup
]);

win77.eventSwiper = new Swiper("#event-swiper", {
    direction: "vertical",
    spaceBetween: 50,
    effect: "flip",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grab: false
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});
win77.eventSwiper.on("slideChange", (e) => {
    // console.log("e.activeIndex", e, e.activeIndex);
    if (e.activeIndex === 1) {
        if (!win77.collector) {
            win77.startCollector();
        } else {
            win77.collector.resume();
        }
    } else {
        win77.pauseCollector();
    }
});
swiper.on('slideChange', function (e) {
    if (Object.keys(PAGES_ID)[e.activeIndex]) {
        const pageName = Object.keys(PAGES_ID)[e.activeIndex];
        document.querySelector("body").dataset.hash = pageName;
        // console.log('slide changed', pageName, e);
        document.querySelector(".head-title").textContent = pageName.toUpperCase();
        location.assign(`#${pageName}`);
    } else {
        document.querySelector(".head-title").textContent = "EXPLORE";
    }

});
// swiper.slideTo(0, 0);
win77.swiper = swiper;
// single exports output
export { swiper };

