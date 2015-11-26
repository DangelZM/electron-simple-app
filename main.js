const electron = require('electron');
const app = electron.app;  // ������ �������������� �������� ���� ������ ����������.
const BrowserWindow = electron.BrowserWindow;  // ������ ��������� ���������� ����.

// ����������� ����������� �������� ������ � ������� �� ������ ������� Electron.
electron.crashReporter.start();

// ����������� ���������� ������ , ���� �� �� ���������, ����
// ���� ����� ������� ������������� ����� JavaScript ������ ����� ������ ��������� ������.
var mainWindow = null;

// ��������� ��� ��� ���� ������� � ��������� ����������.
app.on('window-all-closed', function() {
  // � OS X ������� ��������� ���������� � �� menu bar
  //  ��������� ��������� �� ��� ��� ���� ������������ ������� �� ���� ����������� ������ Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// ���� ����� ����� ������ ����� Electron �������� ������������� 
// � ����� ����� � �������� ���������� ����.
app.on('ready', function() {
  // ������� ���� ��������.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // � ��������� ���� index.html ������ ��� ����������.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ��������� DevTools.
  mainWindow.webContents.openDevTools();

  // ���� ����� ����� �������� ����� ������������ ������� �������� ����.
  mainWindow.on('closed', function() {
	// ������� ������ �� ����, ���� ���� ���������� ����� ����������� ���������     // ���� �� ������ ������� �� � �������, ��� ����� 
//����� ����� ������� �������������� �������.
    mainWindow = null;
  });
});
