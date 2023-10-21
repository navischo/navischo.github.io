import { initNokiaPopup } from "../hud/nokia.hud.js";
import { closePopup, openPopup } from "../popup/dom.popup.jquery.js";

const getMenuItem = (name) => {
    return {
                href: "#",
                text: name,
                callback: (e) => {
                    e.preventDefault();

                    const originalPlayerId = win77.game.player.id;
                    const tableNode = document.querySelector("#table");

                    console.log(`Hotline to ${name}`);
                    win77.game.alliance = {
                        creator: originalPlayerId,
                        savior: name
                    };
                    win77.switchPlayer(name);
                    tableNode.dataset.owner = `${originalPlayerId}+${name}`;
                    closePopup();
                }
            }
}

const callFriend = () => {
    console.log("Lets try to draw a friend phone");
    const nokiaContainer = document.querySelector("#nokia-popup");
    nokiaContainer.innerHTML = "";
    initNokiaPopup({
        title: "Pokewall",
        items: Array.from(win77.lobby).map((player) => getMenuItem(player.id))
    });
    closePopup();
    setTimeout(() => {
        openPopup("#nokia-popup");
    }, 100);
}

export { callFriend };
