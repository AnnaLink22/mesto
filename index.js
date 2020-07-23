const editButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');

const closeButton = document.querySelector('.close-btn');

const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__name');

const jobInput = formElement.querySelector('.popup__job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};
formElement.addEventListener('submit', formSubmitHandler);


