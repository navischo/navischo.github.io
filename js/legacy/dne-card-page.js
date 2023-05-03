const drawDoorCardPages = (cardsData) => {
    const cardContainer = document.querySelector("#page-view-container");
    const cardTemplate = document.querySelector("#card-page-template");

    const drawDoorCardPage = (newCard, cardData) => {
        const ID = `dne-page-card-${cardData.id}`;
        console.log("drawDoorCardPage", ID, newCard, cardData);
        newCard.style.display = "block";
        newCard.id = ID;
        // drawDoorCards([cardData]);
        newCard.querySelector(".js.card-page__title").innerHTML = cardData.name;
        if (cardData.budget !== 0) {
            newCard.querySelector(".js.card-page__budget").textContent = `${cardData.budget}`;
        } else {
            newCard.querySelector(".js.card-page__budget").style.display = "none";
        }
        newCard.querySelector(".js.card-page__id").textContent = `#${cardData.id}`;
        newCard.querySelector(".js.card-page__profit").innerHTML = `${cardData.profit}`;
        newCard.querySelector(".js.card-page__level").textContent = `${cardData.level}lvl`;
        newCard.querySelector(".js.card-page__roles").textContent = `${cardData.roles}.`;
        newCard.querySelector(".js.card-page__origins").textContent = `${cardData.profitOrigins}.`;
        newCard.querySelector(".js.card-page__client").textContent = `Замовлення від ${cardData.client}`;
        newCard.querySelector(".js.card-page__description").innerHTML = `${cardData.description}`;
        newCard.querySelector(".js.card-page__penalty").textContent = `${cardData.penalty}`;
        // newCard.querySelector(".js.card-page__bonus").textContent = `${cardData.level}`;
        // console.log('cardData', cardData);


        return newCard;
    }

    // console.log("cardsData", cardsData);
    cardsData.forEach((cardData) => {
        // console.log("cardData in loop", cardData);
      const newCard = cardTemplate.cloneNode(true);
      cardContainer.appendChild(drawDoorCardPage(newCard, cardData));
    });
}
