import { appendThunbnails } from './get-miniatures.js';
import { isEscapeKey } from './util.js';
import { isEnterKey } from './util.js';

const containerPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const likesCount = document.querySelector('.likes-count');
const descriptionBigPicture = document.querySelector('.social__caption');
const blocksCounterComment = bigPicture.querySelector('.social__comment-count');
const blockLoadingNewComments = bigPicture.querySelector('.comments-loader');
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

function openFullPicture(data) {
  bodyElement.classList.add('open');
  bigPicture.classList.remove('hidden');
  blocksCounterComment.classList.add('hidden');
  blockLoadingNewComments.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderDataForPicture(data);
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
    const chosenPictureId = Number(chosenImgElement.dataset.photoId);
    const chosenPicture = pictures.find((picture) => picture.id === chosenPictureId);
    openFullPicture(chosenPicture);
  });
  appendThunbnails(pictures, containerPictures);
};


export {renderGallery};
