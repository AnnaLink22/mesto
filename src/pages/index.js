import {Card} from '../components/Card.js';
import {initialCards} from '../components/initial-cards.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {validationSelectors, editButton, addPic, formInfo, nameInput, jobInput, profileName, profileJob, formNewPic} from '../utils/utils.js';

import './index.css';





// FUNCTIONS


const userInfo = new UserInfo(profileName, profileJob);
userInfo.setUserInfo(profileName.textContent, profileJob.textContent);

const handleCardClick = (data) => {
  popupPic.openPopup(data.name, data.link);
};


const createCard = (data) => {
  const card = new Card(data, '.card__template', (data) => {handleCardClick(data)});
  const cardElement = card.generateCard();
  return cardElement;
};




const popupPic = new PopupWithImage('.popup_type_pic');
popupPic.setEventListeners();


const initialCardsSection = new Section({ items: initialCards, renderer:
(item) => {
  initialCardsSection.addItem(createCard(item));
  }
}, '.card-grid' );

initialCardsSection.renderItems();



const popupAddNewPic = new PopupWithForm('.popup_type_new-pic', (data) => {
  initialCardsSection.addItem(createCard(data), true);
  }
);
popupAddNewPic.setEventListeners();


const popupInfo = new PopupWithForm('.popup_type_info', (data) => {
    userInfo.setUserInfo(data.name, data.job);
    userInfo.updateUserInfo();
  }
);
popupInfo.setEventListeners();




// EVENTLISTENERS



editButton.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();
  userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;
  popupInfo.openPopup();
});


addPic.addEventListener('click', () => {popupAddNewPic.openPopup()});


const formInfoValid = new FormValidator(validationSelectors, formInfo);
const popupNewPicValid = new FormValidator(validationSelectors, formNewPic);

formInfoValid.enableValidation();
popupNewPicValid.enableValidation();

