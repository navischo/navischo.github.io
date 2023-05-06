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

const useSmithsCard = () => {
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

        console.log(`Security: Seems like ${smithCard.name} coming to your Event from strange portal with ${smithCard.plusCount} friends. Let them pass?`);
    } else {
        console.log(`Security: Seems like your social points is off`);
        reloadTheday();
    }
}

const clearSmithsSet = () => {
    win77.game.event.settings.guests.set.clear();
}

win77.pokeButton.dia.useSmithsCard = useSmithsCard;
win77.pokeButton.dia.clearSmithsSet = clearSmithsSet;

export { settings };
