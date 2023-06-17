import { getRandomInt } from "../utils/getCardById.js";

const ADVICES = [
    {
        title: `Сюрикен`,
        descr: `Сюрикен особливо ефективний проти малих та швидких цілей.<br><br>
                Вчасно кинутий сюрикен має шанс змусити супротивника зупинити атаку.`
    },
    {
        title: `Очікування`,
        descr: `До кожного івенту мають очікування, тобі варто виправдати очікування гостя, 
                щоб він відчув бажання тобі відплатити.<br><br> 
                Виправдані очікування заоохочують гостей приходити знов і приводити друзів.`
    },
    {
        title: `Sound`,
        descr: `Кожна вечірка починається зі звуку. Що на заході грає, так він і розкривається.<br><br> 
                Щоб скласти плейлист майбутнього Івенту, просто викладай карти звуку одну за одною у потрібному тобі порядку.`
    },
    {
        title: `Crew`,
        descr: `Твоя крю - це персонажі готові тобі допомогти (їх також називають Найомнички або NPC).<br><br>
                Вони допоможуть доставити апаратуру, поставити музику і поринуть з тобою в пригоду.<br><br>
                Кожен має особливості та навички, що змінюють ігровий процес з цим персонажем у твоїй крю.`
    },
    {
        title: `Class`,
        descr: `Твій клас відповідає на питання "Що ти робиш?"<br><br>
                Ідучи по шляху розвитку майстерності ти зможеш відкрити в собі нові здібності притаманні твоєму Класу.<br><br>
                Кожен клас має особливості та навички, що суттєво впливають на ігровий досвід кожного Гравця.`
    },
    {
        title: `Souls`,
        descr: `Здобути Душу можна зробивши справу вклавши в неї частину власної.<br><br>
                Малювати, грати музику, поринати у пригоди чи створювати свій Рейв - для душі не так важливо. Важливо робити це щиро.<br><br>
                Використай 1 душу, щоб додати персонажа до своєї Крю, накопич 10, щоб виграти гру.`
    },
    {
        title: `Impact`,
        descr: `Рівень потужності лайнапу, який ти збираєшся грати.<br><br>
                Твій Імпакт має перевершити Очікування, щоб Івент став успішним.<br><br>`
    }
];

const getAdviceMarkup = (title, descr) =>
`
<div class="container advice__content">
    <h1 class="advice__title">${title}</h1>
    <p class="advice__descr">
        ${descr}
    </p>
    <button id="burn-advice" class="my-cybr-btn --white">+</button>
</div>
`;

const drawAdvice = (advice = ADVICES[getRandomInt(ADVICES.length)]) => {
    const parent = document.createElement("div");
    parent.classList.add("sudo-page");
    parent.classList.add("advice");

    parent.innerHTML = getAdviceMarkup(advice.title, advice.descr);
    parent.querySelector("#burn-advice")
        .addEventListener("click", () => {
            document.querySelector(".sudo-page").remove();
        });
    document
        .querySelector("body")
        .appendChild(parent);
}

export { drawAdvice };
