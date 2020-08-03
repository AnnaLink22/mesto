// CONSTANTS


const editButton = document.querySelector('.profile__edit-button');

const popupInfo = document.querySelector('.popup_type_info');

const popupNewPic = document.querySelector('.popup_type_new-pic');

const addPic = document.querySelector('.profile__add-button');

const closeButton = document.querySelector('.popup_info-btn');

const closeNewPicButton = document.querySelector('.popup_new-pic-btn');

const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__input_text_name');

const jobInput = formElement.querySelector('.popup__input_text_job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const cardGrid = document.querySelector('.card-grid');

const namePicInput = document.querySelector('.popup__input_text_pic');

const linkPicInput = document.querySelector('.popup__input_text_link');

const formNewPic = document.querySelector('.form_new-pic');

const cardTemplate = document.querySelector('.card__template');

const popupOpenPic = document.querySelector('.popup_type_pic');

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


const getCard = (name, link) => {
  const cards = cardTemplate.content.cloneNode(true);
  cards.querySelector('.card__name').textContent = name;
  cards.querySelector('.card__pic').alt = name;
  cards.querySelector('.card__pic').src = link;
  cards.querySelector('.card__like-button').addEventListener('click', handleLike);
  cards.querySelector('.card__delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  cards.querySelector('.card__pic').addEventListener('click', openPic);
  return cards;
};


initialCards.forEach( addCard = (item) => {
  cardGrid.append(getCard(item.name, item.link));
});


const addNewCard = () => {
  cardGrid.prepend(getCard(namePicInput.value, linkPicInput.value));
};


const SubmitHandlerNewCard = (evt) => {
  evt.preventDefault();
  addNewCard(namePicInput, linkPicInput);
  linkPicInput.value = '';
  namePicInput.value = '';
  togglePopup(popupNewPic);
};


const togglePopup = (anyPopup) => {
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

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupInfo)
});

closeButton.addEventListener('click', () => togglePopup(popupInfo));

closeNewPicButton.addEventListener('click', () => togglePopup(popupNewPic));

addPic.addEventListener('click', () => togglePopup(popupNewPic));

closePicBtn.addEventListener('click', () => togglePopup(popupOpenPic));


