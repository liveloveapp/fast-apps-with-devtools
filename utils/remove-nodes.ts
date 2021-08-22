export const removeNodes = (node: Node | null): void => {
  if (node === null) {
    return;
  }
  while (node.hasChildNodes()) {
    removeNodes(node.firstChild);
  }
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
};
