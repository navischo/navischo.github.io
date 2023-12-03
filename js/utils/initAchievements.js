const ACHIEVEMENTS = [
    {
        id: "connecting",
        title: "Connecting People",
        text: "Ти знайшов правила у телефоні!"
    }
];

const getAchievement = (id) => {
    const achievementData = ACHIEVEMENTS.find((achievementObj) => achievementObj.id === id);
    if (achievementData) {
        const doneAchievements = localStorage.getItem("achievements");
        let doneAchievementsArr;
        if (doneAchievements) {
            doneAchievementsArr = doneAchievements.split(",");
        } else {
            doneAchievementsArr = [""];
        }
        if (doneAchievementsArr.length > 0) {
            if (!doneAchievementsArr.find(item => item === achievementData.id)) {
                doneAchievementsArr.push(achievementData.id);
                localStorage.setItem("achievements", doneAchievementsArr.join(","));
                console.log("localStorage", localStorage, localStorage.getItem("achievements"));
                const achievementPopup = document.querySelector("#achievement-popup");
                const achievementPopupImg = achievementPopup.querySelector(".js-achievement-img");
                const achievementPopupText = achievementPopup.querySelector(".js-achievement-title");
                const sound = new Audio("../../mp3/achievement.mp3");

                achievementPopupText.textContent = achievementData.title;
                achievementPopupImg.src = `../../img/achievements/${achievementData.id}.png`;
                achievementPopup.classList.remove("--hidden");

                sound.play();

                const firstTimeout = setTimeout(() => {
                    achievementPopup.classList.add("--hidden");
                }, 4000);
                achievementPopup.addEventListener("mouseover", () => {
                    clearTimeout(firstTimeout);
                });
                achievementPopup.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        achievementPopup.classList.add("--hidden");
                    }, 1000);
                });
            }
        }
    } else {
        console.log("Achievement you looking for does not exist");
    }
}

export {getAchievement};
