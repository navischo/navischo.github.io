// import { win77 } from "../dne-cli.js";
import { COMMANDS } from "./const.cards.js";
import { drawImgLazy } from "../utils/drawImgLazy.js";
import { getDoorCardElement } from "./template.cards.js";


const controlsClickHandler = (btn) => {
    if (btn.textContent === COMMANDS.plus) {
        btn.addEventListener("click", () => {
            console.log(`You are ${COMMANDS.plus}`);
        });
    }
};

const drawCard = (cardContainer, cardData) => {
    const newCard = getDoorCardElement(cardData);

    const controls = {};
    controls.parent = newCard.querySelector(".js-card-controls");
    controls.btns = controls.parent.querySelectorAll("button");

    controls.btns.forEach(controlsClickHandler);

    if (cardData.profitOrigins || cardData.profitOrigins !== "") {
        newCard.querySelector(".card__origins").textContent = `${cardData.profitOrigins}.`;
    } else {
        newCard.querySelector(".card__origins-wrap").style.display = "none";
    }

    if (document.querySelector("body").classList.contains("lazy")) {
        drawImgLazy(newCard.querySelector(".card__preview-img"), cardData.img);
    } else {
        newCard.querySelector(".card__preview-img").src = cardData.img;
    }

    cardContainer.appendChild(newCard);
};

const drawDoorCards = (cardData, parentSelector = "#dne-page") => {
    const cardContainer = document.querySelector(parentSelector);


    cardData.forEach((DNEDoorCard) => {
            drawCard(cardContainer, DNEDoorCard);
    });
}

// win77.drawDoors = drawDoorCards;

export { drawDoorCards };
