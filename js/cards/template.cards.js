const getCardElement = (cardData) => {
    const newCard = document.createElement("div");
    newCard.style.display = "block";
    newCard.id = `dne-card-${cardData.id}`;

    newCard.innerHTML = `
<article class="card">
    <div class="js-card-controls card__controls">
        <button>+</button>
    </div>
    <header class="card__header">
        <div class="card__header-left">
            <small class="js card__id">#${cardData.id}</small>
            <h2 class="card__title">${cardData.name}</h2><!-- data-advice-id="${cardData.type}" -->
            <small class="card__limits">${cardData.limits}</small>
        </div>
        <div class="card__header-right">
            ${cardData.bonus !== 0 ? `<b class="card__bonus">+${cardData.bonus}</b>` : ``}
        </div>
    </header>
    <a class="card__preview" ${cardData.credits ? `href="${cardData.credits}" target="_blank"` :  ``}>
        <img class="card__preview-img" src="" alt="">
    </a>
    <p class="card__description">${cardData.longline ? cardData.longline : cardData.description.slice(0, 50)}</p>
    <footer class="card__footer">
        ${cardData.cost !== 0 ? `<b class="card__price">${cardData.cost}</b>` : ``}
    </footer>
</article>
`;

    return newCard;
}

const getDoorCardElement = (cardData) => {
    const newCard = document.createElement("div");
    newCard.style.display = "block";
    newCard.id = `dne-card-${cardData.id}`;

    newCard.innerHTML = `
    <article class="card card--door">
        <div class="js-card-controls card__controls">
            <button>+</button>
        </div>
        <header class="card__header">
            <div class="card__header-left">
                <small class="js card__id">#${cardData.id}</small>
                <h2 class="card__title">${cardData.name}</h2>
                <small class="card__limits">Замовлення від ${cardData.client}</small>
            </div>
            <div class="card__header-right">
                ${cardData.level !== 0 ? `<b class="card__bonus">${cardData.level}</b>` : ``}
            </div>
        </header>
        <div class="card__preview">
            <img class="card__preview-img" src="" alt="">
        </div>
        <p class="card__description">${cardData.longline ? cardData.longline : cardData.description.slice(0, 50)}</p>
        <p class="card__summary">
            Ролі: <small class="card__roles">${cardData.roles}.</small>
            <span class="card__origins-wrap">Джерела прибутку: <small class="card__origins"></small></span>
            <span class="card__last-line">У разі провалу: <small class="card__penalty">${cardData.penalty}</small></span>
        </p>
        <footer class="card__footer">
                ${cardData.budget !== 0 ? `<b class="card__budget">${cardData.budget}</b>` : ``}
                <b class="card__profit">${cardData.profit}</b>
        </footer>
    </article>
    `;

    return newCard;
}

export { getCardElement, getDoorCardElement };
