"use strict";

const QUEST_DATA_SAMPLE = {
  title: "",
  descr: "",
  checkpointsArr: []
};

class DNEQuest {
  constructor(id, name, description, checkpointsArr) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.checkpointsArr = checkpointsArr;
    this.currentCheckpoint = 0;
  }

  nextCheckpoint() {
    this.currentCheckpoint++;
  }
}

class DNECheckpoint {
  constructor(text) {
    this.text = text;
  }
}

const ARE_YOU_HUMAN_MESSAGE = `Ви людина? Просимо вибачення за плутанину, але ми не можемо точно визначити, ви людина чи сценарій. Будь ласка, не сприймайте це особисто. Боти та скрипти сьогодні можуть бути надзвичайно реалістичними!`;
const NEXT_CHECKPOINT_MESSAGE = `Новий чекпоінт досягнуто. Можеш відпочити і подумати, що робити далі`;

const acidFridayCheckpointsStroke =
`16 Вызвать таксу до Ретромагаза
Забрать свой подарок
Добраться до студии
Установить игру на консоль`
;

const newTurnCheckpointsStroke =
`Войти в «Тотентанц»
Поговорить с главарем мальстремовцев
Следовать за Патрицией
Поговорить с Нэнси
Отвести Нэнси в сторону, чтобы поговорить
(Дополнительное) Зайти в туалет в «Тотентанце»
(Дополнительное) Выйти через окно
(Дополнительное) Выйти на балкон
Добраться до лифта и покинуть «Тотентанц»
Проводить Нэнси к машине
Позвонить Керри
Добраться до особняка Денни
Найти Денни и Генри
(Дополнительное) Воспользоваться домофоном у особняка Денни
Поговорить с Керри
Поговорить с Денни и Генри
Подождать, пока Нэнси позвонит на следующий деньВойти в «Тотентанц»
Поговорить с главарем мальстремовцев
Следовать за Патрицией
Поговорить с Нэнси
Отвести Нэнси в сторону, чтобы поговорить
(Дополнительное) Зайти в туалет в «Тотентанце»
(Дополнительное) Выйти через окно
(Дополнительное) Выйти на балкон
Добраться до лифта и покинуть «Тотентанц»
Проводить Нэнси к машине
Позвонить Керри
Добраться до особняка Денни
Найти Денни и Генри
(Дополнительное) Воспользоваться домофоном у особняка Денни
Поговорить с Керри
Поговорить с Денни и Генри
Подождать, пока Нэнси позвонит на следующий день`
;

const parseCheckpointsStroke = (stroke) => {
  // const checkpointsArr = stroke.split("");
  const str = 'The quck brown fox jumps over the lazy dog.';

  const checkpointsArr = newTurnCheckpointsStroke.split('\n');
  console.log(checkpointsArr[3], checkpointsArr, checkpointsArr.map((stroke) => {
    return new DNECheckpoint(stroke);
  }));
  return checkpointsArr.map((stroke) => {
    return new DNECheckpoint(stroke);
  });
}

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

const newTurnQuest = new DNEQuest(
    "new-turn",
    "Новий поворот",
    "Знайти Ненсі та воскресити гурт Samurai",
    parseCheckpointsStroke(newTurnCheckpoints)
);

const initQuest = () => {
  const questParent = document.querySelector(".js-quest");
  const checkpointsParent = questParent.querySelector(".js-quest-checkpoints-parent");
  let checkRowArr = questParent.querySelectorAll(".js-quest-checkpoint");
  const title = questParent.querySelector(".js-quest-title");
  const description = questParent.querySelector(".js-quest-descr");
  const followBtn = questParent.querySelector(".js-quest-follow");
  const getCheckRowMarkup = (text) => `<button class="js-quest-checkpoint fw-check-row">${text}</button>`;

  const drawQuest = (questData) => {
    title.textContent = questData.name;
    description.textContent = questData.description;

    redrawCheckpoints(questData);
  }

  const redrawCheckpoints = (questData) => {
    const checkRowClickHandler = (e) => {
      e.target.classList.add("fw-check-row--checked");
      newTurnQuest.nextCheckpoint();
      redrawCheckpoints(newTurnQuest);
      console.log(NEXT_CHECKPOINT_MESSAGE, newTurnQuest);
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
  }


  drawQuest(newTurnQuest);


}

initQuest();



