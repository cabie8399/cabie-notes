const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".upload").addEventListener('click', () => {
    // 发送消息到主进程
    ipcRenderer.send('open-new-window', 'list.html')
  })
})