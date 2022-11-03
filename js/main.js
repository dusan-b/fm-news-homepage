var toggleButton = document.querySelector('.main-nav__btn');
var body = document.querySelector('body');

toggleButton.addEventListener('click', function () {
    if (body.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        body.classList.remove('is-active');
    } else {
        body.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
    }
});