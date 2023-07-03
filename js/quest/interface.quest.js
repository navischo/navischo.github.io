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

export { DNEQuest, DNECheckpoint };
