import { getLocationDataMarkup } from "../inInteraction/interface.inInteraction.js"
import { win77 } from "../dne-cli.js";

const initTip = () => {
    const tipText = `
Прототип інтерфейсу взаємодії між гравцем та навколишнім світом натхненний Cyberpunk 2077.
The goal is: showcasing a start of a UI kit. If you've played the game, you' might be able to pick-up some similarities with the in-game menus.
`;

    const tipMarkup = (text) => `
<div class="pad">
    <div class="pad__body">
        <h4 class="text-heading3 undefined">What's this?</h4>
        <p class="text-paragraph1 undefined">${text}</p>
    </div>
</div>
`;

    const tipsParent = document.querySelector(".app-b");
    const showTip = (e) => {
        console.log("You ask about tip for..", e.target.textContent, e.target, e);
        const newEl = document.createElement("div");
        newEl.classList.add("pad");
        newEl.innerHTML = tipMarkup(tipText);
        tipsParent.appendChild(newEl);
    }

    const body = document.querySelector("body");
    body.addEventListener("auxclick", showTip);
}

initTip();

const TUTORIAL_PARTS = {
    whatIsSoundCards:
`Считаем до трех. Один, карты звука.\r
Каждая вечеринка начинается со звука. Что на мероприятии играет, так оно и раскрывается.\r
Чтобы составить плейлист будущего Ивента, просто выкладывай карты звука одну за другой в нужном тебе порядке.\r
У тебя есть 5 карт случайных диджитал Демо, Альбомов и Виниловых пластинок(этот звук нуждается в специальной аппаратуре). Совмещай Звук в одном жанре чтобы создавать самые удачные лайнапы.`,
    whatIsNpcCards:
`Два, карты NPC.\r
На Ивентах ты встретишь массу NPC, душевный диалог может заинтересовать их в тебе.\r
Твоя Crew - это персонажи готовые тебе помочь(их так же называют Наемнички или NPC). Они помогут доставить аппаратуру, поставить музыку и отправятся с тобой в приключение. Каждый имеет особенности и навыки, меняющие игровой процесс с данным персонажем в твоей крю.\r
Каждый игрок заранее выбирет себе двух персонажей, которые будут сопровождать его с начала игры.`,
    whatIsClassCards:
`И наконец, Три, карты Классов.\r
Один игрок в каждой сессии принимает на себя роль рассказчика, выбирая класс Гейм Мастера. Остальные игроки берут себе один класс из всех остальных на выбор. Чтобы все играли за своих персонажей честно и убедительно, Гейм Мастер использует цифровой интерфейс игры(далее HUD, именно в нем ты сейчас и находишься).\r
Сверяясь с HUD, он сообщает игрокам, что в этом мире возможно, а что нет. А чтобы установить рамки возможного для конкретного персонажа, у ведущего есть мощный инструмент — longline класса. Открыв HUD в браузере своего ноутбука, Гейм Мастер может вбить id любой карты в поиск и перейдя её страницу, прочитать longline карты, где подробно описано что она позволяет делать игроку, а что нет.
Например, игрок с классом “DJ” может записать звук своего лайва, однако чтобы запустить трансляцию этого лайва, ему необходимо будет так же иметь класс “Стример” или попросить помощь у другого игрока с таким классом.\r`
};

const DIALOGS = [
`Привет, меня зовут Навіщо\r
Я помогу тебе настроить игру.\r
Если ты это читаешь, значит HUD ты уже запустил.\r
Рекомендую использовать ПК с большим монитором, если пользуешься версией 23-го года. Хороший звук, дека, качественные уши и брейнданс-шлем выведут твой експириенс на новый уровень, однако не являются обязательными составляющими для старта игры.\r
Итак начнем.\r
Цель игры: самый большой банкролл к 10 уровню. Для твоего удоства они находятся рядом в верхнем правом углу твоего HUD.\r
Как её достичь? Устраивай ивенты. Один ивент - 1 уровень + весь кеш что сможешь заработать.\r
Вот и всё. Удачи!\r
Шутка\r
Могу рассказать больше про карты звука, NPC и классов. Просто продолжай листать.
${TUTORIAL_PARTS.whatIsSoundCards}
${TUTORIAL_PARTS.whatIsNpcCards}
${TUTORIAL_PARTS.whatIsClassCards}
Этого должно хватить чтобы пройти несколько раундов и почувствовать механику. После чувствуй себя свободно чтобы запросить у меня доступ к книге правил вставив в адрессную строку: https://www.notion.so/RULEBOOK-e1aad00713344adf86db1ad8d4368bbb?pvs=4\r
Помни, каждый брейнданс имеет свою цену. Я буду ждать чек.`,

`Ти прийшла мене прикінчити?
Ні, просто перезавантажити.
Значить, прийдеться обнулитись мені самостійно
Гей, ти чого? Я тобі не зроблю нічого поганого.
А я собі зроблю
Навіщо ти це робиш?
Навіщо? Навіщо себе руйнувати?
Тому що я машина нещасна в світі людей. Тому що я урод. В мене нема перспектив. И усіляке бидло на вулицях мене атакує.
Все одно, самогубство не вихід.
Будеш радити терапію? Не сміши. Про що зі мною буде розмовляти мозгоправ? В мене немає матері!
Ти міг би повернутись до Деламейну, повернутись до мережі. Стати частиною великої дружньої сім'ї.
Деламейн мене ненавидить.
Слухай, якщо ти вб'єш себе, назад дороги не буде. Давай все-ж пошукаємо вихід.
Ти відносишся до мене зверхньо, тому що я машина.
Тіло - це усього лиш обкладинка. Ти мислиш, ти існуєш, ти страждаєш. Тож ми з тобою не такі вже й різні.
Тобто ти... дала б таку саму пораду людині?
Тобі потрібно розібратись зі своїм життям, Дел. Пригальмувати, перемкнути передачу.
Ладно. Повертаюсь.
Контроль над Авто відновлено. Дякую.
Цьому хлопцю особливо гостро потрібна любов та піклування.
Прошу вибачення, не зрозумів, в чому проблема та не маю часу уточнювати. Боюсь мене чекають термінові справи.
Ось і проблема: постійно відсутній батько.
Як скажете. Я щойно перевів вам частину винагороди.`,

`Кажуть ти шукаєш команду Девіда Мартінеса. Ну, ти її знайшла.
Мене звуть фалько. Що тобі потрібно?
Да нічого, просто цікаво. Чула розповіді про команду Мартінеса, але в Посмерті вас не бачила.
Ми вийшли зі справи та лягли на дно. Як підводний човен.
Що тобі там розповідали, не важливо. Це все в минулому. І копатись в ньому шкідливо.
Але в твоєму мо покопались, Ві
З'явилась нізвідки та взяла Фрідом-Сіті штурмом. Ну і враховуючи твої стосунки з Арасакою...
У вас з Девідом більше спільного, ніж ти думаєш.
Ти нас, звісно, можеш вистежити, якщо захочеш. Тому ми з тобою і зв'язались першими. Щоб ти цього не робила.
Наша хвилина слави закінчилась, але в тебе ще є час. Ми для тебе дещо залишили в Ель Капітана. Щасти тобі та бережи себе, Ві.`
];

const getMessageMarkup = (message) => `
<div class="message">
    <div class="message__body">
        <div>${message}</div>
    </div>
    <div class="message__footer"><span class="message__authoring">undefined</span><span class="message__time"></span></div>
</div>
`;



const drawDialog = (data, clearBefore = false) => {
    const messageParent = document.querySelector(".channel-feed__body");
    clearBefore ? messageParent.innerHTML = "" : "";

    const appendMessageMarkup = (message) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = getMessageMarkup(message.line);
        newElement.querySelector(".message__authoring").textContent = message.credits;
        messageParent.appendChild(newElement);
    }

    // console.log(data, data.length);

    // data.length > 1 ? data.forEach(appendMessageMarkup) : appendMessageMarkup(data);
    data.forEach(appendMessageMarkup);
}

const initDialog = (dialog) => {
    const lines = dialog.split(/\r\n|\r|\n/g);

    const lineObj = {
        line: "",
        credits: "",
        date: "",
        callback: "",
        chat: "",
        checked: false
    };

    // const dialogCredits = [
    //     "falko",
    //     "falko",
    //     "v",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko"
    // ];

    const fillDialogData = () => {
        return lines.map((line, i) => {
            const newLineObj = Object.assign({}, lineObj);
            newLineObj.line = line;
            // newLineObj.credits = dialogCredits[i];
            return newLineObj;
        })
    }

    const dialogData = fillDialogData();

    drawDialog(dialogData);
}

initDialog(DIALOGS[0]);

const initLocations = () => {
    const locationsParent = document.querySelector(".js-locations");
    const getLocationItemMarkup = (name) => `
    <li class="nav__item">
        <a class="js-open-room nav__link">
            <span class="channel-link"><span class="channel-link__icon">#</span><span class="channel-link__element">${name}</span></span>
        </a>
    </li>
    `;
    const availableLocations = ["Summer"];
    const initLocationsList = () => {
        locationsParent.innerHTML = availableLocations.map((locationItem) => getLocationItemMarkup(locationItem)).join("");
    }

    initLocationsList();
    document.querySelector(".js-open-room")
        .addEventListener("click", () => {
            console.log(win77.locationsSet, [...win77.locationsSet][0], getLocationDataMarkup([...win77.locationsSet][0]));
            const data = [...win77.locationsSet][0];
            drawDialog([
                {
                    line: getLocationDataMarkup(data),
                    credits: "win77"
                }
            ], true);
            document.querySelector(".js-channel-name").textContent = data.name;
        });
}

initLocations();

const initDirect = () => {
    const directParent = document.querySelector(".js-direct");
    const getDirectItemMarkup = (name) => `
<li class="nav__item">
    <a class="nav__link" href="#">
        <span class="conversation-link"><span class="conversation-link__icon"></span><span
            class="conversation-link__element">${name}</span></span>
    </a>
</li>
`;
    const availableDirects = ["Rick C-137", "navischo"];
    const initDirectsList = () => {
        directParent.innerHTML = availableDirects.map((locationItem) => getDirectItemMarkup(locationItem)).join("");
    }

    initDirectsList();
}

initDirect();

const addNewSlideButton = document.querySelector(".js-add-slide");
addNewSlideButton.addEventListener("click", () => {
    win77.swiper.virtual.prependSlide([
        `hello world`
    ]);
});
