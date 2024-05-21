import {app, protocol, ipcMain, BrowserWindow} from 'electron'
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib'
import installExtension, {VUEJS_DEVTOOLS} from 'electron-devtools-installer'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let catWin;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    {scheme: 'app', privileges: {secure: true, standard: true}}
])

function createWindow(devPath, prodPath) {

    // Create the browser window.
    const window = new BrowserWindow({
        icon: './cat.png',
        width: 800,
        height: 600,
        autoHideMenuBar: true,  //  工具列不顯示
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        window.loadURL(process.env.WEBPACK_DEV_SERVER_URL + devPath)
        // if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        // createProtocol('app')
        // Load the index.html when not in development
        window.loadURL(`app://./${prodPath}`)
    }

    return window;
}

function createCatWindow(devPath, prodPath) {

    // Create the browser window.
    const window = new BrowserWindow({
        icon: './cat.png',
        width: 380,
        height: 350,
        autoHideMenuBar: true,  //  工具列不顯示
        frame: false,      // 標題列不顯示
        transparent: true, // 背景透明
        // show: false,      // 不顯示 BrowserWindow
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    const url = (process.env.WEBPACK_DEV_SERVER_URL) ? (process.env.WEBPACK_DEV_SERVER_URL + devPath) : `app://./${prodPath}`;
    window.loadURL(url)

    return window;
}

// Quit when all windows are closed.
app.on('window-all-closed', () => app.quit())

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
            await installExtension(VUEJS_DEVTOOLS)
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }

    if (!process.env.WEBPACK_DEV_SERVER_URL) {
        createProtocol('app')
    }
    win = createWindow('', 'index.html')
    catWin = createCatWindow('subpage', 'subpage.html')
})

ipcMain.on('switch-cat', (event, number) => {

    catWin.webContents.send('switch-cat', number);
    catWin.show();  // Shows and gives focus to the window.
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}
