import {win77} from "../dne-cli.js";

const splitDoorsAndLoot = (set) => {
   return {
       doors: Array.from(set).filter((card) => card.type === "prj"),
       loot: Array.from(set).filter((card) => card.type !== "prj")
   }
};

export { splitDoorsAndLoot };
