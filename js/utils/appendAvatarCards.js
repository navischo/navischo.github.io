import { KEYS_CALLBACKS } from "./initKeyboard.js";

const selectAvatar = (e) => {
    // поставить на карту анимацию transform: translate(0, 500px);
    const parent = e.target.parentNode.parentNode;
    const selectWrap = document.querySelector(".js-talk-select");
    console.log("e.target.parent", e.target, parent);
    parent.classList.add("--animation-take");
    setTimeout(() => {
        selectWrap.innerHTML = "";
        KEYS_CALLBACKS.t();
    }, 300);
}

const appendAvatarCards = () => {
    const catalogNode = document.querySelector("#avatar-select");
    catalogNode.innerHTML = "";
    console.log("win77.game.catalog.avatar", win77.game.catalog.avatar);
    const getCardElement = (cardData) => {
        const newCard = document.createElement("div");
        newCard.style.display = "block";
        newCard.classList.add("swiper-slide");

        newCard.innerHTML = `
<article id="dne-card-${cardData.id}" class="card">
    <div class="js-card-controls card__controls">
        <button>+</button>
    </div>
    <header class="card__header">
        <div class="card__header-left">
            <small class="js card__id">#${cardData.id}</small>
            <h2 class="card__title">${cardData.name}</h2>
            <small class="card__limits">${cardData.limits}</small>
        </div>
        <div class="card__header-right">
            ${cardData.bonus !== 0 ? `<b class="card__bonus">+${cardData.bonus}</b>` : ``}
        </div>
    </header>
    <a class="card__preview">
        <img class="card__preview-img" src="${cardData.img}" alt="">
    </a>
    <p class="card__description">${cardData.description}</p>
    <footer class="card__footer">
        ${cardData.cost !== 0 ? `<b class="card__price">${cardData.cost}</b>` : ``}
    </footer>
</article>
`;

        newCard.querySelector(".js-card-controls button");
        newCard.addEventListener("click", selectAvatar);

        return newCard;
    }
    win77.game.catalog.avatar.forEach((avatarData) => {
        catalogNode.appendChild(getCardElement(avatarData));
    });
}

export { appendAvatarCards };
