# Work with net

[English](./README.md) | Русский

Library for working with data received from the network. Very often, when working with AJAX requests, we receive data in base64 format, or data in binary format. You won't be able to display them just like that. This library contains modules that convert file extensions to mime types, mime types to regular file extensions. Modules that allow you to download files received by an AJAX request, open this data in a new tab, work with base64.

In order to install this library, you need to type in the console:

```
npm i work-with-net
```

After installation, you can include both the library itself and its specific modules.

- Connecting separate modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode, downloadCSV, convertBase64ToBinary, downloadFileByExt } from "work-with-net";
- Or include the entire library - import workWithNet from "work-with-net";

By default, my library contains about 800 mime types, thanks for that [Robert Kieffer](https://github.com/broofa/mime). That's a lot, but it will work for everything. The size, however, will be about 40kb. If you need standard extensions, then connect the most common types:

- Connecting individual modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode, downloadCSV, convertBase64ToBinary, downloadFileByExt } from "work-with-net / lib / work-with-net-standard.js";
- Or include the entire library - import workWithNet from "work-with-net / lib / work-with-net-standard.js";

With this connection, the size will be approx 3kb. There are only the most typical extensions. Initially, my task was to make a chat for working with a manager, it was assumed that the user through this chat would correspond with the manager, upload or download documents from him. The list of extensions was provided to me, I did not add much to it. Let me attach it:

- "7z";
- "gz";
- "zip";
- "rar";
- "tar";
- "tif";
- "jpeg";
- "png";
- "svg";
- "bmp";
- "odp";
- "ods";
- "txt";
- "xml";
- "csv";
- "odt";
- "docx";
- "dotx";
- "docm";
- "dotm";
- "doc";
- "xls";
- "xlsx";
- "xltx";
- "xlsm";
- "xltm";
- "xlam";
- "xlsb";
- "ppt";
- "pptx";
- "potx";
- "ppsx";
- "ppam";
- "pptm";
- "potm";
- "ppsm";
- "mdb";
- "pdf";
- "rtf";

As you can see, these are the most common extensions for working with documents, archives, pictures. The chat was businesslike, it was impossible to put music there, in the future I will probably fix it.

If you need support for IE 11, then include the library as follows:

- Connecting individual modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode, downloadCSV, convertBase64ToBinary, downloadFileByExt } from "work-with-net / lib / ie / work-with-net-standard.js";
- Or include the entire library - import workWithNet from "work-with-net / lib / ie / work-with-net-standard.js";

I want to say right away that I did not check for 11 IE, connect at your own risk.

## Getting mime types from file extensions and vice versa.

To get the mime type from a file extension use the getMimeType ('file extensions') function. This will probably not be useful to you, in most cases you will get file extensions from the mime type. There is a function getFileExtension ('mime type') for this. If you have included the entire library then:

- workWithNet.getMimeType('file extensions') - get mime type from file extension;
- workWithNet.getFileExtension('mime type') - get file extension from mime type.

## Download file from AJAX request, or open it in a new tab.

If you get a file from an AJAX request (it is in binary in the database, I use blob to transform it). Then to download it, use the downloadFile function ('file in binary', 'mime type', 'filename'). Look, you definitely need the file itself, and its mime type. Mime type usually lies in the response header (Content-Type). If the file name is not specified, then when downloading the file name will contain the date in milliseconds since 1970. If you downloaded something through the state portal. services, then there the files are downloaded as well. If you need to generate a name somehow specifically, then set 3 parameters, so it is not required.

If you need to open a file in a new tab, then use the openFile function ('file in binary'). As a rule, the task can be such that we open pdf-files in a new tab, and all other files need to be downloaded. Accordingly, from the "Content-Type" we get the mime type of the file, transform it via 'getFileExtension' and, depending on its extension, call either 'getFileExtension' or 'getMimeType'. There is one thing, but not all files can be opened in a browser. The pdf document will open, but the ISO image is not, it will be downloaded from you. There is nothing you can do about it.

There are times when you don't need to know its mime type to download a file. For example, you know in advance that jpeg images will come to you by AJAX request. Or another option, you need to generate a torrent file. To do this, there is a function downloadFileByExt('file in binary form, 'its extension', 'file name'). Look, you need the file itself, the default extension is jpeg (if you need to generate jpeg, then you can not set the extension). The filename is also optional. If you don't specify a filename, the downloaded filename will contain the date in milliseconds since 1970. This function will be faster than downloadFile because the file extension will not be calculated under the hood.

If you have included a library, and not individual modules, then:

- workWithNet.downloadFile('binary file', 'mime type', 'file name') - download file;
- workWithNet.openFile('binary file') - open the file in a new tab.
- workWithNet.downloadFileByExt('binary file, 'its extension', 'file name') - download a file if you know its extension.

## Working with base64

To work with base64, the following functions are used: base64Code, base64Encode, base64FileEncode, convertBase64ToBinary;

- base64Code('Text') - converts the text to base64 format, as a rule, this is necessary if you send a password from the form during registration. But this is not always necessary, but it happens;
- base64Encode('Text') - converts base64 to text, as a rule, if you receive a password from an AJAX request, you need to decode it into plain text. Or a checkmark "remember me", here this function will come in handy;
- base64FileEncode('base64', 'media type', 'encoding') - if you receive a file in base64 format by AJAX request, then the first argument to this function is the file itself in base64 format. Media type, it must come from the response header (Content-Type), and encoding. In most cases, you will receive pictures like this, so if you have a picture in the "jpeg" format, then the media type can be omitted, I have it by default, the encoding will most likely be "utf-8", so these parameters are not required. In rare cases, the encoding will not be "utf-8", and it is possible that you will receive a pdf file in base64. Then the given arguments will matter.
- convertBase64ToBinary('base64 string') - as the name implies, this is necessary to convert base64 to a binary file. Once I received images in base64 format via one API. I needed to insert them into SVG, draw a shape there, and then send these shapes along with the picture. The picture had to be sent in binary form. If you add a file upload module, you can get the resulting image in base64 format, convert it to a binary file, and download it.

If you have included a library, and not individual modules, then:

- workWithNet.base64Code('Text') - converts text to base64 format;
- workWithNet.base64Encode('Text') - converts base64 to text;
- workWithNet.base64FileEncode('base64', 'media type', 'encoding') - display the file in base64 format.
- workWithNet.convertBase64ToBinary('base64 string') - to convert base64 to binary.

## Download CSV file

At first glance, this is a simple problem. What could be easier than generating a CSV in javascript, but when I started solving it, I had a lot of problems.

The first problem was with the encoding. All examples on the net were from English-language forums. They all worked well. In my case, the text contained Cyrillic, as a result, it was not displayed as it should be in excel. After half an hour of searching, I found a solution, I had to substitute 3 characters for the BOM encoding.

The second problem was that the text was in one column. The guys here helped me. It was necessary to use ";" as a separator.

In general, it became clear that this is the case for my library. In order to generate a CSV file in my library there is a downloadCSV function. It takes 2 parameters, an array of arrays from which I will build the CSV file, and a file name. The filename is optional. If it is not set, the time in milliseconds since 1970 will be substituted. Let me give you a better example to illustrate.

```
import { downloadCSV } from 'work-with-net';

const csvArr = [
  [1, 2, 3],
  ['какой-то текст 1', '"' + 'какой-то ; \\n текст 2' + '"', 'какой-то текст 3'],
  [1, 2, 3],
];

downloadCSV(csvArr, 'example');
```

As you can see from the example, each array in csvArr is a line in the resulting CSV file. Naturally, all control characters must be escaped, if your string contains ";", then you will need to follow the example of the second array.

If you included the library, and not individual modules, then the final code will look like this:

```
import workWithNet from 'work-with-net';

const csvArr = [
  [1, 2, 3],
  ['какой-то текст 1', '"' + 'какой-то ; \\n текст 2' + '"', 'какой-то текст 3'],
  [1, 2, 3],
];

workWithNet.downloadCSV(csvArr, 'example');
```