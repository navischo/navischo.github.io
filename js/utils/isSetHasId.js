import { win77 } from "../dne-cli.js";

const isSetHasId = (set, cardId) => {
    let isIt = false;
    let objById;
    // console.log("isSetHasId", set, cardId, win77.game.catalog.all);

    win77.game.catalog.all.forEach((cardObj) => {
        if (cardObj.id === cardId) {
            objById = cardObj;
        }
    })

    if (!objById) {
        win77.game.catalog._custom.forEach((cardObj) => {
            if (cardObj.id === cardId) {
                objById = cardObj;
            }
        })
    }

    if (set.has(objById)) {
        isIt = true;
    }

    // console.log("isSetHasId finish", isIt, objById);

    return isIt;
}

export { isSetHasId };
