// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  total: 0,
  date: "2023. 12. 06",
  tableIndex: 5,
  menu: [
    { name: "통 새우 돈까스", price: 13000, count: 2 },
    { name: "치즈 돈까스", price: 10000, count: 1 },
    { name: "곰곰 육개장", price: 15000, count: 3 },
  ],
  totalPrice() {
    this.total = this.menu.reduce((acc, cur) => acc + cur.price * cur.count, 0);
    return this.total;
  },
};

// 일반 함수에서의 this : 나를 호출한 대상

shopOrder.totalPrice();

// console.log(
//   (shopOrder.menu[0].price * shopOrder.menu[0].count) + (shopOrder.menu[1].price * shopOrder.menu[1].count)
//    );

// forEach를 사용해서 모든 메뉴의 총 금액을 계산해주세요
let total = 0;

// shopOrder.menu.forEach((product)=>{
//   total += product.price * product.count;
// })

shopOrder.menu.forEach((p) => (total += p.price * p.count));

// reduce

// const result = shopOrder.menu.reduce((acc,cur)=>{
//    return acc + (cur.price * cur.count)
// },0)

const result = shopOrder.menu.reduce(
  (acc, cur) => acc + cur.price * cur.count,
  0,
);

// 객체 내부에 arrow function사용은 자제하자. this가 없기 때문이다.
