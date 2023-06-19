class ContainerIn {
    constructor(name, sizeLine = "") {
        this.name = name;
        this.sizeLine = sizeLine;
        this.in = new Set();
    }
}

export { ContainerIn };
