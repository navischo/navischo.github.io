class DNECard {
    constructor(id, name, description, img) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
}

class DNELootCard extends DNECard {
    constructor(id, name, description, img, bonus, cost, limits, longline, qr, isBuild, type = "loot") {
        super(id, name, description, img);
        this.bonus = bonus;
        this.cost = cost;
        this.limits = limits;
        this.longline = longline;
        this.qr = qr;
        this.isBuild = isBuild;
        this.type = type;
    }
}

class DNEDoorCard extends DNECard {
    constructor(id, name, description, img, level, budget, client, roles, penalty, profit, profitOrigins, longline, qr, isBuild, type = "door") {
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
        this.type = type;
    }
}

export { DNELootCard, DNEDoorCard };