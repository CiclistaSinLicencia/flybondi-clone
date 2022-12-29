console.warn("Java Working")
/* IMAGENES Carousel */
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/*-------------------------
          THEMES
--------------------------*/

/* seleccion del checkbox, agrega un dataType */
const checkbox = document.getElementById("theme");
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "light") {
    changeThemeToDark();
  } else {
       changeThemeToLight();
  }
});


/* local storage */
let theme = localStorage.getItem("data-theme");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};
const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

if (theme === "dark") {
  changeThemeToDark();
}