/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log("총 합 = ", 10000 + 8900 + 1360 + 2100);
// console.log("총 합 = ", 21500 + 3200 + 9800 + 4700);
// console.log("총 합 = ", 3800 + 15200 - 500 + 80200);
// console.log("총 합 = ", 560 + 5000 + 27100 + 10200);
// console.log("총 합 = ", 9000 - 2500 + 5000 + 11900);

let arrayInt = [52424, 58433, 69463, 75295, 28416, 86167, 10926, 13822, 20643];

// 함수 선언
function getRandInd(n) {
  return Math.floor(Math.random() * n);
}
function calcPrice(a, b, c = getRandInd(10000), d) {
  // if(!d) d = 0;
  // d = d || 0;
  // d ||= 0;
  // d = d ?? 0;
  // d = d ??= 0;
  d ??= getRandInd(100000);
  if (!a || !b) throw new Error("calcPrice error"); //validation
  console.log(a + b + c + d);
}
// calcPrice(6880, 16, 4315);
// calcPrice(6880, 16, 4315);
// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem = function rem(n, a) {
  // if (arguments.length == 0) throw new Error("ERROR: function rem");
  if (!n) {
    throw new Error("ERROR : fuction rem");
  }
  a ||= 16;
  n = String(n).replaceAll(" ", "");
  return parseInt(n) / a + " rem";
};
console.log(rem("30px", 10));
console.log(rem("25px"));
console.assert(rem(20) === "1.25 rem");
console.log(rem(20));
console.log(rem());

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

const a1 = function (a, b) {
  return a * b;
};
console.log(a1(3, 7));
