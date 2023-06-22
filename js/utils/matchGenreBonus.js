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

export { matchGenreBonus };
