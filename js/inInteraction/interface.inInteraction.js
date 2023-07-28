import { win77 } from "../dne-cli.js";

class Room {
    constructor(id, name, description, imgArr, pointsArr, actionsArr) {
        this.id = id;
        this.name = name;
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

const getDefaultRoom = () => new Room("default", "Default Room", "You enter room full of dark, light behind the door show few meters of space near you, its empty.", [], [], []);

const getDefaultHouse = () => {
    const newHouse = new House("default", "Default House", new Set([getDefaultRoom()]), "Its your new beginning. Use it clever.", [], [], []);
    return newHouse;
}

const initSummerHouse = () => {
    const studio = new Room(
        "summer-studio",
        "Студія",
        "Затишна місцина для творчої праці",
        [],
        ["table", "setup", "terminal", "books", "ps+games", "tattookit", "printer", "canvas"],
        ["play music", "record dj-set", "play ps+games", "read book", "print smtng", "make tattoo", "draw on canvas", "serf a net.", "leave loot"]);
    // inStudio items: table, setup, terminal, books, ps+games, tattookit, printer, canvas
    // inStudio actions: play music, record dj-set, play ps+games, read book, print smtng, make tattoo, draw on canvas, serf a net., leave loot
    const bedroom = new Room("summer-bedroom", "Спальня", "Величезне ліжко та теплі пледики до ваших послуг", [], [], []);
    // inBedroom items: bed, clothing, old staff
    // inBedroom actions: sleep
    const kitchen = new Room("summer-kitchen", "Кухня", "Вивільни свій потенціал кухаря в звичній атмосфері", [], [], []);
    // inKitchen items: refrigerator, toster, blender, plate, flowers
    // inKitchen actions: eat, pet flowers
    const greenHouse = new House("summer", "Summer", new Set([studio, bedroom, kitchen]), "Місце нескінченної творчості та пошуку нових випробувань для Артистів", [], [], []);

    return greenHouse;
}

win77.locationsSet.add(initSummerHouse());

const getLocationDataMarkup = (data) => {
    console.log(data, data.name);
    const markup = `
${data.name}:<br>&nbsp;&nbsp;{<br>
    &nbsp;&nbsp;rooms:<br>&nbsp;&nbsp;{&nbsp;
    <span id="${data.id}-rooms" class="inventory-items">${[...data.roomSet].map((room) => room.name).join(", ")}</span>
    &nbsp;},<br>
    &nbsp;&nbsp;items:<br>&nbsp;&nbsp;{&nbsp;
    <span id="${data.id}-items" class="inventory-items">${[...data.roomSet].map((room) => room.pointsArr.join(", "))}</span>
    &nbsp;},
    <br>&nbsp;&nbsp;actions:<br>&nbsp;&nbsp;{&nbsp;
    <span id="${data.id}-actions" class="inventory-items">${[...data.roomSet].map((room) => room.actionsArr.join(", "))}</span>
    &nbsp;}
<br>}    
    `;
    return markup;
}

const playgroundSet = new Set();
const DUNGE_NAMES = ["keller", "otel", "closer", "arsenal", "hvylyovyi", "collider", "E"];
DUNGE_NAMES.forEach((name) => {
    const house = getDefaultHouse();
    house.name = name;

    playgroundSet.add(name);

    win77.locationsSet.add(house);
});

// console.log("playgroundSet", playgroundSet, win77.locationsSet);

export { DUNGE_NAMES, getLocationDataMarkup };
