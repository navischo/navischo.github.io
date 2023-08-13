import { getCardById, getRandomInt, moveCardById } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { updBalanceNode } from "../hud/balance.hud.js";

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
const getMapPinMarkup = (type) => `<button class="js-point map-pin" data-point="gig" data-type="${type}" style="top: ${getRandomInt(200)}px; left: ${getRandomInt(200)}px;">${type}</button>`;
const getMapPins = () => {
    let mapPinsMarkup = ``;

    for (let i = 0; i < getRandomInt(3) + 1; i++) {
        mapPinsMarkup = mapPinsMarkup + getMapPinMarkup(Object.keys(PIN_TYPES)[i]);
    }

    return mapPinsMarkup;
}
const getDungeHexMarkup = (name) =>
`<section class="hex-box map__dunge">
    <div class="inner">
        <h3 class="map__dunge-name">${name}</h3>
    </div>
    <div class="hex-1"></div>
    <div class="hex-2"></div>
</section>`;
// const appendDunge = (name) => {
//     const parent = document.querySelector(".js-dunges-parent");
//     const dungeNode = document.createElement("div");
//     dungeNode.classList.add("swiper-slider");
//     dungeNode.innerHTML = getDungeHexMarkup(name);
//     parent.appendChild(dungeNode);
// }

const getMapLocationMarkup = () => {
    return `
    <button class="js-point hud-btn --absolute --dunge-bg" data-point="dunge" style="top: ${getRandomInt(200)}px; left: ${getRandomInt(200)}px;">
    </button>
    `
}

const getMapLocations = () => {
    let mapLocationsMarkup = ``;

    for (let i = 0; i < getRandomInt(2); i++) {
        mapLocationsMarkup = mapLocationsMarkup + getMapLocationMarkup();
    }

    return mapLocationsMarkup;
}


// ===> STRUCTURE START <=== //


const generateSectorObj = () => {
    return {
        pointsSet: new Set(),
        playersSet: new Set(),
        getInnerHTML: () =>
            `${getMapPins()}
            ${getMapLocations()}`
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

const getRandomSector = () => win77.map[getRandomInt(4)][[`a`, `b`, `c`, `d`][getRandomInt(4)]];

class Chess {
    constructor(id, type, address, card, player) {
        this.id = id;
        this.type = type;
        this.address = address;
        this.card = card;
        this.player = player;
    }
}

const getChessType = () => {
    if (win77.chess.size > 8) {
        return [`T`, `H`, `E`][getRandomInt(3)];
    } else {
        return `i`;
    }
}

win77.chess = new Set();

const initChess = () => {
    const playersChess = Array.from(win77.chess).filter((chess) => chess.player.id === win77.game.player.id);
    const sector = getRandomSector();

    const chess = document.createElement("button");
    chess.classList.add("chess");
    chess.classList.add(playersChess.length === 0 ? `--char-king` : `--char-${win77.game.player.lvl}`);

    chess.style.top = `${getRandomInt(150)}px`;
    chess.style.left = `${getRandomInt(180)}px`;

    console.log(win77.game.player.npc.size, win77.chess.size);
    if (win77.game.player.npc.size >= playersChess.length) {
        if (playersChess.length === 0) {
            const chessCard = getCardById(`gm`, win77.game.catalog.all);
            const chessType = `A`;
            const chessId = `${chessType.toLowerCase()}-${win77.game.player.id}`;
            const chessObj = new Chess(chessId, chessType, sector.node.dataset.sector, chessCard, win77.game.player);
            sector.playersSet.add(chessObj);
            win77.chess.add(chessObj);

            chess.dataset.chessId = chessId;
            chess.dataset.playerId = win77.game.player.id;

            // chess.addEventListener("click", () => {
            //     moveChess(chessObj.id, getRandomSector().address);
            // });

            sector.node.appendChild(chess);
            sector.node.classList.add("--player-in");

            console.log(`${win77.game.player.id} successfully enter map on sector ${sector.address}`, win77.game.player, sector, win77.chess);

        } else if (win77.game.player.npc.size > 0 && playersChess.length > 0) {
            const chessCard = Array.from(win77.game.player.npc)[playersChess.length - 1];
            const chessType = getChessType();
            const chessId = `${chessType.toLowerCase()}-${chessCard.id}`;

            if (chessCard) {
                const chessObj = new Chess(chessId, chessType, sector.node.dataset.sector, chessCard, win77.game.player);
                sector.playersSet.add(chessObj);
                win77.chess.add(chessObj);

                chess.dataset.chessId = chessId;
                chess.dataset.playerId = chessCard.name;

                // chess.addEventListener("click", () => {
                //     moveChess(chessObj.id, getRandomSector().address);
                // });

                sector.node.appendChild(chess);
                sector.node.classList.add("--player-in");

                console.log(`${chessCard.name} successfully enter map on sector ${sector.address}`, win77.game.player, sector, win77.chess);
            } else {
                console.log(`All crew already on map`);
            }
        }
    } else {
        console.log("Looks like all your crew already on map");
    }
}

const getSectorByAddress = (sectorId) => win77.map[sectorId[1]][sectorId[0]];

const makeNextAddressNotSame = (lastAddress) => {
    let nextAddress = getRandomSector().address;

    if (lastAddress === nextAddress) {
        makeNextAddressNotSame(lastAddress);
    } else {
        return nextAddress;
    }
}

const moveChess = (chessId, nextAddress) => {
    const chessToMove = Array.from(win77.chess).find((chessObj) => chessObj.id === chessId);
    const lastAddress = chessToMove.address;

    if (lastAddress === nextAddress) {
        nextAddress = makeNextAddressNotSame(lastAddress);
    }

    // win77.chess[chessToMove].address = nextAddress;
    win77.chess.forEach((chess) => {
        if (chess === chessToMove) {
            chess.address = nextAddress;
        }
    })

    const lastSectorObj = getSectorByAddress(lastAddress);
    const nextSectorObj = getSectorByAddress(nextAddress);
    moveCardById(chessToMove.id, lastSectorObj.playersSet, nextSectorObj.playersSet);

    const chessNode = lastSectorObj.node.querySelector(`.chess[data-chess-id="${chessToMove.id}"]`);
    nextSectorObj.node.appendChild(chessNode.cloneNode(true));
    chessNode.remove();

    if (lastSectorObj.playersSet.size === 0) {
        lastSectorObj.node.classList.remove("--player-in");
    }

    if (nextSectorObj.playersSet.size > 0) {
        nextSectorObj.node.classList.add("--player-in");
    }

    win77.getEnergyPointsFromPlayer(1);
    updBalanceNode();

    console.log(`${win77.game.player.id} move ${chessToMove.id} to ${nextAddress} from ${lastAddress} using 1⚡`);
}

const getFreshDunge = () => {
    const locationsArr = Array.from(win77.locationsSet);
    const visitedArr = win77.game.player.availableLocations;
    if (visitedArr.length <= locationsArr.length) {
        let freshDunge = locationsArr[getRandomInt(locationsArr.length)];
        const isItVisited = (freshOne) => visitedArr.find((visitedName) => visitedName === freshOne.name);

        if (isItVisited(freshDunge)) {
            return getFreshDunge();
        } else {
            return freshDunge;
        }
    } else {
        console.log("Congrats! You discover all locations!");
    }
}
const discoverDunge = (target) => {
    const newDungeObj = getFreshDunge();
    if (newDungeObj !== undefined) {
        win77.game.player.availableLocations.push(newDungeObj.name);

        const sectorId = target.parentNode.dataset.sector;
        console.log(sectorId, target, target.parentNode);
        target.dataset.sectorId = sectorId;
        target.dataset.dungeName = newDungeObj.name;
        target.dataset.dungeSymbol = newDungeObj.name[0];
        target.classList.add("--discovered");

        console.log("pointsSet", win77.map[sectorId[1]][sectorId[0]].pointsSet);
        win77.map[sectorId[1]][sectorId[0]].pointsSet.forEach((point) => {
            if (point.node.dataset.dungeName === newDungeObj.name) {
                point.name = newDungeObj.name;
                point.sectorId = sectorId;
                point.houseObj = newDungeObj;
            }
        });

        return newDungeObj;
    }
}

const detectSectorPoints = (node, originObj) => {
    const pointNodeArr = node.querySelectorAll(".js-point");
    pointNodeArr.forEach((pointNode) => {
        originObj.pointsSet.add({
            node: pointNode,
            name: pointNode.dataset.point === "gig" ? pointNode.textContent : "house"
        });

        // по клику на поинт
        // если в ячейке если фигура
        // фигура становится над ним
        // или
        // открывается форма
        // игрок выбирает
        // сектор в селекте
        // поинт в селекте
        // исполнителя в селекте
    });
}

const redrawMap = () => {
    const parent = document.querySelector(".js-map");
    map.forEach((rowObj, rowIndex) => {
        const keys = Object.keys(rowObj);
        keys.forEach((key, sectorIndex) => {
            const sectorObj = rowObj[key];
            const sectorNode = document.createElement("div");
            sectorNode.classList.add("map-sector");
            sectorNode.innerHTML = sectorObj.getInnerHTML();

            if (rowIndex === 0) {
                sectorNode.classList.add("--index-y");
                sectorNode.dataset.labelX = keys[sectorIndex];
            }

            if (sectorIndex === 0) {
                sectorNode.classList.add("--index-x");
                sectorNode.dataset.labelY = rowIndex;
            }

            sectorNode.dataset.sector = `${keys[sectorIndex]}${rowIndex}`;
            const originObj = map[rowIndex][keys[sectorIndex]];
            originObj.address = `${keys[sectorIndex]}${rowIndex}`;
            detectSectorPoints(sectorNode, originObj);

            parent.appendChild(sectorNode);
            originObj.node = sectorNode;
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
                    // console.log(dungeName);
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

            const sectorId = e.target.parentNode.dataset.sector;
            const playersInSector = win77.map[sectorId[1]][sectorId[0]].playersSet;
            const isCurrentPlayerInSector = Array.from(playersInSector).find((chess) => chess.player.id === win77.game.player.id);
            if (isCurrentPlayerInSector) {
                if (e.target.dataset.chessId) {
                    moveChess(e.target.dataset.chessId, getRandomSector().address);
                } else if (!e.target.classList.contains("map-sector")) {
                    if (playersInSector.size > 0) {
                        if (!e.target.classList.contains("--discovered")) {
                            const targetData = e.target.dataset;

                            if (targetData.point === "gig") {
                                win77.dungesSwiper.virtual.appendSlide(getDungeHexMarkup(targetData.type));
                                win77.dungesSwiper.slideTo(win77.dungesSwiper.virtual.slides.length, 200, false);
                            } else if (targetData.point === "dunge") {
                                const newDunge = discoverDunge(e.target);
                                if (newDunge !== undefined) {
                                    // console.log(newDunge, win77.locationsSet, Array.from(win77.locationsSet));
                                    win77.dungesSwiper.virtual.appendSlide(getDungeHexMarkup(newDunge.name));
                                    win77.dungesSwiper.slideTo(win77.dungesSwiper.virtual.slides.length, 200, false);
                                }
                            }
                        } else {
                            // todo просто подтянуть слайдер к уже сгенерированному слайду
                            // win77.dungesSwiper.slideTo(win77.dungesSwiper.virtual.slides.length, 200, false);
                            console.log("Dunge already discovered", e.target);
                        }
                    }
                }
            }
        });

    const enterBtn = document.querySelector(".js-enter-map");
    enterBtn.addEventListener("click", (e) => {
        e.preventDefault();

        initChess();
        win77.game.player.isOnMap = true;
    });

    win77.map = map;
}

export { redrawMap, drawMapModal };
