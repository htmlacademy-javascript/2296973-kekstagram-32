const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const containerPictures = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

/**
 * Фунция добавляет миниатюры в контейнер
 * @param {object} photo - объект случайных фотографий
 * @returns {} - контейнер с миниатюрой
 */
const appendThunbnail = (photo) => {
  photo.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length; // длина массива
    pictureFragment.append(pictureElement);
  });
  containerPictures.append(pictureFragment);
};

export {appendThunbnail};
