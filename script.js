const bar = document.getElementById('bars');
const nav = document.querySelector('.right-side');

bar.addEventListener('click', function () {
  console.log(nav.classList.toggle('smallNav'));
  console.log('it works the nav bar button');
});

// const helpBtn = document.getElementById('newBar');
const hidden = document.querySelectorAll('.hid');

// code below here works for plus button

// const newBar = document.querySelectorAll('.newBar1');

// newBar.addEventListener('click', function () {
//   hidden.forEach((x) => x.classList.toggle('show'));
//   // console.log(hidden.classLists.toggle('show'));
// });

// newBar.forEach((x) =>
//   x.addEventListener('click', function () {
//     hidden.forEach((x) => x.classList.toggle('show'));
//   })
// );

//  trying getelementbyclassname

const newBar = document.getElementsByClassName('newBar1');

for (i = 0; i <= newBar.length; i++) {
  newBar[i].addEventListener('click', function () {
    hidden.forEach((x) => x.classList.toggle('show'));
  });
}
