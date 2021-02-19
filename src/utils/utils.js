
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

const formNewPic = document.querySelector('.popup__form_type_new-pic');

const formAvatar = document.querySelector('.popup__form_type_avatar');

const popupImg = document.querySelector('.popup__pic-opened');

const popupSubtitle = document.querySelector('.popup__subtitle');

const escape = 'Escape';

const profilePic = document.querySelector('.profile__pic');

const editAvatar = document.querySelector('.profile__container');


const updateAvatar = (link) => {
  profilePic.src = link;
}


export {validationSelectors, editButton, addPic, formInfo, nameInput, jobInput, formNewPic, formAvatar, popupImg, popupSubtitle, escape, updateAvatar, editAvatar};
