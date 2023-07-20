class DNEQuest {
    constructor(id, name, description, checkpointsArr, bonus, time, minimap) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.checkpointsArr = checkpointsArr;
        this.currentCheckpoint = 0;
        this.bonus = bonus;
        this.time = time;
        this.minimap = minimap;
        // time
        // bonus
        // miniMap
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

export { DNEQuest, DNECheckpoint };
