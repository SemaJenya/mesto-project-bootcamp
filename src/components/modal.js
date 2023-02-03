import { closePopup } from "./utils";

const popupList = Array.from(document.querySelectorAll('.popup'));

// найдем элементы для редактирования формы
export const profileFormElement = document.forms.profileForm;
const nameInput = profileFormElement.querySelector('.form__item_type_name');
const discriptionInput = profileFormElement.querySelector('.form__item_type_discription');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//закрытие попапа на клавищу esc
export function closeEscPopup (e) {
    if (e.key === 'Escape') {
        const escPopup = document.querySelector('.popup_opened');
        closePopup(escPopup);
    }
}

//закрытие попапа при клике на оверлей
export function closeOverlayPopup (e) {
            if (e.target === popupElement) {
                closePopup(popupElement);
            }            
        }


export function handleSubmitForm (e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = discriptionInput.value;
}

export function editProfileName (e) {
    e.preventDefault();
    nameInput.value = profileName.textContent;
    discriptionInput.value = profileDescription.textContent;
}
