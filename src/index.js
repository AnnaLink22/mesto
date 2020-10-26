import {Card} from '../scripts/Card.js';
import {initialCards} from '../scripts/initial-cards.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {togglePopup} from '../utils/utils.js';


// CONSTANTS

const validationSelectors =
{
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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





// FUNCTIONS


initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.card__template');
  cardGrid.append(card.generateCard());
});


const addNewCard = () => {
  const newCard = new Card(namePicInput.value, linkPicInput.value, '.card__template');
  cardGrid.prepend(newCard.generateCard());
};



const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupInfo);
};


const submitHandlerNewCard = (evt) => {
  evt.preventDefault();
  addNewCard(namePicInput, linkPicInput, '.card__template');
  linkPicInput.value = '';
  namePicInput.value = '';
  togglePopup(popupNewPic);
};


// EVENTLISTENERS

formInfo.addEventListener('submit', formSubmitHandler);

formNewPic.addEventListener('submit', submitHandlerNewCard);

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




const formInfoValid = new FormValidator(validationSelectors, formInfo);
const popupNewPicValid = new FormValidator(validationSelectors, formNewPic);

formInfoValid.enableValidation();
popupNewPicValid.enableValidation();

