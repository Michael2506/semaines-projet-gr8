var menuBurger = document.querySelector(".menuBurger");
var burger = document.querySelector(".navigation__burger");
var menuOpen = document.getElementById("menuOpen");
var closeMenu = document.getElementById("closeMenu");

menuBurger.addEventListener("click", function() {
  menuOpen.classList.toggle("-isOpen");
  burger.classList.add("-isOpen");
});

closeMenu.addEventListener("click", function() {
  menuOpen.classList.remove("-isOpen");
});
