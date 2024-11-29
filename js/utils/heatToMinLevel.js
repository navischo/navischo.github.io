const heatToMinLevel = (heat) => {
    console.log(heat);
    if (heat <= 1) {
        return 0;
    } else if (heat <= 2) {
        return 5;
    } else if (heat <= 3) {
        return 10;
    } else if (3 <= heat <= 4) {
        return 15;
    } else if (heat <= 5) {
        return 20;
    }
}

export { heatToMinLevel };
