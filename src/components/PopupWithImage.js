import {Popup} from './Popup.js';
import {popupImg} from '../utils/utils.js';
import {popupSubtitle} from '../utils/utils.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup(name, link) {
    popupImg.src = link;
    popupImg.alt = name;
    popupSubtitle.textContent = name;
    super.openPopup();
  }
}
