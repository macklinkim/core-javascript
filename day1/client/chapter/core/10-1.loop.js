/* --------------- */
/* While Loop      */
/* --------------- */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// let i = 0;
// while (i < frontEndDev.length) {
//   console.log(frontEndDev[i++]);
// }

// // while 문 (역순환 : 역방향)

// while (i) {
//   console.log(frontEndDev[--i]);
// }
// 성능 진단 : 순환 vs. 역순환
//var createCounter = n=>()=>n++;
function createCounter1(n) {
  console.log(this.n);

  return function () {
    return n++;
  };
}

function createCounter2(n) {
  return function (n) {
    return n++;
  };
}

const a = createCounter1(10);
const b = createCounter2(10);

console.log("counter1:" + a());
console.log("counter1:" + a());
console.log("counter1:" + a());
console.log("counter2:" + b());
console.log("counter2:" + b());
console.log("counter2:" + b());

let array = {
  name: "Malone",
  right: "Rodriquez",
  feathers: "Foster",
  supply: "Barber",
  wheat: "Delgado",
  under: "Castillo",
  one: "Owens",
  darkness: "Stevens",
  inch: "Johnston",
  fine: "Waters",
  eat: "Miller",
  let: "Griffin",
  meant: "Lawrence",
  wild: "Tate",
  day: "Wise",
  plastic: "Elliott",
  basic: "Stone",
};
for (const a in array) console.log(a, array[a]);
