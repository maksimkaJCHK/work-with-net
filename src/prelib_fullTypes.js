import { getFullFileExtension as getFileExtension, getFullMimeType as getMimeType } from './components/getters.js';
import { downloadFile as df, downloadCSV } from './components/services.js';
import { openFile } from './components/services.js';
import { base64Code, base64Encode, base64FileEncode } from './base64/index.js';

const downloadFile = df(getFileExtension);

export {
  downloadFile,
  openFile,
  getFileExtension,
  getMimeType,
  base64Code,
  base64Encode,
  base64FileEncode,
  downloadCSV
};