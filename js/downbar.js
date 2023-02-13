(() => {
    // Designed by:  Mauricio Bucardo
    // Original image: https://dribbble.com/shots/5619509-Animated-Tab-Bar

    "use strict";

    let body = document.body;
    let menu = document.querySelectorAll(".menu__item");
    let menuBorder = document.querySelector(".menu__border");
    let active ;

    function clickItem() {

        active = document.querySelector("button.active");

        if (active) {
            active.classList.remove("active");
        }

    this.classList.add("active");
        let box = this.getBoundingClientRect();

        active = this;
        body.style.backgroundColor = active.style.getPropertyValue("--bgColorBody");

        offsetMenuBorder (box, menuBorder);

    }


    function offsetMenuBorder(box, menuBorder) {
        let left = Math.floor(box.left - menuBorder.closest("menu").offsetLeft - (menuBorder.offsetWidth  - box.width) / 2) +  "px";
        menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
    }


    menu.forEach(item => {
        item.addEventListener("click", clickItem);
    })
})();