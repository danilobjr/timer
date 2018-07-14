import Router from 'next/router';
import { UrlLike } from 'next/link';
import { createAction, Action } from 'redux-act';
import { call, takeLatest } from 'redux-saga/effects';
import { createActionDescription } from 'src/redux/utils';

// ACTIONS

const actionDescription = createActionDescription('global');

export const actions = {
  navigateToRoute: createAction<string | UrlLike>(actionDescription('NAVIGATE_TO_ROUTE')),
};

// SAGAS

function* navigateToRoute(action: Action<string | UrlLike>) {
  yield call(Router.push, action.payload);
}

export function* globalSagas() {
  yield takeLatest(actions.navigateToRoute, navigateToRoute);
}
