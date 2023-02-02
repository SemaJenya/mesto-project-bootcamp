import { closeEscPopup } from "./modal";

export function openedPopup (element) { 
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscPopup)

}
    
export function closePopup (element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscPopup)
}