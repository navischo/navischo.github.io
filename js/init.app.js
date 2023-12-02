import "./dne-cli.js";
import "./swiper/swiper.module.js";
import "./cards/structure.cards.js";
import "./page/dom.page.js";
import "./cards/dom.cards.js";
import "./cards/doorDom.cards.js";
import "./catalog/dom.catalog.js";
import "./catalog/chips.catalog.js";
import "./hud/balance.hud.js";
import "./hud/score.hud.js";
import "./hud/time.hud.js";
import "./router/router.module.js";
import "./hud/dom.hud.js";
import "./hud/inventory.hud.js";
import "./hud/tab.hud.js";
import "./hud/fon.hud.js";
import "./hud/dialogCli.hud.js";
import "./quest/structure.quest.js";
import "./hud/btn.hud.js";
import "./page/screen.page.js";
import "./page/advice.page.js";
import "./page/cutscene.page.js";
import "./page/map.page.js";
import "./popup/save.popup.js";
import "./inInteraction/interface.inInteraction.js";
import "./utils/initCybrTitle.js";
import "./utils/initHypnosoftLoader.js";
import "./utils/toggleHUD.js";
import "./utils/initOneMoreBtn.js";
import "./utils/initCredits.js";
import "./utils/matchGenreBonus.js";
import "./utils/initHotline.js";
import "./utils/initGameBoy.js";
import "./utils/initTinder.js";
import "./utils/initBtnZeroInbox.js";
import "./hud/chat.hud.js";
import "./structure/core.structure.js";
import "./structure/admin/profile.page.js";

import {initInventoryPopupJquery} from "./utils/initInventoryPopup.jquery.js";
import {initKeyboard} from "./utils/initKeyboard.js";
import {initCardBuilder} from "./hud/cardBuilder.hud.js";
import { NOKIA_MENUS } from "./hud/fon.hud.js";
import { initNokiaPopup } from "./hud/nokia.hud.js";
import {quests} from "./quest/structure.quest.js";
import {initQuest} from "./quest/dom.quest.js";
import {initIntervalScreen} from "./page/screen.page.js";
import {redrawMap, drawMapModal} from "./page/map.page.js";
import {dialog} from "./hud/dialog.hud.js";
import {initCollector} from "./utils/initCollector.js";
import {initSettingOptionsUpdate} from "./utils/updSettingOptions.js";
import {initGameBoy} from "./utils/initGameBoy.js";
import {initMatchMaking} from "./router/initMatchMaking.js";
import {initRoller} from "./utils/initTinder.js";
import {makeWallSprayable} from "./utils/makeWallSprayable.js";
import {initTerminal} from "./utils/initTerminal.js";
import {initBtnZeroInbox} from "./utils/initBtnZeroInbox.js";
import {enterCity} from "./utils/enterCity.js";
import { updNokiaLobby } from "./router/callFriend.js";

const initApp = () => {
    initInventoryPopupJquery();

    $('.js-open-card-builder').magnificPopup({
        type: 'inline',
        midClick: true
    });

    initCardBuilder();

    $('.js-phone').magnificPopup({
        type: 'inline',
        midClick: true
    });
    const fon = document.querySelector(".js-phone");
    fon.addEventListener("click", () => {
        fon.classList.remove("--shake");
        if (win77.router.matchmaking) {
            updNokiaLobby();
        }
    });

    initNokiaPopup(NOKIA_MENUS[0]);

    $('.js-dialog').magnificPopup({
        type: 'inline',
        midClick: true
    });

    dialog.init();

    $('.js-open-keyboard').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.js-open-terminal').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.js-open-quest').magnificPopup({
        type: 'inline',
        midClick: true
    });

    initQuest(quests.bossDead);

    $('.js-open-map').magnificPopup({
        type: 'inline',
        midClick: true
    });

    drawMapModal();
    redrawMap();

    $('.js-open-load').magnificPopup({
        type: 'inline',
        midClick: true
    });

    // $('.js-open-pokeball').magnificPopup({
    //     type: 'inline',
    //     midClick: true
    // });

    $('.js-open-setting').magnificPopup({
        type: 'inline',
        midClick: true
    });

    win77.swiper.slideTo(2, 0);
    initIntervalScreen(true, true);
    initIntervalScreen();
    initKeyboard();
    initCollector();
    initSettingOptionsUpdate();
    initGameBoy();
    initMatchMaking();
    // initRoller();
    initBtnZeroInbox();
    makeWallSprayable();
    initTerminal();
    enterCity();
}

export { initApp };
