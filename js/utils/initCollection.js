import { win77 } from "../dne-cli.js";
import { initCatalog, loadCatalog } from "../catalog/dom.catalog.js";


const initCollection = (key, cardObjArr) => {
    const catalog = document.querySelector(".js-cards-catalog");
    const fieldset = document.createElement("section");
    fieldset.classList.add("collection");
    fieldset.innerHTML =
    `
        <h3 class="collection__title"></h3>
        <div id="collection-${key}" class="collection__cards"></div>
    `;
    const title = fieldset.querySelector(".collection__title");
    const cardContainer = fieldset.querySelector(`#collection-${key}`);
    title.textContent = key;

    console.log(key, cardObjArr, win77.game.catalog.loot);
    // catalog.appendChild(fieldset);
    catalog.insertBefore(fieldset, catalog.querySelector("*:first-child"));
    cardObjArr.forEach((cardObj) => {
        // findAndCollect(cardObj);
        const element = catalog.querySelector(`#dne-card-${cardObj.id}`);
        if (element) {
            cardContainer.appendChild(element);
        } else {
            console.log(`${cardObj.id} is not on page`);
        }
    });
    // drawLootCards(cardObjArr, `#collection-${key}`);
}

const initCollections = () => {
    const collections = {
        soundTool: [],
        soundSystem: [],
        food: []
    };
    win77.game.catalog.all.forEach((cardObj) => {
        if (cardObj.collection === "food") {
            collections.food.push(cardObj);
        } else if (cardObj.collection === "soundSystem") {
            collections.soundSystem.push(cardObj);
        } else if (cardObj.collection === "soundTool") {
            collections.soundTool.push(cardObj);
        }
    });
    Object.keys(collections).forEach((collectionKey) => {
        initCollection(collectionKey, collections[collectionKey]);
    });
}

const appendFilterButton = () => {
    let collectionOpen = false;
    const catalog = document.querySelector(".js-cards-catalog");
    const filterBtn = document.createElement("button");
    filterBtn.innerHTML = `<svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                               <path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z"></path>
                           </svg>`;
    filterBtn.classList.add("button");
    filterBtn.classList.add("button--default");
    filterBtn.classList.add("js-filter-by-collection");

    filterBtn.addEventListener("click", () => {
        if (!collectionOpen) {
            initCollections();
            collectionOpen = true;
        } else {
            initCatalog(loadCatalog());
            collectionOpen = false;
        }
    });

    catalog.appendChild(filterBtn);
}

// win77.initCollection = initCollection;

export { initCollections, appendFilterButton };
