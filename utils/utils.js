import {popupOpenPic} from '../src/index.js';
import {openPicLink} from '../src/index.js';
import {openPicSubtitle} from '../src/index.js';

export const openPic = (name, link) => {
  console.log(openPicLink);
  openPicLink.src = link.src;
  openPicLink.alt = name;
  openPicSubtitle.textContent = name;
  togglePopup(popupOpenPic);
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
