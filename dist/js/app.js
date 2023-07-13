const sliderImgs = document.querySelectorAll(".header__img");
const sliderBtns = document.querySelectorAll(".header__slider-nav-item");
const ratingWrapper = document.querySelectorAll(".catalog__rating-wrapper");

console.log(sliderImgs, sliderBtns);

sliderBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => changeSlide(e, i));
});

const startsMarkup = `
<input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5"
    title="Awesome - 5 stars"></label>
<input type="radio" id="star4half" name="rating" value="4 and a half" /><label
    class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
<input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4"
    title="Pretty good - 4 stars"></label>
<input type="radio" id="star3half" name="rating" value="3 and a half" /><label
    class="half" for="star3half" title="Meh - 3.5 stars"></label>
<input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3"
    title="Meh - 3 stars"></label>
<input type="radio" id="star2half" name="rating" value="2 and a half" /><label
    class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
<input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2"
    title="Kinda bad - 2 stars"></label>
<input type="radio" id="star1half" name="rating" value="1 and a half" /><label
    class="half" for="star1half" title="Meh - 1.5 stars"></label>
<input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1"
    title="Sucks big time - 1 star"></label>
<input type="radio" id="starhalf" name="rating" value="half" /><label class="half"
    for="starhalf" title="Sucks big time - 0.5 stars"></label>
`;

const sizesMarkup = `
<div class="catalog__sizes">
    <span class="catalog__size">S</span>
    <span class="catalog__size catalog__size--active">M</span>
    <span class="catalog__size">L</span>
</div>
`;

ratingWrapper.forEach((rating) => {
  const fieldset = document.createElement("fieldset");
  const sizes = document.createElement("div");
  fieldset.classList.add("rating");
  sizes.classList.add("catalog__sizes");
  fieldset.innerHTML = startsMarkup;
  sizes.innerHTML = sizesMarkup;
  rating.append(sizes, fieldset);
});

function changeSlide(event, i) {
  sliderBtns.forEach((btn) =>
    btn.classList.remove("header__slider-nav-item--active")
  );
  sliderImgs.forEach((img) => img.classList.remove("header__img--active"));
  sliderBtns[i].classList.add("header__slider-nav-item--active");
  sliderImgs[i].classList.add("header__img--active");
}
