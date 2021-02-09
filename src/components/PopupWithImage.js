import {Popup} from './Popup.js';
import {popupImg} from '../utils/utils.js';
import {popupSubtitle} from '../utils/utils.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  openPopup() {
    popupImg.src = this._link;
    popupImg.alt = this._name;
    popupSubtitle.textContent = this._name;
    super.openPopup();
  }
}
