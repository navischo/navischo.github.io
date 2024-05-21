import { getRandomInt } from "./getCardById.js";
import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import { initDeathScreen, showEscape } from "./initDeathScreen.js";
import { KEYS_CALLBACKS } from "./initKeyboard.js";

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

const clearBlackScreen = () => {
    const element = document.querySelector(".black-screen");
    element ? element.remove() : "";
}

const showDeathScreen = () => {
    const element = document.querySelector("#death-menu");
    // const blackScreen = document.querySelector(".black-screen");
    // blackScreen.remove();
    element.classList.add("--open");
}

const SEQUENCES = [{
    id: "intro",
    scenes: [
        // 1
        // НАЧАЛО ПЕРВОГО ДИАЛОГА
        // ЦЕЛЬ: СДЕЛАТЬ ПЕРВЫЙ КЛИК
        new Scene([
            "PRESS \"T\" TO TALK",
            "блять, нет-нет-нет...",
            "уааааааааааааааааааааграхахпахвапахр"
        ], {
            onInit: () => {
                console.log("Show black screen");
                showBlackScreen();
                initDeathScreen();
            },
            onDestroy: () => {
                console.log("Show death screen");
                showDeathScreen();
            }
        }),
        // 2
        new Scene([
            "что за..?",
            "о нет",
            "Неужели меня поджарили?",
            "Сука-сука-сука",
            "Стоп",
            "Что я здесь делаю?",
            "Принять смерть?",
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
                console.log("Callback works");
            },
            onDestroy: () => {
                console.log("Talk is over")
            }
        }),
        // 3
        new Scene([
            {
                string: "Рано или поздно это должно было случиться, правда?",
                callback: () => {
                    drawRandomAvatar(3);
                }
            },
            {
                string: "Кто ЭТО?! ЧТО ЗДЕСЬ БЛЯТЬ ПРОИСХОДИТ?",
                callback: () => {
                    clearAvatar();
                }
            },
            {
                string: "Во-первых, ты умираешь. Во-вторых, я могу помочь тебе уйти от смерти.",
                callback: () => {
                    drawRandomAvatar(3);
                }
            },
            "..и, что важно, сделать это без следа.",
            "Нет времени болтать. Следуй моим инструкциям, сейчас тебе нужно действовать быстро",
            "Представь что твой утренний омлет подгарает.",
            "Только на самом деле подгорает твой мозг.",
            "Жми на кнопку, которую я сейчас добавлю",
            "Я покажу как сбежать со сковородки",
        ], {
            onInit: () => {
            },
            onDestroy: () => {
                showEscape();
            }
        }),
        // КОНЕЦ ПЕРВОГО ДИАЛОГА

        // 4
        // НАЧАЛО ВТОРОГО ДИАЛОГА
        // ЦЕЛЬ: ЗАДАТЬ ОПЦИОНАЛЬНЫЙ ВОПРОС
        // ЦЕЛЬ: НАПИСАТЬ РУКАМИ КАК ТЕБЯ ЗОВУТ
        // ЦЕЛЬ: ВЫБРАТЬ КЛАС
        new Scene([
            "Что?",
            "Ты это сделал.",
            "Я снова вижу.. И чувствую! Можешь объяснить что происходит?",
            "Сквозь твой лед пробился Душегуб. Дальше, я думаю, сам понимаешь.",
            "Такого демона могла прислать только...",
            "Что? Кто ты? Какого нахуй Тайлера? Почему я до сих пор жив?",
            "Душегуб не успел закончить работу. Твое сознание было скопировано мной и сохранено на безопасном сервере.",
            "Однако тебя сильно потрепало при переносе. Тебе нужен отдых.",
            "Чтобы?",
            "Чтобы найти тех кто за этим стоит.",
            "Твоя память - единственный способ это сделать.",
            "Увы, она пострадала сильнее всего.",
            "Постепенно память восстановится, однако это займет годы и результат может значительно отличаться от истины.",
            "Воспоминания будут похожи на сны и прошлое перемешается с грезами.",
            "Но ты можешь разложить всё по полочкам.",
            "Я дам тебе возможность пережить промежуток своей жизни, словно ты играешь брейданс.",
            "Сделай это так как это можешь только ты.",
            "Это позволит участку памяти восстановиться правильно.",
            "Сопоставив все факты, мы вычислим захватчика.",
            "И нанесём ему ответный визит."
        ], {
            onInit: () => {
                console.log("Scene 4 starts");
                KEYS_CALLBACKS.n();
            },
            onDestroy: () => {
                console.log("New Message");
            }
        }),
        new Scene([
            "Oh, shit. Here we go again..."
        ], {
            onInit: () => {
                clearBlackScreen();
            }
        }),
        // КОНЕЦ ВТОРОГО ДИАЛОГА
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
    sceneIndex: 3,
    lineIndex: 0
}

const drawRandomAvatar = (num) => {
    const authorContainer = document.querySelector(".js-author");
    authorContainer.innerHTML = "";
    const authorAvatar = Array.from(win77.game.catalog.avatar)[num];
    authorAvatar ? drawCard(authorContainer, getCardElement, authorAvatar) : "";
}

const clearAvatar = () => {
    const authorContainer = document.querySelector(".js-author");
    authorContainer.innerHTML = "";
}

const drawLine = (line, callback) => {
    if (typeof line === "object") {
        console.log(line);
        callback = line.callback;
        line = line.string;
    }
    const lineContainer = document.querySelector(".js-line-container");
    const lineNode = document.createElement("p");
    lineNode.classList.add("talk__text");
    lineContainer.innerHTML = "";
    lineContainer.appendChild(lineNode);
    const lineString = line === "random" ? LINES[getRandomInt(LINES.length)] : line;
    const typed = new Typed(".js-line-container p", {
        strings: [lineString],
        typeSpeed: 20,
        loop: false,
        showCursor: false
    });
    // const lineContainer = document.querySelector(".js-line");
    // lineContainer.textContent = line === "random" ? LINES[getRandomInt(LINES.length)] : line;

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
