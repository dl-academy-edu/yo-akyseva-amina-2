var mobileBurger = document.querySelector('.humburger');
var mobileClose = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

mobileBurger.addEventListener('click', function(){
    mobileHeader.classList.add('mobile-header__open');
})

popupClose.addEventListener('click', function(){
    mobileHeader.classList.remove('mobile-header__open');
})