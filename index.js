// массив картинок для добавления на страницу
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// найдем элементы для открытия и закрытия попапа редактирования профиля
const editProfile = document.querySelector('.profile__pen');
const profilePopup = document.querySelector('#profilePopup');
const closeProfilePopup = profilePopup.querySelector('.popup__close');

// найдем элементы для редактирования формы
const profileFormElement = document.querySelector('.form');
const nameInput = profileFormElement.querySelector('.form__item_type_name');
const discriptionInput = profileFormElement.querySelector('.form__item_type_discription');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// найдем элементы для открытия и закрытия попапа добавления карточки
const popupCard = document.querySelector('#cardPopup');
const addCard = document.querySelector('.profile__add-button');
const closeCardPopup = popupCard.querySelector('.popup__close');

// найдем элементы для добавления карточки на страницу
const template = document.querySelector('#photo-grid-item-template').content.querySelector('.photo-grid__container');
const listPhoto = document.querySelector('.photo-grid');

const cardFormElement = popupCard.querySelector('.form');
const placeName = cardFormElement.querySelector('.form__item_type_placeName');
const imgLink = cardFormElement.querySelector('.form__item_type_imgLink');
const saveCardButton = cardFormElement.querySelector('.form__button');

// найдем элементы для открытия попапа с полной картинкой
const fullImagePopup = document.querySelector('#fullCardPopup');
const fullImageElement = fullImagePopup.querySelector('.popup__full-image');
const fullImageTitle = fullImagePopup.querySelector('.popup__title');
const fullImageClosePopup = fullImagePopup.querySelector('.popup__close');
const fullImageBody = fullImagePopup.querySelector('.popup__body_type_full-image');




// Функции

function openedPopup (element) { 
    element.classList.add('popup_opened');
}
    
function closePopup (element) {
    element.classList.remove('popup_opened');
}

function handleSubmitForm (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = discriptionInput.value;
}

function createCardImg (link, name) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__item');
    cardImage.src = link;

    const cardName = cardElement.querySelector('.photo-grid__title');
    cardImage.alt = name;
    cardName.textContent = name;

    const deleteCard = cardElement.querySelector('.photo-grid__delete-img');
    deleteCard.addEventListener('click', function(){
        cardElement.remove();
    })

    const likeCard = cardElement.querySelector('.photo-grid__heart');
    likeCard.addEventListener('click', function(){
        likeCard.classList.toggle('photo-grid__heart_type_active');
    })

    cardImage.addEventListener('click', function(){
        openedPopup(fullImagePopup);
    })
    cardImage.addEventListener('click', clickImage);

    fullImageClosePopup.addEventListener('click', function(){
        closePopup(fullImagePopup);
    })
    fullImagePopup.addEventListener('click', function(e){
        if (e.target === fullImagePopup) {
            closePopup(fullImagePopup);
        };
    })

    function clickImage (e){
        fullImageElement.src = e.target.src;
        fullImageElement.alt = e.target.alt;
        fullImageTitle.textContent = e.target.alt;
    }

    return cardElement;
}

initialCards.forEach(function(initialCards){
    const arrayCardImg = createCardImg(initialCards.link, initialCards.name);
    listPhoto.append(arrayCardImg);
})

function createNewCard (evt) {
    evt.preventDefault();
    listPhoto.prepend(createCardImg (imgLink.value, placeName.value));
    evt.target.reset();
}

// События

editProfile.addEventListener('click', function() {
    openedPopup(profilePopup);
});

closeProfilePopup.addEventListener('click', function(){
    closePopup(profilePopup);
})

profileFormElement.addEventListener('submit', handleSubmitForm);
profileFormElement.addEventListener('submit', function(){
    closePopup(profilePopup);
});

addCard.addEventListener('click', function(){
    openedPopup(popupCard);
})

closeCardPopup.addEventListener('click', function(){
    closePopup(popupCard);
})

cardFormElement.addEventListener('submit', createNewCard);
cardFormElement.addEventListener('submit', function(){
    closePopup(popupCard);
});













