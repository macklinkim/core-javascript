const promise = new Promise((resolve, reject) => {
  resolve('data received.');
});

promise
  .then((data) => {
    const user = data;
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error('ERROR:' + error);
  });

// const promise =
