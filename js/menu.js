(function () {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('menu-btn')[0];
    var burgerContain = document.getElementsByClassName('sidebar')[0];


    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain].forEach(function (el) {
            el.classList.toggle('open');
            console.log('1');
        });
    }, false);
})();


(function () {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('menu-btn')[0];
    var burgerContain = document.getElementsByClassName('sidebar')[0];
    var closeBurgerMenu = document.getElementsByClassName('btn-close')[0];
    closeBurgerMenu.addEventListener('click', function removeClasses() {
        [body, burgerMenu, burgerContain].forEach(function (el) {
            el.classList.remove('open');
            console.log('1');
        });
    }, false);
})();



$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 80) {
            $('.sidebar').addClass('stickytop');
        } else {
            $('.sidebar').removeClass('stickytop');
        }
    });
});