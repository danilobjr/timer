import Router from 'next/router';
import { Action, createAction } from 'redux-act';
import { UrlLike } from 'next/link';
import { call, takeLatest } from 'redux-saga/effects';
import { createActionDescription } from 'src/redux/utils';

// ACTIONS

const actionDescription = createActionDescription('navigation');

export const actions = {
  navigateToRoute: createAction<string | UrlLike>(actionDescription('NAVIGATE_TO_ROUTE')),
};

// SAGAS

function* navigateToRoute(action: Action<string | UrlLike>) {
  yield call(Router.push, action.payload);
}

export const navigationSagas = [
  takeLatest(actions.navigateToRoute, navigateToRoute),
];
