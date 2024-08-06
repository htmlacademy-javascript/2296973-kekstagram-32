import {containerPictures} from './get-miniatures.js';

const userPicture = document.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const buttonReset = document.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');

const openModalPicture = () => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

containerPictures.addEventListener('click', (evt) => {
  if (evt.target.matches(userPicture)) { // если целевой соответсвует указанному селектору
    evt.preventDefault();
    openModalPicture();
  }
});

const closeModalPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

buttonReset.addEventListener('click', closeModalPicture);

