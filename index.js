// найдем элементы
const EditProfile = document.querySelector('.profile__pen');
const PopupElement = document.querySelector('.popup');


// Функции

function OpenedPopup (Element) { 
    Element.classList.add('popup_opened');
}
    


// События

EditProfile.addEventListener('click', function() {
    OpenedPopup(PopupElement);
});

