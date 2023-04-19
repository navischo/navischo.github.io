const setSoundStat = (cardObj) => {
    const str = cardObj.limits;
    const parsedStr = str.split(" ");
    cardObj.soundStat = {
        type: parsedStr[0].replace(/[\s,]/g, ''),
        duration: parsedStr[1],
        tags: parsedStr.slice(3)
    };
    // console.log("setSoundStat", str, parsedStr, cardObj);
    return cardObj;
}

export { setSoundStat };
