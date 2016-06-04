import React, { Component } from 'react';
import * as _ from 'lodash';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { TimerPage } from 'components/TimerPage';
import { Chronometer } from 'components/Chronometer';
import { appReducers } from './appReducers';

const store = createStore(appReducers);
const history = syncHistoryWithStore(hashHistory, store);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={TimerPage} />
                    <Route path="/timer" component={TimerPage} />
                    <Route path="/chronometer" component={Chronometer} />
                </Router>
            </Provider>
        );
    }
}