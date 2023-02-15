import { userID } from "..";
import { deleteMyCard, postCard, updateLikeCard } from "./api";
import { openedPopup, renderLoadingButton } from "./utils";


// найдем элементы для добавления карточки на страницу
const template = document.querySelector('#photo-grid-item-template').content.querySelector('.photo-grid__container');
const listPhoto = document.querySelector('.photo-grid');

export const cardFormElement = document.forms.cardForm;
const placeName = cardFormElement.querySelector('.form__item_type_placeName');
const imgLink = cardFormElement.querySelector('.form__item_type_imgLink');
const saveNewCard = cardFormElement.querySelector('.form__button');

// найдем элементы для открытия попапа с полной картинкой
export const fullImagePopup = document.querySelector('#fullCardPopup');
const fullImageElement = fullImagePopup.querySelector('.popup__full-image');
const fullImageTitle = fullImagePopup.querySelector('.popup__title');
export const fullImageClosePopup = fullImagePopup.querySelector('.popup__close');



export function createCardImg (dataCard, userID) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__item');
    cardImage.src = dataCard.link;

    const cardName = cardElement.querySelector('.photo-grid__title');
    cardImage.alt = dataCard.name;
    cardName.textContent = dataCard.name;

    if (userID === dataCard.owner._id) {
        const deleteCard = cardElement.querySelector('.photo-grid__delete-img');
        deleteCard.classList.add('photo-grid__delete-img_active');
        deleteCard.addEventListener('click', function(){
        deleteMyCard (dataCard._id)
            .then(function(){
                cardElement.remove();
                console.log(`элемент с id ${dataCard._id} удален`);
            })
            .catch (function (){
                console.log(erorr);
            })         
        })
    }
    
    const likeCard = cardElement.querySelector('.photo-grid__heart');
    const counterLikes = cardElement.querySelector('.photo-grid__heart-like');

    updateLikeView(dataCard, userID, likeCard, counterLikes);

    likeCard.addEventListener('click', function(){
        updateLikeCard(dataCard._id, isLike(dataCard, userID))
            .then(function(data){  
                dataCard.likes = data.likes;
                updateLikeView(dataCard, userID, likeCard, counterLikes)
            })
            .catch (function (){
                console.log(erorr);
            }) 
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
    data.forEach(function(dataCard){
        const arrayCardImg = createCardImg(dataCard, userID);
        listPhoto.append(arrayCardImg);
    })
}

export function createNewCard (evt) {
    evt.preventDefault();
    renderLoadingButton ({
        button: saveNewCard,
        text: 'Сохранение...',
        disabled: true
    })
    postCard(placeName.value, imgLink.value)
        .then (function(dataCard){
            console.log(dataCard);
            listPhoto.prepend(createCardImg (dataCard, userID));
            evt.target.reset();
        })
        .catch(function(){
            console.log(error);
        })
        .finally (function(){
            renderLoadingButton ({
                button: saveNewCard,
                text: 'Сохранить',
                disabled: false
            })
        })
}

function isLike (data, userID){
   return data.likes.some(function(object){
        return object._id === userID   
    })
}

function updateLikeView(dataCard, userID, likeCard, counterLikes){
    if(isLike(dataCard, userID)){
        likeCard.classList.add('photo-grid__heart_type_active');
    } else {
        likeCard.classList.remove('photo-grid__heart_type_active');
    }
    counterLikes.textContent = dataCard.likes.length;
}

