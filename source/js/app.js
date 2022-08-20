var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner .button');
var popupClose = document.querySelector('.popupClose');

var mobileBurger = document.querySelector('.humburger');
var mobileClose = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

popupBtn.addEventListener('click', function(){
    popup.classList.add('popupOpen');
})

popupClose.addEventListener('click', function(){
    popup.classList.remove('popupOpen');
})

mobileBurger.addEventListener('click', function(){
    mobileHeader.classList.add('mobile-header__open');
})

popupClose.addEventListener('click', function(){
    mobileHeader.classList.remove('mobile-header__open');
})