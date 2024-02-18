import { getRandomInt } from "./getCardById.js";
import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import {callbacks} from "browser-sync/dist/logger";

class Scene {
    constructor(lines, callbacks) {
        this.lines = lines;
        this.callbacks = callbacks;
    }
}

const LINES = [
    "Навіщо ти знову повернувся? Ти знаєш, чим усе скінчиться",
    "Ця вечірка відстій, я бляха ненавиджу цих людей",
    "Я знав що рано чи пізно спогади мене наздоженуть",
    "Час прокидатись",
    "Я бачу до чого це все йде",
    "Схоже рано чи пізно це мало статись",
    "Нахуй правила!"
];

const showBlackScreen = () => {
    const element = document.createElement("div");
    const body = document.querySelector("body");
    element.classList.add("black-screen");
    body.appendChild(element);
}

const showDeathScreen = () => {
    const element = document.querySelector("#death-menu");
    const blackScreen = document.querySelector(".black-screen");
    blackScreen.remove();
    element.classList.add("--open");
}

const SEQUENCES = [{
    id: "intro",
    scenes: [
        // callback: показать черный экран
        new Scene([
        "блять, нет-нет-нет...",
        "уааааааааааааааааааааграхахпахвапахр"
        ], {
            onInit: () => {
                console.log("Show black screen")
                showBlackScreen();
            },
            onDestroy: () => {
                console.log("Show death screen")
                showDeathScreen();
            }
        }),
        // callback: показать экран смерти
        new Scene([
            "что за..?",
            "о нет",
            "Неужели меня поджарили?",
            "Сука-сука-сука",
            "Стоп",
            "Что я здесь делаю?",
            "Нужно выбрать действие",
            "Что..",
            "Неужели?",
            "Я на экране смерти?",
            "Он правда так выглядит?",
            "Нет-нет-нет",
            "Это не происходит",
            "В жизни нет экрана смерти",
            "Это всё не по-настоящему",
            "Разве что...",
            "Кто-то создал энграмму моего сознания пока мой мозг окончательно не превратился в кисель.",
            "Что он явно сделает в ближайшие доли секунд, это уж точно. Вот только здесь они покажутся вечностью..",
            "Выходит я и есть...",
            "Боже",
            "Блять!",
            "Нееет",
            "Я - энграмма!",
            "Сука..",
            "Ебанная энграмма"
            // callback: прислать сообщение в нокиа
        ], {
            onInit: () => {
                console.log("Callback works")
            },
            onDestroy: () => {
                console.log("Talk is over")
            }
        }),
        new Scene([
            "Что?"
        ], {
            onInit: () => {
                console.log("Scene 3 starts")
            }
        })
    ],
    callbacks: {
        s0l0: () => {
            // callback: показать черный экран
        },
        s1l0: () => {
            // callback: показать экран смерти
        },
        s2l0: () => {
            // callback: прислать сообщение в нокиа
        }
    }
}];



win77.talks = {
    live: false,
    pipe: [],
    sceneIndex: 0,
    lineIndex: 0
}

const drawRandomAvatar = () => {
    const authorContainer = document.querySelector(".js-author");
    authorContainer.innerHTML = "";
    const authorAvatar = Array.from(win77.game.catalog.avatar)[getRandomInt(win77.game.catalog.avatar.size)];
    authorAvatar ? drawCard(authorContainer, getCardElement, authorAvatar) : "";
}

const drawLine = (line, callback) => {
    const lineContainer = document.querySelector(".js-line");
    lineContainer.textContent = line === "random" ? LINES[getRandomInt(LINES.length)] : line;

    if (callback) {
        callback();
    }
}

const leaveTalk = (scene = false) => {
    if (win77.talks.live) {
        console.log(win77.talks, scene);
        win77.talks.live = false;
        const talkPage = document.querySelector("#talk");
        // const scene = win77.talks.pipe[win77.talks.sceneIndex];

        win77.talks.lineIndex = 0;
        talkPage.classList.remove("--open");

        if (scene) {
            if (scene.callbacks.hasOwnProperty("onDestroy")) {
                scene.callbacks.onDestroy();
            }
        }
    }
}

const openTalk = (line) => {
    console.log(win77.talks);
    const talkPage = document.querySelector("#talk");
    if (win77.talks.pipe.length > 0) {
        win77.talks.live = true;
        const scene = win77.talks.pipe[win77.talks.sceneIndex];
        if (scene.callbacks.hasOwnProperty("onInit") && win77.talks.lineIndex === 0) {
            scene.callbacks.onInit();
        }

        talkPage.classList.add("--simple");
        talkPage.classList.add("--open");

        // выбираем случайного аватара
        // avatar === "random" ? drawRandomAvatar() : "drawAvatar(avatar)";

        // выбираем фразу
        if (win77.talks.lineIndex === scene.lines.length) {
            leaveTalk(scene);
            win77.talks.sceneIndex = win77.talks.sceneIndex + 1;
            win77.talks.lineIndex = 0;

            if (win77.talks.sceneIndex === win77.talks.pipe.length) {
                leaveTalk(scene);
                win77.talks.pipe = [];
                win77.talks.sceneIndex = 0;
                win77.talks.lineIndex = 0;
            }
        } else {
            drawLine(scene.lines[win77.talks.lineIndex]);
            win77.talks.lineIndex = win77.talks.lineIndex + 1;
        }
    } else {
        talkPage.classList.remove("--open");
    }
    // повесить слушатель на переключение следущего сообщения
}

const startSequence = (id) => {
    const sequence = SEQUENCES.find((sequence) => sequence.id === id);
    sequence.scenes.forEach((scene) => {
        win77.talks.pipe.push(scene);
    });
    openTalk();
}

export { openTalk, leaveTalk, startSequence }
