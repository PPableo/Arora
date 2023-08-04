const mobile_menu = document.querySelector('.mobile-menu');
const mobile_nav = document.querySelector('.mobile-nav');

mobile_menu.addEventListener('click', function () {
    mobile_menu.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
});

