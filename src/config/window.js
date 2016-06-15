const remote = require('electron').remote;
import { store } from './store';
import * as actions from './actions';

const minimizeWindow = (window) => window.minimize()

const toggleWindowSize = (window) => {
    if (window.isMaximized()) {
        store.dispatch(actions.minimizeWindow());
        window.unmaximize();
    } else {
        store.dispatch(actions.maximizeWindow());
        window.maximize();
    }
}

const closeWindow = (window) => window.close()

document.addEventListener('DOMContentLoaded', () => {
    const window = remote.getCurrentWindow();
    document.querySelector('.btn-minimize').addEventListener('click', () => minimizeWindow(window));
    document.querySelector('.btn-maximize').addEventListener('click', () => toggleWindowSize(window));
    document.querySelector('.btn-close').addEventListener('click', () => closeWindow(window));
});