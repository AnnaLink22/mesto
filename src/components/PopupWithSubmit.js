import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }


  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
      this.closePopup();
    });
  }

  setSubmitCallback(callback) {
    this._submitHandler = callback;
  }


  openPopup(data) {
    this._data = data;
    super.openPopup();
  }
}
