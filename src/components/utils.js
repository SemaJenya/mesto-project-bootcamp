import { closeEscPopup, closeOverlayPopup } from "./modal";

export function openedPopup (popupElement) { 
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscPopup);
    popupElement.addEventListener('click', closeOverlayPopup)
    
}
    
export function closePopup (popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscPopup);
    popupElement.removeEventListener('click', closeOverlayPopup)
}

export function renderLoadingButton ({button, text, disabled}){
    if (!disabled){
        button.disabled = false;
    }
    else {
        button.disabled = 'disabled';
    }
    button.textContent = text;
}