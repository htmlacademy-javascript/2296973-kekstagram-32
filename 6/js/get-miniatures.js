const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const containerPictures = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

/**
 * Фунция добавляет миниатюры в контейнер
 * @param {Array} photo - массив объкта случайных фотографий
 */
const appendThunbnails = (photos) => {
  photos.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const selectedImage = pictureElement.querySelector('.picture__img');
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length; // длина массива
    selectedImage.src = url;
    selectedImage.alt = description;
    pictureFragment.append(pictureElement);
  });
  containerPictures.append(pictureFragment);
};


export {appendThunbnails, containerPictures};
