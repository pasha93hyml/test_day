const sliderImgs = document.querySelectorAll(".header__img");
const sliderBtns = document.querySelectorAll(".header__slider-nav-item");

console.log(sliderImgs, sliderBtns);

sliderBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => changeSlide(e, i));
});

function changeSlide(event, i) {
  sliderBtns.forEach((btn) =>
    btn.classList.remove("header__slider-nav-item--active")
  );
  sliderImgs.forEach((img) => img.classList.remove("header__img--active"));
  sliderBtns[i].classList.add("header__slider-nav-item--active");
  sliderImgs[i].classList.add("header__img--active");
}
