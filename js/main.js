import {generatePhotos} from './data.js';
// import {appendThunbnails} from './get-miniatures.js';
import {renderGallery} from './image-modal.js';


renderGallery(generatePhotos());
