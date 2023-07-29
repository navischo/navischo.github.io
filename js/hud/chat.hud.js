import { getLocationDataMarkup } from "../inInteraction/interface.inInteraction.js"
import { win77 } from "../dne-cli.js";
import { ADVICES, drawAdvice } from "../page/advice.page.js";
import { getRandomInt } from "../utils/getCardById.js";
import { adminMarkup } from "../swiper/markup/admin.markup.js";
import { adminProfileMarkup } from "../swiper/markup/admin/adminProfile.markup.js";
import { drawLootCards } from "../cards/dom.cards.js";
import { getDialogOptionMarkup } from "./dialogCli.hud.js";
import { isSetHasId } from "../utils/isSetHasId.js";
import { drawCurrentEvent, trackYourDays } from "./calendar.hud.js";
import { ProfilePage } from "../structure/admin/profilePage.structure.js";
import { BankPage } from "../structure/admin/bankPage.structure.js";
import { SchedulePage } from "../structure/admin/schedulePage.structure.js";
import { DirectPage } from "../structure/admin/directPage.structure.js";

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

const showTip = (e) => {
    // console.log(`You ask about advice for..`, e.target, e.target.dataset.adviceId);
    if (e.target.dataset.adviceId) {
        const askedAdvice = ADVICES.find((advice) => advice.id === e.target.dataset.adviceId);
        console.log(`Yes, I know something about ${e.target.dataset.adviceId}. Here `, askedAdvice);
        drawAdvice(askedAdvice);
    } else {
        console.log(`Advice you asking for is unavailable. So i give you random`, ADVICES[getRandomInt(ADVICES.length)]);
    }
}

const body = document.querySelector("body");
body.addEventListener("auxclick", showTip);

const TUTORIAL_PARTS = {
    whatIsSoundCards:
`Рахуємо до трьох. Один, карти звуку.\r
Кожна вечірка починається зі звуку. Що на заході грає, так він і розкривається.\r
Щоб скласти плейлист майбутнього Івенту, просто викладай карти звуку одну за одною у потрібному тобі порядку.\r
У тебе є 5 карт випадкових діджитал Демо, Альбомів і Вінілових платівок (цей звук потребує спеціальної апаратури). Поєднуй Звук в одному жанрі щоб створювати найвдаліші лайнапи.`,
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

const DIALOGS = [
`Привіт, мене звати Навіщо\r
Я допоможу тобі налаштувати гру.\r
Ти це читаєш, значить ти вже запустив HUD і знайшов правила. Вітаю!\r
Рекомендую використовувати ПК з великим монітором, якщо користуєшся версією 23-го року. Файний звук, дека, якісні вуха та брейнданс-шолом виведуть твій експірієнс на новий рівень, проте не є обов'язковими складовими для старту гри.
Тож почнемо.\r
Мета гри: найбільший банкрол до 10 рівня. Для твоєї зручності вони знаходяться поруч у верхньому правому кутку твого HUD.\r
Як її досягти? Влаштовуй івенти. Один івент – 1 рівень + весь кеш що зможеш заробити.\r
От і все. Успіхів!\r
Добре, жартую\r
Можу розповісти більше про карти звуку, NPC та класів. Просто продовжуй гортати.
${TUTORIAL_PARTS.whatIsSoundCards}
${TUTORIAL_PARTS.whatIsNpcCards}
${TUTORIAL_PARTS.whatIsClassCards}
Цього має вистачити щоб пройти кілька раундів та відчути механіку. Після відчувай себе вільно щоб запросити у мене доступ до книги правил, вставивши в адресну строку: https://www.notion.so/RULEBOOK-e1aad00713344adf86db1ad8d4368bbb?pvs=4\r
Пам'ятай, що кожен брейнданс має свою ціну. Мої реквізити в твоєму Діректі.`,

`Привіт, Тайлер слухає`,

`Привіт, буду радий знайтись на днях. Є пропозиція.`,

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



const initAdmin = () => {
    win77.adminSwiper = new Swiper("#admin-swiper", {
        direction: "vertical",
        spaceBetween: 50,
        effect: "flip",
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });

    win77.adminSwiper.on('slideChange', function (e) {
        console.log(e, e.activeIndex, e.activeIndex === 3);
        if (e.activeIndex === 2) {
            const dialogParent = document.querySelector("#admin-dialog");
            console.log("initDialog(DIALOGS[0])", dialogParent);
            // initDialog(DIALOGS[0], dialogParent);
        }
    });

    SchedulePage.init();
    DirectPage.init();
    BankPage.init();
    ProfilePage.init();
}

initAdmin();

export { DIALOGS, TITLES_OF_DIALOGS, getMessageMarkup, initInteractiveDialog, chooseOption };
