const first = document.querySelector(".first");

// function handleClick() {
//   console.log("clicked");
// }

// first.addEventListener("click", handleClick);

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = "orange";
    } else {
      document.body.style.background = "white";
    }

    isClicked = !isClicked;
  };
})();

first.addEventListener("click", handleClick);

function createCounter(init = 0) {
  let a = init;
  return function () {
    return a++;
  };
}
let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
