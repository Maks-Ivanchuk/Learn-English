
document.addEventListener("DOMContentLoaded", () => {
/*----------- var 3 ------ хуй зна шо роблю-------*/
   const body = document.body;
   const burgerButton = document.querySelector('.header__burger-menu');
   const wrapperBurgerButton = document.querySelector('.header__wrapper-burger-menu');
   const headerNavigation = document.querySelector('.header__nav');

   burgerButton.addEventListener('click', function () {
      headerNavigation.classList.toggle('header__nav--open-burger-menu');
      body.classList.toggle('lock');
   });
   
   headerNavigation.addEventListener('click', function (event) {
      event.target.parentElement.classList.remove('header__nav--open-burger-menu');
      body.classList.remove('lock');
   });
});


/*-----------end var 3 ------ хуй зна шо наробив-------*/