class Room {
    constructor(id, description, imgArr, pointsArr, actionsArr) {
        this.id = id;
        this.description = description;
        this.imgArr = imgArr;
        this.pointsArr = pointsArr;
        this.actionsArr = actionsArr;
    }
}

class Point {
    constructor(text, action) {
        this.text = text;
        this.action = action;
    }
}

class House extends Room {
    constructor(id, name, roomsSet, description, imgArr, pointsArr, actionsArr) {
        super(id, description, imgArr, pointsArr, actionsArr);
        this.name = name;
        this.roomSet = roomsSet;
    }
}

const initGreenHouse = () => {
    const rooms = new Set();
    const studio = new Room("gh-studio", "Затишна місцина для творчої праці", [], [], []);
    // inStudio items: table, setup, terminal, books, ps+games, tattookit, printer, canvas
    // inStudio actions: play music, record dj-set, play ps+games, read book, print smtng, make tattoo, draw on canvas, serf a net., leave loot
    const bedroom = new Room("gh-bedroom", "Величезне ліжко та теплі пледики до ваших послуг", [], [], []);
    // inBedroom items: bed, clothing, old staff
    // inBedroom actions: sleep
    const kitchen = new Room("gh-kitchen", "Вивільни свій потенціал кухаря в звичній атмосфері", [], [], []);
    // inKitchen items: refrigerator, toster, blender, plate, flowers
    // inKitchen actions: eat, pet flowers
    const greenHouse = new House("green-house", "Green House", new Set([studio, bedroom, kitchen]), "Місце нескінченної творчості та пошуку нових випробувань для Артистів", [], [], []);

    return greenHouse;
}

// console.log(initGreenHouse());
