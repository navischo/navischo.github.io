const createNode = (parent, node, text = "") => {
    const newNode = document.createElement(node);
    newNode.textContent = text;
    parent.appendChild(newNode);
}

export { createNode };
