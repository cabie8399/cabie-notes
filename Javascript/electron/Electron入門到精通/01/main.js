
const { app, BrowserWindow } = require('electron')
 
// 创建窗口
function createWindow () {
  console.log('ready')
  // 创建主进程
  const mainWin = new BrowserWindow({
    width: 600,
    height: 400,
  })
 
  // 在当前窗口中加载指定界面让它显示具体的内容
  mainWin.loadFile('index.html')
 
  mainWin.webContents.on('dom-ready', () => {
    console.log('dom-ready')
  })
 
  mainWin.webContents.on('did-finish-load', () => {
    console.log('did-finish-load')
  })
 
  mainWin.on('close', () => {
    console.log('close')
    //mainWin = null
  })
}
 
// 当 app 启动之后，执行窗口创建等操作
app.on('ready', createWindow)
 
app.on('window-all-closed', () => {
  console.log('window-all-closed')
  app.quit()
})
 
app.on('before-quit', () => {
  console.log('before-quit')
})
 
app.on('will-quit', () => {
  console.log('will-quit')
})
 
app.on('quit', () => {
  console.log('quit')
})