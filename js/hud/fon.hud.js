import { win77 } from "../dne-cli.js";
import { chooseOption } from "./chat.hud.js";
import { initHotline } from "../utils/initHotline.js";
import { createDialogDataObj, initDialogCli } from "./dialogCli.hud.js";


const NOKIA_MENUS = [
    {
        title: "Pokewall",
        items: [
            {
                href: "#admin",
                text: "navischo",
                callback: (e) => {
                    e.preventDefault();
                    win77.lastHotline = initHotline(0);
                    console.log(`Hotline to navischo`);
                    win77.getAchievement("connecting");
                }
            }, {
                href: "#",
                text: "Fight Club",
                callback: (e) => {
                    e.preventDefault();
                    win77.lastHotline = initHotline(1);
                    const OPTION_LINES = ["Поклич Навіщо", "Бачив у вас хлопця з тату черепа на всю голову. Як його імя?"];
                    initDialogCli(createDialogDataObj(
                        OPTION_LINES,
                        "Fight Club",
                        [
                            () => {
                                win77.lastHotline = initHotline(0);
                                console.log(`Hotline to navischo`);
                                const OPTION_LINES = ["Дякую за пояснення!", `Що ти таке?`, `Приємно познайомитись, Навіщо! Мене звуть ${win77.game.player.id}`];
                                initDialogCli(createDialogDataObj(
                                    OPTION_LINES,
                                    "navischo",
                                    [
                                        () => {
                                            chooseOption(OPTION_LINES[0], "--blue");
                                        },
                                        () => {
                                            chooseOption(OPTION_LINES[1], "--blue");
                                        },
                                        () => {
                                            chooseOption(OPTION_LINES[2], "--blue");
                                        }
                                    ]));
                                win77.getAchievement("connecting");
                            },
                            () => {
                                chooseOption(OPTION_LINES[1], "--blue");
                            }
                        ]));
                    console.log(`Hotline to Fight Club`);
                }
            },
            {
                href: "#",
                text: "Rick C-137",
                callback: (e) => {
                    e.preventDefault();
                    win77.lastHotline = initHotline(2);
                    const OPTION_LINES = ["Давай, коли хочеш зустрітись?"];
                    initDialogCli(createDialogDataObj(
                        OPTION_LINES,
                        "Rick C-137",
                        [
                            () => {
                                chooseOption(OPTION_LINES[0], "--blue");
                            }
                        ]));
                    console.log(`Hotline to Rick C-137`);
                }
            }
            // {
            //     href: "#",
            //     text: "Green House"
            // }, {
            //     href: "#",
            //     text: "Purple Moon"
            // }, {
            //     href: "#",
            //     text: "∄"
            // }, {
            //     href: "#",
            //     text: "Fight Club"
            // }
        ]
    }
];



export { NOKIA_MENUS };
