/* 
  [readyState]
  
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete

*/

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ message: '에러가 발생했습니다!' });
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

// callback => 함수 본문을 넘겨서 안쪽 함수에서 실행

xhr({
  method: 'POST',
  url: END_POINT,
  onSuccess(data) {
    // console.log(data);
  },
  onFail() {},
  body: { name: 'tiger' },
});
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};
xhr.get(
  END_POINT,
  (data) => {
    // console.log(data);
  },
  (message) => {
    // console.log(message);
  }
);
xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};
xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};
xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* 
xhr promise
   */

function xhrPromise(method, url, body) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send(JSON.stringify(body)); // 생략불가 body 보낼때사용

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject('error in reject');
        }
      }
    });
  });
}

xhrPromise('GET', END_POINT)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
