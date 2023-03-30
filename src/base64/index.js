export const base64Code = (text = '') => {
  return btoa(unescape(encodeURIComponent(`${text}`)));
}

export const base64Encode = (text = '') => {
  return decodeURIComponent(escape(window.atob(`${text}`)));
}

export const base64FileEncode = (file, mediaType = "image/jpeg", charset = 'utf-8') => {
  return `data:${mediaType};charset=${charset};base64,${file}`;
}

export const convertBase64ToBinary = (dataURI) => {
  let byteString;

  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  let ia = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}