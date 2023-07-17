import { adminWeekMarkup } from "./admin/adminWeek.markup.js";
import { adminDirectMarkup } from "./admin/adminDirect.markup.js";
import { adminProfileMarkup } from "./admin/adminProfile.markup.js";
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
    <div class="swiper-slide">Vertical Slide 4</div>
    <div class="swiper-slide">Vertical Slide 5</div>
  </div>
  <div class="swiper-button-next --up"></div>
  <div class="swiper-button-prev --up"></div>
</div>
`;

export { adminMarkup };
