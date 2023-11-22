
const initBtnZeroInbox = () => {
    const btnZeroInbox = document.querySelector(".js-zero-inbox");
    btnZeroInbox.addEventListener("click", () => {
        const dialogVerticalNode = document.querySelector(".dialog-vertical");
        const feedParent = document.querySelector(".js-vertical-feed");
        feedParent.innerHTML = "";
        dialogVerticalNode.classList.add("--zero-inbox");
    });
}

export { initBtnZeroInbox };
