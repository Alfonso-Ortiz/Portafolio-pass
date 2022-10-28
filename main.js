const iconMenu = document.querySelector(".icon_menu");
const menu = document.querySelector(".navbar");

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("navbar-show");
});
