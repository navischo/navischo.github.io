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
const cash = document.querySelector(".js-cash-balance");

const updBalance = (energyVal, cashVal) => {
    energy.innerHTML = energyVal;
    cash.innerHTML = cashVal;
    return {
        energy: energyVal,
        cash: cashVal
    }
};

const bottomHandNode = document.querySelector("#bottom-hand");
const updHand = (cardsArr) => {
    console.log("cardsArr", cardsArr);
    bottomHandNode.innerHTML = "";
    drawLootCards(cardsArr);

    const cardsInYourHand = bottomHandNode.querySelectorAll(".swiper-slide");
    cardsInYourHand.forEach(drawedCard => {
        drawedCard.addEventListener("click", (e) => {
            const id = drawedCard.id.substring(9);
            
            appendCardsOnTable([getCardById(id)]);
            game.table.push([getCardById(id)]);

            bottomHandNode.querySelector(`#dne-card-${id}`).remove();
            currentPlayer.hand.splice(currentPlayer.hand.findIndex(card => card.id === id), 1);
        });
    });
}


