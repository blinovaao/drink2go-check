const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider__item');
const sliderPagination = slider.querySelector('.slider__pagination');
const sliderBullets = sliderPagination.querySelectorAll('.bullets__button');
const sliderButtonPrev = slider.querySelector('.slider__button--prev');
const sliderButtonNext = slider.querySelector('.slider__button--next');

const heroSection = document.querySelector('.hero');

if (sliderItems[0].classList.contains('slider__item--current')) {
  sliderButtonPrev.setAttribute('disabled', '');
} else {
  sliderButtonPrev.removeAttribute('disabled');
}

sliderPagination.addEventListener('click', (evt) => {
  const currentBullet = evt.target.closest('.bullets__button');
  let currentIndex = 0;

  for (let i = 0; i <= sliderBullets.length - 1; i++) {
    if (sliderBullets[i].classList.contains('bullets__button--current')) {
      sliderBullets[i].classList.remove('bullets__button--current');
      heroSection.classList.remove(`hero--bg-${i + 1}`);
      sliderItems[i].classList.remove('slider__item--current');
    }

    if (sliderBullets[i] === currentBullet) {
      currentIndex = i;
    }
  }

  currentBullet.classList.add('bullets__button--current');
  heroSection.classList.add(`hero--bg-${currentIndex + 1}`);
  sliderItems[currentIndex].classList.add('slider__item--current');

  if (sliderItems[0].classList.contains('slider__item--current')) {
    sliderButtonPrev.setAttribute('disabled', '');
  } else {
    sliderButtonPrev.removeAttribute('disabled');
  }

  if (sliderItems[sliderItems.length - 1].classList.contains('slider__item--current')) {
    sliderButtonNext.setAttribute('disabled', '');
  } else {
    sliderButtonNext.removeAttribute('disabled');
  }
});

sliderButtonPrev.addEventListener('click', () => {
  let currentIndex = 0;

  for (let i = 1; i <= sliderItems.length - 1; i++) {
    if (sliderItems[i].classList.contains('slider__item--current')) {
      currentIndex = i;
      sliderItems[i].classList.remove('slider__item--current');
      sliderBullets[i].classList.remove('bullets__button--current');
      heroSection.classList.remove(`hero--bg-${i + 1}`);
    }
  }

  sliderItems[currentIndex - 1].classList.add('slider__item--current');
  sliderBullets[currentIndex - 1].classList.add('bullets__button--current');
  heroSection.classList.add(`hero--bg-${currentIndex}`);

  if (sliderItems[0].classList.contains('slider__item--current')) {
    sliderButtonPrev.setAttribute('disabled', '');
  } else {
    sliderButtonPrev.removeAttribute('disabled');
  }

  if (sliderItems[sliderItems.length - 1].classList.contains('slider__item--current')) {
    sliderButtonNext.setAttribute('disabled', '');
  } else {
    sliderButtonNext.removeAttribute('disabled');
  }
});

sliderButtonNext.addEventListener('click', () => {
  let currentIndex = 0;

  for (let i = 0; i <= sliderItems.length - 2; i++) {
    if (sliderItems[i].classList.contains('slider__item--current')) {
      currentIndex = i;
      sliderItems[i].classList.remove('slider__item--current');
      sliderBullets[i].classList.remove('bullets__button--current');
      heroSection.classList.remove(`hero--bg-${i + 1}`);
    }
  }

  sliderItems[currentIndex + 1].classList.add('slider__item--current');
  sliderBullets[currentIndex + 1].classList.add('bullets__button--current');
  heroSection.classList.add(`hero--bg-${currentIndex + 2}`);

  if (sliderItems[0].classList.contains('slider__item--current')) {
    sliderButtonPrev.setAttribute('disabled', '');
  } else {
    sliderButtonPrev.removeAttribute('disabled');
  }

  if (sliderItems[sliderItems.length - 1].classList.contains('slider__item--current')) {
    sliderButtonNext.setAttribute('disabled', '');
  } else {
    sliderButtonNext.removeAttribute('disabled');
  }
});
