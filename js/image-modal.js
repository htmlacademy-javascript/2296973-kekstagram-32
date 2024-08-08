import { appendThunbnails } from './get-miniatures.js';
import { isEscapeKey } from './util.js';
import { isEnterKey } from './util.js';

const containerPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const likesCount = document.querySelector('.likes-count');
const descriptionBigPicture = document.querySelector('.social__caption');
const buttonReset = bigPicture.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture();
  }
};

const renderDataForPicture = ({ url, likes, description }) => {
  const bigPictureElement = bigPicture.querySelector('.big-picture__img img');
  bigPictureElement.src = url;
  bigPictureElement.alt = description;
  likesCount.textContent = likes;
  descriptionBigPicture.textContent = description;
};

function closeFullPicture() {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openFullPicture() {
  bodyElement.classList.add('open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderDataForPicture();
}

containerPictures.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openFullPicture();
  }
});

buttonReset.addEventListener('click', () => {
  closeFullPicture();
});

const renderGallery = (pictures) => {
  containerPictures.addEventListener('click', (evt) => {
    const isClickOnPicture = evt.target.closest('.picture');
    if (!isClickOnPicture) {
      return;
    }
    const chosenImgElement = isClickOnPicture.querySelector('img');
    const chosenPicture = pictures.find((picture) => picture.id === Number(chosenImgElement.dataset.id));
    openFullPicture(chosenPicture);
  });
  appendThunbnails(pictures, containerPictures);
};


export {renderGallery};
