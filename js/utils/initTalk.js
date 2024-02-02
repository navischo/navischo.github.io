import { getRandomInt } from "./getCardById.js";
import {win77} from "../dne-cli.js";
import {drawCard} from "../cards/dom.cards.js";
import {getCardElement} from "../cards/template.cards.js";

const LINES = [
    "Навіщо ти знову повернувся? Ти знаєш, чим усе скінчиться",
    "Ця вечірка відстій, я бляха ненавиджу цих людей",
    "Я знав що рано чи пізно спогади мене наздоженуть",
    "Час прокидатись",
    "Я бачу до чого це все йде",
    "Схоже рано чи пізно це мало статись",
    "Нахуй правила!"
];

const openTalk = () => {
    const talkPage = document.querySelector("#talk");
    talkPage.classList.toggle("--open");

    // выбираем случайного аватара
    const authorContainer = document.querySelector(".js-author");
    authorContainer.innerHTML = "";
    const authorAvatar = Array.from(win77.game.catalog.avatar)[getRandomInt(win77.game.catalog.avatar.size)];
    authorAvatar ? drawCard(authorContainer, getCardElement, authorAvatar) : "";
    // выбираем случайную фразу
    const lineContainer = document.querySelector(".js-line");
    lineContainer.textContent = LINES[getRandomInt(LINES.length)];
    // повесить слушатель на переключение следущего сообщения
}

export { openTalk }
