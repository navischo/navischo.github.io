const uploadCustomCards = () => {
    const customCardsSet = new Set();
    const localStorageKeys = Object.keys(localStorage);
    localStorageKeys.forEach((localKey) => {
        // console.log("isItMy", localKey.slice(0, 3), localKey.slice(0, 3) === "my-");
        if (localKey.slice(0, 7) === "custom-") {
            customCardsSet.add(JSON.parse(localStorage[localKey]));
        }
    });
    return customCardsSet;
}

export { uploadCustomCards }
