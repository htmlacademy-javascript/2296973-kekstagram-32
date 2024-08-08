import {getRandomInteger, getRandomElementFromArray, createRandomIdFromRangeGenerator} from './util.js';

const NAMES =
[
  'Артём',
  'Мария',
  'Иван',
  'Ольга',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Анна',
  'Павел',
  'Ирина'
];

const MESSAGES = [
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Захватывающий закат на пляже, где небо окрашено в потрясающие оттенки оранжевого и розового.',
  'Горная тропа, ведущая к вершине, где открывается панорамный вид на бескрайние леса и озера.',
  'Весёлые друзья, смеющиеся и наслаждающиеся пикником в живописном парке.',
  'Милый котенок, играющий с клубком пряжи, создающий очаровательное зрелище.',
  'Ночной город с яркими огнями, отражающимися в реке, создавая волшебную атмосферу.'
];

const SIMILAR_PHOTO_COUNT = 25;
const getRandomId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomUrl = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomCommentId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

/**
 * Функция создает массив случайных комментариев
 * @returns {object} - объект со свойствами: id, avatar, message, name
 */
const createComments = () => ({
  id: getRandomCommentId(),
  avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomElementFromArray(MESSAGES),
  name: getRandomElementFromArray(NAMES)
});

/**
 * Функция создает массив случайных фотографий
 * @returns {object} - объект со свойствами: id, url, description, likes, comments
 */
const createPhoto = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomElementFromArray(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(1,10)}, createComments),
});

//  * Функция создает массив фотографий из функции createPhotos
//  * @returns {Array} - новый массив заданное кол-во раз
//  */
const generatePhotos = () => Array.from({ length: SIMILAR_PHOTO_COUNT,}, createPhoto);

export {SIMILAR_PHOTO_COUNT, generatePhotos};
