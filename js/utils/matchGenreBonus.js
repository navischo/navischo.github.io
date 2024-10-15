import { win77 } from "../dne-cli.js";

const matchGenreBonus = (cardArr) => {
    let totalBonus = 0;
    // let matchesCount = 0;
    const tagsArr = [];
    // console.log("cardArr", cardArr);
    cardArr.forEach((card) => {
        card.soundStat.tags.forEach(tag => tagsArr.push(tag));
    });

    const matchesArr = tagsArr.filter((e, index, arr) => {
        return arr.indexOf(e) !== index;
    });

    matchesArr.filter((item, pos) => matchesArr.indexOf(item) === pos)
        .forEach((match) => {
            cardArr.forEach((card) => {
                card.soundStat.tags.forEach(tag => {
                    if (tag === match) {
                        const cardBonus = card.bonus;
                        const matchesCount = matchesArr.length > 2 ? 2 : matchesArr.length;
                        totalBonus += (cardBonus / 2 * matchesCount);
                        // console.log("formula", cardBonus, tag, match, tag === match, totalBonus, card);
                    }
                });
        });
    });

    // console.log("matchGenreBonus", tagsArr, matchesArr, totalBonus);
    console.log(`+${totalBonus}% for combining these genres`, matchesArr, "from", tagsArr);

    return Math.ceil(totalBonus);
}

const visualizeGenreMatch = () => {

}

const resetGenreBonus = () => {
    win77.game.player.genreBonus = 0;
    win77.game.player.genreBonusObj = {
        cards: [],
        increment: 0,
        sum: 0
    };

    //todo если мм, то же самое для него
}

const getGenreBonus = (cardArr) => {
    let totalBonus = 0;
    const genreBonusObj = {};
    const tagsArr = [];
    cardArr.forEach((card) => {
        card.soundStat.tags.forEach(tag => tagsArr.push(tag));
    });

    const matchesArr = tagsArr.filter((e, index, arr) => {
        console.log("e, index, arr in matchesArr", e, index, arr);
        return arr.indexOf(e) !== index;
    });
    console.log("matchesArr", matchesArr);
    console.log(matchesArr.filter((item, pos) => matchesArr.indexOf(item) === pos));
    const matchesArrDuplicateFree = matchesArr.filter((item, pos) => matchesArr.indexOf(item) === pos);
    matchesArrDuplicateFree.forEach((match) => {
        genreBonusObj[match] = {
            cards: [],
            increment: 0,
            sum: 0
        };
        cardArr.forEach((card) => {
            card.soundStat.tags.forEach(tag => {
                if (tag === match) {
                    const cardBonus = card.bonus;
                    let matchesCount = 0;
                    matchesArr.forEach((genre) => {
                        if (genre === match && matchesCount < 2) {
                            matchesCount = matchesCount + 1;
                        }
                    });
                    const localBonus = Math.round(cardBonus / 2 * matchesCount);
                    console.log("formula", cardBonus, tag, match, tag === match, card);
                    genreBonusObj[match].cards.push(card);
                    genreBonusObj[match].increment = matchesCount;
                    genreBonusObj[match].sum = genreBonusObj[match].sum + localBonus;
                }
            });
        });
    });
    console.log("genreBonusObj", genreBonusObj);
    Object.keys(genreBonusObj).forEach((matchedGenre) => {
        const matchedGenreObj = genreBonusObj[matchedGenre];

        matchedGenreObj.cards.forEach((matchedCardObj) => {
            const matchedCard = document.querySelector(`#dne-card-${matchedCardObj.id}`);
            const bonusNode = matchedCard.querySelector(".card__bonus");
            if (!!matchedCard) {
                console.log("matchedCard, bonusNode.dataset", matchedCard, bonusNode.dataset);
                if (matchedGenreObj.increment === 1) {
                    matchedCard.classList.add("genre-half-matched");
                    console.log("bonusNode.dataset.bonusOne", bonusNode.dataset.bonusOne);
                    bonusNode.textContent = `+${+bonusNode.dataset.bonusOne}`;
                } else if (matchedGenreObj.increment === 2) {
                    matchedCard.classList.remove("genre-half-matched");
                    matchedCard.classList.add("genre-matched");
                    bonusNode.textContent = `+${+bonusNode.dataset.bonusTwo}`;
                }
            }
        });

        totalBonus = totalBonus + matchedGenreObj.sum;
    });

    win77.game.player.genreBonusObj = genreBonusObj;
    win77.game.player.genreBonus = totalBonus;

    console.log("win77.game.player.genreBonus", win77.game.player.genreBonus);

    if (!win77.game.alliance && !win77.game.invasion) {


    } else if (win77.game.alliance && !win77.game.invasion) {
        // const host = win77.findPlayerObj(win77.game.alliance.host);
        // const savior = win77.findPlayerObj(win77.game.alliance.savior);
        //
        // host.genreBonusObj = genreBonusObj;
        // savior.genreBonusObj = genreBonusObj;

    } else if (!win77.game.alliance && win77.game.invasion) {

    } else if (win77.game.alliance && win77.game.invasion) {

    }


}
// взять масив карт
// найти все жанры по которым есть метч, сохранить айди их карт
// вычислить кол-во карт с одним жанром и повысить бонус на нужный процент
// найти ноды нужных карт и дать им особый клас и переписать бонус на повышенный

win77.resetGenreBonus = resetGenreBonus;

export { matchGenreBonus, getGenreBonus };
