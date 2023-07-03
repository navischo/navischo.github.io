const hudBtn = document.querySelector("#hud-btn");
const hudOptionsNode = document.querySelector("#hud-options");
const hudBottom = document.querySelector(".hud-bottom");

if (hudBottom) {
    const hudHeight = hudOptionsNode.clientHeight;
    // console.log("hudHeight", hudHeight);
    // hudBottom.classList.toggle("--open");
    hudBottom.style.transform = `translateY(${hudHeight + 10}px)`
}

hudBtn.addEventListener("click", (e) => {
    hudOptionsNode.classList.toggle("hud-options--open");
    // hudBottom.classList.toggle("hud-bottom--open");
    document.querySelector(".game-menu").classList.toggle("--open");
});

const gameMenu = document.querySelector(".game-menu");
const gameMenuLinksArr = document.querySelectorAll(".game-menu a");

gameMenuLinksArr.forEach((gameMenuLink) => {
    gameMenuLink.addEventListener("click", () => {
        gameMenu.classList.remove("--open");
    });
});
