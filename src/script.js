// function stopBurgerMenu() {
//    if (document.documentElement.clientWidth > 768) {
//       document.querySelector('.header__nav').classList.remove('header__nav--open-burger');
//    }
// }

// function stopBurgerMenu() {
//    if (window.innerWidth > 768) {
//       document.querySelector('.header__nav').classList.remove('header__nav--open-burger');
//    }
// }
function burgerMenu() {
   document.querySelector('.header__button').addEventListener("click", function () {
      document.querySelector('.header__nav').classList.toggle('header__nav--open-burger');

      document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--activate-burger-button')
   });
}

burgerMenu()
