import {createNode} from "../utils/createNode.js";

const body = document.querySelector("body");
createNode(body, "p", "", "time");

const setCountdown = () => {
    const countDownDate = new Date("2023-04-30T00:00:00Z").getTime();

    const x = setInterval(function () {

        const now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const node = document.querySelector(".time");

        node.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            node.innerHTML = "FIN";
        }
    }, 1000);
}

const setTimer = () => {
    function jpTimer(){
        const maxSec = 59;
        const maxMin = 59;
        const maxHour = 59;
        let s = 0;
        let m = 0;
        let h = 0;

        setInterval(() => {
            if (s > maxSec) {
                m++;
                if (m > maxMin) {
                    h++;
                    if (h > maxHour) {
                        h = 0;
                        m = 0;
                        s = 0;
                    }
                    m = 0;
                }
                s = 0;
            }

            const node = document.querySelector(".time");
            node.innerHTML = `${h ? `${h}h` : ``} ${m ? `${m}m` : ``} ${s ? `${s}s` : ``}`;

            s++;

        }, 1000);
    }

    jpTimer();
}

setTimer();
