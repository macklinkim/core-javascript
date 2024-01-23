// console.log(globalThis, window);

function swapObj(a, b) {
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

  console.log(a, b);
}
function name(params) {}
function name2() {
  let c = { a: 1 };
  let d = { a: 2 };
  console.log('B4:', c, d);
  swapObj(c, d);
  console.log('after:', c, d);
}
name2();
