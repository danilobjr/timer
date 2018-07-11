import { createStore } from 'redux';
import { appReducers } from 'components/appReducers';
import { initialState } from './initialState';

export const store = createStore(appReducers, initialState);