/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */
const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용
first.classList.add('hello');
first.classList.remove('hello');
console.log(first.classList.contains('hello'));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.cssText = `
display: flex;
margin:10px;
border:1px solid red;
`;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
console.log(getComputedStyle(first)['backgroundColor']);

function getCss(node, param) {
  if (typeof node === 'string') node = getNode(node);
  if (!(param in document.body.style)) throw new SyntaxError('Error: Invalid');
  return getComputedStyle(node)[param];
}
console.log(getCss('.first', 'fontSize'));

function setCss(node, param, value) {
  if (typeof node === 'string') node = getNode(node);
  if (!(param in document.body.style)) throw new SyntaxError('Error: Invalid');
  if (!value) throw new Error('3rd parameter is necessary');

  node.style[param] = value;
}
setCss('.first', 'fontSize', '50px');

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

function addClass(node, param) {
  node = checkNode(node);
  checkParam(param);
  node.classList.add(param);
}
addClass('.first', 'second');
console.log(getNode('.first').classList);

function removeClass(node, param) {
  node = checkNode(node);
  if (!param) {
    node.classList = '';
    return;
  }
  checkParam(param);
  node.classList.remove(param);
}
removeClass('.first', 'second');
console.log(getNode('.first').classList);

removeClass('.first');
console.log(getNode('.first'));

function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string')
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  node.classList.toggle(className);
}
