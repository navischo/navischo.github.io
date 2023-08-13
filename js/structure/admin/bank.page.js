import { Page } from "../core.structure.js";
import { win77 } from "../../dne-cli.js";
import { updBalanceNode } from "../../hud/balance.hud.js";

const updBankBalanceNode = () => {
    const element = document.querySelector(".js-btc-balance");
    const localSave = localStorage.getItem(`${win77.game.player.id}-btc`);
    if (localSave) {
        element.textContent = localSave;
    } else {
        element.textContent = 0;
    }
}

const saveBankroll = () => {
    const bankroll = win77.game.player.balance.bankroll;
    if (bankroll > 1111111) {
        const localSave = localStorage.getItem(`${win77.game.player.id}-btc`);
        if (localSave) {
            localStorage.setItem(`${win77.game.player.id}-btc`, `${+localSave + 1}`);
        } else {
            localStorage.setItem(`${win77.game.player.id}-btc`, `1`);
        }
        win77.game.player.balance.bankroll = win77.game.player.balance.bankroll - 1000000;
        updBalanceNode();
        updBankBalanceNode();
        console.log("You successfully save 1BTC from your bankroll", localStorage.getItem(`${win77.game.player.id}-btc`), win77.game.player.balance.bankroll);
    } else {
        console.log("You need at least 1111111 to save 1BTC from your bankroll", localStorage.getItem(`${win77.game.player.id}-btc`), win77.game.player.balance.bankroll);
    }
};

const initBankPage = () => {
    const parent = document.querySelector(".js-bank-page");
    const link = () => {
        console.log("Go to Profile page");
    }
    const init = () => {
        // run all scripts to make Bank work
        const saveBtn = document.querySelector(".js-save-bankroll");
        saveBtn.addEventListener("click", () => {
            saveBankroll();
        });

        updBankBalanceNode();
    };

    return new Page(parent, link, init);
}
const BankPage = initBankPage();

export { BankPage };
