export const base64Code = (text = '') => {
  return btoa(unescape(encodeURIComponent(`${text}`)));
}

export const base64Encode = (text = '') => {
  return decodeURIComponent(escape(window.atob(`${text}`)));
}

export const base64FileEncode = (file, mediaType = "image/jpeg", charset = 'utf-8') => {
  return `data:${mediaType};charset=${charset};base64,${file}`;
}