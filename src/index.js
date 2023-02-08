import { cardFormElement, createNewCard, fullImageClosePopup, fullImagePopup } from './components/card.js';
import { validationObject } from './components/const.js';
import { editProfileName, handleSubmitForm, profileFormElement } from './components/modal.js';
import { closePopup, openedPopup } from './components/utils.js';
import { changeButtonState, enableValidation, resetErrorsForm } from './components/validate.js';
import './styles/index.css';



// найдем элементы для открытия и закрытия попапа редактирования профиля
const editProfile = document.querySelector('.profile__pen');
const profilePopup = document.querySelector('#profilePopup');
const closeProfilePopup = profilePopup.querySelector('.popup__close');

// найдем элементы для открытия и закрытия попапа добавления карточки
const popupCard = document.querySelector('#cardPopup');
const addCard = document.querySelector('.profile__add-button');
const closeCardPopup = popupCard.querySelector('.popup__close');


// Функция валидации форм

 enableValidation (validationObject);

// События

editProfile.addEventListener('click', function(e) {
    openedPopup(profilePopup);    
    editProfileName(e);
});

closeProfilePopup.addEventListener('click', function(){
    closePopup(profilePopup);
})

profileFormElement.addEventListener('submit', function(e){
    closePopup(profilePopup);
    handleSubmitForm(e);
});

addCard.addEventListener('click', function(){
    resetErrorsForm(cardFormElement, validationObject)
    cardFormElement.reset()
    openedPopup(popupCard);
})

closeCardPopup.addEventListener('click', function(){
    closePopup(popupCard);
})

cardFormElement.addEventListener('submit', function(e){
    closePopup(popupCard);
    createNewCard(e)
});

fullImageClosePopup.addEventListener('click', function(){
    closePopup(fullImagePopup);
})














