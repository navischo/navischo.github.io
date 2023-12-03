import { CARD_TYPES } from "../cards/const.cards.js";
import { win77 } from "../dne-cli.js";
import { initInventoryPopupJquery } from "../utils/initInventoryPopup.jquery.js";

const inventoryMarkup = `
<div id="project-obj" class="fw-d-none project-obj inventory">
    project:&nbsp;&nbsp;{<br>
    &nbsp;&nbsp;<span>name:</span>&nbsp;
    <span class="js-prj-name">Electro Exhibition</span>,
    <br>&nbsp;&nbsp;<span>executive:</span>&nbsp;
    <span class="js-prj-executive">Navi</span><span>,
    <br>&nbsp;&nbsp;<span>point:</span>&nbsp;
    <span class="js-prj-point">Keller</span>,<span class="fw-d-none js-prj-details">
    <br>&nbsp;&nbsp;<span>details:</span>&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span id="project-details-list" class="inventory-items">
        
    </span>
    &nbsp;&nbsp;},
    </span>
    <br>&nbsp;&nbsp;<button class="js-open-details cp-button">Details()</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;<br>}</span>
</div>
<div class="player-obj inventory">
<span class="js-matchmaking-wrap fw-d-none">
    mm:&nbsp;{
    <span id="matchmaking-list" class="inventory-items"></span>
    }<br><br>
    </span>
    <span class="js-player-wrap">
    player:<br>&nbsp;&nbsp;{<span class="js-class-wrap fw-d-none"><br>
    &nbsp;&nbsp;<span data-advice-id="class">class:</span><br>&nbsp;&nbsp;{&nbsp;
    <span id="player-class-list" class="inventory-items"></span>
    &nbsp;}</span><span class="js-crew-wrap fw-d-none">,
    <br>&nbsp;&nbsp;<span data-advice-id="crew">crew:</span>&nbsp;{&nbsp;<br>
    <span id="player-crew-list" class="inventory-items"></span>
    &nbsp;&nbsp;}</span><span class="js-dia-wrap fw-d-none">,
    <br>&nbsp;&nbsp;<span data-advice-id="dia">dia:</span>&nbsp;{&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;<span id="player-dia-list" class="inventory-items"></span>
    &nbsp;&nbsp;}</span>
    <br>}<br><br>
    </span>
    <div class="js-in-car"></div>
    <a href="#nokia-popup" class="js-phone inventory-item">call me()</a>
</div>
<div class="inventory">
    <span data-advice-id="inventory">inventory:</span> <br>{<br>
    <span id="inventory-list" class="inventory-items"></span>
    }<br><br>
    <span id="one-more"><button>+</button></span><span data-advice-id="sound">sound:</span> <br>{<br>
    <span id="sound-list" class="inventory-items"></span>
    }
</div>

`;
document.querySelector(".swiper")?.insertAdjacentHTML("afterend", inventoryMarkup);


const carInventoryMarkup = `
in Car(<button class="js-car-name">car</button>)<span class="js-car-in">{<br>
<span id="car-inventory-list" class="inventory-items"></span>
}</span>
`;
const carInventoryParent = document.querySelector(".js-in-car");


const inventoryList = document.querySelector("#inventory-list");
const soundList = document.querySelector("#sound-list");
const playerClassList = document.querySelector("#player-class-list");
const playerCrewList = document.querySelector("#player-crew-list");
const playerDiaList = document.querySelector("#player-dia-list");

const projectExecutiveList = document.querySelector(".js-prj-executive");

const cardNodesByType = {
    [CARD_TYPES.loot]: inventoryList,
    [CARD_TYPES.sound]: soundList,
    [CARD_TYPES.class]: playerClassList,
    [CARD_TYPES.npc]: playerCrewList,
    [CARD_TYPES.dia]: playerDiaList,
    executive: projectExecutiveList
}

const appendCardToInventory = (cardData, cardType = CARD_TYPES.loot) => {
    const newListItem = document.createElement("a");
    newListItem.classList.add("inventory-item");
    newListItem.textContent = cardData.name;
    newListItem.href = `#card-popup`;

    newListItem.addEventListener("click", (e) => {
        win77.showCard(cardData);
    });

    cardNodesByType[cardType].appendChild(newListItem);

    return newListItem;
}

const appendPlayerToInventory = (playerId) => {
    const matchmakingList = document.querySelector("#matchmaking-list");
    const newListItem = document.createElement("a");
    newListItem.classList.add("inventory-item");
    newListItem.textContent = playerId;

    newListItem.addEventListener("click", (e) => {
        win77.switchPlayer(playerId);
    });

    matchmakingList.appendChild(newListItem);
}

const inventory = {
    append: appendCardToInventory,
    clear: () => {
        cardNodesByType.loot.innerHTML = ``;
        cardNodesByType.class.innerHTML = ``;
        cardNodesByType.npc.innerHTML = ``;
        cardNodesByType.sound.innerHTML = ``;
        cardNodesByType.dia.innerHTML = ``;
        document.querySelector("#matchmaking-list").innerHTML = ``;
    }
}


const initCarInventory = (carCard) => {
    carInventoryParent.innerHTML = carInventoryMarkup;
    // carInventoryParent.classList.add("car-inventory");
    const nameNode = carInventoryParent.querySelector(".js-car-name");
    const carIn = carInventoryParent.querySelector(".js-car-in");
    nameNode.textContent = `${carCard.name}`;
    nameNode.addEventListener("click", () => {
        carIn.classList.toggle("js-car-open");
    });
}

const initInventory = () => {
    const player = win77.game.player;
    inventory.clear();
    // console.log("initInventory", player, cardNodesByType);

    player.npc.forEach((npcCard) => {
        appendCardToInventory(npcCard, CARD_TYPES.npc);
    });

    player.class.forEach((classCard) => {
        appendCardToInventory(classCard, CARD_TYPES.class);
    });

    player.loot.forEach((lootCard) => {
        appendCardToInventory(lootCard, CARD_TYPES.loot);
    });

    player.sound.forEach((soundCard) => {
        // console.log("player.sound, soundCard", player.sound, soundCard);
        appendCardToInventory(soundCard, CARD_TYPES.sound);
    });

    player.dia?.forEach((diaCard) => {
        appendCardToInventory(diaCard, CARD_TYPES.dia);
    });

    player.cars.forEach((carCard) => {
        initCarInventory(carCard);
    });

    const matchmakingWrap = document.querySelector(".js-matchmaking-wrap");
    if (win77.router?.matchmaking) {
        win77.router.playersQueue.forEach((playerId) => {
            // const playerObj = win77.findPlayerObj(playerId);
            // appendPlayerToInventory(playerObj.avatar[0], CARD_TYPES.avatar);
            appendPlayerToInventory(playerId);
        });
        matchmakingWrap.classList.remove("fw-d-none");
    } else {
        matchmakingWrap.classList.add("fw-d-none");
    }

    const playerWrap = document.querySelector(".js-player-wrap");
    if (!(win77.game.player.class.size > 0) && !(win77.game.player.npc.size > 0) && !(win77.game.player.dia.size > 0)) {
        playerWrap.classList.add("fw-d-none");
    } else {
        playerWrap.classList.remove("fw-d-none");
    }

    if (win77.game.player.class.size > 0) {
        document.querySelector(".js-class-wrap").classList.remove("fw-d-none");
    }

    if (win77.game.player.npc.size > 0) {
        document.querySelector(".js-crew-wrap").classList.remove("fw-d-none");
    }

    if (win77.game.player.lvl >= 3 && win77.game.player.dia.size > 0) {
        document.querySelector(".js-dia-wrap").classList.remove("fw-d-none");
    }

    initInventoryPopupJquery();
}

export { initInventory, inventoryMarkup, appendCardToInventory };
