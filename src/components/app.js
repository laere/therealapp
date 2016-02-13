import React, { Component } from 'react';
//import actions
import { UpdateText } from '../reducers/reducer_todos';
import { AddToDo } from '../reducers/reducer_todos';

//connect to store
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import List from '../containers/List';

class App extends Component {
  constructor(props) {
    super(props);
  }
  updateText(e) {
    this.props.UpdateText(e.target.value);
    console.log(value);
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <List
          updateText={this.updateText.bind(this)}
          />
      </div>
    )
  }
}


let mapDispatchToProps = (dispatch) => {
  //takes single action or object as first arg
  //takes dispatch as second arg
  return bindActionCreators({AddToDo: AddToDo, UpdateText: UpdateText}, dispatch);
}

let MyConnectedClass = connect(null, mapDispatchToProps)(App);
