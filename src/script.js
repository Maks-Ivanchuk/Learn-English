function stopBurgerMenu() {
   if (document.documentElement.clientWidth > 764) {
      document.querySelector('.header__nav').classList.remove('header__nav--open-burger');
   }
}

document.querySelector('.header__burger-menu').addEventListener("click", function() {
   document.querySelector('.header__nav').classList.toggle('header__nav--open-burger')
   stopBurgerMenu();
});

