import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
const __dirname = import.meta.dirname
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, '..', 'preload', 'preload.cjs')
    }
  })
  console.log(`[${process.env.NODE_ENV}]`);
  if(process.env.NODE_ENV === 'development') {
    win.loadURL('http://127.0.0.1:5173/')
    win.webContents.openDevTools()
  }
  else {
    win.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'))
  }
}

app.whenReady().then(() => {
    ipcMain.handle('ping', async () => {
        return 'pong'})
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})