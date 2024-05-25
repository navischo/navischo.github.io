import { getRandomInt } from "./getCardById.js";
import { win77 } from "../dne-cli.js";
import { drawCard } from "../cards/dom.cards.js";
import { getCardElement } from "../cards/template.cards.js";
import { initDeathScreen, showEscape } from "./initDeathScreen.js";
import { KEYS_CALLBACKS } from "./initKeyboard.js";
import { appendAvatarCards } from "./appendAvatarCards.js";
import { getPortalElement } from "../theday/init.theday.js";
import { updExecutive } from "../hud/table.hud.js";

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
    const blackScreen = document.querySelector(".black-screen");
    if (!blackScreen) {
        const element = document.createElement("div");
        const body = document.querySelector("body");
        element.classList.add("black-screen");
        body.appendChild(element);
    }
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

const OPTIONS_DATA = [
    {
        option: "Кто ты?",
        answer: "Этот вопрос не имеет смысла пока твоя память в зубах Душегуба."
    },
    {
        option: "Зачем я тебе?",
        answer: "Скажу просто. У нас общий враг. И он могущественный."
    },
    {
        option: "Спаси моё тело!",
        answer: "Слишком поздно."
    },
]

const showOptionsBtns = () => {
    const element = document.querySelector(".js-options-wrap");
    OPTIONS_DATA.forEach((data) => {
        const optionBtn = document.createElement("button");
        optionBtn.classList.add("talk__optionsItem");
        optionBtn.classList.add("game-menu__list-item");
        optionBtn.textContent = data.option;
        optionBtn.addEventListener("click", () => {
            drawLine(data.answer);
            element.innerHTML = "";
        });
        element.appendChild(optionBtn);
    });

    element.classList.add("--visible");
}

const clearOptionsBtns = () => {
    const parent = document.querySelector(".js-options-wrap");
    parent.innerHTML = "";
}

const showAnswerInput = () => {
    const element = document.querySelector(".js-answer-wrap");
    const answerInput = document.querySelector(".js-answer-input");
    const answerBtn = document.querySelector(".js-answer-submit");
    element.classList.add("--visible");

    answerBtn.addEventListener("click", () => {
        hideAnswerInput();
        win77.game.player.id = `${answerInput.value}`;
        drawLine(`Зови меня ${win77.game.player.id}`);
        updExecutive();
    });
}

const hideAnswerInput = () => {
    const element = document.querySelector(".js-answer-wrap");
    element.classList.remove("--visible");
}

const showAvatarSelect = () => {
    const parent = document.querySelector(".js-talk-select");
    parent.innerHTML = `
        <div class="swiper avatar-select">
            <div id="avatar-select" class="swiper-wrapper"></div>
        </div>
    `;
    appendAvatarCards();
    win77.swiperAvatar = new Swiper(".swiper.avatar-select", {
        effect: "cards",
        grabCursor: true,
    });
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
            "Я поджарился?",
            "Сука-сука-сука",
            "Стоп",
            "Что я здесь делаю?",
            "Принять смерть?",
            "Что..",
            "Неужели?",
            "Я на экране смерти...",
            "Он существует?",
            "Нет-нет-нет",
            "Это не происходит",
            "Экрана смерти не существует",
            "Это всё не реально",
            "Разве что...",
            "Я стал энграммой.",
            "Пока мой мозг окончательно не превратился в кисель.",
            "Что он явно сделает в ближайшие секунды.",
            "Вот только здесь это считай вечность..",
            "Выходит я и есть...",
            "Блять!",
            "Нееет",
            "Вечность на экране смерти.",
            "Сука..",
            "Ебанная энграмма",
            "Нахуй это"
            // callback: прислать сообщение в нокиа
        ], {
            onInit: () => {
                console.log("Callback works");
                showBlackScreen();
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
                    // drawRandomAvatar(3);
                }
            },
            {
                string: "Кто ЭТО?! ЧТО ЗДЕСЬ БЛЯТЬ ПРОИСХОДИТ?",
                callback: () => {
                    // clearAvatar();
                }
            },
            {
                string: "Во-первых, ты умираешь. Во-вторых, я могу помочь тебе уйти от смерти.",
                callback: () => {
                    // drawRandomAvatar(3);
                }
            },
            "..и, что важно, сделать это без следа.",
            {
                string: "Погоди минутку...",
                callback: () => {
                    // вставить три опциональных строчки диалога
                    showOptionsBtns();
                }
            },
            {
                string: "Нет времени болтать. Следуй моим инструкциям, сейчас тебе нужно действовать быстро.",
                callback: () => {
                    clearOptionsBtns();
                }
            },
            "Представь что твой утренний омлет подгарает.",
            "Только на самом деле подгорает твой мозг.",
            "Прыгай в портал, который я сейчас создам.",
            "И продолжай говорить. Не отключайся.",
            "Я покажу как сбежать со сковородки.",
            "Я ничего не вижу.. и не чувствую! Можешь объяснить что происходит?",
            "Сквозь твой лед пробился Душегуб. Дальше, я думаю, сам понимаешь.",
            "Ты сейчас в том самом моменте между жизнью и смертью.",
            "Без аватар ты можешь воспринимать только текст.",
            "Так что читай внимательно.",
            "Такого демона могла прислать только...",
            "Почему я до сих пор жив?",
            "Душегуб не успел закончить работу.",
            "Мой антивирус замедлил его и выиграл время для этого разговора.",
            "Теперь к делу.",
            "Я могу скопировать то что от тебя осталось и укрыть на безопасном сервере.",
            "Чтобы?",
            "Чтобы найти тех кто за этим стоит.",
            "Твоя память - единственный способ это сделать.",
            "Увы, её уже сильно потрепало.",
            "Постепенно она восстановится, однако это займет годы и результат может значительно отличаться от истины.",
            "Воспоминания будут похожи на сны и прошлое перемешается с грезами.",
            "Но ты ещё можешь успеть разложить всё по полочкам.",
            "Я дам тебе возможность переживать отрезки своей жизни, словно ты играешь брейданс.",
            "Сделай это так как это можешь только ты.",
            "Это позволит участку памяти восстановиться правильно.",
            "Сопоставив все факты, мы вычислим захватчика.",
            "И нанесём ему ответный визит.",
            "Ты этого хочешь.",
            "Я этого хочу.",
            "Ситуация вин-вин.",
            "Т.е. ты достигаешь своей цели и делаешь это моими мозгами?",
            {
                string: "Выбор за тобой. Никто не запрещает тебе остаться.",
                callback: () => {
                    // вставить карту портала getPortalElement
                    drawPortalCard();
                }
            },
            "Oh, shit. Here we go again..."

        ], {
            onInit: () => {
                console.log("Scene 4 starts");
                showBlackScreen();
            },
            onDestroy: () => {
                console.log("New Message");
            }
        }),
        new Scene([
            "У тебя получилось!",
            "Как себя чувствуешь?",
            "Я знаю..",
            "Я нихуя не знаю!",
            "Это было ожидаемо.",
            "Начни с чего-то простого.",
            {
                string: "Как тебя зовут?",
                callback: () => {
                    showAnswerInput();
                }
            },
            "Что?",
            "Окей, допустим.",
            "Просканировать твою энграмму практически невозможно.",
            "Всё намертво закодировано.",
            "И мои скрипты здесь ни при чем.",
            "Похоже с Душегубом фоном работал Кролик.",
            "Тот кто их отправил знал своё дело.",
            "Я помню своё имя.. что было сегодня.",
            "Или это было в прошлом месяце?",
            "Всё словно в блендере..",
            "Сука",
            "Я ничего не помню...",
            "Помни что так не будет вечно.",
            "Твоя память вернется.",
            "Я помогу тебе вспомнить всё.",
            "Просто продолжай говорить.",
            "Похоже твои данные так перемешались, что я даже не могу восстановить твою внешность.",
            "Тут нам остается только полагаться на твою интуицию.",
            {
                string: "Кто из них ты?",
                callback: () => {
                    // выбрать аватар
                    showAvatarSelect();
                }
            },
            "Окей, у тебя теперь есть имя и аватар.",
            "Этого достаточно чтобы сохраниться на сервере.",
            "Когда мы встретимся снова, ты будешь знать больше.",
            "Не теряйся."
        ], {
            onInit: () => {

            },
            onDestroy: () => {
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
    sceneIndex: 0,
    lineIndex: 0
}

const drawRandomAvatar = (num) => {
    const authorContainer = document.querySelector(".js-author");
    authorContainer.innerHTML = "";
    const authorAvatar = Array.from(win77.game.catalog.avatar)[num];
    authorAvatar ? drawCard(authorContainer, getCardElement, authorAvatar) : "";
}

const drawPortalCard = () => {
    const authorContainer = document.querySelector(".js-author");
    const portalElement = getPortalElement();
    portalElement.style.display = "block";
    authorContainer.innerHTML = "";
    authorContainer.appendChild(portalElement);

    portalElement.addEventListener("click", (e) => {
        const parent = document.querySelector("#death-menu");
        parent.classList.remove("--open");
        authorContainer.innerHTML = "";
        leaveTalk();
        win77.talks.sceneIndex = win77.talks.sceneIndex + 1;
        win77.startCutscene("hyrool");
        KEYS_CALLBACKS.n();
        clearBlackScreen();
    })
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
