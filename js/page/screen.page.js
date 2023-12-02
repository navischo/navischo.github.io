import { getRandomInt } from "../utils/getCardById.js";
import { win77 } from "../dne-cli.js";
import { PAGE_NAMES, isItCardsPage } from "../router/router.module.js";

const SCREEN_NAMES = [
    `screen-nohud--on-bike`,
    `screen-no-hud--in-ferrari`,
    `screen-nohud--shoot-n-fly`,
    `screen-nohud--rain`,
    `screen-nohud--pro-mafia`,
    `screen-nohud--combat-master`,
    `screen-nohud--aldecaldos`,
    `screen-hud--spalah`,
    `screen-hud--spalah-2@2x1`,
    `screen-hud--spalah-3`,
    `screen-nohud--popshop`,
    `screen-nohud--rider`,
    `screen-nohud--afterafterlife`,
    `screen-nohud--braindance`,
    `screen-nohud--hotfix`,
    `screen-nohud--doll`,
    `screen-nohud--beach-day`,
    `screen-nohud--chill-johny`,
    `screen-nohud--driver`,
    `screen-nohud--city-center`,
    `screen-nohud--enter-afterlife`,
    `screen-nohud--escape`,
    `screen-nohud--drugracer`,
    `screen-nohud--gun`,
    `screen-nohud--fight`,
    `screen-nohud--fight-2`,
    `screen-nohud--fight-gang`,
    `screen-nohud--new-place`,
    `screen-nohud--garden`,
    `screen-nohud--indoor`,
    `screen-nohud--netlab`,
    `screen-nohud--coding`,
    `screen-nohud--night-session`,
    `screen-nohud--padic`,
    `screen-nohud--park`,
    `screen-nohud--tramway`,
    `screen-nohud--rasklad`,
    `screen-nohud--witcher-2077`,
    `screen-nohud--koyote`,
    `screen-nohud--ship-goodbye`,
    `screen-nohud--car-inside`,
    `screen-nohud--ship-chill`,
    `screen-nohud--latinos-smoke`,
    `screen-nohud--launch-platform`,
    `screen-nohud--porsche-inside`,
    `screen-nohud--porsche-drone`,
    `screen-nohud--porsche-in-city`,
    `screen-nohud--garage`,
    `screen-nohud--studio`,
    `screen-nohud--vik`,
    `screen-nohud--door-vik`,
    `screen-nohud--smoke-vik`,
    `screen-nohud--izop`,
    `screen-nohud--in-mazda`,
    `screen-nohud--after-mazda`,
    `screen-nohud--in-taxi`,
    `screen-nohud--mechanic-place`,
    `screen-nohud--judys-dacha`,
    `screen-nohud--work-dzen`,
    `screen-nohud--reabilitation`,
    `screen-nohud--number-one`,
    `screen-nohud--megatower-01`,
    `screen-nohud--salon`,
    `screen-nohud--yellow-light`,
    `screen-nohud--hello-carry`,
    `screen-nohud--party-sky`,
    `screen-nohud--system-shock`,
    `screen-nohud--place-to-think`,
    `screen-nohud--ghost-ride`,
    `screen-nohud--shablya`,
    `screen-nohud--dtp`,
    `screen-nohud--mablock`,
    `screen-nohud--last-night-1`,
    `screen-nohud--last-night-2`,
    `screen-nohud--last-night-3`,
    `screen-nohud--last-night-4`,
    `screen-nohud--last-night-5`,
    `screen-nohud--last-night-6`,
    `screen-nohud--last-night-7`,
    `screen-nohud--last-night-8`,
    `screen-nohud--last-night-9`,
    `screen-nohud--last-night-10`,
    `screen-nohud--last-night-11`,
    `screen-nohud--last-night-12`,
    `screen-nohud--last-night-13`,
    `screen-nohud--last-night-14`,
    `screen-nohud--last-night-15`,
    `screen-nohud--last-night-16`,
    `screen-nohud--last-night-17`,
    `screen-nohud--last-night-18`,
    `screen-nohud--last-night-19`,
    `screen-nohud--last-night-20`,
    `screen-nohud--last-night-21`,
    `screen-nohud--moonrise`,
    `screen-nohud--necromant`,
    `screen-nohud--vr`,
    `screen-nohud--deepdive`,
    `screen-nohud--board`,
    `screen-nohud--depo`,
    `screen-nohud--where-is-johnny`,
    `screen-nohud--no-tell-motel`,
    `screen-nohud--minibot`,
    `screen-nohud--six-street`,
    `screen-nohud--night-drive`,
    `screen-nohud--waiting-room`,
    `screen-nohud--random-garage`,
    `screen-nohud--aldecaldo-station`,
    `screen-nohud--free-ride`,
    `screen-nohud--morning-city`,
    `screen-nohud--abadone-house`,
    `screen-nohud--visit`,
    `screen-nohud--me`,
    `screen-nohud--rogue-afterlife`,
    `screen-nohud--v-plus-judy`,
    `screen-nohud--the-end`,
    `screen-nohud--patronus`,
    `screen-nohud--rebeca-pvp`,
    `screen-nohud--angle`
];

const initScreen = (all = false, select = false) => {
    const body = document.querySelector("body");
    body.style.backgroundImage = `url('./libs/screen/${SCREEN_NAMES[getRandomInt(SCREEN_NAMES.length)]}.jpg')`;

    if (all) {
        const backgroundsCount = SCREEN_NAMES.length;
        const wrap = document.createElement("div");
        wrap.classList.add("all-background");
        SCREEN_NAMES.forEach((SCREEN_NAME, i) => {
            // console.log(`Background ${SCREEN_NAME.replace(`screen-nohud`, "")} successfully loaded ${i + 1} of ${backgroundsCount}`);
            const backgroundInAllNode = document.createElement("div");
            backgroundInAllNode.classList.add("background-in-all");
            backgroundInAllNode.style.backgroundImage = `url("./libs/screen/${SCREEN_NAME}.jpg")`;
            backgroundInAllNode.dataset.screenName = `${SCREEN_NAME}`;
            wrap.appendChild(backgroundInAllNode);

        });

        if (select) {
            wrap.classList.add("--select");

            // wrap.querySelectorAll(".background-in-all")
            //     .forEach((backgroundInAllNode) => {
            //         backgroundInAllNode.addEventListener("click", (e) => {
            //             console.log(e);
            //             // body.style.backgroundImage = `url("./libs/screen/${SCREEN_NAME}.jpg")`;
            //             // wrap.remove();
            //         });
            //     });


            wrap.innerHTML =
                wrap.innerHTML +
                `
                    <button class="js-close-background-select cp-button hud-btn">
                        <img src="img/img-hud-btn.png" alt="HUD" width="200" height="221">
                    </button>
                `;
            const closeBtn = wrap.querySelector(".js-close-background-select");
            closeBtn.addEventListener("click", () => {
                wrap.classList.remove("--visible");
            });
            wrap.addEventListener("click", (e) => {
                if (e.target.classList.contains("background-in-all")) {
                    body.style.backgroundImage = `url('./libs/screen/${e.target.dataset.screenName}.jpg')`;
                    wrap.classList.remove("--visible");
                }
            });
        }

        body.appendChild(wrap);
    }
}

const initIntervalScreen = (all = false, select = false) => {
    // console.log("Its hud?", win77.router.currentPage === PAGE_NAMES.hud, win77.router.currentPage, PAGE_NAMES.hud);
    if (all) {
        initScreen(all, select);
    } else {
        initScreen();
        setInterval(() => {
            initScreen();
        }, 30000);
    }

    const openAllBackgroundSelectBtn = document.querySelector(".js-open-background-select");
    openAllBackgroundSelectBtn.addEventListener("click", () => {
        document.querySelector(".all-background")
            .classList.add("--visible");
    });
}

export { initIntervalScreen };
