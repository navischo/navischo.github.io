const checkData = {
    budget: 36800,
    income: 154000,
    crew: 5000,
    total: 222160
};

const drawCheck = (checkData, parent = "body") => {
    const getCheckLayer = (data, wrapIndex) => {
        const wrap = document.createElement("div");
        const keys = Object.keys(data);
        console.log("keys", keys);


        let keysMarkup = "";
        const pointsArr = [];
        keys.forEach((key, strokeIndex) => {
            pointsArr.push(data[key]);
            keysMarkup = keysMarkup + `<p class="check-clone__text-${wrapIndex} fw-ad-${strokeIndex + 1}">${key.toUpperCase()}</p>`;
        });
        console.log("keysMarkup", keysMarkup);


        let pointsMarkup = "";
        pointsArr.forEach((pointsCount, strokeIndex) => {
            pointsMarkup = pointsMarkup + `<p class="check-clone__text-${wrapIndex} fw-ad-${strokeIndex + 1}">${pointsCount}</p>`;
        });


        wrap.classList.add(`check-clone-${wrapIndex}`);
        wrap.classList.add(`check-clone`);
        wrap.innerHTML = `
            <div>
                ${keysMarkup}
            </div>

            <div class="check-clone__points">
                ${pointsMarkup}
            </div>`;
        return wrap;

    }
    const checkElement = document.createElement("section");
    checkElement.classList.add("check-screen");
    for (let i = 0; i < 4; i++) {
        checkElement.appendChild(getCheckLayer(checkData, i));
    }
    document.querySelector(parent).appendChild(checkElement);
    // uncomment to add background
    const skyAndOcean = document.createElement("div");
    skyAndOcean.classList.add("check-screen__sky-and-ocean");
    skyAndOcean.innerHTML = getSkyAndOceanMarkup();
    checkElement.appendChild(skyAndOcean);
    checkElement.addEventListener("click", () => {
        checkElement.remove();
    });
}

const getSkyAndOceanMarkup = () =>
`
<div id="sky" class="sky">
    <div id="sun" class="sun"></div>
    <div class="trees"></div>
    <div class="trees-reverse"></div>
    <div class="trees-bg"></div>
</div>

<div class="ocean">
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
    <div class="line-1"></div>
</div>`;

export { drawCheck, checkData };
