const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow(){

  // Create the browser window

  win = new BrowserWindow({})

  // Load the url

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'batterylevel.html'),
    protocol: 'file:'
  }))
}

app.on('ready', createWindow);
