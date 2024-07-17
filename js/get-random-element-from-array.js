import {getRandomInteger} from './get-random-integer.js';
/**
 * Функция выводит случайный элемент из массива
 * @param {Array} - массив
 * @returns - элемент массива
 */

function getRandomElementFromArray (element) {
  return element[getRandomInteger(0, element.length - 1)];
}


export {getRandomElementFromArray};
