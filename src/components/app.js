import React, { Component } from 'react';
import List from '../containers/List';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  updateText(e) {
    store.dispatch(UpdateText(e.target.value));
    console.log(store);
  }
  addListItem(e) {
    store.dispatch(AddToDo(text))
    console.log('test');
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

export default App;
