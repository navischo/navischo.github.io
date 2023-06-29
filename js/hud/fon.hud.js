import {win77} from "../dne-cli.js";
import { DIALOGS, TITLES_OF_DIALOGS, initDialog } from "./chat.hud.jquery.js";
import { initHotline } from "../utils/initHotline.js";
import { createDialogDataObj, initDialogCli } from "./dialogCli.hud.js";


const initDirect = (name, dialogObj) => {
    const directIcon = document.querySelector(`[data-direct="${name}"]`);
    const directTitle = document.querySelector(`.js-channel-name`);
    if (directIcon && directTitle) {
        directIcon.classList.add("--online");
        directTitle.textContent = `${dialogObj.title}/${name}`;
        if (dialogObj) {
            initDialog(dialogObj.body);
        }
    } else {
        console.log(`Direct to ${name} unavailable`);
    }
}

const NOKIA_MENUS = [
    {
        title: "Pokewall",
        items: [
            {
                href: "#admin",
                text: "navischo",
                callback: (e) => {
                    e.preventDefault();
                    // $.magnificPopup.close();
                    // win77.swiper.slidePrev();
                    win77.lastHotline = initHotline(0);
                    // initDirect("navischo", {
                    //     title: TITLES_OF_DIALOGS[0],
                    //     body: DIALOGS[0]
                    // });
                    console.log(`Hotline to navischo`);
                }
            }, {
                href: "#",
                text: "Fight Club",
                callback: (e) => {
                    e.preventDefault();
                    win77.lastHotline = initHotline(1);
                    initDialogCli(createDialogDataObj(
                        ["Поклич Навіщо"],
                        "Fight Club",
                        [
                            () => initHotline(0)
                        ]));
                    console.log(`Hotline to Fight Club`);
                }
            }
            // {
            //     href: "#",
            //     text: "Green House"
            // }, {
            //     href: "#",
            //     text: "Purple Moon"
            // }, {
            //     href: "#",
            //     text: "∄"
            // }, {
            //     href: "#",
            //     text: "Fight Club"
            // }
        ]
    }
];

const nokiaMenuMarkup = (title) => `
<div id="nokia" class="nokia-area">
    <h3 class="title">${title}</h3>
    <div class="menu"></div>
</div>
`;

const initNokiaPopup = () => {
    const parent = document.querySelector("#nokia-popup");
    const newNode = document.createElement("div");
    newNode.classList.add("nokia__preview");
    newNode.innerHTML = nokiaMenuMarkup(NOKIA_MENUS[0].title);
    const menuNode = newNode.querySelector(".menu");
    NOKIA_MENUS[0].items.forEach((item) => {
        const itemNode = document.createElement("a");
        itemNode.href = item.href;
        itemNode.textContent = item.text;

        itemNode.addEventListener("click", item.callback);

        menuNode.appendChild(itemNode);
    });
    parent.appendChild(newNode);
}

export { initNokiaPopup };
