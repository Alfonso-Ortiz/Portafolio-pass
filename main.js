const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".navbar");

iconMenu.addEventListener("click", function () {
  console.log(menu.classList.toggle("navbar-show"));
});
