/* global gsap */
import {
  diceAnimation,
  getNodes,
  getNode,
  attr,
  insertLast,
  endScroll,
  clearContents,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup button'
);
const recordListWrapper = getNode('.recordListWrapper');

let times = 0;
let sum = 0;
function renderRecordItem() {
  const cube = getNode('#cube');
  const diceValue = attr(cube, 'data-dice');
  // const diceValue = +attr(cube, 'data-dice');
  // const diceValue = attr(cube, 'data-dice')/1;
  // const diceValue = attr(cube, 'data-dice')*1;

  const template = /* HTML */ `<tr>
    <td>${++times}</td>
    <td>${diceValue}</td>
    <td>${(sum += Number(diceValue))}</td>
  </tr> `;
  const records = getNode('.recordList tbody');
  insertLast(records, template);
  endScroll(recordListWrapper);
}

const handleRolling = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
    } else {
      clearInterval(stopAnimation);
    }
    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents(getNode('.recordList tbody'));
  times = 0;
  sum = 0;
}

rollingButton.addEventListener('click', handleRolling);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
