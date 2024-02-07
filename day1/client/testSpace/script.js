const users = [];
const loginCounter = createCounter();
const idArea = document.querySelector('#userId');

function fetchJSONData() {
  fetch('./data.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => users.push(...data))
    .catch((error) => console.error('Unable to fetch data:', error));
}
fetchJSONData();
// console.log(users);
const btnSummit = document.querySelector('#btn-login');
btnSummit.addEventListener('click', () => {
  const userId = document.querySelector('#userId').value;
  if (login(userId)) {
    showHide(userId);
  }
});

function checkId(userId) {
  return users.find((item) => item.id === userId);
}

function login(userId) {
  const targetUser = checkId(userId);
  const userPw = document.querySelector('#userPw').value;
  if (targetUser) {
    idSuccessChange('gray');
    if (!targetUser.isActive) {
      alert(
        `[${targetUser.id}] ID가 비밀번호 입력 횟수 초과로 잠겼습니다. 메니저에게 문의하세요.`
      );
      return;
    }
    if (targetUser.password == userPw) {
      pwChange(true);
      return true;
    } else {
      pwChange(false);
      targetUser.tries = loginCounter();
      alert(
        `로그인에 실패했습니다. ${5 - targetUser.tries}번 남았습니다.\n신중하게 입력하세요.`
      );
      if (targetUser.tries >= 5) {
        alert(
          `로그인 시도가 너무 많습니다. 해당 아이디를 잠급니다.\n관리자에게 문의하세요.`
        );
        idLock(targetUser.id);
      }
      return false;
    }
  } else {
    alert('아이디를 확인해주세요.');
    idChange(false);
    return false;
  }
}

function createCounter() {
  let n = 0;
  return function () {
    n++;
    return n;
  };
}

function idLock(userId) {
  users.find((item) => item.id === userId).isActive = false;
}

function idChange(check) {
  document.querySelector('#id-label').textContent = check
    ? '아이디를 입력해주세요'
    : '아이디가 틀렸습니다.';
  document.querySelector('#id-label').style =
    'color:' + (check ? 'gray' : 'red');
  idArea.style = 'color:' + (check ? 'gray' : 'red');
}

function pwChange(check) {
  document.querySelector('#pw-label').textContent = check
    ? '비밀번호를 입력해주세요'
    : '비밀번호가 틀렸습니다.';
  document.querySelector('#pw-label').style =
    'color:' + (check ? 'gray' : 'red');
  document.querySelector('#userPw').style = 'color:' + (check ? 'gray' : 'red');
}

const passwordArea = document.querySelector('#userPw');
passwordArea.addEventListener('keypress', (e) => {
  enterKey(e);
  if (document.querySelector('#userPw').value.length + 1 < 8) {
    document.querySelector('#pw-label').textContent =
      '비밀번호는 8자리 이상입니다.';
  } else {
    pwChange(true);
  }
});

idArea.addEventListener('keypress', (e) => {
  enterKey(e);
});

function showHide(params) {
  alert('로그인에 성공했습니다.');
  document.querySelector('#canvas').style = 'display:block';
  document.querySelector('.inner-wrapper').style = 'display:none';
  document.querySelector('#afterLogin').style = 'display:block';
  document.querySelector('#afterLogin').textContent =
    users.find((item) => item.id === params).name +
    '님 \n\n2024년 용띠 새해 복 많이 받으세요';
}

function idSuccessChange(color) {
  document.querySelector('#id-label').textContent = '아이디를 입력해주세요.';
  document.querySelector('#id-label').style = 'color:' + color;
  idArea.style = 'color:' + color;
}

function enterKey(e) {
  if (e.code === 'Enter') {
    const userId = idArea.value;
    if (login(userId)) {
      showHide(userId);
    }
  }
}
