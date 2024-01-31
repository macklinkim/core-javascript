/* ---------------- */
/* Switch           */
/* ---------------- */

const value = 10;

switch (value) {
  case 10:
    console.log("10입니다.");
    break;
  case 20:
    console.log("20입니다.");
    break;
  case 30:
    console.log("30입니다.");
    break;
  case 40:
    console.log("40입니다.");
    break;
  case 50:
    console.log("50입니다.");
    break;
  default:
    console.log("난수입니다.");
    break;
}

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  case MORNING:
    console.log("뉴스 기사 글을 읽는다.");
    break;
  case LUNCH:
    console.log("자주 가는 식당에 가서 식사를 한다.");
    break;
  case DINNER:
    console.log("동네 한바퀴를 조깅한다.");
    break;
  case NIGHT:
    console.log("친구에게 전화를 걸어 수다를 떤다.");
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
    break;

  default:
    break;
}
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log("뉴스 기사 글을 읽는다.");
} else if (thisTime === LUNCH) {
  console.log("자주 가는 식당에 가서 식사를 한다.");
} else if (thisTime === DINNER) {
  console.log("동네 한바퀴를 조깅한다.");
} else if (thisTime === NIGHT) {
  console.log("친구에게 전화를 걸어 수다를 떤다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
} else {
  console.log("first");
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(n) {
  switch ("" + n) {
    case "0":
      return "월";
    case "1":
      return "화";
    case "2":
      return "수";
    case "3":
      return "목";
    case "4":
      return "금";
    case "5":
      return "토";
    case "6":
      return "일";
    default:
      console.log("wrong typed.");
      break;
  }
}
const dateOfWeek = getDay(getRandom(7));

function weekend(n) {
  /*   switch (n) {
    case "토":
    case "일":
      console.log(n + "이며, 주말입니다.");
      break;
    default:
      console.log(n + "이며, 평일입니다.");
      break;
  } */

  // if (n.includes("토") || n.includes("일")) {
  //   str += `주말입니다.`;
  // } else {
  //   str += `평일입니다.`;
  // }

  let str = `오늘은 ${n}요일이며 `;
  let reg = /토|일/g;

  // n.includes("토") || n.includes("일")
  //   ? (str += `주말입니다.`)
  //   : (str += `평일입니다.`);

  n?.search(reg) === 0 ? (str += `주말입니다.`) : (str += `평일입니다.`);

  console.log(str);
}

weekend(dateOfWeek);
