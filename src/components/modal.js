import { editMyAvatar, editProfile } from "./api";
import { closePopup, serverLoadButton } from "./utils";

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
export function closeOverlayPopup (e, popupElement) {
            if (e.target === popupElement) {
                closePopup(popupElement);
            }            
        }


export function handleSubmitForm (e) {
    e.preventDefault();
    serverLoadButton ({
        button: saveUpdateProfile,
        text: 'Сохранение...',
        disabled: true
    })
    editProfile (nameInput.value, discriptionInput.value)
        .then(function(){
            profileName.textContent = nameInput.value;
            profileDescription.textContent = discriptionInput.value;
        })
        .catch(function(){
            console.log(error);
        })
        .finally (function(){
            serverLoadButton ({
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
    serverLoadButton ({
        button: saveAvatarButton,
        text: 'Сохранение...',
        disabled: true
    })
    editMyAvatar (avatarLinkInput.value)
        .then(function(data){
            avatarLinkProfile.src = data.avatar;
        })
        .catch(function(){
            console.log(error);
        })
        .finally (function(){
            serverLoadButton ({
                button: saveAvatarButton,
                text: 'Сохранить',
                disabled: false
            })
        })
}
