
document.addEventListener("DOMContentLoaded", () => {

   const body = document.body;
   const burgerButton = document.querySelector('.header__burger-menu');
   const headerNavigation = document.querySelector('.header__nav');

   burgerButton.addEventListener('click', function (event) {
      //headerNavigation.classList.toggle('header__nav--open-burger-menu');
      event.target.closest('.container').querySelector('.header__nav').classList.toggle('header__nav--open-burger-menu');
      body.classList.toggle('lock');
   });

   headerNavigation.addEventListener('click', function (event) {
      event.target.parentElement.classList.remove('header__nav--open-burger-menu');
      body.classList.remove('lock');
   });
});