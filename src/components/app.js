import React, { Component } from 'react';
//import actions
import { UpdateText } from '../reducers/reducer_todos';
import { AddToDo } from '../reducers/reducer_todos';
// import { RemoveToDo } from '../reducers/reducer_todos';

//connect to store
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import List from '../containers/List';

class App extends Component {

  constructor(props) {
    super(props);
  }

  updateText(e) {
    dispatch(UpdateText(e.target.value));
    console.log(value);
  }

  addTodo(e) {
    dispatch(AddTodo(text));
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <List
          updateText={this.updateText.bind(this)}
          addTodo={this.addTodo.bind(this)}
          />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  //takes single action or object as first arg
  //takes dispatch as second arg
  return bindActionCreators(
    {
      AddToDo: AddToDo,
      UpdateText: UpdateText
    }, dispatch);
}

let mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

let MyConnectedClass = connect(mapStateToProps, mapDispatchToProps)(App);
