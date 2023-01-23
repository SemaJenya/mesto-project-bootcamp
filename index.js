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
const EditProfile = document.querySelector('.profile__pen');
const profilePopup = document.querySelector('#profilePopup');
const CloseProfilePopup = profilePopup.querySelector('.popup__close');

// найдем элементы для редактирования формы
const profileFormElement = document.querySelector('.form');
const nameInput = profileFormElement.querySelector('.form__item_type_name');
const discriptionInput = profileFormElement.querySelector('.form__item_type_discription');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// найдем элементы для открытия и закрытия попапа добавления карточки
const PopupCard = document.querySelector('#cardPopup');
const addCard = document.querySelector('.profile__add-button');
const CloseCardPopup = PopupCard.querySelector('.popup__close');

// найдем элементы для добавления карточки на страницу
const template = document.querySelector('#photo-grid-item-template').content.querySelector('.photo-grid__container');
const listPhoto = document.querySelector('.photo-grid');

const cardFormElement = PopupCard.querySelector('.form');
const placeName = cardFormElement.querySelector('.form__item_type_placeName');
const imgLink = cardFormElement.querySelector('.form__item_type_imgLink');
const saveCardButton = cardFormElement.querySelector('.form__button');




// Функции

function OpenedPopup (Element) { 
    Element.classList.add('popup_opened');
}
    
function ClosePopup (Element) {
    Element.classList.remove('popup_opened');
}

function handleSubmitForm (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = discriptionInput.value;
}


function createCardImg (data1, data2) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__item');
    cardImage.src = data1;

    const cardName = cardElement.querySelector('.photo-grid__title');
    cardImage.alt = data2;
    cardName.textContent = data2;

    const deleteCard = cardElement.querySelector('.photo-grid__delete-img');
    deleteCard.addEventListener('click', function(){
        cardElement.remove();
    })

    const likeCard = cardElement.querySelector('.photo-grid__heart');
    likeCard.addEventListener('click', function(){
        likeCard.classList.toggle('photo-grid__heart_type_active');
    })

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

EditProfile.addEventListener('click', function() {
    OpenedPopup(profilePopup);
});

CloseProfilePopup.addEventListener('click', function(){
    ClosePopup(profilePopup);
})

profileFormElement.addEventListener('submit', handleSubmitForm);
profileFormElement.addEventListener('submit', function(){
    ClosePopup(profilePopup);
});

addCard.addEventListener('click', function(){
    OpenedPopup(PopupCard);
})

CloseCardPopup.addEventListener('click', function(){
    ClosePopup(PopupCard);
})

cardFormElement.addEventListener('submit', createNewCard);
cardFormElement.addEventListener('submit', function(){
    ClosePopup(PopupCard);
});













