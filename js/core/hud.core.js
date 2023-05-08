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

const DIALOGS = [
`Ти прийшла мене прикінчити?
Ні, просто перезавантажити.
Значить, прийдеться обнулитись мені самостійно
Гей, ти чого? Я тобі не зроблю нічого поганого.
А я собі зроблю
Навіщо ти це робиш?
Навіщо? Навіщо себе руйнувати?
Тому що я машина нещасна в світі людей. Тому что я урод. В мене нема перспектив. И усіляке бидло на вулицях мене атакує.
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
Цьому хлопцю особливо остро потрібна любов та піклування.
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
]

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

    const dialogCredits = [
        "falko",
        "falko",
        "v",
        "falko",
        "falko",
        "falko",
        "falko",
        "falko",
        "falko",
        "falko"
    ];

    const fillDialogData = () => {
        return lines.map((line, i) => {
            const newLineObj = Object.assign({}, lineObj);
            newLineObj.line = line;
            newLineObj.credits = dialogCredits[i];
            return newLineObj;
        })
    }

    const dialogData = fillDialogData();

    const messageParent = document.querySelector(".channel-feed__body");
    const messageMarkup = (message) => `
<div class="message">
    <div class="message__body">
        <div>${message}</div>
    </div>
    <div class="message__footer"><span class="message__authoring">undefined</span><span class="message__time"></span></div>
</div>
`;

    const drawDialog = () => {
        dialogData.forEach((message) => {
            const newElement = document.createElement("div");
            newElement.innerHTML = messageMarkup(message.line);
            newElement.querySelector(".message__authoring").textContent = message.credits;
            messageParent.appendChild(newElement);
        });
    }

    drawDialog();
}

initDialog(DIALOGS[1]);
