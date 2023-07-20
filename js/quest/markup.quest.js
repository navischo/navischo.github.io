const getQuestMarkup = () =>
    `<section class="js-quest quest --max-map">
        <div class="quest__achievements">
            <div class="quest__achievements-item"></div>
            <div class="quest__achievements-item"></div>
            <div class="quest__achievements-item"></div>
            <div class="quest__achievements-item"></div>
        </div>
        <div class="quest__left">
            <div class="button-toolbar">
                <a class="button button--default">
                    <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18 9.5c2.481 0 4.5 1.571 4.5 3.503 0 1.674-1.703 3.48-4.454 3.48-.899 0-1.454-.156-2.281-.357-.584.358-.679.445-1.339.686.127-.646.101-.924.081-1.56-.583-.697-1.007-1.241-1.007-2.249 0-1.932 2.019-3.503 4.5-3.503zm0-1.5c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003zm-.668 6.5h-1.719v-.369l.938-1.361v-.008h-.869v-.512h1.618v.396l-.918 1.341v.008h.95v.505zm3.035 0h-2.392v-.505l1.306-1.784v-.011h-1.283v-.7h2.25v.538l-1.203 1.755v.012h1.322v.695zm-10.338 9.5c1.578 0 2.971-1.402 2.971-3h-6c0 1.598 1.45 3 3.029 3zm.918-7.655c-.615-1.001-.947-2.159-.947-3.342 0-3.018 2.197-5.589 5.261-6.571-.472-1.025-1.123-1.905-2.124-2.486-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.173-.939-2.123-2.097-2.123s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h9.782c.425-.834.931-1.764 1.165-2.655zm-.947-15.345c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1z"></path>
                    </svg>
                </a>
                <a class="button button--default">
                    <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z"></path>
                    </svg>
                </a>
            </div>

            <div class="quest__overview">
                <div class="js-quest-bonus time quest__time">25:00</div>
                <header class="quest__header">
                    <img class="quest__img" width="50" height="96" alt="image_2022-12-14_22-24-42" src="data:image/png;base64,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">
                    <h1 class="js-quest-title quest__title fw-h1">Добро вознаграждается</h1>
                    <p class="js-quest-descr fw-p fw-main-color">Lorem ipsum Dolor sit</p>
                </header>

                <button class="js-quest-follow fw-submit btn-reset --visible">Почати</button>
                <button class="js-quest-finish fw-submit btn-reset">Готово</button>

                <div class="js-quest-checkpoints-parent fw-check-list custom-scrollbar --y">
                    <button class="js-quest-checkpoint fw-check-row fw-check-row--checked">Забрать награду из магазина кассиуса райдера</button>
                </div>
            </div>
            <div class="quest__settings">
                <div class="quest__arsenal">
                    <div id="js-quest-arsenal" class="quest__arsenal-preview">
                        <img src="img/quest-settings--arsenal-3.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="quest__right">
            <div class="quest__map-preview">
                <img class="js-quest-minimap quest__map-preview-img" src="img/img-map--boss-dead.png" alt="">
            </div>
            <div class="quest__settings-controls">
                <div class="form-field">
                    <label class="form-field__label" for="quest-budget">Budget</label>
                    <input id="quest-budget" class="form-field__input" type="number" name="budget" value="10000" min="10000" max="30000">
                </div>

                <div class="form-field">
                    <label class="form-field__label" for="quest-income">Income</label>
                    <input id="quest-income" class="form-field__input" type="number" name="budget" value="70000" readonly>
                </div>

                <div class="form-field">
                    <label class="form-field__label" for="quest-time">Time</label>
                    <input id="quest-time" class="form-field__input" type="number" name="budget" value="25" min="20" max="120">
                </div>
            </div>
        </div>

    </section>
`;

export { getQuestMarkup };
