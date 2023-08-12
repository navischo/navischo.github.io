import { win77 } from "../../dne-cli.js";
import { SchedulePage } from "./schedule.page.js";
import { DirectPage } from "./direct.page.js";
import { BankPage } from "./bank.page.js";
import { HousePage } from "./house.page.js";
import { ProfilePage } from "./profile.page.js";
import { SwiperCell } from "../core.structure.js";

const initAdminSwiper = () => {
    const init = () => {
        win77.adminSwiper = new Swiper("#admin-swiper", {
            direction: "vertical",
            spaceBetween: 50,
            effect: "flip",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true,
            // },
        });

        win77.adminSwiper.on('slideChange', function (e) {
            console.log(e, e.activeIndex, e.activeIndex === 3);
            if (e.activeIndex === 2) {
                const dialogParent = document.querySelector("#admin-dialog");
                console.log("initDialog(DIALOGS[0])", dialogParent);
                // initDialog(DIALOGS[0], dialogParent);
            }

            if (e.activeIndex === 4) {
                HousePage.init();
                // initDialog(DIALOGS[0], dialogParent);
            }
        });

        SchedulePage.init();
        DirectPage.init();
        BankPage.init();
        HousePage.init();
        ProfilePage.init();
    }
    return new SwiperCell(init);
}
const AdminSwiper = initAdminSwiper();

export { AdminSwiper };
