/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */
const first = getNode('.first');

// first.removeAttribute('class');
console.log(first.getAttribute('class'));
console.log(first.getAttribute('say'));

first.setAttribute('id', 'text');
console.log(first.getAttribute('id'));
console.log(first.attributes);
for (const value of first.attributes) console.log(value);
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

//setter
first.dataset.name = 'tiger';

//getter
console.log(first.dataset.name);

console.log(first.dataset);

function getAttr(a, b) {
  if (typeof a !== 'string' && typeof b !== 'string') {
    throw new Error('getAttr : Please use string');
  }
  return getNode(a).getAttribute(b);
}

console.log(getAttr('.first', 'id'));
console.log(getAttr('.first', 'id'));

function setAttr(node, b, c) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof b !== 'string' || typeof c !== 'string')
    throw new Error('getAttr : parameter must be string');
  if (!c) throw new Error('param 3 is necessary.');
  return node.setAttribute(b, c);
}

setAttr('.first', 'class', 'active');
console.log('0' + getNode('.active'));
setAttr('.active', 'class', 'first');

const attr = (function () {
  function getAttr(node, prop) {
    if (typeof node === 'string') node = getNode(node);
    if (typeof prop !== 'string')
      throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

    return node.getAttribute(prop);
  }

  function setAttr(node, prop, value) {
    if (typeof node === 'string') node = getNode(node);
    if (typeof prop !== 'string' || typeof value !== 'string')
      throw new TypeError(
        'setAttr함수의 두 번째와 세 번째 인수는 문자 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setAttr함수의 세 번째 인수는 필수 입력값 입니다.');

    node.setAttribute(prop, value);
  }

  const attr = (node, prop, value) =>
    !value ? getAttr(node, prop) : setAttr(node, prop, value);

  return attr;
})();
console.log('1' + attr('.first', 'class'));
attr('.first', 'class', 'firsttt');
console.log('2' + attr('.firsttt', 'class'));
