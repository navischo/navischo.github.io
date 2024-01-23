const MONTH_SYMBOL = ["січень", "лютий", "березень", "квітень", "березень"]

const saveVisit = () => {
    const date = Date.now();
    localStorage.setItem("lastVisit", JSON.stringify(date));
    // console.log("Last login added", date, localStorage.getItem("lastVisit"));
    window.onunload = () => {
        finishVisit();
    }
}

const finishVisit = () => {
    const dateSaved = localStorage.getItem("lastVisit");
    const dateNow = Date.now();
    const playTimestamp = dateNow - dateSaved;
    const playTime = parsePlayTime(playTimestamp);

    if (playTime.min > 1) {
        savePlayTime(playTimestamp);
    }

    // console.log("playTime", playTime);
    return playTime;
}

const parsePlayTime = (timeOfPlay) => {
    const sec = timeOfPlay / 1000;
    const min = sec / 60;
    const hor = min / 60;
    // console.log("s m h", sec.toFixed(1), min.toFixed(1), hor.toFixed(1));
    return { sec, min, hor };
}

const savePlayTime = (playTimestamp) => {
    const currentVal = localStorage.getItem("playTime");
    if (currentVal) {
        const newPlayTimestamp = +currentVal + playTimestamp;
        localStorage.setItem("playTime", newPlayTimestamp);
        // console.log("Saved playTime", localStorage.getItem("playTime"));
    } else {
        localStorage.setItem("playTime", playTimestamp);
    }
}

const displayPlayTime = () => {
    const timestamp = localStorage.getItem("playTime");
    const playTime = parsePlayTime(timestamp);
    let displayTime;
    if (playTime.hor >= 1) {
        displayTime = `${playTime.hor} год.`;
    } else {
        displayTime = `<1 год.`;
    }
    return displayTime;
}

const displayLastVisit = () => {
    const timestamp = localStorage.getItem("lastVisit");
    const dateString = JSON.stringify(new Date(+timestamp));
    const displayDate = `${dateString.substring(9, 11)}.${dateString.substring(6, 8)}`;
    // console.log("Last login display", timestamp, dateString, displayDate);

    return displayDate;
}

export { saveVisit, displayLastVisit, displayPlayTime }
