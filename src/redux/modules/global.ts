import Router from 'next/router';
import { UrlLike } from 'next/link';
import { createAction, Action, createReducer } from 'redux-act';
import { call, takeLatest, put, takeEvery, race, take } from 'redux-saga/effects';
import { createActionDescription } from 'src/redux/utils';
import { v1 as uuid } from 'uuid';
import { delay } from 'redux-saga';
import { updateWhere, removeWhere } from 'src/utils';

// ACTIONS

const actionDescription = createActionDescription('global');

export const actions = {
  navigateToRoute: createAction<string | UrlLike>(actionDescription('NAVIGATE_TO_ROUTE')),
  showMessage: createAction<ToastMessage>(actionDescription('SHOW_MESSAGE')),

  // INTERNAL
  addToast: createAction<Toast>(actionDescription('SHOW_TOAST')),
  hideToast: createAction<ToastId>(actionDescription('HIDE_TOAST')),
  removeToast: createAction<ToastId>(actionDescription('REMOVE_TOAST')),
  showToast: createAction<ToastId>(actionDescription('SHOW_TOAST')),
};

// STATE

type ToastMessage = string;
type ToastId = string;

type Toast = {
  id: ToastId,
  message: ToastMessage;
  show: boolean;
};

const initialState = {
  toasts: [] as Toast[],
};

export type GlobalState = typeof initialState;

// REDUCER

// TODO: create an update function to array.ts. Remove updateCountdown as well from countdowns.ts (redux module)

const toasts = createReducer({}, initialState.toasts)
  .on(actions.addToast, (toasts, toast) => [...toasts, toast])
  .on(actions.hideToast, (toasts, id) => updateWhere(toasts)(toast => toast.id === id)({ show: false }))
  .on(actions.removeToast, (toasts, id) => removeWhere<Toast>(toast => toast.id === id)(toasts))
  .on(actions.showToast, (toasts, id) => updateWhere(toasts)(toast => toast.id === id)({ show: true }));

export default {
  toasts,
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
  yield put(actions.showToast(toast.id));
  yield race({
    delay: call(delay, 5000),
    remove: take(actions.hideToast),
  });
  yield put(actions.hideToast(toast.id));
  yield call(delay, 200);
  yield put(actions.removeToast(toast.id));
}

export function* globalSagas() {
  yield takeLatest(actions.navigateToRoute, navigateToRoute);
  yield takeEvery(actions.showMessage, toastFlow);
}
