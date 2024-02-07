const promise = new Promise((resolve, reject) => {
  resolve('data received.');
});

promise
  .then((data) => {
    const user = data;
    // return// fetch('https://jsonplaceholder.typicode.com/todos/1');
    return;
  })
  .then((user) => {
    // console.log(user);
  })
  .catch((error) => {
    // console.error('ERROR:' + error);
  });

// const promise =

//map은 새로운 array를 return ;
//항상 전체 사이즈를 변경하지 않는다. length is keep
// 새로운 array를 위해 original array를 사용한다.

const people = [
  { name: 'Abbie', age: 59, position: 'India' },
  { name: 'Danny', age: 35, position: 'Congo - Brazzaville' },
  { name: 'Sally', age: 43, position: 'Faroe Islands' },
  { name: 'Daisy', age: 47, position: 'Romania' },
  { name: 'Alma', age: 26, position: 'British Virgin Islands' },
];

const getAges = (person) => person.age * 2;

const ages = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(ages);

const names = people.map((item) => `<h1>${item.name}</h1>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');

// console.log(window.myBtn);

window['myBtn'].addEventListener('click', () => {
  console.log('click');
  result.innerHTML = arrList.join('');
});

const arrList = Array.from(result.querySelectorAll('h1'));
console.log([...arrList]);

const newArr = arrList.map((item) => {});

const myDiv = document.querySelector('#myDiv');
const mySection = document.querySelector('#mySection');
const myP = document.querySelector('#myP');

myDiv.addEventListener('click', (e) => {
  // e.target === myDiv ? console.log('%c click myDiv ', 'color:red') : '';
  if (e.target === myDiv) myDiv.style = 'backgroundColor: white';
});
// mySection.addEventListener('click', (e) => {
//   e.target === mySection
//     ? console.log('%c click mySection ', 'color:blue')
//     : '';
// });
// myP.addEventListener('click', (e) => {
//   e.target === myP ? console.log('%c click p ', 'color:green') : '';
// });
