class DNECard {
    constructor(id, name, description, img, collection = "all") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.collection = collection;
    }
}

class DNELootCard extends DNECard {
    constructor(id, name, description, img, bonus, cost, limits, longline, qr, isBuild, isHide, type = "loot", credits = null) {
        super(id, name, description, img);
        this.bonus = bonus;
        this.cost = cost;
        this.limits = limits;
        this.longline = longline;
        this.qr = qr;
        this.isBuild = isBuild;
        this.isHide = isHide;
        this.type = type;
        this.credits = credits;
    }
}

class DNEDoorCard extends DNECard {
    constructor(id, name, description, img, level, budget, client, roles, penalty, profit, profitOrigins, longline, qr, isBuild, isHide, type = "door") {
        super(id, name, description, img);
        this.level = level;
        this.budget = budget;
        this.client = client;
        this.roles = roles;
        this.penalty = penalty;
        this.profit = profit;
        this.profitOrigins = profitOrigins;
        this.longline = longline;
        this.qr = qr;
        this.isBuild = isBuild;
        this.isHide = isHide;
        this.type = type;
    }
}

class DNEMonsterCard {
    constructor(id, name, level, img, description, modifiedLevel = 0, souls, treasures, fail) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.modifiedLevel = modifiedLevel;
        this.img = img;
        this.description = description;
        this.souls = souls;
        this.treasures = treasures;
        this.fail = fail;
    }

    getQuest() {
        console.log(`New quest from ${this.name}`);
    }

    fight() {
        console.log(`You invite ${this.name} to fight with you`);
    }
}

class DNEBUGCard {
    constructor(id, name, img, description, limits, bonus, cost, oneOff) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.description = description;
        this.limits = limits;
        this.bonus = bonus;
        this.cost = cost;
        this.oneOff = oneOff;
    }

    callback() {
        console.log(`You use ${this.name}`);
    }
}

export { DNELootCard, DNEDoorCard, DNEMonsterCard, DNEBUGCard };
