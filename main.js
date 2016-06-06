const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({ 
        width: 1366, height: 768, 
        minWidth: 354, minHeight: 540 
    });
    
    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });    
};

app.on('ready', createMainWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});