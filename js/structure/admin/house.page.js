import { Page } from "../core.structure.js";

const initHousePage = () => {
    const parent = document.querySelector(".js-house-page");
    const link = () => {
        console.log("Go to House page");
    }
    const init = () => {
        // run all scripts to make House work
        const spaceId = localStorage.getItem("my-space-id");
        const titleNode = parent.querySelector(".js-house-title");
        titleNode.textContent = `${spaceId}`;
    };

    return new Page(parent, link, init);
}
const HousePage = initHousePage();

export { HousePage };
