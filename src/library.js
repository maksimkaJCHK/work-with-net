import { downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode } from '../prelib/work-with-net.js';

let buildArgumentsArray = (argumentsArr) => {
  let args = [];
  for (var i = 0; i < argumentsArr.length; i++) {
    args[i] = argumentsArr[i];
  }
  return args;
}

class WorkWithNet {
  downloadFile() {
    downloadFile(...buildArgumentsArray(arguments));
  }
  openFile() {
    openFile(...buildArgumentsArray(arguments));
  }
  getFileExtension() {
    return getFileExtension(...buildArgumentsArray(arguments));
  }
  getMimeType() {
    return getMimeType(...buildArgumentsArray(arguments));
  }
  base64Code() {
    return base64Code(...buildArgumentsArray(arguments));
  }
  base64Encode() {
    return base64Encode(...buildArgumentsArray(arguments));
  }
  base64FileEncode() {
    return base64FileEncode(...buildArgumentsArray(arguments));
  }
}

const workWithNet = new WorkWithNet();

export default workWithNet;

export { downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode };