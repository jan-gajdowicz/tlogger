import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { modifyTasks, requestTasks } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import './index.css';

const logger = createLogger()
const rootReducer = combineReducers({ modifyTasks, requestTasks })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);  