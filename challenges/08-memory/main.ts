import { removeChildNodes } from '../../utils';

const x: string[] = [];
const now = new Date();
const main = document.getElementById('main') as HTMLElement;

/**
 * Build an array in memory.
 */
// const junk = Array(1000)
//   .fill(null)
//   .map(() => [...resorts]);

/**
 * Get a div with 100 child elements.
 */
const getDiv = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(now.toTimeString()));
  return div;
};

/**
 * Create detached DOM nodes.
 */
const detached: HTMLDivElement[] = [];
const detach = () => {
  Array(10000)
    .fill(null)
    .map(() => getDiv())
    .forEach((div) => {
      detached.push(div);
      main.appendChild(div);
      main.removeChild(div);
    });
};
const detachBtn = document.getElementById('detach') as HTMLButtonElement;
if (detachBtn) {
  detachBtn.addEventListener('click', detach);
}

/**
 * Grow memory infinitely
 */
let growCount: number;
function grow() {
  Array(100)
    .fill(null)
    .map(() => getDiv())
    .forEach((div) => main.appendChild(div));
  if (--growCount > 0) {
    setTimeout(grow, 1000);
  }
}
const growBtn = document.getElementById('grow') as HTMLButtonElement;
if (growBtn) {
  growBtn.addEventListener('click', function growBtn() {
    growCount = 5;
    grow();
  });
}

/**
 * Create closure references
 */
function createClosure() {
  const value = new Array(1000).join('$');
  function largeClosure() {
    return value;
  }
  return function () {};
}
const closures = [];
const closureBtn = document.getElementById('closure') as HTMLButtonElement;
if (closureBtn) {
  closureBtn.addEventListener('click', function closureBtn() {
    Array(100)
      .fill(null)
      .forEach(() => closures.push(createClosure()));
  });
}

/**
 * Clear main contents.
 */
const clearBtn = document.getElementById('clear') as HTMLButtonElement;
if (clearBtn) {
  clearBtn.addEventListener('click', () => removeChildNodes(main));
}
