import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';
// xhr.post(
//   'https://jsonplaceholder.typicode.com/users',
//   { name: 'tiger', age: 40 },
//   (data) => {
//     console.log(data);
//   },
//   () => {}
// );

const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   resolve('success');
//   reject('failed');
// });
// console.log(promise);

//mixin pattern
// const defaultOption = {
//   shouldReject: false,
//   timeout: 1000,
//   successMessage: 'success',
//   failMessage: 'Error failed',
// };
// function delayP(option) {
//   let config;
//   if (isNumber(option)) {
//     config.timeout = option;
//   }
//   isObject(option) ? { ...defaultOption, ...option } : '';

//   let { shouldReject, successMessage, failMessage, timeout } = config;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve('success~');
//       if (shouldReject) {
//         resolve(successMessage);
//       } else {
//         reject(failMessage);
//       }
//     }, timeout);
//   });
// }
// const result = delayP({
//   shouldReject: true,
//   timeout: 5000,
//   successMessage: '성공입니다.',
//   failMessage: '실패',
// });
// result
//   .then((res) => {
//     console.log('djfk: ' + res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((res, rej) => {
//     console.log('new then2');
//   });

// mixin

// 기존 객체  +  전달 받은 객체

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: '성공입니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldReject, successMessage, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(successMessage);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

const result = delayP();

result
  .then((res) => {
    first.style.top = '-100px';
    second.style.top = '100px';
    return delayP(1000);
  })
  .then(() => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    return delayP(1000);
  })
  .then(() => {
    first.style.top = '0';
    second.style.top = '0';
  })
  .catch((error) => {
    console.log(error);
  });
