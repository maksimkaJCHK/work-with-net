import { getFileExtension, getMimeType } from './components/getters.js';
import { downloadFile as df } from './components/services.js';
import { openFile } from './components/services.js';
import { base64Code, base64Encode, base64FileEncode } from './base64/index.js';

let downloadFile = df(getFileExtension);

export { downloadFile,
  openFile,
  getFileExtension,
  getMimeType,
  base64Code,
  base64Encode,
  base64FileEncode
};