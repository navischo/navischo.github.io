import { win77 } from "../dne-cli.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { CARD_TYPES } from "../cards/const.cards.js";
import {getCardById} from "./getCardById.js";

const appendCards = (type) => {
    const parent = document.querySelector(".js-tinder-cards");
    parent.innerHTML = ``;
    const DNENewCardsArr = Array.from(win77.my.available[type]).map(cardId => getCardById(cardId, win77.game.catalog.all));
    console.log("DNENewCardsArr", DNENewCardsArr);
    // const DNENewCardsArr = Array.from(win77.game.catalog.all).filter(card => card.type === type);
    drawLootCards(DNENewCardsArr, ".js-tinder-cards");
}

const getPlayerCardMarkup = (title, img, description) =>
    `<div class="tinder-card --player">
        <img class="tinder-card__img" src="${img}">
        <h3 class="tinder-card__title">${title}</h3>
        <p class="tinder-card__description">${description}</p>
    </div>`;


const appendPlayersCards = () => {
    const parent = document.querySelector(".js-tinder-cards");
    const wrap = document.querySelector(".js-tinder-wrapper");
    wrap.classList.add("--players");
    parent.innerHTML = Array.from(win77.players)
        .map((playerObj) => getPlayerCardMarkup(playerObj.id, playerObj.avatar, playerObj.description))
        .join("");
}

win77.my = {
    npc: new Set(),
    sound: new Set(),
    player: new Set(),
    available: null
}

const addToMy = (collection, id) => {
    win77.my[collection].add(id);
    // todo remove added id from available
    console.log(win77.my.available, win77.my.available[collection]);
}

const initMySwiper = (cardType, nodeObj) => {
    const wrap = nodeObj[`${cardType}Wrap`];
    wrap.innerHTML = ``;
    // const soundCardsArr = Array.from(win77.game.player.npc);
    const cardsArr = Array.from(win77.my[cardType]).map((cardId) => getCardById(cardId, win77.game.catalog.all));

    console.log(cardsArr, wrap);
    drawLootCards(cardsArr, `.js-my-${cardType}-wrapper`);
    const cards = wrap.querySelectorAll(`.card`);
    cards.forEach((card) => {
        // console.log(`teamCard`, teamCard, teamCard.parentNode);
        card.parentNode.classList.add("swiper-slide");
    });
    win77.soundSwiper = new Swiper(`.js-my-${cardType}-swiper`, {
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}

const initTinder = () => {
    const parent = document.querySelector("#lollyball");
    let tinderContainer = document.querySelector('.tinder');
    let allCards = document.querySelectorAll('.tinder-card');
    let nope = document.getElementById('nope');
    let love = document.getElementById('love');

    const initCards = (card, index) => {
        let newCards = document.querySelectorAll('.tinder-card:not(.removed)');

        newCards.forEach((card, index) => {
            card.style.zIndex = allCards.length - index;
            card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
            card.style.opacity = (10 - index) / 10;
        });

        tinderContainer.classList.add('loaded');
    }

    initCards();

    allCards.forEach((el) => {
        let hammertime = new Hammer(el);

        hammertime.on('pan', (event) => {
            el.classList.add('moving');
        });

        hammertime.on('pan', (event) => {
            // if (event.target.classList.contains("tinder-card")) {
                if (event.deltaX === 0) return;
                if (event.center.x === 0 && event.center.y === 0) return;

                tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
                tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

                let xMulti = event.deltaX * 0.03;
                let yMulti = event.deltaY / 80;
                let rotate = xMulti * yMulti;

                event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
            // }
        });

        hammertime.on('panend', (event) => {
            el.classList.remove('moving');
            tinderContainer.classList.remove('tinder_love');
            tinderContainer.classList.remove('tinder_nope');

            let moveOutWidth = document.body.clientWidth;
            let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

            event.target.classList.toggle('removed', !keep);

            if (keep) {
                event.target.style.transform = '';
            } else {
                let endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
                let toX = event.deltaX > 0 ? endX : -endX;
                let endY = Math.abs(event.velocityY) * moveOutWidth;
                let toY = event.deltaY > 0 ? endY : -endY;
                let xMulti = event.deltaX * 0.03;
                let yMulti = event.deltaY / 80;
                let rotate = xMulti * yMulti;

                event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';

                console.log(event.target.id.replace("dne-card-", ""), event.target);
                addToMy(parent.dataset.currentCollection, event.target.id.replace("dne-card-", ""));

                initCards();
            }
        });
    });

    const createButtonListener = (love) => {
        return (event) => {
            let cards = document.querySelectorAll('.tinder-card:not(.removed)');
            let moveOutWidth = document.body.clientWidth * 1.5;

            if (!cards.length) return false;

            let card = cards[0];

            card.classList.add('removed');

            if (love) {
                card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';

                console.log(card.id.replace("dne-card-", ""), card);
                addToMy(parent.dataset.currentCollection, card.id.replace("dne-card-", ""));
            } else {
                card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
            }

            initCards();

            event.preventDefault();
        };
    }

    let nopeListener = createButtonListener(false);
    let loveListener = createButtonListener(true);

    nope.addEventListener('click', nopeListener);
    love.addEventListener('click', loveListener);
}

const initRoller = () => {
    const parent = document.querySelector("#lollyball");
    win77.my.available = {
        npc: Array.from(win77.game.catalog.all)
            .filter(card => card.type === `npc`)
            .map(card => card.id),
        sound: Array.from(win77.game.catalog.all)
            .filter(card => card.type === `sound`)
            .map(card => card.id),
        player: new Set()
    }

    const openRollerPage = () => {
        appendGameCards(`sound`);
        initTinder();

        parent.classList.add("--visible");
        parent.dataset.currentCollection = `sound`;
        return parent;
    };

    const appendGameCards = (type) => {
        const wrap = document.querySelector(".js-tinder-wrapper");

        appendCards(CARD_TYPES[type]);
        parent.dataset.currentCollection = CARD_TYPES[type];
        const newCards = document.querySelectorAll(".js-tinder-cards > *");

        newCards.forEach((newCard) => {
            newCard.classList.add(`tinder-card`);
            newCard.classList.add(`--game-card`);
        });
        wrap.classList.remove("--players");
        initTinder();
    }

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-lollyball");
        const changeToPlayersBtn = parent.querySelector(".js-players-lollyball");
        const changeToGameCardsBtns = document.querySelectorAll(".js-change-lollyball");
        const changeToMyBtn = parent.querySelector(".js-my-lollyball");

        const myNode = document.querySelector(".js-my");
        const tinderNode = document.querySelector(".js-tinder-wrapper");

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            localStorage.setItem("tinder", "false");
        };
        const changeToPlayersBtnHandler = () => {
            appendPlayersCards();
            initTinder();

            tinderNode.classList.add("--visible");
            myNode.classList.remove("--visible");
            parent.dataset.currentCollection = `player`;
        };

        const changeToMyBtnHandler = () => {
            const my = {
                name: document.querySelector(".js-my-name"),
                soundSwiper: document.querySelector(".js-my-sound-swiper"),
                soundWrap: document.querySelector(".js-my-sound-wrapper"),
                npcSwiper: document.querySelector(".js-my-npc-swiper"),
                npcWrap: document.querySelector(".js-my-npc-wrapper")
            };
            my.name.textContent = win77.game.player.id;
            initMySwiper(`sound`, my);
            initMySwiper(`npc`, my);

            tinderNode.classList.remove("--visible");
            myNode.classList.add("--visible");
        }

        closeBtn.addEventListener("click", closeBtnHandler);
        changeToPlayersBtn.addEventListener("click", changeToPlayersBtnHandler);
        changeToGameCardsBtns.forEach((changeBtn) => {
            changeBtn.addEventListener("click", () => {
                const type = changeBtn.textContent.toLowerCase();
                appendGameCards(type);
                tinderNode.classList.add("--visible");
                myNode.classList.remove("--visible");
            });
        });
        changeToMyBtn.addEventListener("click", changeToMyBtnHandler);
    }

    initHandlers();
    // todo open roller
    const openRollerBtn = document.querySelector(".js-open-lollyball");
    openRollerBtn.addEventListener("click", () => {
        openRollerPage();
    });

    win77.openRoller = openRollerPage;
    const isTinder = localStorage.getItem("tinder");
    console.log("isTinder", isTinder);
    if (isTinder === "true") {
        win77.openRoller();
    }
}

export { initTinder, initRoller };
