import { adminWeekMarkup } from "./admin/adminWeek.markup.js";
import { adminDirectMarkup } from "./admin/adminDirect.markup.js";
import { adminProfileMarkup } from "./admin/adminProfile.markup.js";
import { adminBankMarkup } from "./admin/adminBank.markup.js";
import { adminHouseMarkup } from "./admin/adminHouse.markup.js";
const adminMarkup = `
<div id="admin-swiper" class="swiper --sub">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        ${adminWeekMarkup}
    </div>
    <div class="swiper-slide">
        <div class="root-admin" class="build"><!-- style='background: url("img/bg-profile.png")!important;'-->
            ${adminProfileMarkup}
        </div>
    </div>
    <div class="swiper-slide">
        <div id="root-direct" class="root-admin" class="build"><!-- style='background: url("img/bg-profile.png")!important;'-->
            ${adminDirectMarkup}
        </div>
    </div>
    <div class="swiper-slide">
        ${adminBankMarkup}
    </div>
    <div class="swiper-slide">
        ${adminHouseMarkup}
    </div>
<!--    <div class="swiper-slide">-->
<!--        <div class="sky-nav">-->
<!--            <a class="sky-nav-item"><span class="sky-nav-item__text">HEALTH</span></a>-->
<!--            <a class="sky-nav-item"><span class="sky-nav-item__text">TECH</span></a>-->
<!--            <a class="sky-nav-item"><span class="sky-nav-item__text">CREATIVE</span></a>-->
<!--            <a class="sky-nav-item"><span class="sky-nav-item__text">BANKROLL</span></a>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="swiper-slide">Vertical Slide 5</div>-->
  </div>
  <div class="swiper-button-next --up"></div>
  <div class="swiper-button-prev --up"></div>
</div>
`;

export { adminMarkup };
