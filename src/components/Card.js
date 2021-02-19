
export class Card {
  constructor(data, api, userId, cardSelector, handleCardClick, handleDeleteClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._id = data._id;
    this._userId = userId;
    this._api = api;
    this._ownerId = data.ownerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteClick;
  }


  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector).content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  };



  _handleLike() {
    this._api
    .addLike(this._id)
    .then((item) => {
      this.updateLikes(item.likes.length);
    })
    .catch((err) => {console.log(err)});
  }


  _deleteLike() {
    this._api
    .deleteLike(this._id)
    .then((item) => {
      this.updateLikes(item.likes.length);
    })
    .catch((err) => {console.log(err)});
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }



  _setEventListeners() {
    const likeBtn = this._element.querySelector('.card__like-button');
    likeBtn.addEventListener('click', () => {
      if (likeBtn.classList.contains('card__like-button_liked')) {
        likeBtn.classList.remove('card__like-button_liked');
        this._deleteLike();
      } else {
        likeBtn.classList.add('card__like-button_liked');
        this._handleLike();
      }
    });
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteIconClick(this._data);
  });
    this._element.querySelector('.card__pic').addEventListener('click', () => {
      this._handleCardClick({name:this._name, link: this._link});
    });
};

  _addDeleteIcon() {
    if (this._ownerId === this._userId) {
      this._element.querySelector('.card__delete').classList.add('card__delete_active');
    }
  };


  updateLikes(likes) {
    this._element.querySelector('.card__like-numbers').textContent = likes;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._addDeleteIcon();
    this._setEventListeners();
    this._element.querySelector('.card__name').textContent = this._name;
    this._elementPic = this._element.querySelector('.card__pic');
    this._elementPic.alt = this._name;
    this._elementPic.src = this._link;
    this.updateLikes(this._likes);
    return this._element;
  };

};
