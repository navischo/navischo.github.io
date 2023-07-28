const savedTopsString = localStorage.getItem("tops");
let topsString = savedTopsString ? savedTopsString : "navischo:970510";
const parseTopsString = (string) => {
    const topsArr = [];
    string.split(",").forEach((topString) => {
        const parsed = topString.split(":");
        const name = parsed[0];
        const score = parsed[1];
        topsArr.push({name: name, score: score});
    });
    topsArr.sort((a, b) => b.score - a.score);
    // console.log("topsArr", topsArr);

    const topsObj = {};
    topsArr.forEach((topObj) => {
        topsObj[topObj.name] = topObj.score;
    })
    // topsObj[name] = score;
    return topsObj;
}

const appendNewTop = (name, score) => {
    const topsObj = parseTopsString(topsString);
    const isIExist = topsObj[name];
    if (isIExist) {
        // console.log("iExist", isIExist, topsString);
        localStorage.setItem("tops", topsString.replace(`${name}:${topsObj[name]}`, `${name}:${score}`));
    } else {
        const line = `,${name}:${score}`;
        // console.log("iNotExist", isIExist, topsString, line, topsString + line);

        localStorage.setItem("tops", topsString + line);
    }
}

// appendNewTop("navi", 999999);

// console.log(parseTopsString(topsString), topsString);

export { topsString, parseTopsString, appendNewTop };
