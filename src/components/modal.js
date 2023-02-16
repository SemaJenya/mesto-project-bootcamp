import { avatarPopup, profilePopup } from "..";
import { editMyAvatar, editProfile } from "./api";
import { validationObject } from "./const";
import { closePopup, renderLoadingButton } from "./utils";
import { resetErrorsForm } from "./validate";

const popupList = Array.from(document.querySelectorAll('.popup'));

// найдем элементы для редактирования формы
export const profileFormElement = document.forms.profileForm;
const nameInput = profileFormElement.querySelector('.form__item_type_name');
const discriptionInput = profileFormElement.querySelector('.form__item_type_discription');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
const saveUpdateProfile = profileFormElement.querySelector('.form__button');

// найдем элементы для редактирования аватара пользователя
export const avatarForm = document.forms.avatarForm;
const avatarLinkInput = avatarForm.querySelector('.form__item_type_imgLink');
const avatarLinkProfile = document.querySelector('.profile__avatar');
const saveAvatarButton = avatarForm.querySelector('.form__button');



//закрытие попапа на клавищу esc
export function closeEscPopup (e) {
    if (e.key === 'Escape') {
        const escPopup = document.querySelector('.popup_opened');
        closePopup(escPopup);
    }
}

//закрытие попапа при клике на оверлей

export function closeOverlayPopup (e) {
    if (e.target === e.currentTarget) {
        closePopup(e.currentTarget);
    }            
}


export function handleProfileSubmitForm (e) {
    e.preventDefault();
    renderLoadingButton ({
        button: saveUpdateProfile,
        text: 'Сохранение...',
        disabled: true
    })
    editProfile (nameInput.value, discriptionInput.value)
        .then(function(){
            profileName.textContent = nameInput.value;
            profileDescription.textContent = discriptionInput.value;
        })
        .then (function(){
            closePopup(profilePopup);
        })
        .catch(function(){
            console.log(error);
        })
        .finally (function(){
            renderLoadingButton ({
                button: saveUpdateProfile,
                text: 'Сохранить',
                disabled: false
            })
        })
        
}

export function editProfileName (e) {
    e.preventDefault();
    nameInput.value = profileName.textContent;
    discriptionInput.value = profileDescription.textContent;
}

export function editProfileAvatar (e){
    e.preventDefault();
    renderLoadingButton ({
        button: saveAvatarButton,
        text: 'Сохранение...',
        disabled: true
    })
    editMyAvatar (avatarLinkInput.value, e)
        .then(function(data){
            avatarLinkProfile.src = data.avatar;
            e.target.reset();
            console.log('ok');
        })
        .then(function(){
            closePopup(avatarPopup);
            resetErrorsForm(avatarForm, validationObject);
        })
        .catch(function(){
            console.log(error);
        })
        .finally (function(){
            renderLoadingButton ({
                button: saveAvatarButton,
                text: 'Сохранить',
                disabled: false
            })
        })
}
