const YOUR_DAYS_LABEL = ["SU", "M", "TU", "W", "TH", "F"];
const yourDayMarkup = (dayLabel) =>
    `<div class="your-day">
          <div class="your-day__first"></div>
          <div class="your-day__second">
             <div class="your-day__label">${dayLabel}</div>
          </div>
    </div>`;

const concatYourDaysMarkup = () => {
    let markup = ``;
    YOUR_DAYS_LABEL.forEach((dayLabel) => {
        markup = `${markup}<div class="swiper-slide">${yourDayMarkup(dayLabel)}</div>`;
    })

    return markup;
}

const adminWeekMarkup =
    `<div class="week-wrap">
        <section class="week">
            <h2 class="js-day-name week__title">Sunday</h2>
            <div class="week__car-preview">
                <img src="img/img-car-week.png" class="week__car-preview-img" alt="">
            </div>
            <div class="week__main">
                <div class="js-your-days-touch swiper --week">
                    <div class="swiper-wrapper">
                      ${concatYourDaysMarkup()}
                      ${concatYourDaysMarkup()}
                      ${concatYourDaysMarkup()}
                      ${concatYourDaysMarkup()}
                    </div>
                    <div class="week__tab-list">
                        <button class="your-day-prev">PREV</button>
                        <button class="js-swipe-to-week week__tab-item --current" data-week-number="0">Week 0</button>
                        <button class="js-swipe-to-week week__tab-item" data-week-number="1">Week 1</button>
                        <button class="js-swipe-to-week week__tab-item" data-week-number="2">Week 2</button>
                        <button class="js-swipe-to-week week__tab-item" data-week-number="3">Week 3</button>
                        <button class="your-day-next">NEXT</button>
                    </div>
                </div>
                <div class="js-current-event week__event"></div>
            </div>
        </section>
        <div class="hypno-wrap">
            <img src="img/hypno.png" class="i-hypno hypno-logo" alt="">
            <input class="hypno-input" type="text">
        </div>
    </div>`;

export { adminWeekMarkup };
