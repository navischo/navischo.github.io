import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";

// ===> DATA START <=== //

const PIN_TYPES = {
    spot: {
        id: "spot",
        shortline: "Inspiration gig",
        icon: "λ"
    },
    rave: {
        id: "rave",
        shortline: "Music Event",
        icon: "∄"
    },
    market: {
        id: "market",
        shortline: "Food and Rare Loot",
        icon: "₿"
    },
    studio: {
        id: "studio",
        shortline: "Art Service",
        icon: "?"
    }
}

// ===> MARKUP START <=== //

// Object.keys(PIN_TYPES)[getRandomInt(PIN_TYPES.length)]
const getMapPinMarkup = (type) => `<button class="map-pin" data-point="gig" data-type="${type}" style="top: ${getRandomInt(200)}px; left: ${getRandomInt(200)}px;">${type}</button>`;
const getMapPins = () => {
    let mapPinsMarkup = ``;

    for (let i = 0; i < getRandomInt(3) + 1; i++) {
        mapPinsMarkup = mapPinsMarkup + getMapPinMarkup(Object.keys(PIN_TYPES)[i]);
    }

    return mapPinsMarkup;
}
const getDungeHexMarkup = (name) =>
`<a class="hex-box map__dunge" href="#">
    <div class="inner">
        <h3 class="map__dunge-name">${name}</h3>
    </div>
    <div class="hex-1"></div>
    <div class="hex-2"></div>
</a>`;
const appendDunge = (name) => {
    const parent = document.querySelector(".js-dunges-parent");
    const dungeNode = document.createElement("div");
    dungeNode.classList.add("swiper-slider");
    dungeNode.innerHTML = getDungeHexMarkup(name);
    parent.appendChild(dungeNode);
}


// ===> STRUCTURE START <=== //


const generateSectorObj = () => {
    return {
        pointsSet: new Set(),
        playersSet: new Set(),
        getInnerHTML: () =>
            `${getMapPins()}`
    }
};
const generateRowObj = () => {
    return {
        a: generateSectorObj(),
        b: generateSectorObj(),
        c: generateSectorObj(),
        d: generateSectorObj()
    }
};
const map = [
    generateRowObj(),
    generateRowObj(),
    generateRowObj(),
    generateRowObj()
];

// ===> DOM START <=== //

const redrawMap = () => {
    const parent = document.querySelector(".js-map");
    map.forEach((rowObj, rowIndex) => {
        const keys = Object.keys(rowObj);
        keys.forEach((key, sectorIndex) => {
            const sectorObj = rowObj[key];
            const sectorNode = document.createElement("div");
            sectorNode.classList.add("map-sector");
            sectorNode.dataset.sector = `${keys[sectorIndex]}${rowIndex}`;
            sectorNode.innerHTML = sectorObj.getInnerHTML();

            if (rowIndex === 0) {
                sectorNode.classList.add("--index-y");
                sectorNode.dataset.labelX = keys[sectorIndex];
            }

            if (sectorIndex === 0) {
                sectorNode.classList.add("--index-x");
                sectorNode.dataset.labelY = rowIndex;
            }

            parent.appendChild(sectorNode);
        });
    });
}

const drawPinTypes = () => {
    const parent = document.querySelector(".js-pin-types");
    Object.keys(PIN_TYPES).forEach((key) => {
        const pinObj = PIN_TYPES[key];
        const pinNode = document.createElement("div");
        pinNode.classList.add("map__pin-type");
        pinNode.innerHTML = `
                <span class="map__pin-type-icon">${pinObj.icon}</span>
                <h3 class="map__pin-type-title">${pinObj.id.toUpperCase()}</h3>
                <p class="map__pin-type-descr">${pinObj.shortline}</p>`;
        parent.appendChild(pinNode);
    });
}

const drawMapModal = () => {
    drawPinTypes();
    // appendDunge("Green House");
    win77.dungesSwiper = new Swiper(".js-dunges-swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        grabCursor: true,
        virtual: {
            slides: (function () {
                const slides = [];
                for (let dungeName of win77.game.player.availableLocations) {
                    console.log(dungeName);
                    slides.push(getDungeHexMarkup(dungeName));
                }
                return slides;
            })(),
        }
    });
    document
        .querySelector('.js-map')
        .addEventListener('click', function (e) {
            e.preventDefault();
            console.log(e.target, e);
            const targetData = e.target.dataset;

            if (targetData.point === "gig") {
                win77.dungesSwiper.virtual.appendSlide(getDungeHexMarkup(targetData.type));
                win77.dungesSwiper.slideTo(win77.dungesSwiper.virtual.slides.length, 200, false);
            }
        });
}

export { redrawMap, drawMapModal };
