/*MENÚ HAMBURGUESA */
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".navbar");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("activado");
});
