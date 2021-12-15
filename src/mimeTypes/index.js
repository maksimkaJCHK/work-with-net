import archive from './archive.js';
import images from './images.js';
import doc from './doc.js';

const mimeTypes = [
  ...archive,
  ...images,
  ...doc
];

export default mimeTypes;