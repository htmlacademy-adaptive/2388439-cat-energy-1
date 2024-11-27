document.querySelector('.main-nav').classList.remove('main-nav--nojs');

const btnBurger = document.querySelector('.btn-burger');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.add('main-nav--is-close');

if (btnBurger) {
  btnBurger.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--is-open');
    mainNav.classList.toggle('main-nav--is-close');
  });
}
