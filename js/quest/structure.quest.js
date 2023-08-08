import { parseCheckpointsStroke, drawAchievements, initQuest } from "./dom.quest.js";
import { DNEQuest, DNECheckpoint } from "./interface.quest.js";
import {
    ARE_YOU_HUMAN_MESSAGE,
    NEXT_CHECKPOINT_MESSAGE,
    acidFridayCheckpointsStroke,
    newTurnCheckpointsStroke,
    bossDeadCheckpointsStroke,
    bossDeadAchievementsArr,
    MINIMAP, dealWithMoneyCheckpointsStroke
} from "./data.quest.js";

const newTurnCheckpoints = [
    new DNECheckpoint(0, "Войти в «Тотентанц»\n" +
        "Поговорить с главарем мальстремовцев\n" +
        "Следовать за Патрицией\n" +
        "Поговорить с Нэнси\n" +
        "Отвести Нэнси в сторону, чтобы поговорить\n" +
        "(Дополнительное) Зайти в туалет в «Тотентанце»\n" +
        "(Дополнительное) Выйти через окно\n" +
        "(Дополнительное) Выйти на балкон\n" +
        "Добраться до лифта и покинуть «Тотентанц»\n" +
        "Проводить Нэнси к машине\n" +
        "Позвонить Керри\n" +
        "Добраться до особняка Денни\n" +
        "Найти Денни и Генри\n" +
        "(Дополнительное) Воспользоваться домофоном у особняка Денни\n" +
        "Поговорить с Керри\n" +
        "Поговорить с Денни и Генри\n" +
        "Подождать, пока Нэнси позвонит на следующий день"),
    new DNECheckpoint(1, "Забрати відправлення від Типографа"),
    new DNECheckpoint(2, "Перекусити")
];

// const newTurnQuest = new DNEQuest(
//     "new-turn",
//     "Новий поворот",
//     "Знайти Ненсі та воскресити гурт Samurai",
//     parseCheckpointsStroke(newTurnCheckpointsStroke)
// );

const bossDeadQuest = new DNEQuest(
    "boss-dead",
    "Босс мертвий",
    "Знайти джерело галасу та розібратись",
    parseCheckpointsStroke(bossDeadCheckpointsStroke),
    50,
    25,
    MINIMAP.bossDead
);

const sheWantsRevengeQuest = new DNEQuest(
    "she-wants-revenge",
    "Вона хоче помсти",
    "Знайти ватажка Тварин та покарати",
    parseCheckpointsStroke(bossDeadCheckpointsStroke),
    25,
    25,
    MINIMAP.sheWantsRevenge
);

const dealWithMoney = new DNEQuest(
    "deal-with-money",
    "Розібратись з грошима",
    "Терміново влаштувати вечірку по проханню Ріка",
    parseCheckpointsStroke(dealWithMoneyCheckpointsStroke),
    3,
    1
);

const quests = {
    bossDead: {
        core: bossDeadQuest,
        achievements: bossDeadAchievementsArr
    },
    sheWantsRevenge: {
        core: sheWantsRevengeQuest,
        achievements: bossDeadAchievementsArr
    },
    dealWithMoney: {
        core: dealWithMoney,
        achievements: bossDeadAchievementsArr
    }
}

export { quests };



