const updTipRouter = (text) => {
    const tipNode = document.querySelector(".js-timing-tip");
    tipNode.textContent = text;
}

export { updTipRouter };
