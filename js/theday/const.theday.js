import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { reloadTheday } from "./reload.theday.js";
import { drawLootCards } from "../cards/dom.cards.js";

const SMITHS_TYPES = [
    {
        name: "morty",
        enterBudget: 100
    }, {
        name: "summer",
        enterBudget: 200
    }, {
        name: "jerry",
        enterBudget: 300
    }, {
        name: "beth",
        enterBudget: 400
    }, {
        name: "rick",
        enterBudget: 500
    }
];
const settings = {
    enterPrice: 200,
    socialPoints: 5,
    guestsCount: 0,
    guests: {
        set: new Set(),
        womanCount: 0,
        manCount: 0
    },
    bar: {
        length: 100,
        basePrice: 100
    }
}

const isMale = (name) => {
    if (name === "beth" || name === "summer") {
        return "woman";
    } else {
        return "man";
    }
}

const drawSmitsCard = (dataObj) => {
    const parent = document.querySelector("#queue");
    const guest = document.createElement("div");

    guest.classList.add("card");
    guest.classList.add(`--${dataObj.name}`);
    guest.classList.add("--smith");
    guest.innerHTML = `
<header class="card__header">
    <div class="card__header-right">
        <b class="card__bonus">+${dataObj.plusCount}</b>
    </div>
</header>
<div class="card__preview">
    <img class="card__preview-img" src="img/${dataObj.name}.png" alt="" style="">
</div>
<div class="js-card-controls card__controls">
    <button>+</button>
    <button>-</button>
</div>
`;
    // console.log(`drawSmitsCard(${name})`, guest.innerHTML);

    parent.appendChild(guest);
    const controls = guest.querySelectorAll("button");
    controls.forEach((btn) => {
        if (btn.textContent === "+") {
            btn.addEventListener("click", () => {
                guest.remove();
                const message = `You pass ${dataObj.name}`;
                console.log(message);
            });
        } else if (btn.textContent === "-") {
            btn.addEventListener("click", () => {
                guest.remove();
                console.log(`You say not today to ${dataObj.name}`, dataObj, win77.game);
                win77.game.event.settings.socialPoints++;
                inviteGuest();
            });
        }
    });
    guest.classList.add("slide-in-blurred-right");
}

// const initControls = (guestCard) => {
//     const controlBtns = guestCard.querySelectorAll("button");
//     controlBtns.forEach((control) => {
//         if (control.textContent === `+`) {
//             win77.game.event.settings.socialPoints--;
//         }
//     });
// }

const useSmithsCard = (interval = undefined) => {
    const socialPoints = win77.game.event.settings.socialPoints;
    if (socialPoints > 0) {
        const smithCard = Object.assign({}, SMITHS_TYPES[getRandomInt(SMITHS_TYPES.length)]);
        smithCard.plusCount = getRandomInt(14);
        const income = smithCard.enterBudget * smithCard.plusCount;
        win77.game.event.result.income = +win77.game.event.result.income + income;
        win77.game.event.settings.guestsCount = win77.game.event.settings.guestsCount + smithCard.plusCount;

        win77.game.event.settings.guests[`${isMale(smithCard.name)}Count`] = win77.game.event.settings.guests[`${isMale(smithCard.name)}Count`] + smithCard.plusCount;
        win77.game.event.settings.guests.set.add(smithCard);

        win77.game.event.settings.socialPoints--;

        drawSmitsCard(smithCard);

        console.log(`Security: Seems like ${smithCard.name} coming to your Event from strange portal with ${smithCard.plusCount} friends. Let them pass?`);
    } else {
        // if (interval) {
        //     clearInterval(interval);
        // }
        console.log(`Security: Seems like your social points is off`);
        const portalToClose = document.querySelector(".js-rick-portal");
        if (portalToClose) {
            portalToClose.addEventListener("click", reloadTheday);
        }
    }
}

const inviteGuest = () => {
    const socialPoints = win77.game.event.settings.socialPoints;

    useSmithsCard();
    console.log("We use one social point, left:", socialPoints);
}

const getScene = () => {
    const sceneElement = document.querySelector("#main-scene");
    const setup = {
        parent: sceneElement.querySelector(".setup")
    };
    setup.controllerSelector = "#setup";
    setup.lineupSelector = "#lineup";
    setup.left = setup.parent.querySelector(".setup__left");
    setup.right = setup.parent.querySelector(".setup__right");
    const executiveSelector = "#executive";

    return {
        setup,
        executiveSelector: executiveSelector,
        data: {
            executive: win77.game.player.npc,
            controller: win77.game.player.loot,
            lineup: win77.game.table
        }
    }
}

const useSmithsCards = () => {
    const scene = getScene();
    console.log(`${win77.game.player.id} getSceneData()`, scene);
    drawLootCards(scene.data.executive, scene.executiveSelector);
    const teamCards = document.querySelectorAll(`${scene.executiveSelector} .card`);
    teamCards.forEach((teamCard) => {
        console.log(`teamCard`, teamCard, teamCard.parentNode);
        teamCard.parentNode.classList.add("swiper-slide");
    });
    win77.swiperExecutive = new Swiper(".swiper.executive", {
        effect: "cards",
        grabCursor: true,
    });
    drawLootCards(scene.data.controller, scene.setup.controllerSelector);
    drawLootCards(scene.data.lineup, scene.setup.lineupSelector);
    document.querySelector(`${scene.setup.lineupSelector}`).classList.add("--play");
    const inviteGuestByInterval = () => {
        const socialPoints = win77.game.event.settings.socialPoints;

        inviteGuest();

        if (socialPoints === 0) {
            clearInterval(interval);
        }
    };
    const interval = setInterval(inviteGuestByInterval, 500); // 3000
}

const clearSmithsSet = () => {
    win77.game.event.settings.guests.set.clear();
    // document.querySelector("#queue").innerHTML = "";
}

win77.pokeButton.dia.useSmithsCards = useSmithsCards;
win77.pokeButton.dia.clearSmithsSet = clearSmithsSet;

export { settings };
