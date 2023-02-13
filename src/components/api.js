const config = {
    url: 'https://mesto.nomoreparties.co/v1/wbf-cohort-5',
    headers: {
        "Content-Type": "application/json",
        "authorization": "1386d07b-36e3-4379-8d3f-1df1452aa0ed"
    }
}

function checkServerResponse (res) {
    return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

//получение карточек с сервера
export function getAllCards () {
    return fetch (`${config.url}/cards`, {
        method: 'GET',
        headers: config.headers
    }).then(checkServerResponse);
}


//получение информации о пользователе с сервера
export function getProfileInfo (){
    return fetch(`${config.url}/users/me`, {
        method: 'GET',
        headers: config.headers
    }).then(checkServerResponse);
}


//добавление новой карточки
export function postCard(cardName, cardLink) {
    return fetch (`${config.url}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify ({
            "name": cardName,
            "link": cardLink
        })
    }).then(checkServerResponse);
}


//редактирование профиля
export function editProfile (name, discription){
    return fetch (`${config.url}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            "name": name,
            "about": discription
        })
    }).then(checkServerResponse);
      
}

//удаление карточки
export function deleteMyCard (cardID){
    return fetch (`${config.url}/cards/${cardID}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            "_id": cardID
        })
    }).then(checkServerResponse);    
}

//постановка и удаление лайка карточки
export function updateLikeCard (cardID, isLike){
    return fetch (`${config.url}/cards/likes/${cardID}`, {
        method: isLike? 'DELETE' : 'PUT',
        headers: config.headers,
    }).then(checkServerResponse);    
}

//редактирование аватара пользователя

