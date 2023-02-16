import { cardFormElement, createNewCard, fullImageClosePopup, fullImagePopup, renderCards } from './components/card.js';
import { validationObject } from './components/const.js';
import { avatarForm, editProfileAvatar, editProfileName, handleProfileSubmitForm, profileDescription, profileFormElement, profileName } from './components/modal.js';
import { closePopup, openedPopup } from './components/utils.js';
import { enableValidation, resetErrorsForm } from './components/validate.js';
import '../src/styles/index.css';

import './components/api.js'
import { getAllCards, getProfileInfo } from './components/api.js';



// найдем элементы для открытия и закрытия попапа редактирования профиля
const editProfile = document.querySelector('.profile__pen');
export const profilePopup = document.querySelector('#profilePopup');
const closeProfilePopup = profilePopup.querySelector('.popup__close');

// найдем элементы для открытия и закрытия попапа добавления карточки
export const popupCard = document.querySelector('#cardPopup');
const addCard = document.querySelector('.profile__add-button');
const closeCardPopup = popupCard.querySelector('.popup__close');

// найдем элемент картинки аватара пользователя
const profileAvatar = document.querySelector('.profile__avatar');

//найдем элементы для редактирования аватара пользователя
export const avatarPopup = document.querySelector('#avatarPopup');
const editAvatar = document.querySelector('.profile__avatar-edit');
const closeAvatarPopup = avatarPopup.querySelector('.popup__close');




// Функция валидации форм
 enableValidation (validationObject);

 export let userID = undefined;
 // Достаем информацию профиля и карточки с сервера

Promise.all([getProfileInfo (), getAllCards ()])
    .then(function([userData, cardsData]){
        profileName.textContent = userData.name;
        profileDescription.textContent = userData.about;
        profileAvatar.src = userData.avatar;
        userID = userData._id;
        console.log(userID);

        renderCards (cardsData)
    })
    .catch(function(error){
        console.log('Ошибка', error);
    });

// События

editProfile.addEventListener('click', function(e) {
    openedPopup(profilePopup);    
    editProfileName(e);
});

closeProfilePopup.addEventListener('click', function(){
    closePopup(profilePopup);
})

profileFormElement.addEventListener('submit', function(e){
    handleProfileSubmitForm(e);
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
    createNewCard(e);
});

fullImageClosePopup.addEventListener('click', function(){
    closePopup(fullImagePopup);
})

editAvatar.addEventListener('click', function(){
    openedPopup(avatarPopup);
})

closeAvatarPopup.addEventListener('click', function(){
    closePopup(avatarPopup);
})

avatarForm.addEventListener('submit', function(e){
    editProfileAvatar (e);
})













