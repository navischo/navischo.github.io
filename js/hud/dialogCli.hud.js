const getDialogOptionObj = (line, callback = null) =>{
    return {
        line: line,
        callback: callback
    }
};

const getDialogActionObj = (line, callback) =>{
    return {
        line: line,
        callback: () => {
            console.log(this.line, this.callback);
            callback();
        }
    }
};

const DIALOG_ACTIONS = {
    bye: getDialogActionObj("bye", () => {
        document.querySelector(".dialog").style.display = "none";
    })
}

const DEFAULT_DIALOG_DATA = {
    to: "Captain",
    options: [
        getDialogOptionObj("Розкажи мені про Санто-Домінго."),
        getDialogOptionObj("Чому тебе називають Капітаном?"),
        getDialogOptionObj("Як бізнес?")
    ],
    actions: [
        DIALOG_ACTIONS.bye
    ]
}

const createDialogDataObj = (optionLinesArr, to = "unknown", optionCallbackArr) => {
    const optionsArr = optionLinesArr
        .map((optionLine, i) => getDialogOptionObj(optionLine, optionCallbackArr ? optionCallbackArr[i] : ""));
    return {
        to: to,
        options: optionsArr,
        actions: [
            DIALOG_ACTIONS.bye
        ],
    }
}

const getDialogOptionMarkup = (line) => `<button class="hvr-bounce-to-right dialog__answer --option">${line}</button>`;
const getDialogActionMarkup = (line) => `<button class="js-dialog-${line} dialog__bye">${line}</button>`;

const getDialogCliMarkup = (dialogData) => `
<div class="dialog --vertical" data-to="${dialogData.to}">
    <button id="dne-cli-exe" class="dialog__to --active">${dialogData.to}</button>
    ${dialogData.actions.map((action) => getDialogActionMarkup(action.line)).join("")}
    
    <input id="dne-cli" type="text" class="dialog__answer --custom">
    ${dialogData.options.map((option) => getDialogOptionMarkup(option.line)).join("")}
</div>
`;

const drawDialogCli = (dialogData) => {
    const parent = document.querySelector("#dialogs-container");
    parent.innerHTML = getDialogCliMarkup(dialogData);

    const optionNodeArr = parent.querySelectorAll(".dialog__answer:not(#dne-cli)");

    optionNodeArr.forEach((optionNode, i) => {
        if (dialogData.options[i]) {
            optionNode.addEventListener("click", dialogData.options[i].callback);
            console.log("dialogData.options[i].callback", dialogData.options[i].callback);
        }
    });

    console.log("optionNodeArr", optionNodeArr);

    // if (dialogData.optionsCallbackArr) {
    //     dialogData.optionsCallbackArr.forEach((optionCallback, i) => {
    //         optionNodeArr[i].addEventListener("click", optionCallback);
    //     });
    // }
}

const initDialogCli = (dialogData = DEFAULT_DIALOG_DATA) => {
    drawDialogCli(dialogData);
    const dneCliExe = document.querySelector("#dne-cli-exe");
    const dneCliInput = document.querySelector("#dne-cli");
    const dialogBye = document.querySelector(".js-dialog-bye");

    // console.log("dneCliExe & dneCliInput", dneCliExe, dneCliInput);

    const runCli = () => {
        console.log("Cli command evaluation", dneCliInput.value);
        try {
            eval(dneCliInput.value);
        } catch (e) {
            console.log("Command finished with code 1", e); // передать объект исключения обработчику ошибок
        }
        dneCliInput.value = "";
    }

    dneCliExe.addEventListener("click", () => {
        runCli();
    });

    dneCliInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            runCli();
        }
    });

    dialogBye.addEventListener("click", () => {
        document.querySelector(".dialog").style.display = "none";
        const dialogVertical = document.querySelector(".dialog-vertical");
        if (dialogVertical) {
            dialogVertical.querySelector(".channel-feed__body").innerHTML = "";
            dialogVertical.classList.add("--zero-inbox");
        }
    });
}

export { initDialogCli, createDialogDataObj, getDialogOptionMarkup };
