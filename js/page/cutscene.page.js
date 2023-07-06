const parent = document.querySelector("#cutscene-parent");

const CUTSCENE_IDS = {
    cosmohedrone: `cosmohedrone`,
    fight: `fight`,
    room: `room`,
    event: `event`,
    play: `play`
};

const CUTSCENE_FILES = {
    cosmohedrone: `mp4-cutscene-cosmohedrone.mp4`,
    fight: `mp4-cutscene-fight.mp4`,
    room: `mp4-room-mario.mp4`,
    event: `webm-cutscene-event.webm`,
    play: `mp4-room-play.mp4`
};

const getCutsceneMarkup = (videoName) =>
`<video class="video-cutscene" src="mp4/${videoName}" loop autoplay muted preload="auto"></video>`;



const activateCutscene = (id) => {
    const cutsceneVideo = document.querySelector(`#cutscene-${id}`);
    cutsceneVideo?.play();
}

const appendCutscene = (id) => {
    const cutsceneNode = document.createElement("article");
    cutsceneNode.classList.add("cutscene");
    cutsceneNode.innerHTML = getCutsceneMarkup(id);
    const cutsceneVideo = cutsceneNode.querySelector(".video-cutscene");
    cutsceneVideo.id = `cutscene-${id}`;
    parent.appendChild(cutsceneNode);

    return cutsceneNode;
}

const clearCutscene = () => parent.innerHTML = "";

const pauseCutscene = () => document.querySelector(".video-cutscene")?.pause();
const playCutscene = () => document.querySelector(".video-cutscene")?.play();


const getCutsceneMenuItemMarkup = (id) =>
    `<li class="js-activate-cutscene hud-options-item">${id}</li>`

const initCutsceneMenu = (idArr) => {
    const parent = document.querySelector(".js-cutscene-menu");
    parent.innerHTML = idArr.map((id) => getCutsceneMenuItemMarkup(id)).join(``);

    const menuItems = parent.querySelectorAll(".js-activate-cutscene");
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            const cutsceneId = menuItem.textContent.toLowerCase();
            clearCutscene();
            appendCutscene(CUTSCENE_FILES[cutsceneId]);
            activateCutscene(cutsceneId);
        });
    });

    const clearBtn = document.createElement("li");
    clearBtn.classList.add("hud-options-item");
    clearBtn.classList.add("clear-btn");
    clearBtn.addEventListener("click", clearCutscene);
    parent.appendChild(clearBtn);

    const pauseBtn = document.createElement("li");
    pauseBtn.classList.add("hud-options-item");
    pauseBtn.classList.add("pause-btn");
    pauseBtn.addEventListener("click", () => {
        if (pauseBtn.classList.contains("--paused")) {
            playCutscene();
            pauseBtn.classList.remove("--paused");
        } else {
            pauseCutscene();
            pauseBtn.classList.add("--paused");
        }
    });
    parent.appendChild(pauseBtn);
}

initCutsceneMenu(Object.keys(CUTSCENE_IDS));

// export { initCutsceneMenu };
