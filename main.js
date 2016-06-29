const fs = require('fs');
const path = require('path');
const http = require('http')
const electron = require('electron');
const {
  app, // Module to control application life.
  BrowserWindow, // Module to create native browser window.
  Menu,
  MenuItem
} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let server;
let mainWindow;
let helpWindow;
let aboutWindow;
const finalHandler = require('finalhandler')
const serveStatic = require('serve-static');
const config = require('./config.json');
const appName = app.getName();

function createServer() {
  const static = serveStatic(`${__dirname}/bundles`);

  server = http.createServer((req, res) => {
    static(req, res, finalHandler(req, res));
  });

  server.on('close', e => {
    server = null;
  })

  // Listen
  server.listen(config['serve-port']);
}

function createMenu() {
  const menu = Menu.buildFromTemplate([{
    label: appName,
    submenu: [{
      label: `About ${appName}`,
      click() {
        if (aboutWindow == null) {
          createAboutWindow();
        }
      }
    },{
      type: 'separator'
    },{
      label: `Quit ${appName}`,
      role: 'quit'
    }],
  },{
    label: 'Help',
    role: 'Help',
    submenu: [{
      label: 'Documentation',
      click() {
        if (helpWindow == null) {
          createHelpWindow();
        }
      }
    }]
  }]);

  Menu.setApplicationMenu(menu);
}


function createMainWindow() {
  const entry = `file://${__dirname}/index.html`;
  const icon = `${__dirname}/assets/weex_icon.png`;

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

    if (helpWindow) {
      helpWindow.close();
    }

    if (aboutWindow) {
      aboutWindow.close();
    }
  })
}

function createHelpWindow() {
  const entry = 'http://alibaba.github.io/weex/doc/';

  if (mainWindow == null) {
    return;
  }

  // Create the browser window.
  helpWindow = new BrowserWindow({
    parent: mainWindow,
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    title: 'Weex Documents',
    nodeIntegration: false
  })

  // and load the index.html of the app.
  helpWindow.loadURL(entry);

  // Open the DevTools.
  // helpWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  helpWindow.on('closed',  e => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    helpWindow = null;
  });
}

function createAboutWindow() {
  const entry = `file://${__dirname}/about.html`;

  if (mainWindow == null) {
    return;
  }

  // Create the browser window.
  aboutWindow = new BrowserWindow({
    parent: mainWindow,
    width: 280,
    height: 180,
    title: '',
    resizable: false
  })

  // and load the index.html of the app.
  aboutWindow.loadURL(entry);

  // Open the DevTools.
  // aboutWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  aboutWindow.on('closed',  e => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    aboutWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', e => {
  createMenu();

  if (server == null) {
    createServer();
  }

  if (mainWindow == null) {
    createMainWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', e => {
  server.close();

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate',  e => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (server == null) {
    createServer();
  }

  if (mainWindow == null) {
    createMainWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
