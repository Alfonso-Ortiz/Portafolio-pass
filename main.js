/*MENÚ HAMBURGUESA */
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".navbar");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("activado");
});

/*SLIDER PORTAFOLIO */
const slider = document.querySelector(".content_portafolio");
let sliderBox = document.querySelectorAll(".box");
let sliderBoxLast = sliderBox[sliderBox.length - 1];

const btnLeft = document.querySelector("#rowLeftP");
const btnRight = document.querySelector("#rowRightP");

slider.insertAdjacentElement("afterbegin", sliderBoxLast);

function moveright() {
  let sliderBoxFirst = document.querySelector(".box")[0];
  slider.style.marginleft = "-104%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderBoxFirst);
    slider.style.marginleft = "-54%";
  }, 500);
}

rowRightP.addEventListener("click", function () {
  moveright();
});
