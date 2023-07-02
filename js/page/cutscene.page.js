const CUTSCENE_IDS = {
    fight: `fight`,
    room: `room`
};

const CUTSCENE_FILES = {
    fight: `mp4-cutscene-fight.mp4`,
    room: `mp4-room-mario.mp4`
};

const getCutsceneMarkup = (videoName) =>
`<video class="video-cutscene" src="mp4/${videoName}" loop autoplay preload="auto"></video>`;



const activateCutscene = (id) => {
    const cutsceneVideo = document.querySelector(`#cutscene-${id}`);
    cutsceneVideo.play();
}

const appendCutscene = (id) => {
    const parent = document.querySelector("body");
    const cutsceneNode = document.createElement("article");
    cutsceneNode.classList.add("cutscene");
    cutsceneNode.innerHTML = getCutsceneMarkup(id);
    const cutsceneVideo = cutsceneNode.querySelector(".video-cutscene");
    cutsceneVideo.id = `cutscene-${id}`;
    parent.appendChild(cutsceneNode);

    return cutsceneNode;
}


const getCutsceneMenuItemMarkup = (id) =>
    `<li class="js-activate-cutscene hud-options-item">${id}</li>`

const initCutsceneMenu = (idArr) => {
    const parent = document.querySelector(".js-cutscene-menu");
    parent.innerHTML = idArr.map((id) => getCutsceneMenuItemMarkup(id)).join(``);
    const menuItems = parent.querySelectorAll(".js-activate-cutscene");
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            const cutsceneId = menuItem.textContent.toLowerCase();
            appendCutscene(CUTSCENE_FILES[cutsceneId]);
            activateCutscene(cutsceneId);
        });
    });
}

initCutsceneMenu(Object.keys(CUTSCENE_IDS));

// export { initCutsceneMenu };
