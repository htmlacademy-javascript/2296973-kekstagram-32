const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThunbnails = ({url, description, likes, comments, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const selectedImage = pictureElement.querySelector('.picture__img');
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.photoId = id;
  selectedImage.src = url;
  selectedImage.alt = description;
  return pictureElement;
};

const appendThunbnails = (pictures, containerPicture) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const photoElement = createThunbnails(picture);
    fragment.append(photoElement);
  });
  containerPicture.append(fragment);
};


export {appendThunbnails};
