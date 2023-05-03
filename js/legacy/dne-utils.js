const body = document.querySelector("body");

// Функция которая возвращает случайное число
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getCardById = (id) => {
    const card = DNELootArr.find((lootCard) => lootCard.id === id);
    if (card) {
        // console.log(`Card with id ${id} finded successfully`);
        return card;
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}

const setSoundStat = (cardObj) => {
    const str = cardObj.limits;
    const parsedStr = str.split(" ");
    cardObj.soundStat = {
        type: parsedStr[0].replace(/[\s,]/g, ''),
        duration: parsedStr[1],
        tags: parsedStr.slice(3)
    };
    // console.log("setSoundStat", str, parsedStr, cardObj);
    return cardObj;
}

const matchGenreBonus = (cardArr) => {
    let totalBonus = 0;
    // let matchesCount = 0;
    const tagsArr = [];
    console.log("cardArr", cardArr);
    cardArr.forEach((card) => {
        card.soundStat.tags.forEach(tag => tagsArr.push(tag));
    });

    const matchesArr = tagsArr.filter((e, index, arr) => {
        return arr.indexOf(e) !== index;
    });

    matchesArr.filter((item, pos) => matchesArr.indexOf(item) === pos).forEach((match) => {
        cardArr.forEach((card) => {
            card.soundStat.tags.forEach(tag => {
                if (tag === match) {
                    const cardBonus = card.bonus;
                    const matchesCount = matchesArr.length > 2 ? 2 : matchesArr.length;
                    totalBonus += (cardBonus / 2 * matchesCount);
                    console.log("formula", cardBonus, tag, match, tag === match, totalBonus, card);
                }
            });
        });
    });

    console.log("matchGenreBonus", tagsArr, matchesArr, totalBonus);

    return Math.ceil(totalBonus);
}

const createNode = (parent, node, text = "") => {
    const newNode = document.createElement(node);
    newNode.textContent = text;
    parent.appendChild(newNode);
}

const makeUniq = (arr) => {
    return arr.filter((el, id) => arr.indexOf(el) === id);
}

