import {Popup} from './Popup.js';


export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__pic-opened');
    this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
  }

  openPopup(name, link) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupSubtitle.textContent = name;
    super.openPopup();
  }
}
