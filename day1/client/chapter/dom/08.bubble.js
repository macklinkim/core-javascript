/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log('%c section clicked', 'color: orange');
  console.log(this);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(this === e.currentTarget);
});
// article.addEventListener('click', () => {
//   console.log('%c article clicked', 'color: dodgerblue');
// });
// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p clicked', 'color: orangered');
// });

/* 캡처링 ----------------------------------------------------------------- */
