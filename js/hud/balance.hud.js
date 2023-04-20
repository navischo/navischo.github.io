import { win77 } from "../dne-cli.js";

const body = document.querySelector("body");

const markup = `
<div class="js-balance">
    <a class="js-energy-balance units-energy" style="display: none">40</a>
    <a class="js-bankroll-balance units-bankroll">12000</a>
</div>
<div class="controls">

</div>
`;

const createBalanceNode = () => {
    const newBalance = document.createElement("div");
    newBalance.classList.add("units");
    newBalance.innerHTML = markup;
    // win77.page.node.appendChild(newBalance);
    body.appendChild(newBalance);
}

const updBalanceNode = () => {
    body.querySelector(".js-energy-balance").textContent = win77.game.player.balance.energy;
    body.querySelector(".js-bankroll-balance").textContent = win77.game.player.balance.bankroll;
}

createBalanceNode();
win77.getCostFromPlayer(1000);
updBalanceNode();

export { updBalanceNode };
