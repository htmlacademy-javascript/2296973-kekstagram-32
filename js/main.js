import {SIMILAR_PHOTO_COUNT, createPhotos} from './data.js';
/**
//  * Функция создает массив фотографий из функции createPhotos
//  * @returns {Array} - новый массив заданное кол-во раз
//  */
const generatePhotos = () => Array.from({ length: SIMILAR_PHOTO_COUNT }, createPhotos);

generatePhotos ();
