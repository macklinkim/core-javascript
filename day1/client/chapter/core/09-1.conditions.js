/* ---------------- */
/* Condition        */
/* ---------------- */

// const { conforms } = require("lodash");

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

let message;
// if 문(statement)
function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie;

  // 영화 볼거니?
  confirm("영화볼거니?")
    ? (message = prompt("무슨영화 봤니?"))
    : confirm("그럼 영화보러갈래?")
      ? prompt("어떤영화볼래?")
      : confirm("ok bye~");
  console.log(message);
}

function render(node, isActive) {
  const template = /* html */ `
    <div> ${isActive ? "안녕!!!!" : "잘가~~!!!"}</div>
  `;
  node.insertAdjacentHTML("beforeend", template);
  const test = /* html */ `<div></div>`;
}

// watchingMovie();
// else 절(caluse)
let randObj = {
  plus: "Davidson",
  operation: "Stokes",
  your: "McKinney",
  wife: "Mann",
  cannot: "Gross",
  captured: "Simmons",
  native: "Wilkins",
  cannot1: "Gross",
  captured1: "Simmons",
  native1: "Wilkins",
};

let map = new Map(Object.entries(randObj));
// console.log(map);
let set = new Set();
map.forEach((k, v) => set.add(k, v));
// console.log(set);
let hi = "hello world";
let hi2 = [...hi];
hi2[0] = "a";
for (let i = 0; i < hi2.length; i++) {
  if (hi2[i] === "l") {
    hi2[i] = "L";
  }
}

console.log(typeof hi2);
let hi3 = Object.values(hi2);
let hi4 = Object.keys(hi2).map((key) => [key, hi2[key]]);
console.log(typeof hi3 + "|" + hi3);
console.log(Array.isArray(hi4) + "|" + hi4);
let hhh = hi2.forEach((a) => a === "o");
console.log(hhh);
// console.log(typeof hi2.forEach((a) => (a === "o" ? (a[0] = "sjd") : a)));
// console.log(hi2);
// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
