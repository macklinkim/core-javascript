//[phase -1]
//1. 클릭 핸들러
//2. input 값을 가져오기, console.log();에 출력
//3. jujeob data 가져오기
//4. jujeobdata 함수에 input.value 넣기
//5. 랜덤한 주접 한개 가져오기
//6. pick을 result에 뿌리기
//  - 내용 비우기
//  - 해당 텍스트를 넣기
//  - insertAdjacentHTML
import {
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showError,
  shake,
  copy,
} from './lib/index.js';
import jujeobData from './data/data.js';
import { showSuccess } from './lib/dom/showSuccess.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function clickHandler(e) {
  e.preventDefault();
  const name = nameField.value.replaceAll(' ', '');
  /* global gsap */
  //name.replace(/\s*/g,'')
  if (!name) {
    //alert-error에 is-active 클래스 추가
    showError('.alert-error', '이름 틀렸습니다.', 2000);
    shake.restart();
    clearContents(nameField);
    return;
  }
  if (!isNumericString(name)) {
    alert('정확한 이름을 입력하세요.');
    clearContents(nameField);
    return;
  }

  const list = jujeobData(name);
  const lastIndex = list.length - 1;
  const pick = list[getRandom(lastIndex)];

  clearContents(result);

  insertLast(result, `<div class="result">${pick}</div>`);
}
submit.addEventListener('click', clickHandler);

function handleCopy() {
  const text = this.textContent;
  console.log(text);
  copy(text).then(() => {
    showError('.alert-success', '복사완료', 1000);
  });
}
result.addEventListener('click', handleCopy);
