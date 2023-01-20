// найдем элементы для открытия и закрытия попапа
const EditProfile = document.querySelector('.profile__pen');
const PopupElement = document.querySelector('.popup');
const ClosePopupElement = PopupElement.querySelector('.popup__close');



// Функции

function OpenedPopup (Element) { 
    Element.classList.add('popup_opened');
}
    
function ClosePopup (Element) {
    Element.classList.remove('popup_opened');
}


// События

EditProfile.addEventListener('click', function() {
    OpenedPopup(PopupElement);
});

ClosePopupElement.addEventListener('click', function(){
    ClosePopup(PopupElement);
})

