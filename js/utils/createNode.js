const createNode = (parent, node, text = "", className = "") => {
    const newNode = document.createElement(node);
    newNode.innerHTML = text;
    if (className) {
        newNode.classList.add(className);
    }
    parent.appendChild(newNode);
}

export { createNode };
