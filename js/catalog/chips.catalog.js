const clearChips = (parentSelector = ".js-chip-list") => {
    const chipsParents = document.querySelectorAll(parentSelector);
    chipsParents.forEach((chipsParent) => {
        chipsParent.innerHTML = "";
    });
}

const catalogControls = document.querySelector(".js-catalog-controls");
const catalogControlsToggleArr = document.querySelectorAll(".js-toggle-catalog-controls");

catalogControlsToggleArr.forEach((catalogControlsToggle) => {
    catalogControlsToggle.addEventListener("click", () => {
        catalogControls.classList.toggle("catalog-controls--visible");
        const cardsNavLink = document.querySelector(".js-cards-nav-link")
        cardsNavLink.classList.remove("--active");
    });
});

const drawChips = (cardData, parentSelector = ".js-chip-list") => {
    const chipsParent = document.querySelector(parentSelector);
    const chipTemplate = document.querySelector(".js-toggle-chip");
    const clearAllDoorsBtn = document.querySelector(".js-clear-all-doors");
    const clearAllItemsBtn = document.querySelector(".js-clear-all-items");
    cardData.forEach((chip) => {
        if (chip.isBuild) {
            const newChip = chipTemplate.cloneNode(true);
            // console.log(newChip);
            newChip.id = `dne-chip-${chip.id}`;
            newChip.classList.add("chip--visible");
            newChip.textContent = `${chip.id}`;
            newChip.addEventListener("click", () => {
                newChip.classList.toggle("chip--active");
                document.querySelector(`#dne-card-${chip.id}`).classList.toggle("fw-d-none-i");
            });
            chipsParent.appendChild(newChip);
        }
    });

    const toggleAllDoors = () => {
        const allChips = Array.from(clearAllDoorsBtn.parentElement.querySelectorAll(".chip:not(.js-clear-all-doors)"));
        allChips.forEach((chip) => {
            chip.classList.remove("chip--active");
            console.log("ChipID", chip, `#dne-card-${chip.id.slice(9)}`)
            document.querySelector(`#dne-card-${chip.id.slice(9)}`).classList.add("fw-d-none-i");
        });
    };

    const toggleAllItems = () => {
        const allChips = Array.from(clearAllItemsBtn.parentElement.querySelectorAll(".chip:not(.js-clear-all-items)"));
        allChips.forEach((chip) => {
            chip.classList.remove("chip--active");
            console.log("ChipID", chip, `#dne-card-${chip.id.slice(9)}`)
            document.querySelector(`#dne-card-${chip.id.slice(9)}`).classList.add("fw-d-none-i");
        });
    };

    clearAllDoorsBtn.addEventListener("click", toggleAllDoors);
    clearAllItemsBtn.addEventListener("click", toggleAllItems);
}

export { clearChips, drawChips };
