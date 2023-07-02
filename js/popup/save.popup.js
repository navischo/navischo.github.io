const popupParent = document.querySelector("#load-popup");

class Save {
    constructor(id, questId, name) {
        this.id = id;
        this.questId = questId;
        this.name = name;
    }
}

const SAVE_ARR = [
    new Save(322, "boss-dead", "Босс мертвий"),
    new Save(323, "she-wants-revenge", "Вона хоче помсти")
];

const getSaveMarkup = (saveObj) =>
`<section class="save" data-quest-id="${saveObj.questId}">
    <div class="save__preview">
        <img class="save__preview-img" src="img/save-preview/${saveObj.id}.png" alt="">
    </div>
    <div class="save__content">
        <header class="save__header">
            <h3 class="save__title">${saveObj.name}</h3>
        </header>
        <div class="save__main">
            <b class="save__time-in">151h</b>
            <b class="save__stats">
                <span>Дитя вулиць</span>
                <span>50lvl</span>
                <span>Ранчо Коронадо</span>
            </b>
            <b class="save__id">Save-${saveObj.id}</b>
            <b class="save__date">26.06.2023, 23:05</b>
        </div>
    </div>
</section>`;

const updSavePopup = () => {
    popupParent.innerHTML = ``;
    popupParent.innerHTML = SAVE_ARR.map((saveObj) => getSaveMarkup(saveObj)).join(``);
}

updSavePopup();
