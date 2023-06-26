import {getRandomInt} from "./getCardById.js";

const parseCost = (lootItem) => {
    const separator = "/";
    const costString = lootItem.cost;
    // console.log(costString, `${costString}`.includes(separator));
    const rentAvailable = `${costString}`.includes(separator);
    const costObj = {
        rentAvailable: rentAvailable,
        buy: 0,
        rent: 0,
        sellAvailable: true
    };

    if (rentAvailable) {
        const splitCost = costString.split(separator);
        const buy = splitCost[0];
        const rent = splitCost[1];
        console.log(`${buy} - ${rent}`);

        const isCostShorted = `${buy}`.includes("K");
        // console.log("isCostShorted", isCostShorted, buy.replace("K", "000"));
        if (isCostShorted) {
            costObj.buy = +buy.replace("K", "000");
        } else {
            costObj.buy = buy;
        }

        const isRentShorted = `${rent}`.includes("K");
        console.log("isRentShorted", isRentShorted, rent.replace("K", "000"));
        if (isCostShorted) {
            costObj.rent = +rent.replace("K", "000");
        } else {
            costObj.rent = rent;
        }
    } else {
        const cost = costString;
        const isCostShorted = `${cost}`.includes("K");
        if (isCostShorted) {
            costObj.buy = +cost.replace("K", "000");
        } else {
            costObj.buy = +cost;
        }
    }

    if (costString === "NYP") {
        costObj.buy = getRandomInt(4200);
    }

    lootItem.costObj = costObj;
    console.log(lootItem.cost, lootItem.costObj, `Item loaded successfully`);

    return lootItem;
};

export { parseCost };
