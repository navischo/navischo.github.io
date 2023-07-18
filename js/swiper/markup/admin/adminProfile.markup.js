const adminProfileMarkup = `
<div class="app-skeleton profile">
    <div class="app-container">
        <div class="app-a">
            <div class="card-menu">
                <h3 class="card-menu__title" data-advice-id="crew">Crew</h3>
                <div class="js-crew-menu card-menu__list">
                </div>
            </div>
        </div>
        <div class="app-main">
            <div class="avatar glitch" data-img-name="avatar.jpg">
                <div class="avatar__glitch"></div>
                <div class="glitch__layers">
                    <div class="glitch__layer"></div>
                    <div class="glitch__layer"></div>
                    <div class="glitch__layer"></div>
                </div>
                <span class="clipPath"></span>
                <img src="img/avatar.jpg" alt="">
                <a class="js-open-direct button button--default avatar__exit">
                    <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18 9.5c2.481 0 4.5 1.571 4.5 3.503 0 1.674-1.703 3.48-4.454 3.48-.899 0-1.454-.156-2.281-.357-.584.358-.679.445-1.339.686.127-.646.101-.924.081-1.56-.583-.697-1.007-1.241-1.007-2.249 0-1.932 2.019-3.503 4.5-3.503zm0-1.5c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003zm-.668 6.5h-1.719v-.369l.938-1.361v-.008h-.869v-.512h1.618v.396l-.918 1.341v.008h.95v.505zm3.035 0h-2.392v-.505l1.306-1.784v-.011h-1.283v-.7h2.25v.538l-1.203 1.755v.012h1.322v.695zm-10.338 9.5c1.578 0 2.971-1.402 2.971-3h-6c0 1.598 1.45 3 3.029 3zm.918-7.655c-.615-1.001-.947-2.159-.947-3.342 0-3.018 2.197-5.589 5.261-6.571-.472-1.025-1.123-1.905-2.124-2.486-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.173-.939-2.123-2.097-2.123s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h9.782c.425-.834.931-1.764 1.165-2.655zm-.947-15.345c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1z"></path>
                    </svg>
                </a>
            </div>
            <div class="avatar-controls">
                <button class="js-open-direct my-cybr-btn">SET</button>
            </div>
        </div>
        <div class="app-b">
<!--            <h3 class="card-menu__title" style="margin-bottom: 69px ">-->
<!--                -->
<!--                CENTRAL DATABASE-->
<!--            </h3>-->
            <div class="profile-field">
                <h4 class="profile-field__label" data-advice-id="class">CLASS UNIT</h4>
                <input type="text" class="profile-field__input" value="TECHIE">
            </div>
            <div class="profile-field">
                <h4 class="profile-field__label" data-advice-id="dia">SPECIAL DIA</h4>
                <input type="text" class="profile-field__input" value="DRAW">
                <input type="text" class="profile-field__input" value="CODE">
                <input type="text" class="profile-field__input" value="PLAY MUSIC">
            </div>
            <div class="card-menu" data-advice-id="inventory">
                <div class="js-inventory-menu card-menu__list">
                
                </div>
            </div>
        </div>
    </div>
</div>
`;

export { adminProfileMarkup };