const onError = (res) => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    }).then(onError)
  }

  saveUserInfo(userName, userAbout) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    }).then(onError)
  }



  getAllCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    }).then(onError)
  }

  saveNewCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(onError)
  }


  deleteCard(cardId){
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(onError)
  }

  addLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(onError)
  }

  deleteLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(onError)
  }



  editAvatar(link) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    }).then(onError)
  }
}
