const hudBtn = document.querySelector("#hud-btn");
const hudOptionsNode = document.querySelector("#hud-options");
const hudBottom = document.querySelector(".hud-bottom");

if (hudBottom) {
  const hudHeight = hudOptionsNode.clientHeight;
  // console.log("hudHeight", hudHeight);
  hudBottom.style.transform = `translateY(${hudHeight}px)`
}

hudBtn.addEventListener("click", (e) => {
    hudOptionsNode.classList.toggle("hud-options--open");
    hudBottom.classList.toggle("hud-bottom--open");
});
document.addEventListener("keydown", (e) => {
    if (e.key === "h") {
        hudOptionsNode.classList.toggle("hud-options--open");
    }
});

const hud = document.querySelector("#hud");
document.addEventListener("keydown", (e) => {
    if (e.key === "CapsLock") {
        hud.classList.add("hud--open");
        document.addEventListener("keyup", (e) => {
            hud.classList.remove("hud--open");
        });
    } else {

    }
    e.stopPropagation();
});

const openStatBtn = document.querySelector(".js-open-stats");

openStatBtn.addEventListener("click", () => {
    hud.classList.add("hud--open");
    hudOptionsNode.classList.remove("hud-options--open");
    hudBottom.classList.remove("hud-bottom--open");
});

const energy = document.querySelector(".js-energy-balance");
const bankroll = document.querySelector(".js-bankroll-balance");

const updBalance = (energyVal, bankrollVal) => {
    energy.innerHTML = energyVal;
    bankroll.innerHTML = bankrollVal;
    return {
        energy: energyVal,
        bankroll: bankrollVal
    }
};

const STATS_ID = {
    energy: "energy",
    bankroll: "bankroll",
    playerScore: "playerScore",
    versusScore: "versusScore"
}

const statsToEditSelectors = {
    energy: ".js-energy-balance",
    bankroll: ".js-bankroll-balance",
    playerScore: "#player-score",
    versusScore: "#versus-score"
}
const setStatBtn = document.querySelector(".js-set-stat");
const setStatInput = document.querySelector(".js-set-stat-input");
const setStat = (nodeSelector, updDataOriginCallback) => {
    const parent = document.querySelector(nodeSelector);
    parent.innerHTML = setStatInput.value;
    updDataOriginCallback();
}



// setStatBtn.addEventListener
