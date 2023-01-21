// найдем элементы для открытия и закрытия попапа редактирования профиля
const EditProfile = document.querySelector('.profile__pen');
const profilePopup = document.getElementById('profilePopup');
const CloseProfilePopup = profilePopup.querySelector('.popup__close');

// найдем элементы для редактирования формы
const FormElement = document.querySelector('.form');
const nameInput = FormElement.querySelector('.form__item_type_name');
const discriptionInput = FormElement.querySelector('.form__item_type_discription');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// найдем элементы для открытия и закрытия попапа добавления карточки
const PopupCard = document.getElementById('cardPopup');
const addCard = document.querySelector('.profile__add-button');
const CloseCardPopup = PopupCard.querySelector('.popup__close');


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
    OpenedPopup(profilePopup);
});

CloseProfilePopup.addEventListener('click', function(){
    ClosePopup(profilePopup);
})

FormElement.addEventListener('submit', handleSubmitForm);

addCard.addEventListener('click', function(){
    OpenedPopup(PopupCard);
})

CloseCardPopup.addEventListener('click', function(){
    ClosePopup(PopupCard);
})



