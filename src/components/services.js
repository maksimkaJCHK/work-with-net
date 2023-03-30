const downloadFileFunc = (url, mimeType, name, getFileExt) => {
  const link = document.createElement('a');

  link.href = url;

  const extensionType = getFileExt ? getFileExt(mimeType) : mimeType;

  if (typeof window.navigator.msSaveBlob === 'function') {
    window.navigator.msSaveBlob(file, `${name}.${extensionType}`);
  } else {
    link.setAttribute('download', `${name}.${extensionType}`);
    document.body.appendChild(link);
    link.click();
  }
};

export const downloadFile = (getFileExt) => {
  return function(file, mimeType, name = new Date().getTime()) {
    const url = window.URL.createObjectURL(new Blob([file]));

    downloadFileFunc(url, mimeType, name, getFileExt);
  }
};

export const openFile = (file) => {
  const objectUrl = URL.createObjectURL(file);

  window.open(objectUrl);
}

export const downloadCSV = (arr, nameCSV) => {
  const bCSVFromArr = arr.map(e => e.join(";")).join("\r\n");

  const bCSV = new Blob(
    [
      new Uint8Array([0xEF, 0xBB, 0xBF]),
      bCSVFromArr
    ],
    {
      encoding:"UTF-8",
      type:"text/csv;charset=UTF-8"
    }
  );

  const fileName = nameCSV || (new Date()).getTime();

  const url = window.URL.createObjectURL(bCSV);

  downloadFileFunc(url, 'csv', fileName);
}