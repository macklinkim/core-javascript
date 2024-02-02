/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

const people = [
  {
    id: 0,
    name: "박가희",
    age: 25,
    job: "명탐정코난 범인",
    imageSrc: "FAkq31",
  },
  {
    id: 1,
    name: "김보미",
    age: 64,
    job: "짜요짜요 마케터",
    imageSrc: "Gakz34",
  },
  {
    id: 2,
    name: "한태희",
    age: 13,
    job: "삐돌이",
    imageSrc: "Fkzoq81",
  },
  {
    id: 3,
    name: "이원명",
    age: 81,
    job: "이도령",
    imageSrc: "Tq9z1i",
  },
];

// Array.isArray
const isArray = (data) => Array.isArray(data);

/* 요소 순환 ---------------------------- */
let str = "hello the world.";
let arr = [...str].reverse();
let str2 = arr.toString().replaceAll(",", "");
console.log(str2);
console.log("origi : " + str);
console.log("reverse: " + str.split("").reverse().join(""));

// forEach
people.forEach((item, index) => {
  // console.log(item, index);
});

const list = document.querySelectorAll("h1");
list.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log("clicked" + index);
  });
});

/* 원형 파괴 ----------------------------- */
let arr2 = ["Maggie", "Scott", "Norman", "Mathilda", "Gordon", "Ray", "Jessie"];
// push
// pop
// unshift
// shift
// reverse
console.log([...arr2].reverse());
// splice
console.log(arr2.splice(1, 2, "javascript", "css"));
// sort
console.log(arr2.sort((a, b) => a - b));

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const map2 = people.map((item, index) => {
  return item.job;
});

const arrMap = arr2.map((a) => "hello " + a);

// console.log("map2:" + map2);
// console.log("arrMap: " + arrMap);

const card = people.map((item, index) => {
  return /* html */ `
  <div class = "userCard">
    <div class = "imageField card-${index + 1}">
      <img srg="${item.imageSrc}.jpg" alt="${item.alt ?? "wow"}" />
    </div>
    <span> 이름 ${item.name} </span>
    <span> 나이 ${item.age} </span>
    <span> 직업 ${item.job} </span>
  </div>
  `;
});

card.forEach((item) => {
  // document.body.insertAdjacentHTML("beforeend", item);
});

// const newAge = people.map((item) => item.age + 1);
// const newObj = people.filter((item) => item.age < 30);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item) => item.job === "삐돌이");
console.log(find);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const total = people.reduce((acc, item) => acc + item.age, 0);

console.log(total);

const tem = people.reduce((htmlCode, cur) => {
  return htmlCode + `<div>${cur.name} : ${cur.age}</div>`;
}, "");

document.body.insertAdjacentHTML("beforeend", tem);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
const str33 = "Albert,Lester,Alexander,Polly";
console.log(str33.split(","));

// join
console.log(str33.split(",").reverse().join(" "));
const str44 = str33[0].toLowerCase() + str33.slice(1);
console.log(str44);
