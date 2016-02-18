import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


import { Provider } from 'react-redux';
import { TodoState } from '../src/reducers/reducer_todos';
//middleware provides a extension point between dispatching an action
//and the moment it reaches the reducer (hence: MIDDLEware)
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);
console.log(createStoreWithMiddleware);

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(TodoState)}>
      <App />
    </Provider>,
  document.querySelector('.container'));
