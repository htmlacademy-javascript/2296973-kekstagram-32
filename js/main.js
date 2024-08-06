import {generatePhotos} from './data.js';
import {appendThunbnails} from './get-miniatures.js';


appendThunbnails(generatePhotos());

export {generatePhotos};
