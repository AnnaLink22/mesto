
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

const addPic = document.querySelector('.profile__add-button');


const formInfo = document.querySelector('.popup__form_type_info');

const nameInput = formInfo.querySelector('.popup__input_text_name');

const jobInput = formInfo.querySelector('.popup__input_text_job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const formNewPic = document.querySelector('.popup__form_type_new-pic');

const popupImg = document.querySelector('.popup__pic-opened');

const popupSubtitle = document.querySelector('.popup__subtitle');

const escape = 'Escape';


export {validationSelectors, editButton, addPic, formInfo, nameInput, jobInput, profileName, profileJob, formNewPic, popupImg, popupSubtitle, escape};
