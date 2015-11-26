const electron = require('electron');
const app = electron.app;  // ћодуль контролирующей жизненый цикл нашего приложени€.
const BrowserWindow = electron.BrowserWindow;  // ћодуль создающий браузерное окно.

// ќпционально возможность отправки отчета о ошибках на сервер проекта Electron.
electron.crashReporter.start();

// ќпределение глобальной ссылки , если мы не определим, окно
// окно будет закрыто автоматически когда JavaScript объект будет очищен сборщиком мусора.
var mainWindow = null;

// ѕровер€ем что все окна закрыты и закрываем приложение.
app.on('window-all-closed', function() {
  // ¬ OS X обычное поведение приложений и их menu bar
  //  оставатс€ активными до тех пор пока пользователь закроет их €вно комбинацией клавиш Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Ётот метод будет вызван когда Electron закончит инициализацию 
// и будет готов к созданию браузерных окон.
app.on('ready', function() {
  // —оздаем окно браузера.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // и загружаем файл index.html нашего веб приложени€.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ќткрываем DevTools.
  mainWindow.webContents.openDevTools();

  // Ётот метод будет выполнен когда генерируетс€ событие закрыти€ окна.
  mainWindow.on('closed', function() {
	// ”дал€ем ссылку на окно, если ваше приложение будет подерживать несколько     // окон вы будете хранить их в массиве, это врем€ 
//когда нужно удалить соответсвующий элемент.
    mainWindow = null;
  });
});
