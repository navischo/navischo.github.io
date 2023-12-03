import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { reloadTheday } from "./reload.theday.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { DUNGE_NAMES } from "../inInteraction/interface.inInteraction.js";
import { matchGenreBonus } from "../utils/matchGenreBonus.js";
import { logIncome } from "../utils/logIncome.js";
import { initLineup } from "../utils/initLineup.js";
import { updTipRouter } from "../router/updTip.router.js";

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
    }, {
        name: "rare",
        enterBudget: 1000
    }
];

const SMITHS_LETTERS = ["A", "B", "C", "D", "E"];
const settings = {
    dungeName: DUNGE_NAMES[getRandomInt(DUNGE_NAMES.length)],
    enterPrice: 200,
    socialPoints: 5,
    guestsCount: 0,
    guests: {
        set: new Set(),
        womanCount: 0,
        manCount: 0,
        isRareAvailable: true
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

const rareGuestsArr = [{
    name: "darksranchik",
    img: "darksranchik",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "lightsranchik",
    img: "lightsranchik",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "luke",
    img: "rare-guest-1",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "mandalorian",
    img: "rare-guest-2",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "solo",
    img: "rare-guest-3",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "emperor",
    img: "rare-guest-4",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "princess",
    img: "rare-guest-5",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "chubaka",
    img: "rare-guest-6",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "yoda",
    img: "rare-guest-7",
    enterBudget: 1000,
    maxPlusCount: 33,
    isOnBoard: false
}, {
    name: "obivan",
    img: "rare-guest-8",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "garry",
    img: "rare-guest-9",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "fred-and-jorge",
    img: "rare-guest-10",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "hagrid",
    img: "rare-guest-11",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "germiona",
    img: "rare-guest-12",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "polumna",
    img: "rare-guest-13",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "snape",
    img: "rare-guest-14",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "garry-w",
    img: "rare-guest-15",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "draco-w",
    img: "rare-guest-16",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "dambldor-w",
    img: "rare-guest-17",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "germiona-w",
    img: "rare-guest-18",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "ron-w",
    img: "rare-guest-19",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "belatrice-w",
    img: "rare-guest-20",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "snape-w",
    img: "rare-guest-21",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "hagrid-w",
    img: "rare-guest-22",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "voldemort-w",
    img: "rare-guest-23",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "moody-w",
    img: "rare-guest-24",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "pantera",
    img: "rare-guest-25",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "neuropunk",
    img: "rare-guest-26",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}, {
    name: "neuropunk-2",
    img: "rare-guest-27",
    enterBudget: 1000,
    maxPlusCount: 20,
    isOnBoard: false
}];
const rareGuestsSet = new Set();
win77.game.rareGuestsSet = rareGuestsSet;
rareGuestsArr.forEach((rareGuest) => {
   rareGuestsSet.add(rareGuest);
});

// const RARE_GUESTS_TOTAL_COUNT = 8;
// const RARE_GUESTS = [
//     {img: "rare-guest"}
// ]
// const moveRareGuestByName = (name, from, to) => {
//     console.log(`Trying to move #${name} from to`, from, to);
//
//     const card = Array.from(from).find((lootCard) => lootCard.name === name);
//     if (card) {
//         to.add(card);
//         from.delete(card);
//         console.log(`Card with id ${name} successfully moved`);
//     } else {
//         console.log(`Card with id ${name} does not exist`);
//     }
//     return card;
// }
// name, from, to
const getRareGuest = () => {
    const guestObj = rareGuestsArr[getRandomInt(rareGuestsArr.length)];
    const name = guestObj.name;
    const isGuestNowAvailable = !guestObj.isOnBoard;
    if (isGuestNowAvailable) {
        const card = Array.from(rareGuestsSet).find((card) => card.name === name);
        if (card) {
            console.log(`Rare guest with name ${name} successfully passed`, rareGuestsSet);
        } else {
            console.log(`Rare guest with name ${name} does not exist`, rareGuestsSet);
        }
        return card;
    } else {
        console.log(`Rare guest ${name} unavailable now`);
        const isAnyoneMoreAvailable = Array.from(rareGuestsSet).find((card) => card.isOnBoard === false);
        if (isAnyoneMoreAvailable) {
            return getRareGuest();
        } else {
            win77.game.event.settings.guests.isRareAvailable = false;
            console.log(`Seem like no more Rare guest available in your Direct`, rareGuestsSet);
        }
    }
}


// const getImgFormat = (name) => {
//     if (name === "rare") {
//         return `jpg`;
//     } else {
//         return `png`;
//     }
// }

const drawSmitsCard = (dataObj) => {
    const rareGuest = dataObj.name === "rare" ? getRareGuest() : false;
    // console.log("isRareGuest", rareGuest);
    if (rareGuest) {
        dataObj.name = rareGuest.name;
        dataObj.profile = rareGuest;
        dataObj.profile.isOnBoard = true;
        dataObj.plusCount = getRandomInt(dataObj.profile.maxPlusCount);
        dataObj.enterBudget = getRandomInt(dataObj.profile.enterBudget);
    }
    const parent = document.querySelector("#queue");
    const guest = document.createElement("div");

    guest.classList.add("card");
    if (rareGuest) {
        guest.classList.add(`--rare`);
        guest.classList.add(`--${dataObj.name}`);
    } else {
        guest.classList.add(`--${dataObj.name}`);
    }
    guest.classList.add("--smith");
    guest.innerHTML = `
<header class="card__header">
    <div class="card__header-left">
        <h2 class="card__title">+${dataObj.plusCount}</h2>
    </div>
</header>
<div class="card__preview">
    <img class="card__preview-img" src="img/${rareGuest ? rareGuest.img : dataObj.name}.png" alt="" style="">
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
            btn.addEventListener("click", (e) => {
                guest.classList.add("slide-out-left");
                setTimeout(() => {
                    guest.remove();
                }, 500);
                passGuest(dataObj);

                logIncome(dataObj.enterBudget * dataObj.plusCount, e);

                const message = `You pass ${dataObj.name}`;
                console.log(message, dataObj, win77.game);
            });
        } else if (btn.textContent === "-") {
            btn.addEventListener("click", () => {
                if (dataObj.profile) {
                    dataObj.profile.isOnBoard = false;
                }
                guest.classList.add("slide-out-blurred-right");
                setTimeout(() => {
                    guest.remove();
                }, 450);
                console.log(`You say not today to ${dataObj.name}`, dataObj, win77.game);
                win77.giveSocialPointToPlayer();
                // inviteGuest();
            });
        }
    });
    guest.classList.add("slide-in-blurred-right");
}

const matchCashOnEnter = (smithCard) => {
    return smithCard.enterBudget + (smithCard.enterBudget * smithCard.plusCount);
}

const matchCashOnBar = () => {
    const man = win77.game.event.settings.guests.manCount;
    const woman = win77.game.event.settings.guests.womanCount;
    const basePrice = win77.game.event.settings.bar.basePrice;
    // todo добавить ограничение по кол-ву напитков на баре
    return (basePrice * (man / 2)) + (basePrice * (woman * 3));
}

const matchLootBonus = () => {
    let LOOT_BONUS = 0;
    win77.game.player.loot.forEach((lootItem) => {
        // console.log(`LOOT_BONUS`, LOOT_BONUS, lootItem.bonus);
        LOOT_BONUS = LOOT_BONUS + lootItem.bonus;
    });
    return LOOT_BONUS;
}

const matchCrewBonus = () => {
    let CREW_BONUS = 0;
    win77.game.player.npc.forEach((crewItem) => {
        // console.log(`CREW_BONUS`, CREW_BONUS, crewItem.bonus);
        CREW_BONUS = CREW_BONUS + crewItem.bonus;
    });
    return CREW_BONUS;
}

const matchEventIncome = (smithCard) => {
    console.log("win77.game.event.result.income", win77.game.event.result.income);
    const cashOnEnter = matchCashOnEnter(smithCard);
    win77.game.event.result.cashOnEnter = win77.game.event.result.cashOnEnter + cashOnEnter;


    const GENRE_BONUS = matchGenreBonus(win77.game.table);
    const LOOT_BONUS = matchLootBonus();
    const CREW_BONUS = matchCrewBonus();


    const IMPACT_BONUS = win77.game.player.score - win77.game.versusScore + GENRE_BONUS + LOOT_BONUS + CREW_BONUS;
    if (IMPACT_BONUS > 4) {
        // console.log("IMPACT_BONUS", IMPACT_BONUS, Math.round(+cashOnEnter / 100 * IMPACT_BONUS), win77.game.event.result.impactBonus);
        const impactIncome = Math.round(cashOnEnter / 100 * IMPACT_BONUS);
        // win77.game.event.result.impactBonus = win77.game.event.result.impactBonus + impactIncome;
        win77.game.event.result.impactBonus = win77.game.event.result.impactBonus + impactIncome;
        console.log(`+${impactIncome} Impact bonus(${win77.game.event.result.impactBonus} in total)`);
    }


    win77.game.event.result.cashOnBar = matchCashOnBar();

    win77.game.event.result.income =
        +win77.game.event.result.cashOnEnter
        + win77.game.event.result.cashOnBar
        + win77.game.event.result.impactBonus;

    console.log(`${smithCard.name}(${smithCard.enterBudget}) bring you ${cashOnEnter} income.`);
}

const passGuest = (smithCard) => {
    win77.game.event.settings.guestsCount = win77.game.event.settings.guestsCount + smithCard.plusCount;
    win77.game.event.settings.guests[`${isMale(smithCard.name)}Count`] = win77.game.event.settings.guests[`${isMale(smithCard.name)}Count`] + smithCard.plusCount;

    if (win77.game.event.settings.guests.set.size !== 0) {
        const prevGuest = Array.from(win77.game.event.settings.guests.set)[win77.game.event.settings.guests.set.size - 1];
        if (prevGuest.name === smithCard.name) {
            win77.giveSocialPointToPlayer();
            console.log(`Guest by name ${smithCard.name} meet yourself from another universe. Get +1 social point! Your social points:`, win77.game.event.settings.socialPoints);
        }
    }

    win77.game.event.settings.guests.set.add(smithCard);
}

const useSmithsCard = (interval = undefined) => {
    const socialPoints = win77.game.event.settings.socialPoints;
    if (socialPoints > 0) {
        let smithCard = Object.assign({}, SMITHS_TYPES[getRandomInt(SMITHS_TYPES.length)]);
        if (smithCard.name === "rare" && !win77.game.event.settings.guests.isRareAvailable) {
            do {
                smithCard = Object.assign({}, SMITHS_TYPES[getRandomInt(SMITHS_TYPES.length)]);
            } while (smithCard.name !== "rare");
        }
        smithCard.plusCount = getRandomInt(14);
        console.log(`Security: Seems like ${smithCard.name} coming to your Event from strange portal with ${smithCard.plusCount} friends. Let them pass?`);

        win77.getSocialPointsFromPlayer(1);

        drawSmitsCard(smithCard);
    } else {
        // if (interval) {
        //     clearInterval(interval);
        // }
        console.log(`Security: Seems like your social points is off`);
        const portalToClose = document.querySelector(".js-rick-portal");
        if (portalToClose) {
            portalToClose.addEventListener("click", reloadTheday);
            portalToClose.classList.add("--exit-label");
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
    setup.lineupSelector = "#lineup";
    const executiveSelector = "#executive";
    const avatarSelector = "#avatar";

    return {
        setup,
        avatarSelector: avatarSelector,
        executiveSelector: executiveSelector,
        data: {
            avatar: win77.game.player.avatar,
            executive: win77.game.player.loot,
            lineup: win77.game.table
        }
    }
}

const useSmithsCards = () => {
    const scene = getScene();
    // console.log(`${win77.game.player.id} getSceneData()`, scene);
    drawLootCards(scene.data.avatar, scene.avatarSelector);
    drawLootCards(scene.data.executive, scene.executiveSelector);
    const executiveCards = document.querySelectorAll(`${scene.executiveSelector} .card`);
    executiveCards.forEach((teamCard) => {
        // console.log(`teamCard`, teamCard, teamCard.parentNode);
        teamCard.parentNode.classList.add("swiper-slide");
    });
    win77.swiperExecutive = new Swiper(".swiper.executive", {
        effect: "cards",
        grabCursor: true,
    });
    drawLootCards(scene.data.lineup, scene.setup.lineupSelector);
    initLineup();
    document.querySelector(`${scene.setup.lineupSelector}`).classList.add("--play");
    const inviteGuestByInterval = () => {
        const socialPoints = win77.game.event.settings.socialPoints;

        inviteGuest();

        if (socialPoints === 0) {
            clearInterval(interval);
            win77.router.matchmaking ? updTipRouter("Finish round") : "";
        }
    };
    const secToNext = getRandomInt(7);
    const interval = setInterval(inviteGuestByInterval, +`${secToNext > 3 ? secToNext : 3}000`);
}

// const clearSmithsSet = () => {
//     win77.game.event.settings.guests.set.clear();
    // document.querySelector("#queue").innerHTML = "";
// }

win77.pokeButton.dia.useSmithsCards = useSmithsCards;
// win77.pokeButton.dia.clearSmithsSet = clearSmithsSet;

export { settings, matchEventIncome, matchLootBonus, matchCrewBonus };
