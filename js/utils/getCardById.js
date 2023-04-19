import { DNELootArr } from "../cards/data.cards.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// const getCardById = (id) => {
//     const card = DNELootArr.find((lootCard) => lootCard.id === id);
//     if (card) {
//         // console.log(`Card with id ${id} finded successfully`);
//         return card;
//     } else {
//         console.log(`Card with id ${id} does not exist`);
//     }
// }

const getCardById = (id, set) => {
    const card = Array.from(set).find((lootCard) => lootCard.id === id);
    if (card) {
        // console.log(`Card with id ${id} finded successfully`);
        return card;
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}

const moveCardById = (id, from, to) => {
    const card = Array.from(from).find((lootCard) => lootCard.id === id);
    if (card) {
        to.add(card);
        from.delete(card);
        console.log(`Card with id ${id} successfully moved`);
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}

export { getRandomInt, getCardById, moveCardById };
