
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


const getRandomId = getRandomInteger(1, 25);

/**
 * Функция создает массиф объекта фотографии
 * @returns {object} - объект со свойствами: id, url, description, likes
 */

const createPhoto = () =>  {
  id: ,
  url: ,
  description: ,
  likes: ,
  comments: createComment(),
}


/**
 * Функция создает объект коментария фотографий
 * @returns {object} - объект со свойствами: id, avatar, message, name
 */
const createComment = () => {
  id:,
  avatar:,
  message:,
  name:,
}
