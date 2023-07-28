import { dialog } from "../hud/dialog.hud.js";

const displayedCardsSelector = `[id*="dne-card-"]`;
const initOneMoreBtn = () => {
    const oneMoreBtnWrap = document.querySelector("#one-more");
    const cardsInYourHand = document.querySelectorAll(`#bottom-hand ${displayedCardsSelector}`);

    const clickHandler = () => {
        console.log(`You have less than five cards. Want more?`);
        const question = dialog.DIALOG_QUESTIONS[dialog.DIALOG_ID.oneMore];
        question.answers[question.answersId.oneMore].action();
        initOneMoreBtn();
        console.log(question, question.answers[question.answersId.oneMore].action);
    };

    if (cardsInYourHand.length < 5) {
        // console.log(`Take it.`);
        oneMoreBtnWrap.innerHTML = "";
        oneMoreBtnWrap.innerHTML = "<button>+</button>";
        oneMoreBtnWrap.querySelector("button").addEventListener("click", clickHandler);
    } else {
        // console.log(`You have enough cards now. See you later.`);
        oneMoreBtnWrap.innerHTML = "";
    }
};

export { initOneMoreBtn };
