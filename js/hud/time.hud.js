// import { createNode } from "../utils/createNode.js";
import { win77 } from "../dne-cli.js";

// const body = document.querySelector("body");
// createNode(body, "p", "", "js-timing");

// const setCountdown = () => {
//     const countDownDate = new Date("2023-04-30T00:00:00Z").getTime();
//
//     const x = setInterval(function () {
//
//         const now = new Date().getTime();
//
//         let distance = countDownDate - now;
//
//         let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//         const node = document.querySelector(".time");
//
//         node.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
//
//         if (distance < 0) {
//             clearInterval(x);
//             node.innerHTML = "<a href='game.html' target='_blank'>NEXT ROUND</a>";
//         }
//     }, 1000);
// }

// я ебал в рот этот сраный таймер, найди аналог в инете, минуты на вход нода на выход, камон второй час сидим блять
const setCountdown = (min) => {
    let hours = (min / 60) > 0 ? Math.floor(min / 60) : 0;
    let minutes = min - (hours * 60);

    function jpTimer(){
        const maxSec = 59;
        const maxMin = 9;
        const maxHour = 0;
        let s = 59;
        let m = maxMin;
        let h = maxHour;

        win77.time = setInterval(() => {
            const node = document.querySelector(".time");

            if (s > 0) {
                s--;
            } else {
                if (m > 0) {
                    s = maxSec;
                    m--;
                } else {
                    if (h > 0) {
                        m = maxMin;
                        h--;
                    } else {
                        node.innerHTML = "FIN";
                    }
                }
            }

            node.innerHTML = `${h ? `${h}h` : ``} ${m ? `${m}m` : ``} ${s ? `${s}s` : ``}`;


        }, 1000);
    }

    jpTimer();
}

const setTimer = () => {
    function jpTimer(){
        const maxSec = 59;
        const maxMin = 59;
        const maxHour = 66;
        let s = 0;
        let m = 0;
        let h = 0;

        win77.inQuestTime = setInterval(win77.timer(h, m, s, maxSec, maxMin, maxHour), 1000);
    }

    jpTimer();
}

const clearTimer = () => {
    clearInterval(win77.inQuestTime);
    // release our intervalID from the variable
    win77.inQuestTime = null;
}

// setTimer();

const switchTime = (min) => {
    let h = (min / 60) > 0 ? Math.floor(min / 60) : 0;
    let m = min - (h * 60);
    // min / 60 с остачей
    // целые - часы
    // остача - минуты

    const node = document.querySelector(".time");
    clearInterval(win77.time);
    node.innerHTML = `${h ? `${h}h` : ``} ${m ? `${m}m` : ``}`;
}

// win77.switchTime = ;

export { setCountdown, switchTime, setTimer, clearTimer };
