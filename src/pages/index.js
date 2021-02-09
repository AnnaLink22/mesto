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




const InitialCardsSection = new Section({ items: initialCards, renderer:
(item) => {
  const card = new Card(item, '.card__template', (item) => {
    const popupPic = new PopupWithImage('.popup_type_pic', item.name, item.link);
    popupPic.setEventListeners();
    popupPic.openPopup();
  })
  const cardElement = card.generateCard();
  InitialCardsSection.addItem(cardElement);
  }
}, '.card-grid' );

InitialCardsSection.renderItems();



const popupInfo = new PopupWithForm('.popup_type_info', (data) => {
    userInfo.setUserInfo(data.name, data.job);
    userInfo.updateUserInfo();
  }
);
popupInfo.setEventListeners();


const popupNewPic = new PopupWithForm('.popup_type_new-pic', (data) => {
    const newCard = new Card(data, '.card__template', (data) => {
      const popupNewImg = new PopupWithImage('.popup_type_pic', data.name, data.link);
      popupNewImg.setEventListeners();
      popupNewImg.openPopup();
    })
    const newCardEl = newCard.generateCard();
    InitialCardsSection.addItem(newCardEl);
    }
);


popupNewPic.setEventListeners();



// EVENTLISTENERS



editButton.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();
  userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;
  popupInfo.openPopup();
});


addPic.addEventListener('click', () => popupNewPic.openPopup());


const formInfoValid = new FormValidator(validationSelectors, formInfo);
const popupNewPicValid = new FormValidator(validationSelectors, formNewPic);

formInfoValid.enableValidation();
popupNewPicValid.enableValidation();

