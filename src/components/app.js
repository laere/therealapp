import React, { Component } from 'react';
import { store, actions } from '../reducers/store';
import List from '../containers/List';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  updateText(e) {
    store.dispatch(UpdateText(e.target.value));
    console.log(e.target.value);
  }
  addListItem(e) {
    store.dispatch(AddToDo(text))
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <List
          updateText={this.updateText.bind(this)}
          addListItem={this.addListItem.bind(this)}
          />
      </div>
    )
  }
}
