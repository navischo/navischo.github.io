import { win77 } from "../dne-cli.js";

const body = document.querySelector("body");

const markup = `
<div class="js-balance">
    <a class="js-skill-points-balance units-skill" data-advice-id="souls">3</a>
    <a class="js-bankroll-balance units-bankroll" data-advice-id="bankroll">12000</a>
    <a class="js-energy-balance units-energy fw-d-none" data-advice-id="energy">7</a>
 </div>
<div class="controls">

</div>
`;

const showEnergy = () => {
    if (win77.game.player.lvl >= 3 && win77.game.player.dia.size > 0) {
        body.querySelector(".js-energy-balance").classList.remove("fw-d-none");
    }
}

const createBalanceNode = () => {
    const newBalance = document.createElement("div");
    newBalance.classList.add("units");
    newBalance.innerHTML = markup;
    body.appendChild(newBalance);

    showEnergy();
}

const updBalanceNode = () => {
    body.querySelector(".js-skill-points-balance").textContent = win77.game.player.balance.skillPoints;
    body.querySelector(".js-energy-balance").textContent = win77.game.player.balance.energy;
    body.querySelector(".js-bankroll-balance").textContent = win77.game.player.balance.bankroll;

    showEnergy();
}

createBalanceNode();
win77.updBalanceHUD();

export { updBalanceNode };
