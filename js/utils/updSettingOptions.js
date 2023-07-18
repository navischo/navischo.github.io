import { win77 } from "../dne-cli.js";

const parent = document.querySelector("#setting-popup");
const getNewOption = (value, label) => `<option value="${value.toLowerCase()}">${label.toLowerCase()}</option>`;

const updSectorOptions = () => {
    if (win77.isPlayerOnMap) {
        let currentSector = "a0";
        const availableSectorArr = [];
        const availablePointsSetsObj = {};
        console.log(win77.map);

        const sectorSelect = parent.querySelector("#sector");
        const pointsSelect = parent.querySelector("#point");
        win77.map.forEach((sectorsRow) => {
            Object.keys(sectorsRow).forEach((sectorKey) => {
                const sector = sectorsRow[sectorKey];
                if (sector.playersSet.size > 0) {
                    availableSectorArr.push(sector.address);
                }

                if (sector.pointsSet.size > 0) {
                    availablePointsSetsObj[sector.address] = sector.pointsSet;
                }
            });
        });

        sectorSelect.innerHTML = availableSectorArr.map((sectorAddress) => {
            return getNewOption(sectorAddress, sectorAddress);
        }).join("");

        sectorSelect.addEventListener("change", () => {
            currentSector = sectorSelect.value;
            pointsSelect.innerHTML = Array.from(availablePointsSetsObj[currentSector]).map((point) => {
                return getNewOption(point.name, point.name);
            }).join("");
        });
    }
}

const updExecutiveOptions = () => {
    const executiveSelect = parent.querySelector("#executive");
    let optionsMarkup = Array.from(win77.game.player.npc).map((npc) => {
        return getNewOption(npc.id, npc.name);
    }).join("");
    optionsMarkup = `${getNewOption(win77.game.player.id, win77.game.player.id)}${optionsMarkup}`;
    executiveSelect.innerHTML = optionsMarkup;
}

const updSettingOptions = () => {
    console.log(win77.game.player.id, win77.game.player.npc);
    updSectorOptions();
    updExecutiveOptions();
}

const initSettingOptionsUpdate = () => {
    const triggerBtns = document.querySelectorAll(".js-open-setting");
    triggerBtns.forEach((triggerBtn) => {
        triggerBtn.addEventListener("click", () => {
            updSettingOptions();
        });
    });

    updSettingOptions();
}

export { updSettingOptions, initSettingOptionsUpdate };
