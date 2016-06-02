import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Timer } from 'components/Timer';
import { Chronometer } from 'components/Chronometer';

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(hashHistory, store);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Timer} />
                    <Route path="/timer" component={Timer} />
                    <Route path="/chronometer" component={Chronometer} />
                </Router>
            </Provider>
        );
    }
}