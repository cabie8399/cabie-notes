const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'photo-icon.png',
    webPreferences: {
      nodeIntegration: true, // 让渲染进程可以使用 node
      contextIsolation: false, // 关闭上下文隔离
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  console.log('whenReady')
  createWindow()

  // 监听渲染进程发送的消息
  ipcMain.on('open-new-window', (_, arg) => {
    let newWindow = new BrowserWindow({ width: 400, height: 300 });
    newWindow.loadFile(arg); // 打开 IPC 传递的数据，即 list.html

    // 当新窗口关闭时，将窗口对象置为空
    newWindow.on('closed', () => {
      newWindow = null;
    });
  });

  app.on('activate', function () {
    console.log('activate')
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  console.log('window-all-closed')
  if (process.platform !== 'darwin') app.quit()
})