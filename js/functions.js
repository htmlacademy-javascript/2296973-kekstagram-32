/**
 * Проверяет соответствие переданной строки заданной длине
 * @param {string} string - строка для проверки
 * @param {int} maxLength - требуемая длина строки
 * @returns {boolean} - true, если длина строки меньше maxLength
 */
function getLengthString(string, maxLength) {
  return string.length <= maxLength;
}


getLengthString('проверяемая строка', 20);
getLengthString('проверяемая строка', 18);
getLengthString('проверяемая строка', 10);


/**
 * Проверяет, является ли переданная строка палиндромом
 * @param {string} - строка для проверки
 * @returns {boolean}
 */
function isPolydrome(string) {

  const cleaned = string.toLowerCase().replaceAll(' ', '');
  const reverssed = cleaned.split('').reverse().join('');
  return cleaned === reverssed;

}

isPolydrome('Лёша на полке клопа нашёл');
