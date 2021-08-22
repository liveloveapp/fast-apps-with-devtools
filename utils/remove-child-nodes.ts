import { removeNodes } from './remove-nodes';

export const removeChildNodes = (node: Node): void => {
  while (node.hasChildNodes()) {
    removeNodes(node.firstChild);
  }
};
