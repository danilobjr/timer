import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import { TitleBar } from 'components';
import { HomePage } from 'components';
import { store } from 'config';

// const history = syncHistoryWithStore(hashHistory, store);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <TitleBar /> */}
        <Router>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/timer/new" component={TimerNewPage} /> */}
        </Router>
      </Provider>
    );
  }
}
