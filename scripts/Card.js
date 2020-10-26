import {openPopupWithPic} from '../utils/utils.js';

export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
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
      openPopupWithPic(this._name, this._link);
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




