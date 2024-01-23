/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(YEAR);
console.log(YEAR + "");
console.log(typeof (YEAR + ""));

// undefined, null
let days = null;
let weekend;

console.log(days + "");
console.log(weekend + "");
console.log(undefined + "");

// boolean

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

// null

// boolean

// string

// numeric string
console.log(parseInt("104px"));
console.log("type", typeof parseInt("104px"));
console.log(parseInt("      104px"));
console.log(parseInt(" as104px"));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.log(" ", Boolean(" "));
console.log("str", 0, Boolean("0"));
console.log("number", 0, Boolean(0));
console.log("number 1", Boolean(1));
console.log("number -1", Boolean(-1));

console.log(+"300");
console.log(typeof +"300");
