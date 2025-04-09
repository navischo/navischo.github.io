import { COLLECTION_NAMES, data } from "./data.js";

const init = () => {
    const parent = document.querySelector(".swiper-wrapper");
    const appendSheet = (imgId) => {
        const newSlide = document.createElement("div");
        const imgNode = document.createElement("img");
        newSlide.classList.add("swiper-slide");
        imgNode.src = `img/${imgId}.jpg`;
        newSlide.appendChild(imgNode)
        parent.appendChild(newSlide);

    }

    for (let i = 1; i <= 99; i++) {
        appendSheet(i);
    }

    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        loop: true,
    });
    swiper.on('slideChange', () => {
        updTitle();
    });

    const titleYearNode = document.querySelector(".year");
    const titleCollectionNode = document.querySelector(".collection");
    const updTitle = () => {
        console.log(`hello, slide number ${swiper.activeIndex}`, data[swiper.activeIndex]);
        titleYearNode.textContent = data[swiper.activeIndex].year;
        titleCollectionNode.textContent = data[swiper.activeIndex].collection;
    }
}

export { init };
