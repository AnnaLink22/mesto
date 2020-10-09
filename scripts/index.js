import {Card} from './Card.js'
import {initialCards} from './initial-cards.js'
import {validationSelectors} from './FormValidator.js'
import {FormValidator} from './FormValidator.js'

// CONSTANTS

const editButton = document.querySelector('.profile__edit-button');

const popupInfo = document.querySelector('.popup_type_info');

const popupNewPic = document.querySelector('.popup_type_new-pic');

const addPic = document.querySelector('.profile__add-button');

const closeButton = document.querySelector('.popup_info-btn');

const closeNewPicButton = document.querySelector('.popup_new-pic-btn');

const formInfo = document.querySelector('.popup__form_type_info');

const nameInput = formInfo.querySelector('.popup__input_text_name');

const jobInput = formInfo.querySelector('.popup__input_text_job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const cardGrid = document.querySelector('.card-grid');

const namePicInput = document.querySelector('.popup__input_text_pic');

const linkPicInput = document.querySelector('.popup__input_text_link');

const formNewPic = document.querySelector('.popup__form__type_new-pic');

const popupOpenPic = document.querySelector('.popup_type_pic');

const openPicLink = document.querySelector('.popup__pic-open');

const closePicBtn = document.querySelector('.popup_close-pic-btn');

const openPicSubtitle = document.querySelector('.popup__subtitle');

const inputsInfo = Array.from(popupInfo.querySelectorAll('.popup__input'));

const buttonInfo = popupInfo.querySelector('.popup__button');

const inputsNewPic = Array.from(popupNewPic.querySelectorAll('.popup__input'));

const buttonNewPic = popupNewPic.querySelector('.popup__button');

// FUNCTIONS

export const openPic = (evt) => {
  openPicLink.src = evt.target.src;
  openPicLink.alt = evt.target.alt;
  openPicSubtitle.textContent = evt.target.alt;
  togglePopup(popupOpenPic);
}


initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.card__template');
  cardGrid.append(card.generateCard());
});


const addNewCard = () => {
  const newCard = new Card(namePicInput.value, linkPicInput.value, '.card__template');
  cardGrid.prepend(newCard.generateCard());
};

const handleEsc = (evt) => {
  evt.preventDefault();
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(openedPopup);
  }
};

const isPopupOpened = (anyPopup) => {
  return anyPopup.classList.contains('popup_opened');
}


const addEscHandler = () => {
  document.addEventListener('keyup', handleEsc);
};

const deleteEscHandler = () => {
  document.removeEventListener('keyup', handleEsc);
};


const togglePopup = (anyPopup) => {
  anyPopup.classList.toggle('popup_opened');
  if (isPopupOpened(anyPopup)) {
    addEscHandler();
  } else {
    deleteEscHandler();
  };
};


const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupInfo);
};


const SubmitHandlerNewCard = (evt) => {
  evt.preventDefault();
  addNewCard(namePicInput, linkPicInput);
  linkPicInput.value = '';
  namePicInput.value = '';
  togglePopup(popupNewPic);
};


// EVENTLISTENERS

formInfo.addEventListener('submit', formSubmitHandler);

formNewPic.addEventListener('submit', SubmitHandlerNewCard);

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') && evt.target.classList.contains('popup_opened')) {
    togglePopup(evt.target);
  }
});


editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopup(popupInfo);
});

closeButton.addEventListener('click', () => togglePopup(popupInfo));

closeNewPicButton.addEventListener('click',  () => togglePopup(popupNewPic));


addPic.addEventListener('click', () => togglePopup(popupNewPic));


closePicBtn.addEventListener('click', () => togglePopup(popupOpenPic));


const formInfoValid = new FormValidator(validationSelectors, formInfo);
const popupNewPicValid = new FormValidator(validationSelectors, formNewPic);

formInfoValid.enableValidation();
popupNewPicValid.enableValidation();

