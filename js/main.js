import {generatePhotos} from './data.js';
import {renderGallery} from './image-modal.js';
import { closeUploadForm} from './form.js';
closeUploadForm();

renderGallery(generatePhotos());


