import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { tasks, modal } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localStorage';

import App from './App';
import './index.css';

const logger = createLogger()
const rootReducer = combineReducers({ tasks, modal })
const persistedState = loadState()
const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware, logger))

store.subscribe(() => {
    saveState({
        tasks: store.getState().tasks
    })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);  