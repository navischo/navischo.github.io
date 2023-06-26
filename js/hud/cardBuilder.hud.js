const initCardBuilder = () => {
    const popupContainer = document.querySelector("#card-builder-popup");
    const form = document.querySelector("#card-builder-form");
    const inputArr = form.querySelectorAll("input");

    const outputObj = {
        name: popupContainer.querySelector(".js-output-name"),
        type: popupContainer.querySelector(".js-output-type"),
        minutes: popupContainer.querySelector(".js-output-minutes"),
        tagsString: popupContainer.querySelector(".js-output-tags"),
        img: popupContainer.querySelector(".js-output-img")
    };

    const builderData = {
        name: "",
        type: "",
        minutes: "",
        tagsString: "",
        img: ""
    };

    const logData = (e) => {
        const targetName = e.target.name;
        builderData[targetName] = e.target.value;
        outputObj[targetName].textContent = builderData[targetName];
        console.log("logData: targetName, e.target.value, builderData[targetName], outputObj[targetName]", targetName, e.target.value, builderData[targetName], outputObj[targetName]);
    }

    inputArr.forEach((input) => {
        input.addEventListener("keyup", logData);
    });
}

export { initCardBuilder };
