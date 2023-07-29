const adminProfileMarkup = `
<div class="js-profile-page app-skeleton profile">
    <div class="app-container">
        <div class="app-a">
            <div class="card-menu">
                <h3 class="card-menu__title" data-advice-id="crew">Crew</h3>
                <div class="js-profile-crew card-menu__list">
                </div>
            </div>
        </div>
        <div class="app-main">
            <div class="js-profile-avatar avatar glitch" data-img-name="crew.jpg">
                <div class="avatar__glitch"></div>
                <div class="glitch__layers">
                    <div class="glitch__layer"></div>
                    <div class="glitch__layer"></div>
                    <div class="glitch__layer"></div>
                </div>
                <span class="clipPath"></span>
                <img class="js-profile-character-img" src="img/crew.jpg" alt="">
                <a class="js-profile-character-load button button--default avatar__exit">
                    <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z"></path>
                    </svg>
                </a>
            </div>
            <div class="avatar-controls">
<!--                <button class="js-open-direct my-cybr-btn">SET</button>-->
            </div>
        </div>
        <div class="app-b">
<!--            <h3 class="card-menu__title" style="margin-bottom: 69px ">-->
<!--                -->
<!--                CENTRAL DATABASE-->
<!--            </h3>-->
            <div class="profile-field">
                <h4 class="profile-field__label" data-advice-id="class">CLASS UNIT</h4>
                <input type="text" class="js-profile-class profile-field__input" value="TECHIE">
            </div>
            <div class="profile-field">
                <h4 class="profile-field__label" data-advice-id="dia">SPECIAL DIA</h4>
                <input type="text" class="js-profile-dia profile-field__input" value="DRAW">
                <input type="text" class="js-profile-dia profile-field__input" value="CODE">
                <input type="text" class="js-profile-dia profile-field__input" value="PLAY MUSIC">
            </div>
            <div class="card-menu" data-advice-id="inventory">
                <div class="js-profile-inventory card-menu__list">
                
                </div>
            </div>
        </div>
    </div>
</div>
`;

export { adminProfileMarkup };
