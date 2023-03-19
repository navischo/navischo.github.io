// Функция которая возвращает случайное число
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getCardById = (id) => {
    const card = DNELootArr.find((lootCard) => lootCard.id === id);
    if (card) {
        // console.log(`Card with id ${id} finded successfully`);
        return card;
    } else {
        console.log(`Card with id ${id} does not exist`);
    }
}