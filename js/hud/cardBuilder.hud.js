import { DNELootCard } from "../cards/interface.cards.js";
import { isSetHasId } from "../utils/isSetHasId.js";
import { updBalanceNode } from "./balance.hud.js";
import { setSoundStat } from "../utils/setSoundStat.js";
import { parseCost } from "../utils/parseCost.js";
import { initInventory } from "./inventory.hud.js";
import { STRINGS } from "../cards/const.cards.js";

const SOUND_TYPE = {
    demo: {
        id: "demo",
        string: "Демо",
        longline: STRINGS.DEMO_LONGLINE_SHORT
    },
    album: {
        id: "album",
        string: "Альбом",
        longline: STRINGS.ALBUM_LONGLINE
    },
    vinyl: {
        id: "vinyl",
        string: "Вініл",
        longline: STRINGS.VINYL_LONGLINE
    }
};

const initCardBuilder = () => {
    const popupContainer = document.querySelector("#card-builder-popup");
    const form = document.querySelector("#card-builder-form");
    const inputArr = form.querySelectorAll("input");
    const radioBtnArr = form.querySelectorAll(".js-builder-radio input");
    const setupBtn = document.querySelector(".js-build-card");

    const outputObj = {
        name: popupContainer.querySelector(".js-output-name"),
        type: popupContainer.querySelector(".js-output-type"),
        minutes: popupContainer.querySelector(".js-output-minutes"),
        tagsString: popupContainer.querySelector(".js-output-tags"),
        img: popupContainer.querySelector(".js-output-img")
    };

    const builderData = {
        name: form.querySelector("input[name='name']").value,
        type: SOUND_TYPE.demo.id,
        minutes: form.querySelector("input[name='minutes']").value,
        tagsString: form.querySelector("input[name='tagsString']").value,
        img: form.querySelector("input[name='img']").value
    };

    const logData = (e) => {
        const targetName = e.target.name;
        builderData[targetName] = e.target.value;

        if (targetName === "type") {
            const typeObj = SOUND_TYPE[builderData[targetName]];
            popupContainer.querySelector(".js-output-type-id").textContent = typeObj.id;
            outputObj[targetName].textContent = typeObj.string;
        } else if (targetName === "img") {
            outputObj[targetName].src = builderData[targetName];
        } else {
            outputObj[targetName].textContent = builderData[targetName];
        }

        console.log("logData: targetName, e.target.value, builderData[targetName], outputObj[targetName]", targetName, e.target.value, builderData[targetName], outputObj[targetName]);
    }

    inputArr.forEach((input) => {
        input.addEventListener("keyup", logData);
    });

    radioBtnArr.forEach((radioBtn) => {
        radioBtn.addEventListener("click", logData);
    });

    setupBtn.addEventListener("click", () => {
        buildCard(builderData);
    });
}

const parseNameToId = (name, type) => `${SOUND_TYPE[type].id}-${name.replace(" ", "-").toLowerCase()}`;

const buildCard = (builderData) => {
    const allCards = win77.game.catalog.all;
    const cardData = setSoundStat(parseCost(new DNELootCard(
        parseNameToId(builderData.name, builderData.type),
        builderData.name,
        SOUND_TYPE[builderData.type].longline,
        builderData.img,
        1, // getRandomInt(win77.game.player.lvl)
        0, // getRandomInt(1000)
        `${SOUND_TYPE[builderData.type].string}, ${builderData.minutes}m ${builderData.tagsString}`,
        SOUND_TYPE[builderData.type].longline,
        "",
        true,
        "sound")));
    console.log("cardData", cardData);
    // console.log("isSetHasId(allCards, cardData.id)", isSetHasId(allCards, cardData.id));
    if (!isSetHasId(allCards, cardData.id) && !isSetHasId(win77.game.catalog._custom, cardData.id)) {
        win77.getCostFromPlayer(500);
        updBalanceNode();
        win77.game.catalog._custom.add(cardData);
        // moveCardById(cardData.id, allCards, win77.game.player[cardData.type]);
        localStorage.setItem(`custom-${cardData.id}`, JSON.stringify(cardData));
        win77.game.player.sound.add(cardData);
        initInventory();
    } else {
        console.log(!isSetHasId(allCards, cardData.id), `Item with ${cardData.id} already exist`);
    }
}

export { initCardBuilder };
