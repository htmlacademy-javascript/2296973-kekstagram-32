import {bodyElement} from './image-modal.js';
import {containerPictures} from './image-modal.js';

const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadResetButton = containerPictures.querySelector('.img-upload__cancel');
const imgUploudPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');

function openUploadForm () {
  imgUploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}

function closeUploadForm () {
  imgUploadResetButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  });

}


imgUploadInput.addEventListener('change', (evt) => {

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
});

// const pristine = new Pristine(imgUploadForm);

// imgUploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const isValid = pristine.validate();

// });


export {openUploadForm,closeUploadForm};

