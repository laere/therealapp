import React, { Component } from 'react';
import { store, actions } from '../reducers/store';
import List from '../containers/List';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <List />
      </div>
    )
  }
}
