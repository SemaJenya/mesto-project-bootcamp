import { userID } from "..";
import { deleteMyCard, postCard } from "./api";
import { openedPopup } from "./utils";


// найдем элементы для добавления карточки на страницу
const template = document.querySelector('#photo-grid-item-template').content.querySelector('.photo-grid__container');
const listPhoto = document.querySelector('.photo-grid');

export const cardFormElement = document.forms.cardForm;
const placeName = cardFormElement.querySelector('.form__item_type_placeName');
const imgLink = cardFormElement.querySelector('.form__item_type_imgLink');

// найдем элементы для открытия попапа с полной картинкой
export const fullImagePopup = document.querySelector('#fullCardPopup');
const fullImageElement = fullImagePopup.querySelector('.popup__full-image');
const fullImageTitle = fullImagePopup.querySelector('.popup__title');
export const fullImageClosePopup = fullImagePopup.querySelector('.popup__close');



export function createCardImg (link, name, cardID, ownerID, userID) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__item');
    cardImage.src = link;

    const cardName = cardElement.querySelector('.photo-grid__title');
    cardImage.alt = name;
    cardName.textContent = name;

console.log(`userID ${userID}`);
console.log(`ownerID ${ownerID}`);

    if (userID === ownerID) {
        const deleteCard = cardElement.querySelector('.photo-grid__delete-img');
        deleteCard.classList.add('photo-grid__delete-img_active');
        deleteCard.addEventListener('click', function(){
        deleteMyCard (cardID)
            .then(function(){
                cardElement.remove();
                console.log(`элемент с id ${cardID} удален`);
            })
            .catch (function (){
                console.log(erorr);
            })         
        })
    }
        

    const likeCard = cardElement.querySelector('.photo-grid__heart');
    likeCard.addEventListener('click', function(){
        likeCard.classList.toggle('photo-grid__heart_type_active');
    })

    cardImage.addEventListener('click', function(e){
        openedPopup(fullImagePopup);
        clickImage(e);
    })

    function clickImage (e){
        fullImageElement.src = e.target.src;
        fullImageElement.alt = e.target.alt;
        fullImageTitle.textContent = e.target.alt;
    }

    return cardElement;
}
export function renderCards (data){
    data.forEach(function(initialCard){
        const arrayCardImg = createCardImg(initialCard.link, initialCard.name, initialCard._id, initialCard.owner._id, userID);
        listPhoto.append(arrayCardImg);
    })
}

export function createNewCard (evt) {
    evt.preventDefault();
    postCard(placeName.value, imgLink.value)
        .then (function(data){
            const newCardID = data._id;
            const newCardOwnerID = data.owner._id;
            listPhoto.prepend(createCardImg (imgLink.value, placeName.value, newCardID, newCardOwnerID, userID));
            evt.target.reset();
        })
        .catch(function(){
            console.log(error);
        });
}

