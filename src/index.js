import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ToDoState } from '../src/reducers/reducer_todos';

let store = createStore(ToDoState);

console.log(store);



  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.querySelector('.container'));
