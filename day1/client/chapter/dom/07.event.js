/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
const first = getNode('.first');
// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
function handler(a) {
  console.log('clicked:' + a);
}
// 3. 메서드 : element.addEventListener(event, handler[, phase])
/* 이벤트 추가/제거 --------------------------------------------------------- */
// - addEventListener
first.addEventListener('click', handler);
// - removeEventListener

// getNode('.deleteEvent').addEventListener('click', () => {
//   first.removeEventListener('click', handler);
// });

// function bindEvent(node, type, handler) {
//   node = checkNode(node);
//   node.addEventListener(type, handler, false);
//   return () => node.removeEventListener(type, handler);
// }
// const remove = bindEvent('.second-span', 'click', handler);

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleBall({ offsetX: X, offsetY: Y }) {
  console.log(X, Y);
  ball.style.transform = `translate(${X - ball.offsetWidth / 2}px, ${Y - ball.offsetHeight / 2}px)`;
}

function handleEmotion({ offsetX: X, offsetY: Y }) {
  console.log(X, Y);
  let template = /* HTML */ `<div
    class="emotion"
    style="top:${Y}px; left:${X}px"
  >
    a
  </div>`;
  insertLast(ground, template);
}

function handleDeb() {
  console.log('event fired');
}
//ground.addEventListener('click', handleBall);
// ground.addEventListener('mousemove', handleBall);

function debounce(callback, limit = 1000) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        callback.call(this, e);
      },
      (limit = 1000)
    );
  };
}

debounce(() => {
  console.log('실행');
}, 1000);

// ground.addEventListener(
//   'mousemove',
//   debounce(function (e) {
//     console.log(this);
//   }, 500)
// );

function throttle(callback, limit = 300) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
// throttle(() => {}, 1000);
// ground.addEventListener('mousemove', throttle(handleEmotion, 100));
const input = document.querySelector('#input');
input.addEventListener('input', throttle(handleThrottleText, 400));
const throttleText = document.querySelector('#throttle');
function handleThrottleText(e) {
  throttleText.textContent = e.target.value;
}
