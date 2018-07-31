import Router from 'next/router';
import { UrlLike } from 'next/link';
import { createAction, Action, createReducer } from 'redux-act';
import { call, takeLatest, put, race, take } from 'redux-saga/effects';
import { createActionDescription } from 'src/redux/utils';
import { v1 as uuid } from 'uuid';
import { delay } from 'redux-saga';
import { ToastMessage } from 'src/redux/models';
import { Toast } from 'models';

// ACTIONS

const actionDescription = createActionDescription('global');

export const actions = {
  navigateToRoute: createAction<string | UrlLike>(actionDescription('NAVIGATE_TO_ROUTE')),
  showMessage: createAction<ToastMessage>(actionDescription('SHOW_MESSAGE')),

  // INTERNAL
  addToast: createAction<Toast>(actionDescription('SHOW_TOAST')),
  hideToast: createAction(actionDescription('HIDE_TOAST')),
  removeToast: createAction(actionDescription('REMOVE_TOAST')),
  showToast: createAction(actionDescription('SHOW_TOAST')),
};

// STATE

const initialState = {
  toast: null as Toast,
};

export type GlobalState = typeof initialState;

// REDUCER

const toast = createReducer({}, initialState.toast)
  .on(actions.addToast, (_, toast) => toast)
  .on(actions.hideToast, (toast) => ({ ...toast, show: false }))
  .on(actions.removeToast, () => null)
  .on(actions.showToast, (toast) => ({ ...toast, show: true }));

export default {
  toast,
};

// SAGAS

function* navigateToRoute(action: Action<string | UrlLike>) {
  yield call(Router.push, action.payload);
}

function* toastFlow(action: Action<ToastMessage>) {
  const toast = {
    id: uuid(),
    message: action.payload,
    show: false,
  };

  yield put(actions.addToast(toast));
  yield call(delay, 10);
  yield put(actions.showToast());

  const { timeout } = yield race({
    timeout: call(delay, 5000),
    remove: take(actions.hideToast),
  });

  if (!!timeout) {
    yield put(actions.hideToast());
  }

  yield call(delay, 200);
  yield put(actions.removeToast());
}

export const globalSagas = [
  takeLatest(actions.navigateToRoute, navigateToRoute),
  takeLatest(actions.showMessage, toastFlow),
];
