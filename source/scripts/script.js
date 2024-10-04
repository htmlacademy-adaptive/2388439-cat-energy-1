const navMain = document.querySelector('.main-nav');
const navBurger = document.querySelector('.btn-burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--is-close')) {
    navMain.classList.remove('main-nav--is-close');
    navMain.classList.add('main-nav--is-open');
  } else {
    navMain.classList.add('main-nav--is-close');
    navMain.classList.remove('main-nav--is-open');
  }
});
