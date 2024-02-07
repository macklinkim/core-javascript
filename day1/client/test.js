const objA = {
  name: 'tiger',
  address: {
    zipcode: '123213',
    geo: {
      lat: '3333333',
      lng: '9999999',
    },
  },
};

const objB = { ...objA, address: { ...objA.address } };

console.log(objB);
objB.address.geo.lat = 'adsklfsjl';
objB.address.zipcode = 'aaaaaaaa';
console.log(objB.address.geo.lat);
console.log(objA.address.geo.lat);
console.log(objB.address.zipcode);
console.log(objA.address.zipcode);

const user = {
  total: 0,
  incre: (it) => {
    this.total += it;
    console.log('this' + this === globalThis);
    console.log('total:' + this.total);
  },
};

user.incre(5);
console.log(user.total);
const total = user.incre;
