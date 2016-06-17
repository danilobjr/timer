const remote = require('electron').remote;
import { store } from './store';
import * as actions from './actions';

const minimizeWindow = () => remote.getCurrentWindow().minimize()

const toggleWindowSize = () => {
    const window = remote.getCurrentWindow();
    if (window.isMaximized()) {
        store.dispatch(actions.setWindowIsMinimized());
        window.unmaximize();
    } else {
        store.dispatch(actions.setWindowIsMaximized());
        window.maximize();
    }
}

const closeWindow = () => remote.getCurrentWindow().close()

document.addEventListener('DOMContentLoaded', () => {
    const window = remote.getCurrentWindow();
    window.on('maximize', () => store.dispatch(actions.setWindowIsMaximized()));
    window.on('unmaximize', () => store.dispatch(actions.setWindowIsMinimized()));
    document.querySelector('.btn-minimize').addEventListener('click', () => minimizeWindow());
    document.querySelector('.btn-maximize').addEventListener('click', () => toggleWindowSize());
    document.querySelector('.btn-close').addEventListener('click', () => closeWindow());
});