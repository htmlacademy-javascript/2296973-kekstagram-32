import {getRandomInteger} from './get-random-integer.js';

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

export {createRandomIdFromRangeGenerator};
