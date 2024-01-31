//array에는 for in사용 금지
//object 하나는 iterable 하지 않다.
//for in으로 object 내부 property 순환가능
//for of가 되는게 iterable 하다
// for of 가 가장 많이 쓴다.
// 객체 순환에도 for of를 많이 쓴다.
const arrayLike = {
  1: "common",
  2: "child",
  3: "curve",
  4: "book",
  5: "as",
  6: "research",
  7: "number",
  8: "pile",
  9: "helpful",
  10: "told",
  11: "to",
  12: {
    PSShJYy: "King",
    qk6jl: "Cain",
    ekN7w: "Wallace",
    ooj: { a: "myobj" },
  },
};

for (let a in arrayLike) {
  console.log(a);
}

// for (let a of arrayLike) {
//   console.log(a);
// }

console.log(Object.entries(arrayLike));

function printObj(a) {
  // console.log(typeof a);
  if (typeof a !== "object") {
    // console.log("return value: " + a);
    return a;
  }
  let strResult = "";
  for (let subdep of Object.values(a)) {
    strResult += printObj(subdep) + "|";
    // console.log(`insub : ${subdep}, strResult : ${strResult}`);
  }
  return strResult;
}
console.log("content:" + printObj(arrayLike));
