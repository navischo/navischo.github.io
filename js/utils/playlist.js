import {win77} from "../dne-cli.js";

win77.VFX = {
    brake: [
        new Audio("../../mp3/sfx-brake-noisy-dj-scratch.wav")
    ]
}

const LEVEL_11 = [
    {
        name: "In coma",
        audio: new Audio("../../mp3/in_coma.mp3")
    },
    {
        name: "Anti",
        audio: new Audio("../../mp3/anti.mp3")
    },
    {
        name: "2018",
        audio: new Audio("../../mp3/2018.mp3")
    },
    {
        name: "Babusia",
        audio: new Audio("../../mp3/babusia.mp3")
    },
    {
        name: "Identify",
        audio: new Audio("../../mp3/identify.mp3")
    },
    {
        name: "Stryzhka",
        audio: new Audio("../../mp3/stryzhka.mp3")
    },
    {
        name: "500mg",
        audio: new Audio("../../mp3/500mg.mp3")
    },
    {
        name: "The Devil",
        audio: new Audio("../../mp3/the_devil.mp3")
    }
];

const LEVEL_21 = [
    {
        name: "Stryzhka",
        audio: new Audio("../../mp3/stryzhka.mp3")
    },
    {
        name: "500mg",
        audio: new Audio("../../mp3/500mg.mp3")
    },
    {
        name: "The Devil",
        audio: new Audio("../../mp3/the_devil.mp3")
    }
];

const LEVELS = {
    intermission: LEVEL_11,
    promeni: LEVEL_21
}

const initPlaylist = () => {
    win77.game.currentPlaylist = LEVELS.intermission;
    const parent = document.querySelector("#playlist");
    const closePlaylistHandler = (e) => {
        if (e.key === "Escape") {
            parent.classList.remove("--visible");
        }

        document.removeEventListener("keydown", closePlaylistHandler);
    };
    const openPlaylistPage = () => {
        parent.classList.add("--visible");

        document.addEventListener("keydown", closePlaylistHandler);
        return parent;
    };

    const setPlaylist = (id) => {
        win77.game.track = 0;
        win77.game.currentPlaylist = LEVELS[id];
    }

    const playTrack = () => {
        let levelData = win77.game.currentPlaylist[win77.game.track];
        if (!levelData) {
            win77.game.track = 0;
            levelData = win77.game.currentPlaylist[win77.game.track];
        }
        levelData.audio.play();
    }

    const upTrack = () => {
        const levelData = win77.game.currentPlaylist[win77.game.track];
        levelData.audio.pause();
        levelData.audio.currentTime = 0;
        win77.game.track = win77.game.track + 1;
    }

    const getTrackId = () => win77.game.currentPlaylist[win77.game.track].name;

    const closeBtnHandler = () => {
        parent.classList.remove("--visible");
    };

    const setBtnHandler = (e) => {
        const albumNodeArr = document.querySelectorAll(".js-set-playlist");
        const parent = e.currentTarget;
        const albumId = parent.dataset.albumId;
        albumNodeArr.forEach((albumNode) => {
           albumNode.classList.remove("--current");
        });
        parent.classList.add("--current");
        setPlaylist(albumId);
    };

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-playlist");
        const openBtn = document.querySelector(".js-open-playlist");
        const setBtns = document.querySelectorAll(".js-set-playlist");
        openBtn.addEventListener("click", openPlaylistPage);
        closeBtn.addEventListener("click", closeBtnHandler);
        setBtns.forEach((setBtn) => {
            setBtn.addEventListener("click", setBtnHandler);
        });
    }

    initHandlers();
    win77.playlist = {
        parent: parent,
        setPlaylist: setPlaylist,
        upTrack: upTrack,
        playTrack: playTrack,
        getTrackId: getTrackId,
        LEVELS: LEVELS
    };
}

export { initPlaylist };
