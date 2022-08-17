const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 540, height: 1200, resizable: true, frame: false, icon: "icon.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});