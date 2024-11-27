document.querySelector('main-nav').classList.remove('.main-nav--nojs');

const btnBurger = document.querySelector('.btn-burger');
const mainNav = document.querySelector('.main-nav');

if (btnBurger) {
  btnBurger.addEventListener('click', () => {
    mainNav.classList.btnBurger('main-nav--is-open');
    btnBurger.classList.btnBurger('main-nav--is-close');
  });
}
