export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector).content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  };

  _handleLike() {
      this._element.querySelector('.card__like-button').classList.toggle('card__like-button_liked');
  };


  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._element.remove();
      this._element = null;
  });
    this._element.querySelector('.card__pic').addEventListener('click', () => {
      this._handleCardClick({name:this._name, link: this._link});
    });
};

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__name').textContent = this._name;
    this._elementPic = this._element.querySelector('.card__pic');
    this._elementPic.alt = this._name;
    this._elementPic.src = this._link;

    return this._element;
  };
}




