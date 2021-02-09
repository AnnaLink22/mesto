export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', (evt) => {this._handleEscClose(evt)});
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', (evt) => {this._handleEscClose(evt)});
  }

  _handleEscClose(evt) {
      evt.preventDefault();
      if (evt.key === 'Escape') {
        this.closePopup();
      }
  }


  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
        this.closePopup();
      }
    });
  }
}




