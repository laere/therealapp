import React, { Component } from 'react';

import { store, actions } from '../reducers/store';

export default class List extends Component {

  render() {

    return (
      <div>
        <form>
          <input type="text" />
          <button >Add</button>
        </form>
        <ul>
        </ul>
      </div>
    );
  }
}
