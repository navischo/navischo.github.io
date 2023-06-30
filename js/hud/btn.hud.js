const hudBtn = document.querySelector("#hud-btn");
const hudOptionsNode = document.querySelector("#hud-options");
const hudBottom = document.querySelector(".hud-bottom");

if (hudBottom) {
    const hudHeight = hudOptionsNode.clientHeight;
    // console.log("hudHeight", hudHeight);
    hudBottom.style.transform = `translateY(${hudHeight}px)`
}

hudBtn.addEventListener("click", (e) => {
    hudOptionsNode.classList.toggle("hud-options--open");
    hudBottom.classList.toggle("hud-bottom--open");
});
document.addEventListener("keydown", (e) => {

});