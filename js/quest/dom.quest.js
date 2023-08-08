import { DNECheckpoint } from "./interface.quest.js";
import { getQuestMarkup } from "./markup.quest.js";
import { NEXT_CHECKPOINT_MESSAGE } from "./data.quest.js";
import { updBalanceNode } from "../hud/balance.hud.js";
import { setCountdown, setTimer, clearTimer } from "../hud/time.hud.js";
import {win77} from "../dne-cli.js";
import { updScore } from "../hud/score.hud.js";

const parseCheckpointsStroke = (stroke) => {
    // const checkpointsArr = stroke.split("");
    const str = 'The quck brown fox jumps over the lazy dog.';

    const checkpointsArr = stroke.split('\n');
    // console.log(checkpointsArr[3], checkpointsArr, checkpointsArr.map((stroke) => {
    //   return new DNECheckpoint(stroke);
    // }));
    return checkpointsArr.map((stroke) => {
        return new DNECheckpoint(stroke);
    });
}

const drawAchievements = (achievementsArr) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = achievementsArr
        .map((achievement) => `<p class="achievement-p fw-p fw-main-color" data-achievement-id="${achievement.id}">${achievement.name}(${achievement.reward}): ${achievement.descr}</p>`)
        .join(``);
    document.querySelector(".quest__right")
        .appendChild(wrap);
}

const initQuest = (questObj) => {
    const questModal = document.querySelector("#quest-popup");
    questModal.innerHTML = ``;
    questModal.innerHTML = getQuestMarkup();

    const questParent = questModal.querySelector(".js-quest");
    const checkpointsParent = questParent.querySelector(".js-quest-checkpoints-parent");
    let checkRowArr = questParent.querySelectorAll(".js-quest-checkpoint");
    const title = questParent.querySelector(".js-quest-title");
    const description = questParent.querySelector(".js-quest-descr");
    const bonus = questParent.querySelector(".js-quest-bonus");
    const minimap = questParent.querySelector(".js-quest-minimap");

    const followBtn = questParent.querySelector(".js-quest-follow");
    const finishBtn = questParent.querySelector(".js-quest-finish");
    const getCheckRowMarkup = (text) => `<button class="js-quest-checkpoint fw-check-row">${text}</button>`;

    const drawQuest = (questData) => {
        title.textContent = questData.name;
        description.textContent = questData.description;
        bonus.textContent = `+${questData.bonus}`;
        if (questData.minimap) {
            minimap.src = questData.minimap;
        }

        redrawCheckpoints(questData);
    }

    const redrawCheckpoints = (questData) => {
        const checkRowClickHandler = (e) => {
            e.target.classList.add("fw-check-row--checked");
            questData.nextCheckpoint();
            redrawCheckpoints(questData);
            console.log(NEXT_CHECKPOINT_MESSAGE, questData);
        };

        checkRowArr = questParent.querySelectorAll(".js-quest-checkpoint");

        checkRowArr.forEach((checkRow) => {
            checkRow.removeEventListener("click", checkRowClickHandler);
        });

        let allCheckpointsMarkup = ``;

        getCheckRowMarkup(questData.checkpointsArr[questData.currentCheckpoint]);
        questData.checkpointsArr.forEach((checkpoint, index) => {
            if (index <= questData.currentCheckpoint) {
                allCheckpointsMarkup += getCheckRowMarkup(checkpoint.text);
            }
        });

        checkpointsParent.innerHTML = allCheckpointsMarkup;
        checkRowArr = questParent.querySelectorAll(".js-quest-checkpoint");

        checkRowArr.forEach((checkRow, index) => {
            if (index < questData.currentCheckpoint) {
                checkRow.classList.add("fw-check-row--checked");
            }
            checkRow.addEventListener("click", checkRowClickHandler);
        });

        if (checkRowArr.length > 0 && checkRowArr.length === questData.checkpointsArr.length) {
            const lastCheckpoint = checkRowArr[checkRowArr.length - 1];
            lastCheckpoint.classList.add("--last-checkpoint");
            lastCheckpoint.addEventListener("click", () => {
                console.log(`You reach last checkpoint!`);
                finishBtn.disabled = false;
            });
        }
    }


    drawQuest(questObj.core);
    drawAchievements(questObj.achievements);

    const budgetInput = questParent.querySelector("#quest-budget");
    const incomeInput = questParent.querySelector("#quest-income");
    const timeInput = questParent.querySelector("#quest-time");
    const arsenalImgParent = questParent.querySelector("#js-quest-arsenal");
    const achievementsArr = questParent.querySelectorAll(".achievement-p");

    followBtn.addEventListener("click", () => {
        win77.game.player.currentQuest = questObj;
        win77.getCostFromPlayer(budgetInput.value);
        updBalanceNode();
        // start timeout
        setTimer();
        followBtn.classList.remove("--visible");
        finishBtn.classList.add("--visible");
        finishBtn.disabled = true;

        achievementsArr.forEach((achievement) => {
            achievement.addEventListener("click", () => {
                achievement.classList.add("--done");
                incomeInput.value = +incomeInput.value / 100 * 10 + +incomeInput.value;
            });
        });
    });

    finishBtn.addEventListener("click", () => {
        win77.giveIncomeToPlayer(+incomeInput.value);
        win77.giveSkillPointsToPlayer(1);
        updBalanceNode();

        // win77.game.player.score = win77.game.player.score + questObj.core.bonus;
        // updScore();
        clearTimer();

        finishBtn.classList.remove("--visible");
        followBtn.classList.add("--visible");
        followBtn.classList.add("--done");
        followBtn.textContent = "Виконано";
    });

    budgetInput.addEventListener("keyup", (e) => {
        if (+budgetInput.value < 20000) {
            arsenalImgParent.innerHTML = `<img src="img/quest-settings--arsenal-3.png" alt="">`;
        } else {
            arsenalImgParent.innerHTML = `<img src="img/quest-settings--arsenal-1.png" alt="">`;
        }
        console.log("keyup", +budgetInput.value, +budgetInput.value < 10000);
    });
}

export { parseCheckpointsStroke, drawAchievements, initQuest };
