const editButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');

const closeButton = document.querySelector('.popup__close-btn');

const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__input_text_name');

const jobInput = formElement.querySelector('.popup__input_text_job');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);
