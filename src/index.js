import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Route, Router, hashHistory} from 'react-router';

import Eyes from './eyes/component';
import Quotes from './quotes/component';
import reducer from './rootReducer';
import saga from './rootSaga';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Eyes} />
      <Route path="/quotes" component={Quotes} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
