const initMatchMaking = () => {
    const getMatchmakingPage = () => {
        const matchmakingPage = document.querySelector("#matchmaking");
        matchmakingPage.classList.add("--visible");
        return matchmakingPage;
    };

    const drawMatchmaking = () => {
        const parent = getMatchmakingPage();
        const closeBtn = parent.querySelector(".js-exit-matchmaking");

        const startMatchmakingBtn = document.querySelector(".js-start-matchmaking");
        const setMatchmakingBtn = document.querySelector(".js-set-matchmaking");
        const playerMatchmakingBtn = document.querySelector(".js-player-matchmaking");

        const closeBtnHandler = () => {
            parent.classList.remove("--visible");
            closeBtn.removeEventListener("click", closeBtnHandler);
            startMatchmakingBtn.removeEventListener("click", startBtnHandler);
        };

        const startBtnHandler = () => {
            setMatchmakingBtn.classList.toggle("--search");
            startMatchmakingBtn.classList.toggle("--active");
            playerMatchmakingBtn.classList.toggle("--ready");
        }

        closeBtn.addEventListener("click", closeBtnHandler);
        startMatchmakingBtn.addEventListener("click", startBtnHandler);
    }

    const openMatchmakingBtn = document.querySelector(".js-open-matchmaking");
    openMatchmakingBtn.addEventListener("click", () => {
        drawMatchmaking();
    });
}

export { initMatchMaking };
