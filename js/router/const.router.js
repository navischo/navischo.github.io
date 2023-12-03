import { CARD_TYPES } from "../cards/const.cards.js";
import {win77} from "../dne-cli.js";

const PAGE_NAMES = {
    enter: "enter",
    cards: "cards",
    npc: CARD_TYPES.npc,
    class: CARD_TYPES.class,
    loot: CARD_TYPES.loot,
    sound: CARD_TYPES.sound,
    play: "play",
    hud: "hud",
    event: "event",
    admin: "admin",
    board: "board",
    map: "map",
    setting: "setting",
};

const PIPELINES = Object.freeze({
    init: [PAGE_NAMES.enter, PAGE_NAMES.npc, PAGE_NAMES.class, PAGE_NAMES.loot, PAGE_NAMES.hud, PAGE_NAMES.event, PAGE_NAMES.board],
    easy: [{
        stepId: "easy-prepare",
        pageId: PAGE_NAMES.play,
        line: "Prepare to play",
        sec: 30,
        disableNext: false,
        conditionNext: () => true
    },
    {
        stepId: "easy-lineup",
        pageId: PAGE_NAMES.play,
        line: "Select lineup",
        sec: 120,
        disableNext: true,
        conditionNext: () => {
            const isItWinScore = win77.game.totalScore > win77.game.versusScore;
            const isInvasion = win77.game.invasion;
            return !isInvasion && isItWinScore && win77.budgetAccepted;
        }
    },
    {
        stepId: "easy-event",
        pageId: PAGE_NAMES.event,
        line: "Meet guests",
        sec: 120,
        disableNext: true,
        conditionNext: () => true
    },
    {
        stepId: "easy-admin",
        pageId: PAGE_NAMES.admin,
        line: "Get ready for next round",
        sec: 30,
        disableNext: false,
        conditionNext: () => true
    }],
    bunny: [PAGE_NAMES.play, PAGE_NAMES.map, PAGE_NAMES.setting, PAGE_NAMES.event, PAGE_NAMES.admin, PAGE_NAMES.loot],
});

const PLATFORMS = {
    screen: "screen",
    tabletop: "tabletop"
};

const DEFAULT_OPTIONS = {
    platform: PLATFORMS.screen,
    roundLimit: 7,
    maxTime: null,
    startBankroll: 16000,
    startSouls: 0,
    cardsAfterTurn: 2
}

export { PAGE_NAMES, PIPELINES, PLATFORMS, DEFAULT_OPTIONS };
