const KyivPlaces = [];

// params
// m2
// rentPerHour
// deposit
// availableActions
// shop
// maxGuestCount
// limits
// members
// purity
// repair
// contains
// ?facePerson
// ?rooms
class DNEPlace {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

const summerPlace = new DNEPlace("summer", "Літо", "Твоя власна студія, суто для творчості та креативу");
KyivPlaces.push(summerPlace);

console.log("Available places in Kyiv City", KyivPlaces);

// todo #idea переключать бекграунд худа на фото места где он находится
