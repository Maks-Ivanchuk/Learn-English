
/* ------------- var 1 -------------

function burgerMenu() {
   document.querySelector('.header__burger-button').addEventListener("click", function () {
      document.querySelector('.header__nav').classList.toggle('header__nav--open-burger-menu');

      document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--activate-burger-button')
   });
}

burgerMenu();
---------------------------------- */

/* ------------- var 2 -------------*/
let bugregButton = document.querySelector('.header__burger-button');
let bugregMenu = document.querySelector('.header__burger-menu');
let headerNavigation = document.querySelector('.header__nav');

document.addEventListener("DOMContentLoaded", burgerMenu());

function burgerMenu() {
   bugregButton.addEventListener("click", function () {
      headerNavigation.classList.toggle('header__nav--open-burger-menu');

      bugregMenu.classList.toggle('header__burger-menu--activate-burger-button');
   });
}