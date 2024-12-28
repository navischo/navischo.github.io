let startUsePointStock;
let useOneStockPoint;

const initTempo = () => {
    const KEYS_SIGNS = {
        c: ["c", "C", "с", "С"],
    }

    const KEYS_CALLBACKS = {
        c: () => {
            useTempo();
        }
    }

    const findSign = (signToFind) => {
        let neededSign;
        Object.keys(KEYS_SIGNS).forEach((sign) => {
            if (KEYS_SIGNS[sign].find((signVariant) => signVariant === signToFind)) {
                neededSign = sign;
            }
        });
        return neededSign;
    }

    const initKeyboard = () => {
        document.addEventListener("keydown", (e) => {
            const sign = findSign(e.key);
            if (sign) {
                KEYS_CALLBACKS[sign]();
                document.addEventListener("keyup", (e) => {
                    const sign = findSign(e.key);
                    console.log("keyup", sign);
                    if (sign === KEYS_SIGNS.c) {
                        clearTimeout(startUsePointStock);
                        clearInterval(useOneStockPoint);
                    }
                });
            } else {
                console.log(`You press ${e.key}`);
            }
        });
    }
    initKeyboard();
}

const useTempo = () => {
    const tempoPointsUpsideDown = Array.from(document.querySelectorAll(".js-tempo-point"));
    const tempoPoints = tempoPointsUpsideDown.reverse();
    console.log(tempoPoints, "tempoPoints");
    tempoPoints.forEach((tempoPoint) => {
        tempoPoint.classList.add("--transparent");
    });

    // призвать три карты
    startUsePointStock = setTimeout(() => {
        usePointStock();
    }, 1000);
}

const usePointStock = () => {


    useOneStockPoint = setInterval(() => {
        const availableTempoStockPointsUpsideDown = Array.from(document.querySelectorAll(".js-tempo-stock:not(.--transparent)"));
        const availableTempoStockPoints = availableTempoStockPointsUpsideDown.reverse();
        console.log("availableTempoStockPoint", availableTempoStockPoints);
        if (!!availableTempoStockPoints.length) {
            availableTempoStockPoints[0].classList.add("--transparent");
        }
    }, 200);
}

export { initTempo, useTempo };
