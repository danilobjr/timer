const remote = require('electron').remote;

const minimizeWindow = (window) => window.minimize()
const toggleWindowSize = (window) => window.isMaximized() ? window.unmaximize() : window.maximize()
const closeWindow = (window) => window.close()

document.addEventListener('DOMContentLoaded', () => {
    const window = remote.getCurrentWindow();
    document.querySelector('.btn-minimize').addEventListener('click', () => minimizeWindow(window));
    document.querySelector('.btn-maximize').addEventListener('click', () => toggleWindowSize(window));
    document.querySelector('.btn-close').addEventListener('click', () => closeWindow(window));
});