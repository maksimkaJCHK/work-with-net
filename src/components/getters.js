import mimeTypes from '../mimeTypes/index.js';
import allMimeType from '../allMymeType/all-mime-type.js';

const mainGetFileExtension = (mimeType) => {
  return function(type) {
    let curType = mimeType.filter(el => el.mimeT == type);
    if(curType.length) {
      return curType[0].doc;
    }
    return null;
  }
}

const mainGetMimeType = (mimeType) => {
  return function(doc) {
    let curType = mimeType.filter(el => el.doc == doc);
    if(curType.length) {
      return curType[0].mimeT;
    }
    return null;
  }
}

// Стандартные расширения, все не нужны, это слишком много весит
export const getFileExtension = mainGetFileExtension(mimeTypes);
export const getMimeType = mainGetMimeType(mimeTypes);
// Все расширения которые я только нашел
export const getFullFileExtension = mainGetFileExtension(allMimeType);
export const getFullMimeType = mainGetMimeType(allMimeType);