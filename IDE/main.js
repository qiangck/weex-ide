const exec = require('child_process').exec;
const electron = require('electron');
const {
  app, // Module to control application life.
  BrowserWindow // Module to create native browser window.
} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let serveProcess;
const config = require('./config.json');
const entry = `file://${__dirname}/index.html`;
const icon = `${__dirname}/assets/weex_android_icon.png`;

function createWindow() {
  app.dock.setIcon(icon);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 784,
    minWidth: 1024,
    minHeight: 784,
    title: 'Weex IDE',
    resizable: false,
    icon: icon
  })

  // and load the index.html of the app.
  mainWindow.loadURL(entry);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed',  e => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', e => {
  serveProcess = exec(`node_modules/.bin/serve ./bundles -p ${config['serve-port']}`, {
    cwd: __dirname
  });

  if (mainWindow == null) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', e => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  serveProcess.kill();

  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate',  e => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow == null) {
    createWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
