# work-with-net

Библиотека для работы с данными получаемыми из сети. Очень часто при работе с AJAX-запросами мы получаем данные в формате base64, или данные в двоичном формате. Просто так отобразить их не получится. Данная библиотека содержит модули, которые преобразуют расширения файлов в mime types, mime types в обычные расширения файлов. Модулей, которые позволяют скачивать файлы приходящие через AJAX-запрос, открывать эти данные в новой вкладке, работа с base64.

Для того, чтобы установить данную библиотеку необходимо в консоли набрать "npm install work-with-net --save-dev". После установки вы можете подключать как саму библиотеку, так и конкретные ее модули.

- Подключение отдельных модулей - import { downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode } from "work-with-net";
- Или подключите всю библиотеку - import workWithNet from "work-with-net";

По умолчанию моя библиотека содержит порядка 800 mime types, спасибо за это [Robert Kieffer](https://github.com/broofa/mime). Это достаточно много, но работать будет вообще для всего. Размер правда при этом будет около 40kb. Если же вам нужны стандартные расширения, то подключите самые распространенные типы:

- Подключение отдельных модулей - import { downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode } from "work-with-net/lib/work-with-net-standard.js";
- Или подключите всю библиотеку - import workWithNet from "work-with-net/lib/work-with-net-standard.js";

При таком подключении размер будет 3kb. Тут только самые типовые расширения. Первоначально у меня стояла задача сделать чат для работы с менеджером, предполагалось, что пользователь через этот чат будет переписываться с менеджером, загружать или скачивать от него документы. Список расширений мне предоставили, я его не много дополнил. Давайте я его приложу:

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

Как видите это наиболее распространненые расширения для работы с документами, архивами, картинками. Чат был деловой, музыку туда нельзя было закинуть, в будующем я возможно это поправлю.

Если вам нужна поддержка IE 11 то подключите библиотеку следующим образом:

- Подключение отдельных модулей - import { downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode } from "work-with-net/lib/ie/work-with-net-standard.js";
- Или подключите всю библиотеку - import workWithNet from "work-with-net/lib/ie/work-with-net-standard.js";

Сразу хочу сказать, для 11 IE я не проверял, подключайте на свой риск.

## Получение mime types из расширений файлов и на оборот.

Для получения mime type из расширения файла используйте функцию getMimeType('расширений файла'). Вам это скорее всего не пригодится, в большинстве случаев вы будете получать расширения файла из mime type. Для этого существует функция getFileExtension('mime type'). Если вы подключили всю библиотеку то тогда:

- workWithNet.getMimeType('расширений файла') - получить mime type из расширения файла;
- workWithNet.getFileExtension('mime type') - получить расширение файла из mime type.

## Скачать файл из AJAX-запроса, или открыть его в новой вкладке.

Если вы получаете файл из AJAX-запроса (в базе данных он лежит в двоичном виде, для его преобразования я использую blob). То для его скачивания используйте функцию downloadFile('файл в двоичном виде', 'mime type', 'имя файла'). Смотрите вам обязательно нужен сам файл, и его mime type. Mime type как правило лежит в заголовке ответа (Content-Type). Если имя файла не задать, то при скачивании имя файла будет содержать дату в милисекундах с 1970 года. Если вы что-то скачивали через портал гос. услуг, то там файлы качаются также. Если же вам нужно имя как-то конкретно генерить, то задайте 3 параметр, так он не обязателен.

Если нужно открыть файл в новой вкладке то используйте функцию openFile('файл в двоичном виде'). Как правило задача может стоять так, что pdf-файлы мы открываем в новой вкладке, а все остальный файлы нужно скачивать. Соответственно из "Content-Type" мы получаем mime type файла, преобразуем его через 'getFileExtension' и в зависимости от его расширения вызываем или 'getFileExtension', или 'getMimeType'. Тут есть одно но, не все файлы можно открыть в браузере. Документ pdf откроется, а вот ISO-образ нет, он у вас скачается. Тут ничего не поделать.

Если вы подключили библиотеку, а не отдельные модули, то:

- workWithNet.downloadFile('файл в двоичном виде', 'mime type', 'имя файла') - скачать файл;
- workWithNet.openFile('файл в двоичном виде') - открыть файл в новой вкладке.

## Работа с base64

Для работы с base64 сужествую следующие функции base64Code, base64Encode, base64FileEncode;

- base64Code('Текст') - преобразует текст в формат base64, как правило это нужно если вы из формы пароль отправляете при регистрации. Но это не всегда нужно, но так бывает;
- base64Encode('Текст') - преобразует base64 в текст, как правило если вы по AJAX-запросу получаете пароль, вам его нужно декодировать в обычный текст. Или галочка "запомнить меня", тут вам эта функция пригодится;
- base64FileEncode('base64', 'media type', 'кодировка') - если вы по AJAX запросу получаете файл в формате base64, то первый аргумент данной функции это сам файл в формате base64. Media type, он должен приходить из заголовка ответа (Content-Type), и кодировки. В большинстве случаев вам так будут приходить картинки, поэтому если у вас картинка в формате "jpeg", то media type можно не указывать, он у меня стоит по умолчанию, кодировка тоже скорее всего будет "utf-8", поэтому эти параметры не обязательны. В редких случаях кодировка будет не "utf-8", и возможно в base64 вам придет pdf-файл. Тогда данные аргументы будут иметь значение.

Если вы подключили библиотеку, а не отдельные модули, то:

- workWithNet.base64Code('Текст') - преобразует текст в формат base64;
- workWithNet.base64Encode('Текст') - преобразует base64 в текст;
- workWithNet.base64FileEncode('base64', 'media type', 'кодировка') - отобразить файл в формате base64.

Library for working with data received from the network. Very often, when working with AJAX requests, we receive data in base64 format, or data in binary format. You won't be able to display them just like that. This library contains modules that convert file extensions to mime types, mime types to regular file extensions. Modules that allow you to download files received by an AJAX request, open this data in a new tab, work with base64.

In order to install this library, you need to type "npm install work-with-net --save-dev" in the console. After installation, you can include both the library itself and its specific modules.

- Connecting separate modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode} from "work-with-net";
- Or include the entire library - import workWithNet from "work-with-net";

By default, my library contains about 800 mime types, thanks for that [Robert Kieffer](https://github.com/broofa/mime). That's a lot, but it will work for everything. The size, however, will be about 40kb. If you need standard extensions, then connect the most common types:

- Connecting individual modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode} from "work-with-net / lib / work-with-net-standard.js";
- Or include the entire library - import workWithNet from "work-with-net / lib / work-with-net-standard.js";

With this connection, the size will be 3kb. There are only the most typical extensions. Initially, my task was to make a chat for working with a manager, it was assumed that the user through this chat would correspond with the manager, upload or download documents from him. The list of extensions was provided to me, I did not add much to it. Let me attach it:

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

- Connecting individual modules - import {downloadFile, openFile, getFileExtension, getMimeType, base64Code, base64Encode, base64FileEncode} from "work-with-net / lib / ie / work-with-net-standard.js";
- Or include the entire library - import workWithNet from "work-with-net / lib / ie / work-with-net-standard.js";

I want to say right away that I did not check for 11 IE, connect at your own risk.

## Getting mime types from file extensions and vice versa.

To get the mime type from a file extension use the getMimeType ('file extensions') function. This will probably not be useful to you, in most cases you will get file extensions from the mime type. There is a function getFileExtension ('mime type') for this. If you have included the entire library then:

- workWithNet.getMimeType('file extensions') - get mime type from file extension;
- workWithNet.getFileExtension('mime type') - get file extension from mime type.

## Download file from AJAX request, or open it in a new tab.

If you get a file from an AJAX request (it is in binary in the database, I use blob to transform it). Then to download it, use the downloadFile function ('file in binary', 'mime type', 'filename'). Look, you definitely need the file itself, and its mime type. Mime type usually lies in the response header (Content-Type). If the file name is not specified, then when downloading the file name will contain the date in milliseconds since 1970. If you downloaded something through the state portal. services, then there the files are downloaded as well. If you need to generate a name somehow specifically, then set 3 parameters, so it is not required.

If you need to open a file in a new tab, then use the openFile function ('file in binary'). As a rule, the task can be such that we open pdf-files in a new tab, and all other files need to be downloaded. Accordingly, from the "Content-Type" we get the mime type of the file, transform it via 'getFileExtension' and, depending on its extension, call either 'getFileExtension' or 'getMimeType'. There is one thing, but not all files can be opened in a browser. The pdf document will open, but the ISO image is not, it will be downloaded from you. There is nothing you can do about it.

If you have included a library, and not individual modules, then:

- workWithNet.downloadFile('binary file', 'mime type', 'file name') - download file;
- workWithNet.openFile('binary file') - open the file in a new tab.

## Working with base64

To work with base64, the following functions are used: base64Code, base64Encode, base64FileEncode;

- base64Code('Text') - converts the text to base64 format, as a rule, this is necessary if you send a password from the form during registration. But this is not always necessary, but it happens;
- base64Encode('Text') - converts base64 to text, as a rule, if you receive a password from an AJAX request, you need to decode it into plain text. Or a checkmark "remember me", here this function will come in handy;
- base64FileEncode('base64', 'media type', 'encoding') - if you receive a file in base64 format by AJAX request, then the first argument to this function is the file itself in base64 format. Media type, it must come from the response header (Content-Type), and encoding. In most cases, you will receive pictures like this, so if you have a picture in the "jpeg" format, then the media type can be omitted, I have it by default, the encoding will most likely be "utf-8", so these parameters are not required. In rare cases, the encoding will not be "utf-8", and it is possible that you will receive a pdf file in base64. Then the given arguments will matter.

If you have included a library, and not individual modules, then:

- workWithNet.base64Code('Text') - converts text to base64 format;
- workWithNet.base64Encode('Text') - converts base64 to text;
- workWithNet.base64FileEncode('base64', 'media type', 'encoding') - display the file in base64 format.