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

/**
 * Функция выводит случайный элемент из массива
 * @param {Array} - массив
 * @returns - элемент массива
 */
function getRandomElementFromArray (element) {
  return element[getRandomInteger(0, element.length - 1)];
}

export{getRandomInteger, getRandomElementFromArray, createRandomIdFromRangeGenerator};
