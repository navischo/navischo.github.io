const createNode = (parent, node, text = "", className = "") => {
    const newNode = document.createElement(node);
    newNode.textContent = text;
    if (className) {
        newNode.classList.add(className);
    }
    parent.appendChild(newNode);
}

export { createNode };
