
const NAMES =
['Артём',
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

/**
* Функция по получению случайного числа из диапазона
* @param {number} a - минимальное число
* @param {number} b - максимальное число
* @returns {number} result - случайный индекс элемента из массива
*/

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Функция создает случайное уникальное число из диапозона
 * @param {number} min - миниманьное число
 * @param {number} max - максимальное число
 * @returns {number} previousValues - массив уникальных чисел
 */

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomUrl = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomCommentId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

/**
 * Функция выводит случайный элемент из массива
 * @param {Array} - массив
 * @returns - элемент массива
 */

function getRandomElementFromArray (element) {
  return element[getRandomInteger(0, element.length - 1)];
}

/**
 * Функция создает массив объекта фотографии
 * @returns {object} - объект со свойствами: id, url, description, likes, comments
 */

const createPhoto = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomElementFromArray(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: [
    {
      id: getRandomCommentId(),
      avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
      message: getRandomElementFromArray(MESSAGES),
      name: getRandomElementFromArray(NAMES)
    }
  ],
});

const similarСreatePhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

console.log(similarСreatePhoto);
