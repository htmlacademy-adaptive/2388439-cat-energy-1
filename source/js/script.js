let navMain = document.querySelector('.main-nav');
let navBurger = document.querySelector('.btn-burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--is-close')) {
    navMain.classList.remove('main-nav--is-close');
    navMain.classList.add('main-nav--is-open');
  } else {
    navMain.classList.add('main-nav--is-close');
    navMain.classList.remove('main-nav--is-open');
  }
});
