import { appendCardToInventory } from "../hud/inventory.hud.js";
import { getCardById } from "./getCardById.js";
import { win77 } from "../dne-cli.js";


const parent = document.querySelector("#project-obj");
const projectDetails = `
    <span class="project-detail">enterPrice: <span class="js-prj-enter-price"></span>,</span>
<!--    <span class="project-detail">lineupLength: <span class="js-prj-lineup-length"></span>,</span>-->
    <span class="project-detail">capacity: <span class="js-prj-capacity"></span>,</span>
    <span class="project-detail">stages: <span class="js-prj-stages"></span>,</span>
`;

const setSetting = (settingObj) => {
    const name = parent.querySelector(".js-prj-name");
    const executive = parent.querySelector(".js-prj-executive");
    const point = parent.querySelector(".js-prj-point");

    const details = parent.querySelector(".js-prj-details");
    const detailsBtn = document.querySelector(".js-open-details");
    const detailsList = parent.querySelector("#project-details-list");
    detailsList.innerHTML = projectDetails;
    const detailsNodes = {
        enterPrice: document.querySelector(".js-prj-enter-price"),
        lineupLength: document.querySelector(".js-prj-lineup-length"),
        capacity: document.querySelector(".js-prj-capacity"),
        stages: document.querySelector(".js-prj-stages"),
    }

    name.textContent = settingObj.title;
    point.textContent = settingObj.point;

    detailsNodes.enterPrice.textContent = settingObj.enterPrice;
    // detailsNodes.lineupLength.textContent = win77.game.event.lineupLength;
    detailsNodes.capacity.textContent = settingObj.capacity;
    detailsNodes.stages.textContent = settingObj.roomNumber;


    console.log(settingObj.executive, getCardById(settingObj.executive, win77.game.catalog.all), win77.game.catalog.all);
    if (!win77.isPlayerOnMap) {
        executive.textContent = settingObj.executive;
    } else {
        executive.innerHTML = ``;
        const executiveNode = appendCardToInventory(getCardById(settingObj.executive, win77.game.catalog.all), "executive");
        $(executiveNode).magnificPopup({
            type: 'inline',
            midClick: true
        });

    }

    detailsBtn.addEventListener("click", () => {
        details.classList.toggle("fw-d-none");
    });

    parent.classList.remove("fw-d-none");
}

const resetSetting = () => {
    parent.classList.add("fw-d-none");
}

win77.resetSetting = resetSetting;

export { setSetting };
