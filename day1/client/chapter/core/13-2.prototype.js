/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  }
}
const a = new Animal("ddd");

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = "tiger patt";
  }
  hunt(target) {
    return `${target} silently approach.`;
  }
  static bark() {
    return "grrr";
  }
}

const bTiger = new Tiger("handol");
