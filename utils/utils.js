
const popupImg = document.querySelector('.popup__pic-opened');

const popupSubtitle = document.querySelector('.popup__subtitle');

const popupWithPic = document.querySelector('.popup_type_pic');

const closePicBtn = popupWithPic.querySelector('.popup__close-btn');

closePicBtn.addEventListener('click', () => togglePopup(popupWithPic));


export const openPopupWithPic = (name, link) => {
  popupImg.src = link;
  popupImg.alt = name;
  popupSubtitle.textContent = name;
  togglePopup(popupWithPic);
};



const isPopupOpened = (anyPopup) => {
  return anyPopup.classList.contains('popup_opened');
}

export const togglePopup = (anyPopup) => {
  anyPopup.classList.toggle('popup_opened');
  if (isPopupOpened(anyPopup)) {
    document.addEventListener('keyup', handleEsc)
  } else {
    document.removeEventListener('keyup', handleEsc);
  };
};

const handleEsc = (evt) => {
  evt.preventDefault();
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(openedPopup);
  }
};
