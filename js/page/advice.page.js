const ADVICES = [
    {
        title: `Сюрикен`,
        descr: `Сюрикен особливо ефективний проти малих та швидких цілей.<br><br>
                Вчасно кинутий сюрикен має шанс змусити супротивника зупинити атаку.`
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

const drawAdvice = () => {
    const parent = document.createElement("div");
    parent.classList.add("sudo-page");
    parent.classList.add("advice");

    parent.innerHTML = getAdviceMarkup(ADVICES[0].title, ADVICES[0].descr);
    parent.querySelector("#burn-advice")
        .addEventListener("click", () => {
            document.querySelector(".sudo-page").remove();
        });
    document
        .querySelector("body")
        .appendChild(parent);
}

export { drawAdvice };
