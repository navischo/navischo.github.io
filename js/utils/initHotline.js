import { TITLES_OF_DIALOGS, DIALOGS } from "../hud/chat.hud.js";
import { parseDialogBody } from "../structure/admin/direct.page.js";
const initHotline = (number) => {
    const dialogObj = {
        title: TITLES_OF_DIALOGS[number],
        body: DIALOGS[number]
    };
    const hotline = {
        dialogObj: dialogObj,
        displayNewMessages: (dialogObj) => {
            const dialogVertical = document.querySelector(".dialog-vertical");
            // const dialogVerticalKeys
            if (dialogVertical) {
                dialogVertical.classList.remove("--zero-inbox");
            }

            if (dialogObj) {
                parseDialogBody(dialogObj.body, ".js-vertical-feed");
            }
        }
    }

    hotline.displayNewMessages(dialogObj);

    // let displayMessageNodeArr = document.querySelectorAll(".message");
    // displayMessageNodeArr.forEach((messageNode) => {
        // messageNode.addEventListener("click", () => {
        //     // messageNode.remove();
        //     displayMessageNodeArr = document.querySelectorAll(".message");
        //     if (displayMessageNodeArr.length === 0) {
        //         dialogVerticalNode.classList.add("--zero-inbox");
        //     }
        // });
    // });
    return hotline;
}

export { initHotline };
