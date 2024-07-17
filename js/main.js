import {NAMES, MESSAGES, DESCRIPTIONS, SIMILAR_PHOTO_COUNT} from './data.js';
import {getRandomInteger} from './get-random-integer.js';
import {createRandomIdFromRangeGenerator} from './get-random-id-from-range-generator.js';
import {getRandomElementFromArray} from './get-random-element-from-array.js';

const getRandomId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomUrl = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomCommentId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);


/**
 * Функция создает массив объекта коментария
 * @returns {object} - объект со свойствами: id, avatar, message, name
 */
const createComments = () => ({
  id: getRandomCommentId(),
  avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomElementFromArray(MESSAGES),
  name: getRandomElementFromArray(NAMES)
});

/**
 * Функция создает массив коментариев из функции createComments, которая содержит объект
 * @param {Array} arr - принимает массив
 * @returns {Array} - новый массив из случайного кол-ва фотографий
 */
const createArrayComments = (arr) => Array.from({length: getRandomInteger(1,10)}, arr);

/**
 * Функция создает массив объекта фотографии
 * @returns {object} - объект со свойствами: id, url, description, likes, comments
 */
const createPhotos = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomElementFromArray(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: createArrayComments(createComments),
});


/**
 * Функция создает массив фотографий из функции createPhotos, которая содержит объект
 * @param {Array} arr - принимает массив
 * @returns {Array} - новый массив заданное кол-во раз
 */
const createArrayPhotos = (arr) => Array.from({ length: SIMILAR_PHOTO_COUNT }, arr);

console.log(createArrayPhotos(createPhotos));
