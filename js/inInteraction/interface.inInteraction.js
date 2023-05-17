import { win77 } from "../dne-cli.js";

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

const initSummerHouse = () => {
    const rooms = new Set();
    const studio = new Room(
        "summer-studio",
        "Затишна місцина для творчої праці",
        [],
        ["table", "setup", "terminal", "books", "ps+games", "tattookit", "printer", "canvas"],
        ["play music", "record dj-set", "play ps+games", "read book", "print smtng", "make tattoo", "draw on canvas", "serf a net.", "leave loot"]);
    // inStudio items: table, setup, terminal, books, ps+games, tattookit, printer, canvas
    // inStudio actions: play music, record dj-set, play ps+games, read book, print smtng, make tattoo, draw on canvas, serf a net., leave loot
    const bedroom = new Room("summer-bedroom", "Величезне ліжко та теплі пледики до ваших послуг", [], [], []);
    // inBedroom items: bed, clothing, old staff
    // inBedroom actions: sleep
    const kitchen = new Room("summer-kitchen", "Вивільни свій потенціал кухаря в звичній атмосфері", [], [], []);
    // inKitchen items: refrigerator, toster, blender, plate, flowers
    // inKitchen actions: eat, pet flowers
    const greenHouse = new House("summer", "Summer", new Set([studio, bedroom, kitchen]), "Місце нескінченної творчості та пошуку нових випробувань для Артистів", [], [], []);

    return greenHouse;
}

win77.locationsSet = new Set([initSummerHouse()]);

const getLocationDataMarkup = (data) => {
    console.log(data, data.name);
    const markup = `
${data.name}:<br>&nbsp;&nbsp;{<br>
    &nbsp;&nbsp;items:<br>&nbsp;&nbsp;{&nbsp;
    <span id="${data.id}-items" class="inventory-items"></span>
    &nbsp;},
    <br>&nbsp;&nbsp;actions:<br>&nbsp;&nbsp;{&nbsp;
    <span id="${data.id}-actions" class="inventory-items"></span>
    &nbsp;}
<br>}    
    `;
    return markup;
}

export { getLocationDataMarkup };
