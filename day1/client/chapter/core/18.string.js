/* -------------------- */
/* String Type          */
/* -------------------- */

let message = "Less is more.";

// length 프로퍼티
let stringTotalLength;

// 특정 인덱스의 글자 추출
let extractCharacter;

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(1);
console.log(slice);

let subString = message.substring(2, 7);
console.log(subString);

let subStr = message.substr(2, 3);
console.log(subStr);

// 문자열 포함 여부 확인
let indexOf = message.indexOf("is");

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "edge";
    case agent.indexOf("chrome") > -1:
      return "chrome";
    case agent.indexOf("safari") > -1:
      return "safari";
    case agent.indexOf("firefox") > -1:
      return "firefox";
    case agent.indexOf("trident") > -1:
      return "trident";
  }
}
console.log(checkBrowser());

let lastIndexOf;
let includes;
let startsWith;
let endsWith;

// 공백 잘라내기
let str = "            a b     c     d          ";
let trimLeft = str.trimLeft();
let trimRight;
let trim = str.trim();
// let reg = str.replace(/\s*/g, "");
let reg = str.replaceAll(" ", "");
console.log(reg);

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
function to(params) {}
let toPascalCase;
let regg = /\s+|,/g;
let myStr = new String([...message].reverse());
console.log(myStr.toString().replaceAll(regg, ""));
