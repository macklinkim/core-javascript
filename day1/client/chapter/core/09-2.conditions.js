function login() {
  let userName = prompt("아이디를 입력해 주세요");

  if (!userName) return; // 함수는 return 문을 만나면 해당 코드의 실행을 종료

  if (userName.toLowerCase() === "admin") {
    let password = prompt("비밀번호를 입력해 주세요.");

    if (password.toLowerCase() === "themaster") {
      console.log("로그인 성공! 환영합니다~!");
    } else {
      console.log("비밀번호를 잘못 입력하셨습니다.");
    }
  } else if (userName === null || userName.replace(/\s*/g, "") === "") {
    console.log("취소했습니다.");
  } else {
    console.log("올바른 사용자가 아닙니다!");
  }
}
