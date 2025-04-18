import {getRandomInt, getRandomIntFrom} from "./getCardById.js";
import {updScore} from "../hud/score.hud.js";
import {getCardElement} from "../cards/template.cards.js";
import {addOptionalNextBtn} from "../router/addOptionalNextBtn.js";
import {heatToMinLevel} from "./heatToMinLevel.js";
import {win77} from "../dne-cli.js";



// 1) 3 легких
// 2) 2 средних 2 легких
// 3) 3 средних
// 4) 1 сложный 2 средних
// 5) 2 сложных 2 средних
// 6) 1 очень сложный 3 средних
// 7) 1 очень сложный 1 легкий
// 8) 2 очень сложных
const monsterKeys = [
    ["easy", "easy", "easy"],
    ["middle", "middle", "easy", "easy"],
    ["middle", "middle", "middle"],
    ["hard", "middle", "middle"],
    ["hard", "hard", "middle", "middle"],
    ["special", "middle", "middle", "middle"],
    ["special", "easy"],
    ["special", "special"]
];

const monsterLevels = {
    easy: {
        min: 1, max: 12
    },
    middle: {
        min: 13, max: 18
    },
    hard: {
        min: 19, max: 26
    },
    special: {
        min: 27, max: 36
    }
};

const getMonsterCard = (cardData) => {
    const newCard = document.createElement("div");
    newCard.style.display = "block";
    newCard.id = `dne-card-${cardData.id}`;

    console.log("s/t", cardData.souls, cardData.treasures);

    newCard.innerHTML = `
<article class="card">
    <header class="card__header">
        <div class="card__header-left">
            <small class="js card__id">#${cardData.id}</small>
            <h2 class="card__title">${cardData.name}</h2>
        </div>
        <div class="card__header-right">
            ${cardData.level !== 0 ? `<b class="card__bonus">${cardData.level}</b>` : ``}
        </div>
    </header>
    <p class="card__description">${cardData.description}</p>
    <a class="card__preview">
        <img class="card__preview-img" src="${cardData.img}" alt="" style="max-height: 300px; padding: 0 5px">
    </a>
    <p class="card__description"><b>Невдача:</b> ${cardData.fail}</p>
    <footer class="card__footer">
        <b>${cardData.souls > 1 ? `${cardData.souls} souls` : ``}</b>
        <b style="margin-left: auto">${cardData.treasures} sound</b>
    </footer>
</article>
`;

    return newCard;
}

// START MONSTER TABLE

const appendMonsterTable = (newMonster) => {
    const parent = document.querySelector("#table");
    const monsterCard = getMonsterCard(newMonster.card);
    console.log(newMonster, newMonster.card.id, newMonster.card.name);
    // tableNode.dataset.owner = newMonster.card.name;
    parent.appendChild(monsterCard);
}

const drawMonsterSound = (newMonster, tableNode) => {
    newMonster.hand.forEach((soundCardData) => {
        tableNode.appendChild(getCardElement(soundCardData));
        const bonus = soundCardData.bonus === "d6" ? getRandomInt(6) : +soundCardData.bonus;
        win77.game.versusScore = win77.game.versusScore + bonus;
    });
}

const selectMonsterSound = (num) => {
    const selectedSound = [];
    const allSound = Array.from(win77.game.catalog.sound);
    for (let i = 0; i < num; i++) {
        selectedSound.push(allSound[getRandomInt(allSound.length)]);
    }
    console.log(selectedSound, win77.game.monsters);
    return selectedSound;
}

const acceptMonster = (newMonster) => {
    const newMonsterObj = {
        card: newMonster,
        hand: selectMonsterSound(newMonster.treasures)
    };
    win77.game.monsters.push(newMonsterObj);
    win77.game.versusScore = win77.game.versusScore + newMonster.level;

    appendMonsterTable(newMonsterObj);
}

const isMonsterValid = (newMonster) => {
    const monsterMinLevel = heatToMinLevel(win77.game.player.heat);
    const isThisMonsterAlreadyExist = win77.game.monsters.find((existedMonster) => newMonster === existedMonster.card);
    console.log(`Monster analysis`, monsterMinLevel, newMonster.level, newMonster.level < monsterMinLevel, isThisMonsterAlreadyExist);
    // return !(isThisMonsterAlreadyExist || newMonster.level < monsterMinLevel);
    return !(isThisMonsterAlreadyExist);
}

const spawnMonster = (num = 1) => {
    for (let i = 0; i < num; i++) {
        const newMonster = win77.game.catalog._secret.monsters[getRandomInt(win77.game.catalog._secret.monsters.length)];
        console.log(newMonster, win77);
        if (isMonsterValid(newMonster)) {
            acceptMonster(newMonster);
        } else {
            spawnMonster(1);
        }
    }
    updScore();
}

const spawnMonstersByLevel = (key) => {
    // const num = ;
    // монстры нужной группы
    const keyObj = monsterLevels[key];
        const monstersOrigin = win77.game.catalog._secret.monsters;
        const monstersGroupArr = monstersOrigin.filter((monsterData) => {
            // console.log("Compare monster level...", monsterData.level, keyObj, keyObj.min < monsterData.level && monsterData.level <= keyObj.max);
            return keyObj.min < monsterData.level && monsterData.level <= keyObj.max
        });
        console.log(`Monster group ${key}`, monstersGroupArr);
        const newMonster = monstersGroupArr[getRandomInt(monstersGroupArr.length)];
        console.log(`New monster chosen from level group ${key}`, newMonster, monstersGroupArr, win77);
        if (isMonsterValid(newMonster)) {
            acceptMonster(newMonster);
        } else {
            spawnMonstersByLevel(key);
        }
    updScore();
}

const spawnMonsterByPattern = () => {
    const patternIndex = getRandomInt(monsterKeys.length);
    const pattern = monsterKeys[patternIndex];
    console.log(`Patter #${patternIndex} initiated: ${pattern.join(", ")}`);

    pattern.forEach((key) => {
        spawnMonstersByLevel(key);
    })
}

// const initMonsters = () => {
    // addOptionalNextBtn("monster", () => {
    //     spawnMonster(1);
    // });
// }

// START MONSTER POPUP

const monstersPopupMarkup = `
<h2 class="monsters-title"></h2>
<div class="monsters-queue"></div>
`;

// const appendMonsterPopup = (newMonster) => {
//     const parent = document.querySelector(".monsters-queue");
//     const monsterCard = getMonsterCard(newMonster.card);
//     console.log(newMonster, newMonster.id, newMonster.name);
//     parent.appendChild(monsterCard);
// }

const getRandomMonsterKey = () => {
    const keys = Object.keys(monsterLevels);
    const selectedIndex = getRandomInt(keys.length);
    const selectedKey = keys[selectedIndex];
    console.log(`You got ${selectedIndex + 1} on d4. Append one more monster from group ${selectedKey}`);
    return selectedKey;
}

const initMonsters = () => {
    win77.game.versusScore = 0;
    const root = document.querySelector("body");
    const parent = document.createElement("section");
    parent.classList.add("monsters-popup");
    parent.innerHTML = monstersPopupMarkup;
    console.log("initMonsters");
    root.appendChild(parent);
    root.classList.add("monsters-page");
    root.classList.add("hide-hud");
    spawnMonsterByPattern();
    addOptionalNextBtn("+1 monster", () => {
        spawnMonstersByLevel(getRandomMonsterKey());
    });
}

export { spawnMonster, initMonsters };
