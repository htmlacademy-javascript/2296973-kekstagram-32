import {bodyElement} from './image-modal.js';
import {containerPictures} from './image-modal.js';
import {isEscapeKey} from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеши должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег',
};

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const hastagField = document.querySelector('.text__hashtags');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadResetButton = containerPictures.querySelector('.img-upload__cancel');
const imgUploudPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');
const commentForImage = document.querySelector('.text__description');


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

function openUploadForm () {

  imgUploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

const inFocus = () => document.activeElement === hastagField ||
         document.activeElement === commentForImage;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !inFocus()) {
    evt.preventDefault();
    closeUploadForm();
  }
}

function closeUploadForm () {
  imgUploadForm.reset();
  pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function loadsSelectedImg (evt) {
  const file = evt.target.files[0];

  if (file) {
    openUploadForm();
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const imageUrl = reader.result;

      // Подставляем изображение в блок предварительного просмотра
      imgUploudPreview.src = imageUrl;

      // Подставляем изображение в блоки эффектов
      effectPreviews.forEach((preview) => {
        preview.src = imageUrl;
      });

      // Показываем форму редактирования
      imgUploadOverlay.classList.remove('hidden');
      bodyElement.classList.add('modal-open');
    });

    // Читаем файл как Data URL
    reader.readAsDataURL(file);
  }
}

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUnuqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(
  hastagField,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hastagField,
  hasUnuqueTags,
  errorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hastagField,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);
imgUploadForm.addEventListener('submit', onFormSubmit);
imgUploadResetButton.addEventListener('click', closeUploadForm);
imgUploadInput.addEventListener('change', loadsSelectedImg);


export {openUploadForm,closeUploadForm, pristine};

