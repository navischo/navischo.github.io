const VFX = {
    brake: [
        new Audio("../../mp3/sfx-brake-noisy-dj-scratch.wav")
    ]
}

const LEVEL_0 = [
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

const initPlaylist = () => {
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

    const initHandlers = () => {
        const closeBtn = parent.querySelector(".js-exit-matchmaking");
        const openBtn = document.querySelector(".js-open-playlist");
        openBtn.addEventListener("click", openPlaylistPage);
        closeBtn.addEventListener("click", closePlaylistHandler);
    }

    initHandlers();
}

export { LEVEL_0, VFX, initPlaylist };
