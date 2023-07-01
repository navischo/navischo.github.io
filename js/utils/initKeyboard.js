// const NUMBERS = {
//     IN_MENU: [],
//     IN_PLAY: [],
//     IN_SHOP: [],
//     IN_TALK: []
// }

const initKeyboard = () => {
    document.addEventListener("keydown", (e) => {
        console.log(e.key, e);
        switch (e.key) {
            case "n":
                document.querySelector("body").classList.toggle("hide-hud");
                break;
            case "Shift":
                const controls = document.querySelector(".js-catalog-controls")
                controls.classList.toggle("catalog-controls--visible");
                break;
            case "h":
                document.querySelector(".hud-bottom").classList.toggle("hud-bottom--open");
                break;
            case "Escape":
                document.querySelector(".game-menu").classList.toggle("--open");
                break;
        }
    });
}

export { initKeyboard };
