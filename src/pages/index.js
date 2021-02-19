import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithSubmit} from '../components/PopupWithSubmit.js';
import {validationSelectors, editButton, addPic, formInfo, nameInput, jobInput, formNewPic, formAvatar, updateAvatar, editAvatar} from '../utils/utils.js';
import {Api} from '../components/Api.js';
import './index.css';





// FUNCTIONS

let userId = null;


const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: '80be98b0-1ace-488a-8aba-b244c003f55b',
    'Content-Type': 'application/json'
  }
})


const updateInfo = (data) => {
  const userInfo = new UserInfo(data.name, data.about);
  userInfo.setUserInfo(data.name, data.about);
  userInfo.updateUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;
  updateAvatar(data.avatar);
};

api
  .getInfo()
  .then((item) => {
      return {name: item.name, about: item.about, avatar: item.avatar, _id: item._id};
  })
  .then((item) => {
    userId = item._id;
    updateInfo(item);
  })
  .catch((err) => {console.log(err)}
);



const popupInfo = new PopupWithForm('.popup_type_info', (data) => {
  popupInfo.renderLoading(true);
  setTimeout(() => {
      api
      .saveUserInfo(data.name, data.job)
      .then((info) => {
        updateInfo(info);
      })
      .catch((err) => {console.log(err)})
      .finally(() => {
        popupInfo.renderLoading(false);
      })
  }, 300)
});
popupInfo.setEventListeners();




api
  .getAllCards()
  .then((data) => {
    const newData = data.map((item) => {
      return {name: item.name, link: item.link, _id: item._id, likes: item.likes, ownerId: item.owner._id};
    })
    const initialCardsSection = new Section({ items: newData, renderer:
      (item) => {
        initialCardsSection.addItem(createCard(item));
        }
      }, '.card-grid' );
    initialCardsSection.renderItems();
  })
  .catch((err) => {console.log(err)
});


const createCard = (data) => {
  const card = new Card(data, api, userId, '.card__template', (data) => {handleCardClick(data)}, (data) => {
    submitPopup.setSubmitCallback(() => {
      api
      .deleteCard(data._id)
      .then(() => {
        card.removeCard();
      })
      .catch((err) => {console.log(err)});
    });
    submitPopup.openPopup(data)
  });
  const cardElement = card.generateCard();
  return cardElement;
};



const popupAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
  popupAvatar.renderLoading(true);
  setTimeout(() => {
    api
    .editAvatar(data.avatar)
    .then((item) => {
      updateAvatar(item.avatar);
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAvatar.renderLoading(false);
    })
  }, 300)
})
popupAvatar.setEventListeners();
editAvatar.addEventListener('click', () => {popupAvatar.openPopup()});

const popupAddNewPic = new PopupWithForm('.popup_type_new-pic', (data) => {
  popupAddNewPic.renderLoading(true);
  setTimeout(() => {
    api
    .saveNewCard(data)
    .then((item) => {
        return {name: item.name, link: item.link, _id: item._id, likes: item.likes, ownerId: item.owner._id};
      })
    .then((data) => {
      const newCardsSection = new Section({ items: {}, }, '.card-grid');
      newCardsSection.addItem(createCard(data), true)
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAddNewPic.renderLoading(false);
    })
  }, 300)
});


popupAddNewPic.setEventListeners();



editButton.addEventListener('click', () => {
  popupInfo.openPopup();
});

const submitPopup = new PopupWithSubmit('.popup_type_submit');
submitPopup.setEventListeners();

const handleCardClick = (data) => {
  popupPic.openPopup(data.name, data.link);
};

const popupPic = new PopupWithImage('.popup_type_pic');
popupPic.setEventListeners();

addPic.addEventListener('click', () => {popupAddNewPic.openPopup()});


const formInfoValid = new FormValidator(validationSelectors, formInfo);
const popupNewPicValid = new FormValidator(validationSelectors, formNewPic);
const formAvatarValid = new FormValidator(validationSelectors, formAvatar);


formInfoValid.enableValidation();
popupNewPicValid.enableValidation();
formAvatarValid.enableValidation();



