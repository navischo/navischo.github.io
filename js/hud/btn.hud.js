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

const gameMenuLinksArr = document.querySelectorAll(".game-menu a");

const SUBLIST_KEYS = {
    mod: "mod",
    community: "community"
}

const closeSublists = () => {
    gameMenuLinksArr.forEach((gameMenuLink) => {
        gameMenuLink.classList.remove("--visible");
    });
}
const closeGameMenu = () => {
    const gameMenu = document.querySelector("#game-menu");
    gameMenu.classList.remove("--open");
    closeSublists();
}

const openSublistMod = (e, SUBLIST_KEY = SUBLIST_KEYS.mod) => {
    console.log("gameMenuLinksArr", SUBLIST_KEY, gameMenuLinksArr);
    gameMenuLinksArr.forEach((gameMenuLink) => {
        console.log("gameMenuLink", gameMenuLink, gameMenuLink.classList.contains(`js-item-sublist-${SUBLIST_KEY}`));
        gameMenuLink.classList.remove("--visible");
        if (gameMenuLink.classList.contains(`js-item-sublist-${SUBLIST_KEY}`) || gameMenuLink.classList.contains(`js-open-sublist-${SUBLIST_KEY}`)) {
            gameMenuLink.classList.toggle("--visible");
        }
    });
}

const openSublistCommunity = (e, SUBLIST_KEY = SUBLIST_KEYS.community) => {
    console.log("gameMenuLinksArr", SUBLIST_KEY, gameMenuLinksArr);
    gameMenuLinksArr.forEach((gameMenuLink) => {
        console.log("gameMenuLink", gameMenuLink, gameMenuLink.classList.contains(`js-item-sublist-${SUBLIST_KEY}`));
        gameMenuLink.classList.remove("--visible");
        if (gameMenuLink.classList.contains(`js-item-sublist-${SUBLIST_KEY}`) || gameMenuLink.classList.contains(`js-open-sublist-${SUBLIST_KEY}`)) {
            gameMenuLink.classList.toggle("--visible");
        }
    });
}

gameMenuLinksArr.forEach((gameMenuLink) => {
    const isSublistLinkMod = gameMenuLink.classList.contains(`js-open-sublist-${SUBLIST_KEYS.mod}`);
    const isSublistLinkCommunity = gameMenuLink.classList.contains(`js-open-sublist-${SUBLIST_KEYS.community}`);
    // const isSublistItem = gameMenuLink.classList.contains("js-item-sublist");
    if (isSublistLinkMod) {
        gameMenuLink.addEventListener("click", openSublistMod);
    } else if (isSublistLinkCommunity) {
        gameMenuLink.addEventListener("click", openSublistCommunity);
    } else {
        gameMenuLink.addEventListener("click", closeGameMenu);
    }
});

export { closeGameMenu };
