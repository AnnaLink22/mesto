// CONSTANTS


const editButton = document.querySelector('.profile__edit-button');

const popup = document.querySelectorAll('.popup');

const popupInfo = document.querySelector('.popup_info');

const popupNewPic = document.querySelector('.popup_new-pic');

const addPic = document.querySelector('.profile__add-button');

const closeButton = document.querySelector('.popup_info-btn');

const closeNewPicButton = document.querySelector('.popup_new-pic-btn');

const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__input_text_name');

const jobInput = formElement.querySelector('.popup__input_text_job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const cardGrid = document.querySelector('.card-grid');


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const namePicInput = document.querySelector('.popup__input_text_pic');

const linkPicInput = document.querySelector('.popup__input_text_link');

const formNewPic = document.querySelector('.form_new-pic');

const cardTemplate = document.querySelector('.card__template');

const popupOpenPic = document.querySelector('.popup__pic');

const openPicLink = document.querySelector('.popup__pic-open');

const closePicBtn = document.querySelector('.popup_close-pic-btn');

const openPicSubtitle = document.querySelector('.popup__subtitle');

// FUNCTIONS

const handleLike = (evt) => {
  evt.target.classList.toggle('card__like-button_liked');
};

const openPic = (evt) => {
  openPicLink.src = evt.target.src;
  openPicLink.alt = evt.target.alt;
  openPicSubtitle.textContent = evt.target.alt;
  togglePopup(popupOpenPic);
}


const getCard = data => {
  const cards = cardTemplate.content.cloneNode(true);
  const cardPic = cards.querySelector('.card__pic');
  cards.querySelector('.card__name').innerText = data.name;
  cardPic.src = data.link;
  cardPic.alt = data.name;
  const likeBtn = cards.querySelector('.card__like-button');
  likeBtn.addEventListener('click', handleLike);
  const deleteBtn = cards.querySelector('.card__delete');
  deleteBtn.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  cardPic.addEventListener('click', openPic);
  return cards;
};

const renderList = () => {
  const allCards = initialCards.map(el => getCard(el));
  cardGrid.append(...allCards);
};

renderList();

const addNewCard = (namePicInput, linkPicInput) => {
  const newCards = cardTemplate.content.cloneNode(true);
  const newPic = newCards.querySelector('.card__pic');
  newCards.querySelector('.card__name').textContent = namePicInput.value;
  newPic.src = linkPicInput.value;
  newPic.alt = namePicInput.value;
  const newLikeBtn = newCards.querySelector('.card__like-button');
  newLikeBtn.addEventListener('click', handleLike);
  const deleteBtnNew = newCards.querySelector('.card__delete');
  deleteBtnNew.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  newPic.addEventListener('click', openPic);
  cardGrid.prepend(newCards);
};




const SubmitHandlerNewCard = (evt) => {
  evt.preventDefault();
  addNewCard(namePicInput, linkPicInput);
  linkPicInput.value = '';
  namePicInput.value = '';
  togglePopup(popupNewPic);
};


const togglePopup = (anyPopup) => {
  if (anyPopup.classList.contains('popup_info')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
  anyPopup.classList.toggle('popup_opened');
};


const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupInfo);
};



// EVENTLISTENERS



formElement.addEventListener('submit', formSubmitHandler);

formNewPic.addEventListener('submit', SubmitHandlerNewCard);

editButton.addEventListener('click', () => togglePopup(popupInfo));

closeButton.addEventListener('click', () => togglePopup(popupInfo));

closeNewPicButton.addEventListener('click', () => togglePopup(popupNewPic));

addPic.addEventListener('click', () => togglePopup(popupNewPic));

closePicBtn.addEventListener('click', () => togglePopup(popupOpenPic));


