const toggleButton = document.querySelector('.main-nav__btn');
const body = document.querySelector('body');
const buttonLabel = document.querySelector('.main-nav__btn-label');

toggleButton.addEventListener('click', function () {
  if (body.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    body.classList.remove('is-active');
    buttonLabel.innerHTML = 'Open menu';
  } else {
    body.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    buttonLabel.innerHTML = 'Close menu';
  }
});