import { win77 } from "../../dne-cli.js";
import { Page } from "../core.structure.js";
import { drawCurrentEvent, trackYourDays } from "../../hud/calendar.hud.js";

const initSchedulePage = () => {
    const parent = document.querySelector(".js-schedule-page");
    const link = () => {
        console.log("Go to Profile page");
    }
    const init = () => {
        // run all scripts to make Profile work
        win77.weekSwiper = new Swiper(".swiper.--week", {
            slidesPerView: 6,
            spaceBetween: 8,
            navigation: {
                nextEl: '.your-day-next',
                prevEl: '.your-day-prev',
            },
        });

        const weekTabs = document.querySelectorAll(".js-swipe-to-week");
        weekTabs.forEach((weekTab) => {
            weekTab.addEventListener("click", (e) => {
                win77.weekSwiper.slideTo(+e.target.dataset.weekNumber * 6, 200, false);
            });
        });

        win77.weekSwiper.on('slideChange', function () {
            const weekNumber = Math.floor(win77.weekSwiper.activeIndex / 6);
            weekTabs.forEach((weekTab, index) => {
                weekTab.classList.remove("--current");

                if (weekNumber === index) {
                    weekTab.classList.add("--current");
                }
            });
        });

        drawCurrentEvent();
        trackYourDays();
        win77.setCurrentDay();
    };

    return new Page(parent, link, init);
}
const SchedulePage = initSchedulePage();

export { SchedulePage };
