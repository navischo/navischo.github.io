const drawDoorCardPage = (cardData) => {
    const newCard = document.querySelector(".card-page");
    newCard.style.display = "block";
    newCard.id = `dne-card-page-${cardData.id}`;
    newCard.querySelector(".js.card-page__title").textContent = cardData.name;
    if (cardData.budget !== 0) {
        newCard.querySelector(".js.card-page__budget").textContent = `${cardData.budget}`;
    } else {
        newCard.querySelector(".js.card-page__budget").style.display = "none";
    }
    newCard.querySelector(".js.card-page__id").textContent = `#${cardData.id}`;
    newCard.querySelector(".js.card-page__profit").textContent = `${cardData.profit}`;
    newCard.querySelector(".js.card-page__level").textContent = `${cardData.level}lvl`;
    newCard.querySelector(".js.card-page__roles").textContent = `${cardData.roles}.`;
    newCard.querySelector(".js.card-page__origins").textContent = `${cardData.profitOrigins}.`;
    newCard.querySelector(".js.card-page__client").textContent = `Замовлення від ${cardData.client}`;
    newCard.querySelector(".js.card-page__description").innerHTML = `${cardData.description}`;
    newCard.querySelector(".js.card-page__penalty").textContent = `${cardData.penalty}`;
    // newCard.querySelector(".js.card-page__bonus").textContent = `${cardData.level}`;
    console.log('cardData', cardData);
}