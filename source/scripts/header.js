const headerToggle = document.querySelector('.main-nav__toggle');
const headerList = document.querySelector('.main-nav__list--site');

headerToggle.addEventListener('click', () => {
  headerToggle.classList.toggle('main-nav__toggle--opened');
  headerList.classList.toggle('main-nav__list--opened');
});
