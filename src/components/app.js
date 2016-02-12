import React from 'react';
import { Component } from 'react';

import List from '../containers/List';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <List />
      </div>

    );
  }
}
