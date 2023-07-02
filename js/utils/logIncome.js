const logIncome = (income, e) => {
    const element = document.createElement("span");
    element.classList.add("income");
    element.innerHTML = `+${income}`;

    if (e) {
        const mousePos = {x: e.clientX, y: e.clientY};
        element.style.top = `${mousePos.y}px`;
        element.style.left = `${mousePos.x}px`;
    }

    document.querySelector("body")
        .appendChild(element);

    setTimeout(() => element.remove(), 2000);
}

export { logIncome };
