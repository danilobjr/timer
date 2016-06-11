import { remote } from 'remote';

console.log(remote);

const window = remote.getCurrentWindow();

const minimizeWindow = (window) => window.minimize()
const toggleWindowSize = (window) => window.isMaximized() ? window.unmaximize() : window.maximize()
const closeWindow = (window) => window.close()

document.querySelector('.btn-minimize').addEventListener('click', minimizeWindow);
document.querySelector('.btn-maximize').addEventListener('click', toggleWindowSize);
document.querySelector('.btn-close').addEventListener('click', closeWindow);