// function pow(n1, n2) {
//   if (n2 === 1) return n1;
//   pow(n1 * n1, n2--);
// }

// pow(3, 3);

// function min(a, b) {
//   console.log(arguments);
//   console.log(typeof arguments);
//   console.log(Object.getOwnPropertyDescriptors(arguments));

//   return a > b ? b : a;
// }
// min(2, 5) == 2;

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

/* ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
); */

// function ask2(q, y, n) {
//   if (confirm(q)) y();
//   else n();
// }
// ask2(
//   '동의하십니까?',
//   () => alert('동의하셨습니다.'),
//   () => alert('취소 버튼을 누르셨습니다.')
// );

// let list = {};
// function addNext(list, a) {
//   if (a == 0) {
//     return;
//   }
//   list.next = { value: a };
//   a--;
//   addNext(list.next, a);
// }
// addNext(list, 7);
// function showList(list) {
//   let node = list;
//   while (node) {
//     console.log(node);
//     node = node.next;
//   }
// }
// showList(list);

/* 
function sumToFor(a) {
  let sum = 0;
  for (let i = 0; i < a; i++) {
    sum += i;
  }
  return sum;
}
function sumToFunc(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToFunc(n - 1);
}
console.log(sumToFunc(10)); */

// Load the fp build.
{/* prettier-ignore */}
// var _ = require("lodash");

// Load a method category.
// var object = require("lodash/fp/object");

// Load a single method for smaller builds with browserify/rollup/webpack.
// var extend = require("lodash/fp/extend");

/* let fn = function (params) {
  let a = 'hello';
  let b = { a1: 'hello b' };
  console.log(this.a);
  console.log(this.b);
  console.log(fn.b);
};
console.log('apply: ', fn.apply(this));
let tt = {
  a: 1,
  tthis() {
    console.log(this);
    return this;
  },
};
console.log(tt.tthis().a);
 */

// const someVar = "Hat";

// function myFun() {
//   let a = function test(params) {
//     const someVar = "body";
//   };
//   {
//     const someVar = "body2";
//   }
//   return someVar;
// }

// // console.log(myFun());

// function a() {
//   var b = 10;
// }
// a();
// console.log(b);
// var b = 1;

/* 복사할때 쓰는 코드들 */

// a = { ...b };

// const { a: a2 } = b;

// a = JSON.parse(JSON.stringify(b));

//a = Object.assign({}, b);

// a = new Object(b);

/* let temp = {};
for (let key in b) {
  temp[key] = b[key];
}
a = temp; */
// a = .deepClone(b);

// var _ = require('lodash');
// a = _.cloneDeep(b);
