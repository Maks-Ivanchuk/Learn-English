function stopBurgerMenu() {
   if (document.documentElement.clientWidth > 768) {
      document.querySelector('.header__nav').classList.remove('header__nav--open-burger');
   }
}

document.querySelector('.header__button').addEventListener("click", function() {
   document.querySelector('.header__nav').classList.toggle('header__nav--open-burger')
   stopBurgerMenu();
});

