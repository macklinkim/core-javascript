/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

const first = document.querySelector('.first-span');
const spanList = document.querySelectorAll('.first-span');

console.log(first);
console.log(spanList);
console.log(getNode('.first-span', 'h1'));
console.log(getNodes('span'));
/* 문서 대상 확인 */
// - matches

console.log('matches : ' + first.matches('span'));
// - contains
console.log(getNode('h1')?.contains(getNode('.second-span')));
