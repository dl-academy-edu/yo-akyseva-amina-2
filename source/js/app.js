var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner .button');
var popupClose = document.querySelector('.popupClose');

popupBtn.addEventListener('click', function(){
    popup.classList.add('popupOpen');
})

popupClose.addEventListener('click', function(){
    popup.classList.remove('popupOpen');
})