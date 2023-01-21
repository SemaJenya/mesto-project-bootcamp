// найдем элементы для открытия и закрытия попапа
const EditProfile = document.querySelector('.profile__pen');
const PopupElement = document.querySelector('.popup');
const ClosePopupElement = PopupElement.querySelector('.popup__close');

// найдем элементы для редактирования формы
const FormElement = document.querySelector('.form');
const nameInput = FormElement.querySelector('.form__item_type_name');
const discriptionInput = FormElement.querySelector('.form__item_type_discription');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');



// Функции

function OpenedPopup (Element) { 
    Element.classList.add('popup_opened');
}
    
function ClosePopup (Element) {
    Element.classList.remove('popup_opened');
}

function handleSubmitForm (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = discriptionInput.value;
}


// События

EditProfile.addEventListener('click', function() {
    OpenedPopup(PopupElement);
});

ClosePopupElement.addEventListener('click', function(){
    ClosePopup(PopupElement);
})

FormElement.addEventListener('submit', handleSubmitForm);

