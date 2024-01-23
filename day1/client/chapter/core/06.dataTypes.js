/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
// 2. 값이 할당되지 않은 상태
let empty = null;
//console.log(empty);
//console.log(typeof empty);
//console.log(empty ?? "it is null or undif");

let empty2;
//console.log(typeof empty2);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello";
const single = "hello";
const backtick = `hello ${10 + 30}`;

//console.log(typeof double);
//console.log(typeof single);
//console.log(typeof backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 100;
const float = 10.11;

//console.log(typeof float);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigN = 1000n;
//console.log(bigN);
//console.log(typeof bigN);

// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;
//console.log(typeof isClicked);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {};
//console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol("uuid");
//console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const user = {
  name: "tiger",
  age: 28,
  sayHi: () => {
    console.log("hello", this.age);
  },
  sayHi2() {
    this.age;
    console.log("hello2", this.age);
  },
  sayHi3: function () {
    console.log("hello3", this.age);
  },
};
// user.sayHi();
// user.sayHi2();
// user.sayHi3();

// Array

// function

// this

// var b = 1;
function a() {
  let aa = 1;
  function b(params) {
    let bb = 2;
    function c(params) {
      let cc = 3;
      console.log("cc");
      confirm("s");
    }
    c();
  }
  b();
}
a();
