import { closeEscPopup, closeOverlayPopup } from "./modal";

export function openedPopup (popupElement) { 
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscPopup);
    popupElement.addEventListener('click', function(e){
        closeOverlayPopup(e, popupElement);
    })
    
}
    
export function closePopup (popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscPopup);
    popupElement.removeEventListener('click', function(e){
        closeOverlayPopup(e, popupElement);
    })
}