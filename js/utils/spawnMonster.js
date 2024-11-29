import {getRandomInt} from "./getCardById.js";
import {updScore} from "../hud/score.hud.js";
import {getCardElement} from "../cards/template.cards.js";
import {addOptionalNextBtn} from "../router/addOptionalNextBtn.js";
import {heatToMinLevel} from "./heatToMinLevel.js";
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

const appendMonsterTable = (newMonster) => {
    const parent = document.querySelector(".table");
    const tableNode = document.createElement("div");
    const monsterCard = getMonsterCard(newMonster.card);
    monsterCard.classList.add("card-owner");
    tableNode.id = `table-${newMonster.card.id}`;
    tableNode.classList.add("js-monster-table");
    tableNode.classList.add("table__cards");
    console.log(newMonster, newMonster.id, newMonster.name);
    // tableNode.dataset.owner = newMonster.card.name;
    parent.appendChild(tableNode);
    tableNode.appendChild(monsterCard);
    drawMonsterSound(newMonster, tableNode);
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

const initMonsters = () => {
    // addOptionalNextBtn("monster", () => {
    //     spawnMonster(1);
    // });
}

export { spawnMonster, initMonsters };
