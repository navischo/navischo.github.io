import { initQuest } from "../quest/dom.quest.js";
import { quests } from "../quest/structure.quest.js";
import { closeGameMenu } from "../hud/btn.hud.js";
import { openPopup, closePopup } from "../popup/dom.popup.jquery.js";

const STRINGS = [
    `“Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... A graphic representation of data abstracted from banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding...” ― William Gibson, Neuromancer`,
    `
        Дідусь Рік вигадав як заробити на утримання свого секретного комплексу, не привертаючи багато уваги.<br><br>
        
        Ти влаштуєш Рейв... на Луні<br>
        Хіба це не мрія? По всій Новій Цитаделі вже ширяться чутки що в C-137 готується дещо велике.<br>
        Хто таке пропустить?<br><br>
        
        Залишилось тільки все підготувати, це як раз на тобі,<br>
        Початок через годину
    `,
    `I miss this feeling so much. Waking up on a warm summer day with minecraft being the only thing i had to worry about. I will remember those time forever`
]

const initTerminal = (nextString = STRINGS[2]) => {
    const terminal = document.querySelector(".js-terminal");
    terminal.innerHTML = `${nextString}`;

    let element = document.querySelector('.screen');
    let string = element.innerText;
    let length = string.length;

    const timer = (delay, repetitions) => {
        let n, i;

        n = 0;
        i = window.setInterval(function () {
            element.innerText = string.substring(0, n);
            if (n++ === repetitions) {
                window.clearInterval(i);
            }
        }, delay);
    }

    timer(100, length);

    terminal.addEventListener("click", () => {
        console.log("terminal initQuest");
        initQuest(quests.dealWithMoney);
        closeGameMenu();
        // closePopup();
        // openPopup("#quest-popup");
    });
}

export { initTerminal };
