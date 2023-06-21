import { initCredits } from "../utils/initCredits.js";

const checkData = {
    budget: 36800,
    income: 154000,
    crew: 5000,
    total: 222160
};

// const hideBonusWhenItZero = (resultObj) => {
//     const keys = Object.keys(resultObj);
//     const newResultObj = {};
//     keys.forEach((key) => {
//         if (resultObj[key] !== 0) {
//             newResultObj[key] = resultObj[key];
//             // console.log(`${key} more then 0`, newResultObj);
//         }
//     });
//     // console.log(`resultObj was cleared from zeros`, resultObj, newResultObj);
//     return newResultObj;
// }

const drawCheck = (checkData, parent = "body") => {
    const getCheckLayer = (data, wrapIndex) => {
        const wrap = document.createElement("div");
        const keys = Object.keys(data);
        // console.log("keys", keys);


        let keysMarkup = "";
        const pointsArr = [];
        keys.forEach((key, strokeIndex) => {
            pointsArr.push(data[key]);
            keysMarkup = keysMarkup + `<p class="check-clone__text-${wrapIndex} fw-ad-${strokeIndex + 1}">${key.toUpperCase()}</p>`;
        });
        // console.log("keysMarkup", keysMarkup);


        let pointsMarkup = "";
        pointsArr.forEach((pointsCount, strokeIndex) => {
            pointsMarkup = pointsMarkup + `<p class="check-clone__text-${wrapIndex} fw-ad-${strokeIndex + 1}">${pointsCount}</p>`;
        });


        wrap.classList.add(`check-clone-${wrapIndex}`);
        wrap.classList.add(`check-clone`);
        wrap.classList.add(`--glitch`);
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
    const isFinalRound = win77.game.player.balance.skillPoints % 10;
    if (isFinalRound) {
        const skyAndOcean = document.createElement("div");
        skyAndOcean.classList.add("check-screen__sky-and-ocean");
        skyAndOcean.innerHTML = getSkyAndOceanMarkup();
        checkElement.appendChild(skyAndOcean);
    } else {
        const intro = document.createElement("div");
        intro.classList.add("intro");
        intro.innerHTML = getIntro();
        checkElement.appendChild(intro);
    }
    checkElement.addEventListener("click", () => {
        // isFinalRound ? initCredits() : "";
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

const getIntro = () => {
    return `
<!--<div class="intro">-->
    <div class="video">
        <video class="video__media" src="mp4/dinner.mp4" autoplay muted loop></video>
    </div>

    <div class="intro__content">
        <div class="container">
            <h1 class="intro__title"><a id="js-show-credits" href="#play">CONTINUE</a></h1>
        </div>
    </div>
<!--</div>-->
    `
}

export { drawCheck, checkData };
