const safeRemove = (nodeId) => {
    const node = document.querySelector(nodeId);
    console.log("Try to remove", node);
    if (node) {
        node.remove();
    }
}

export { safeRemove };
