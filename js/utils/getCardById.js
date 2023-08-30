import { DNECards } from "../cards/data.cards.js";
import { CARD_TYPES } from "../cards/const.cards.js";
import { win77 } from "../dne-cli.js";
import { initInventory } from "../hud/inventory.hud.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getCardById = (id, set) => {
    const card = Array.from(set).find((lootCard) => lootCard.id === id);
    if (card) {
        // console.log(`Card with id ${id} finded successfully`);
        return card;
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}

// also work for Chess
const moveCardById = (id, from, to, callback) => {
    // console.log(`Trying to move #${id} from to`, from, to);

    const card = Array.from(from).find((lootCard) => lootCard.id === id);
    if (card) {
        to.add(card);
        from.delete(card);
        // console.log(`Card with id ${id} successfully moved`);
    } else {
        console.log(`Card with id ${id} does not exist`);
    }

    if (callback) {
        callback(id, from, to);
    }

    return card;
}

const registerRent = (id) => {
    return win77.game.player.cardsInRentIdSet.add(id);
}

const moveCardBackAfterRent = (id) => {
    const from = win77.game.player[CARD_TYPES.loot];
    const card = Array.from(from).find((lootCard) => lootCard.id === id);
    const to = win77.game.catalog[CARD_TYPES.loot];

    // console.log(`moveCardBackAfterRound was run`, id, card, win77.game.player);
    if (card) {
        to.add(card);
        from.delete(card);
        win77.game.player.cardsInRentIdSet.delete(card.id);
        initInventory();
        console.log(`Card with id ${id} successfully moved back after rent`, from, to);
    } else {
        console.log(`Something wrong with moveCardBackAfterRound`);
    }
}

const grabCost = (cost, from, to) => {
    from = from - cost;
    console.log(from);
    to = to + cost;
    console.log(to);
    console.log(cost, from, to);

}

const getRandomId = (collection) => {
    const idsArr = [...collection].map((obj) => obj.id);
    return idsArr[getRandomInt(idsArr.length)];
};

export { getRandomInt, getCardById, moveCardById, moveCardBackAfterRent, grabCost, registerRent, getRandomId };
