import { Page } from "../core.structure.js";
import { win77 } from "../../dne-cli.js";
import { getLocationDataMarkup } from "../../inInteraction/interface.inInteraction.js";
import { DIALOGS, getMessageMarkup, TITLES_OF_DIALOGS } from "../../hud/chat.hud.js";

const appendAllMessages = (data, clearBefore = false, parent) => {
    const messageParent = parent ? parent : document.querySelector(".channel-feed__body");
    clearBefore ? messageParent.innerHTML = "" : "";

    const appendMessageMarkup = (message) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = getMessageMarkup(message);
        messageParent.appendChild(newElement);
    }

    // console.log(data, data.length);

    // data.length > 1 ? data.forEach(appendMessageMarkup) : appendMessageMarkup(data);
    data.forEach(appendMessageMarkup);
}

const parseDialogBody = (dialog, parentSelector = "#admin-dialog") => {
    const parent = document.querySelector(parentSelector);
    const lines = dialog.split(/\r\n|\r|\n/g);

    const lineObj = {
        line: "",
        credits: "",
        date: "",
        callback: "",
        chat: "",
        checked: false
    };

    // const dialogCredits = [
    //     "falko",
    //     "falko",
    //     "v",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko",
    //     "falko"
    // ];

    const fillDialogData = () => {
        return lines.map((line, i) => {
            const newLineObj = Object.assign({}, lineObj);
            newLineObj.line = line;
            // newLineObj.credits = dialogCredits[i];
            return newLineObj;
        })
    }

    const dialogData = fillDialogData();

    appendAllMessages(dialogData, true, parent);
}

const startDirect = (name, dialogObj) => {
    const directIcon = document.querySelector(`[data-direct="${name}"]`);
    const directTitle = document.querySelector(`.js-channel-name`);
    if (directIcon && directTitle) {
        clearDirectMarkers();
        directIcon.classList.add("--online");
        directTitle.textContent = `${dialogObj.title}/${name}`;
        if (dialogObj) {
            parseDialogBody(dialogObj.body);
        }
    } else {
        console.log(`Direct to ${name} unavailable`);
    }
}

const clearDirectMarkers = () => {
    const directStarters = document.querySelectorAll(".js-start-direct");
    directStarters.forEach((directStarter) => {
        directStarter.classList.remove("--online");
    });
}

const drawLocations = () => {
    const locationsParent = document.querySelector(".js-locations");
    const getLocationItemMarkup = (name) => `
    <li class="nav__item">
        <a class="js-open-room nav__link">
            <span class="channel-link"><span class="channel-link__icon">#</span><span class="channel-link__element">${name}</span></span>
        </a>
    </li>
    `;
    locationsParent.innerHTML = win77.game.player.availableLocations.map((locationItem) => getLocationItemMarkup(locationItem)).join("");

    document.querySelector(".js-open-room")
        .addEventListener("click", () => {
            clearDirectMarkers();
            console.log(win77.locationsSet, [...win77.locationsSet][0], getLocationDataMarkup([...win77.locationsSet][0]));
            const data = [...win77.locationsSet][0];
            appendAllMessages([
                {
                    line: getLocationDataMarkup(data),
                    credits: "win77"
                }
            ], true);
            document.querySelector(".js-channel-name").textContent = data.name;
        });
}

const drawContacts = () => {
    const directParent = document.querySelector(".js-direct-contacts");
    const getDirectItemMarkup = (name) => `
<li class="nav__item">
    <a class="nav__link" href="#">
        <span class="js-start-direct conversation-link" data-direct="${name}"><span class="conversation-link__icon"></span><span
            class="conversation-link__element">${name}</span></span>
    </a>
</li>
`;
    const availableDirects = ["Rick C-137", "navischo"];
    const drawDirectsList = () => {
        directParent.innerHTML = availableDirects.map((locationItem) => getDirectItemMarkup(locationItem)).join("");
    }

    drawDirectsList();

    const directStarters = directParent.querySelectorAll(".js-start-direct");
    directStarters.forEach((directStarter) => {
        directStarter.addEventListener("click", () => {
            // parseDialogBody(DIALOGS[0], dialogParent);
            startDirect(
                "navischo", {
                title: TITLES_OF_DIALOGS[0],
                body: DIALOGS[0]
            })
        });
    })
}

const initDirectPage = () => {
    const parent = document.querySelector(".js-direct-page");
    const link = () => {
        console.log("Go to Profile page");
    }
    const init = () => {
        // run all scripts to make Bank work
        drawContacts();
        drawLocations();
    };

    return new Page(parent, link, init);
}
const DirectPage = initDirectPage();

export { DirectPage, parseDialogBody };
