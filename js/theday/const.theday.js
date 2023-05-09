import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { reloadTheday } from "./reload.theday.js";

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

const drawSmitsCard = () => {
    const parent = document.querySelector("#queue");
    const guest = document.createElement("div");

    guest.classList.add("card");
    guest.innerHTML = `
<div class="card__preview">
    <img class="card__preview-img" src="https://lh5.googleusercontent.com/WUvRRRJpFIACJw50hOycHsKNnwSB3SdJSs-_5JQk11pKHMoDstW_n9nzWwb28y_wTUU=w2400" alt="" data-original="https://lh5.googleusercontent.com/WUvRRRJpFIACJw50hOycHsKNnwSB3SdJSs-_5JQk11pKHMoDstW_n9nzWwb28y_wTUU=w2400" style="">
</div>`;

    parent.appendChild(guest);
}

const useSmithsCard = (interval) => {
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

        drawSmitsCard();

        console.log(`Security: Seems like ${smithCard.name} coming to your Event from strange portal with ${smithCard.plusCount} friends. Let them pass?`);
    } else {
        clearInterval(interval);
        console.log(`Security: Seems like your social points is off`);
        const portalToClose = document.querySelector(".js-rick-portal");
        if (portalToClose) {
            portalToClose.addEventListener("click", reloadTheday);
        }
    }
}

const useSmithsCards = () => {
    const handler = () => {
        const socialPoints = win77.game.event.settings.socialPoints;

        useSmithsCard(interval);
        console.log("We use one social point, left:", socialPoints);

        if (socialPoints === 0) {
            clearInterval(interval);
        }
    };
    const interval = setInterval(handler, 500); // 3000
}

const clearSmithsSet = () => {
    win77.game.event.settings.guests.set.clear();
    document.querySelector("#queue").innerHTML = "";
}

win77.pokeButton.dia.useSmithsCards = useSmithsCards;
win77.pokeButton.dia.clearSmithsSet = clearSmithsSet;

export { settings };
