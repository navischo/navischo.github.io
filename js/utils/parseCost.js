const parseCost = (lootItem) => {
    const separator = "/";
    const costString = lootItem.cost;
    console.log(costString, `${costString}`.includes(separator));
    const rentAvailable = `${costString}`.includes(separator);
    const constObj = {
        rentAvailable: rentAvailable,
        buy: 0,
        rent: 0
    };
    if (rentAvailable) {
        const splitCost = costString.split(separator);
        const buy = splitCost[0];
        const rent = splitCost[1];
        console.log(`${buy} - ${rent}`);

        const isCostShorted = `${buy}`.includes("K");
        console.log(isCostShorted, buy.replace("K", "000"));
        if (isCostShorted) {
            constObj.buy = +buy.replace("K", "000");
        } else {
            constObj.buy = buy;
        }

        constObj.rent = +rent;
    } else {
        constObj.buy = costString;
    }

    lootItem.costObj = constObj;
    console.log(lootItem.cost, lootItem.costObj);
};

export { parseCost };
