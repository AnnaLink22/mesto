import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler;
  }
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.closePopup();
    });

  }

  closePopup() {
    this._popup.querySelector('.popup__form').reset();
    super.closePopup();
  }

}
