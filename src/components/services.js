export const downloadFile = (getFileExt) => {
  return function(file, mimeType, name = new Date().getTime()) {
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement('a');
    link.href = url;
    let extensionType = getFileExt(mimeType);

    if (typeof window.navigator.msSaveBlob === 'function') {
      window.navigator.msSaveBlob(file, `${name}.${extensionType}`);
    } else {
      link.setAttribute('download', `${name}.${extensionType}`);
      document.body.appendChild(link);
      link.click();
    }
  }
};

export const openFile = (file) => {
  let objectUrl = URL.createObjectURL(file);
  window.open(objectUrl);
}