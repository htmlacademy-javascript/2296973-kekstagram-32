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

export {getRandomInteger};
