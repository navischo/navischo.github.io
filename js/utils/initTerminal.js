const STRINGS = [
    `“Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... A graphic representation of data abstracted from banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding...” ― William Gibson, Neuromancer`,

]

const initTerminal = (nextString = STRINGS[0]) => {
    const terminal = document.querySelector(".js-terminal");
    terminal.textContent = nextString;

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

}

export { initTerminal };
