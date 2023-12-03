import { win77 } from "../dne-cli.js";
import { getDialogOptionMarkup } from "./dialogCli.hud.js";
import { AdminSwiper } from "../structure/admin/admin.swiper.js";

const TUTORIAL_PARTS = {
    whatIsSoundCards:
`Кожна вечірка починається зі звуку. Що на заході грає, так він і розкривається.\r
Щоб скласти лайнап майбутнього Івенту, просто викладай карти звуку одну за одною у потрібному тобі порядку.\r
Кожен починає гру з 5 карт випадкових діджитал Демо, Альбомів і Вінілових платівок (для них, доречі, знадобиться спеціальний програвач).\r
Поєднуючи Звук в одному жанрі ти зможеш досягати більшого, використовуючи менше. Кожна картки зі спільним жанром у лайнапі отримує +50% до бонусу.\r
На початку свого ходу, якщо в твоїй руці не більше 5 карт, ти отримаєш 2 нові карти на руку. А після свого івенту ти можеш забрати будь-яку одну картку зі столу в свій інвентар.`,
    whatIsNpcCards:
`Два, карти NPC.\r
На Івентах ти зустрінеш безліч NPC, душевний діалог може зацікавити їх у тобі.\r
Твоя Crew - це персонажі готові тобі допомогти (їх також називають Найомнички або NPC). Вони допоможуть доставити апаратуру, поставити музику і поринуть з тобою в пригоду. Кожен має особливості та навички, що змінюють ігровий процес з цим персонажем у твоїй крю.\r
Ти маєш заздалегідь обрати собі двох персонажів, які супроводжуватимуть тебе з початку гри.`,
    whatIsClassCards:
`І нарешті, Три, карти Класів.\r
Один гравець у кожній сесії бере на себе роль оповідача, обираючи клас Гейм Майстра. Інші гравці беруть собі один клас із решти на вибір. Щоб усі грали за своїх персонажів чесно та переконливо, Гейм Майстер використовує цифровий інтерфейс гри(його називають HUD, доречі саме в ньому ти зараз і знаходишся).\r
Звіряючись із HUD, він повідомляє гравцям, що у цьому світі можливо, а що ні. А щоб встановити межі можливого для конкретного персонажа, ведучий має потужний інструмент — longline класу. Відкривши HUD в браузері свого ноутбука, Гейм Майстер може здійснити пошук в даних гри по id карти, що в кожної з них вказаний у лівому верхньому куті. Перейшовши на її сторінку і прочитавши longline карти, Гейм Майстер зможе дати конструктивний опис її механіки, з якого всім гравцям буде зрозуміло, що вона дозволяє робити, а що ні.
Наприклад, гравець із класом “DJ” може записати звук свого лайва, проте щоб запустити трансляцію цього лайву, йому необхідно буде володіти класом “Стрімер” або домовитись про допомогу з іншим гравцем з таким класом.\r`
};

const TITLES_OF_DIALOGS = [
  `Повчальна Історія`,
  `Спитай Тайлера`,
  `Є пропозиція`
];


// Цього має вистачити щоб пройти кілька раундів та відчути механіку. Після відчувай себе вільно щоб запросити у мене доступ до книги правил, вставивши в адресну строку: https://www.notion.so/RULEBOOK-e1aad00713344adf86db1ad8d4368bbb?pvs=4
//     Пам'ятай, що кожен брейнданс має свою ціну. Добре коли можеш розрахуватися грошима. Мої реквізити в твоєму Діректі.

let today = new Date();
const DIALOGS = [
`Привіт, мене звати Навіщо\r
Я допоможу тобі налаштувати гру.\r
Ти це читаєш, значить ти вже використовуєш HUD і бачиш правила. Вітаю!\r
Рекомендую використовувати ПК з великим монітором, якщо раптом користуєшся версією ${(today.getFullYear() + "").replace("20", "")}-го року. Файний звук, дека, якісні вуха та брейнданс-шолом виведуть твій експірієнс на новий рівень, проте не є обов'язковими складовими для старту гри.
Тож почнемо.\r
Мета гри: найбільший банкрол після 10 душі. Для твоєї зручності вони знаходяться поруч у верхньому правому кутку твого HUD.\r
Як її досягти? Влаштовуй івенти. Один івент – 2 душі + весь кеш що зможеш заробити.\r
Май на увазі, суперник може провести власний івент в твій хід, якщо викладе лайнап, який буде кращим.\r
В такому випадку він отримає твою винагороду, а ти будеш вимушений бездіяти у власний хід та втратиш 2 душі.\r
Щоб цьому запобігти, притримуй найкращі карти або в останній момент поклич друга на допомогу.\r
Гравець що погодиться допомогти, може докласти своїх карт в твій лайнап, перевершивши лайнап загарбника.\r
В такому разі кожен з вас отримає по 1 душі та частину прибутку, а загарбник втратить 2 душі.\r
Якщо гору все одно візьме загарбник, ви втратите по 1 душі.\r
Кожен гравець здатен тримати максимум 5 карт у ріці, тож використовуй свої карти з розумом.\r
От і все. Успіхів!\r
Добре, жартую\r
Можу розповісти більше про карти звуку. Просто продовжуй гортати.
${TUTORIAL_PARTS.whatIsSoundCards}\r
Збережи в зручному для тебе місці ці <a href="libs/DNE_RULES_0.6.pdf" download style="text-decoration: underline">правила гри у PDF</a>. Відчувай себе вільно вивчати їх під час гри та неодмінно звертайся коли знадобиться освіжити пам'ять.`,

`Привіт, Тайлер слухає`,

`Привіт, буду радий знайтись. Є пропозиція.`,

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

const ID_KEYS = {
    monsterIntro: 0
}

const INTERACTIVE_DIALOGS = [
    {
        starter: "Бачив у вас хлопця з тату черепа на всю голову. Як його імя?",
        next: "Монстр. Доречі щойно прийшов на спаринг. Покликати?",
        nextOptions: [
            "Ні, дякую. Я сам зараз заїду.",
            "Так, скажи що це стосовно гри."
        ]
    },
    {
        starter: "Ні, дякую. Я сам зараз заїду.",
        next: "Чудово, до зустрічі"
    },
    {
        starter: "Так, скажи що це стосовно гри.",
        next: "Каже зараз зайнятий. Набере тебе за можливості."
    },
    {
        starter: "Що ти таке?",
        next: "Я розумна машина розроблена щоб допомогти тобі опанувати гру.",
        nextOptions: [
            "Дякую за пояснення!",
            `Приємно познайомитись, Навіщо! Клич мене ${win77.game.player.id}`
        ]
    },
    {
        starter: `Приємно познайомитись, Навіщо! Клич мене ${win77.game.player.id}`,
        next: `Радий вітати знову, ${win77.game.player.id}! Відчувай себе вільно щоб звертатись до мене в будь-який момент гри.`,
        nextOptions: [
            "Знову? Ми вже зустрічались?"
        ]
    },
    {
        starter: "Давай, коли хочеш зустрітись?",
        next: "Зараз, я за тобою залечу."
    }
];

const initInteractiveDialog = (option) => {
    const dialog = INTERACTIVE_DIALOGS.find((dialog) => dialog.starter === option);
    const activeChat = document.querySelector(".js-vertical-feed");
    const newMessage = document.createElement("div");
    newMessage.innerHTML = getMessageMarkup(dialog.next);
    activeChat.appendChild(newMessage);

    const dialogVertical = document.querySelector(".dialog.--vertical");
    const currentOptionNodeArr = dialogVertical.querySelectorAll(".dialog__answer.--option");
    currentOptionNodeArr.forEach((currentOptionNode) => currentOptionNode.remove());

    if (dialog.nextOptions) {
        const newOptions = document.createElement("div");
        newOptions.innerHTML = dialog.nextOptions.map((option) => getDialogOptionMarkup(option)).join("");
        dialogVertical.appendChild(newOptions);

        const optionNodeArr = newOptions.querySelectorAll(".dialog__answer.--option");
        optionNodeArr.forEach((optionNode) => {
            optionNode.addEventListener("click", () => {
                chooseOption(optionNode.textContent);
            });
        });
    }
}

const chooseOption = (option, mod = "") => {
    const activeChat = document.querySelector(".js-vertical-feed");
    const newMessage = document.createElement("div");
    newMessage.innerHTML = getMessageMarkup(option, mod);
    activeChat.appendChild(newMessage);

    if (INTERACTIVE_DIALOGS.find((dialog) => dialog.starter === option)) {
        setTimeout(() => {
            initInteractiveDialog(option);
        }, 5000);
    }
}

const getMessageMarkup = (message, mod = "") => `
<div class="message ${mod}">
    <div class="message__body">
        <div>${message.line ? message.line : message}</div>
    </div>
    ${ message.credits ? `<div class="message__footer"><span class="message__authoring">${message.credits}</span><span class="message__time"></span></div>` : ``}
</div>
`;

AdminSwiper.init();

// const DEFAULT_TIP = `
// Прототип інтерфейсу взаємодії між гравцем та навколишнім світом натхненний Cyberpunk 2077.
// The goal is: showcasing a start of a UI kit. If you've played the game, you' might be able to pick-up some similarities with the in-game menus.
// `;
//
// const getAdviceScreenMarkup = () => `
// <div class="advice-screen">
//     <article class="advice --bottom-left">
//         <p>(i)Кращий спосіб заробити на Івенті - запрошувати великі компанії цікавих гостей</p>
//     </article>
// </div>
// `;

// const initTip = (text = DEFAULT_TIP) => {
//
//
//     const tipMarkup = (text) => `
// <div class="pad">
//     <div class="pad__body">
//         <h4 class="text-heading3 undefined">What's this?</h4>
//         <p class="text-paragraph1 undefined">${text}</p>
//     </div>
// </div>
// `;
//
//     const tipsParent = document.querySelector(".app-b");
//     const showTip = (e) => {
//         console.log(`You ask about advice for..`, e.target, e.target.dataset.adviceId);
//         if (e.target.dataset.adviceId) {
//             const askedAdvice = ADVICES.find((advice) => advice.id === e.target.dataset.adviceId);
//             console.log(`Yes, I know something about ${e.target.dataset.adviceId}. Here `, askedAdvice);
//             drawAdvice(askedAdvice);
//         } else {
//             console.log(`Advice you asking for is unavailable. So i give you random`, ADVICES[getRandomInt(ADVICES.length)]);
//         }
//         const newEl = document.createElement("div");
//         newEl.classList.add("pad");
//         newEl.innerHTML = tipMarkup(text);
//         tipsParent.appendChild(newEl);
//     }
//
//     const body = document.querySelector("body");
//     body.addEventListener("auxclick", showTip);
// }
//
// initTip();

export { DIALOGS, TITLES_OF_DIALOGS, getMessageMarkup, initInteractiveDialog, chooseOption };
