/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

let animal = {
  legs: 4,
  tail: true,
  stomach: [],
  size: 0,
  get Eat() {
    return this.stomach;
  },
  set Eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: "leopard",
  hunt(target) {
    this.prey = target;
    return `${target} silently approach.`;
  },
};
tiger.__proto__ = animal;
// 생성자 함수
function createEater(a) {
  return function () {
    a.size++;
  };
}
const 백두산호랑이 = {
  color: "white",
  name: "백랑이",
  __proto__: tiger,
};

const 용마산호랑이 = {
  color: "green",
  name: "선돌이",
  __proto__: tiger,
};

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

const a = new Animal();
function Tiger(name) {
  this.name = name;
  this.pattern = "tiger";
  this.hunt = function (target) {
    this.pray = target;
    return `${target} is approaching.`;
  };
}

Tiger.prototype = a;
const 한라산호랑이 = new Tiger("한돌이");

// call, apply, bind 함수의 메서드

// this를 전달해줄 수 있음.

function sum(a, b) {
  console.log(this);
  console.log(a + b);
}

// 대신 실행함  매개변수 어떻게 받음?

// 바로 실행

// sum.call('a',10,20)
// sum.apply('a',[10,20])

const aa = sum.bind("a", 10, 30);
// debounce, throttle

// button.addEventListener('click',sum.call)

const user = {
  name: "tiger",
};

// user.hasOwnProperty('name')
// Object.prototype.hasOwnProperty.call(user,'name')
