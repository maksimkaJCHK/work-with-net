import { getFileExtension, getMimeType } from './components/getters.js';
import { downloadFile as df, downloadCSV, openFile, downloadFileByExt } from './components/services.js';
import { base64Code, base64Encode, base64FileEncode, convertBase64ToBinary } from './base64/index.js';

const downloadFile = df(getFileExtension);

export {
  downloadFile,
  openFile,
  getFileExtension,
  getMimeType,
  base64Code,
  base64Encode,
  base64FileEncode,
  downloadCSV,
  convertBase64ToBinary,
  downloadFileByExt,
};