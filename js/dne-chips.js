console.log("DNELootArr", DNELootArr);

const catalogControls = document.querySelector(".js-catalog-controls");
const catalogControlsToggleArr = document.querySelectorAll(".js-toggle-catalog-controls");

catalogControlsToggleArr.forEach((catalogControlsToggle) => {
    catalogControlsToggle.addEventListener("click", () => {
        catalogControls.classList.toggle("catalog-controls--visible");
    });
});


const drawChips = (cardData, parentSelector = ".js-chip-list") => {
    const chipsParent = document.querySelector(parentSelector);
    const chipTemplate = document.querySelector(".js-toggle-chip");
    cardData.forEach((chip) => {
        if (chip.isBuild) {
            const newChip = chipTemplate.cloneNode(true);
            console.log(newChip);
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
}
