const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow(){

  // Create the browser window

  win = new BrowserWindow({width: 500, height: 645, title: "Phone Status"})

  // Load the url

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'login.html'),
    protocol: 'file:'
  }))
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () =>{
  if(process.platform !== 'darwin'){
    app.quit()
  }
})
