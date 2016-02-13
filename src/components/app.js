import React, { Component } from 'react';
//import actions
import { UpdateText } from '../reducers/reducer_todos';
import { AddToDo } from '../reducers/reducer_todos';

// import { RemoveToDo } from '../reducers/reducer_todos';
//connect to store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import List component
import List from '../containers/List';

class App extends Component {

  constructor(props) {
    super(props);
  }

  handleOnChange(e) {
    this.props.UpdateText(e.target.value);
    console.log(e.target.value);
  }

  onClick(e) {
    this.props.AddTodo(this.getInputText());
  }

  getInputText() {
    return this.refs.inputfield.value;
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

 export default connect(mapStateToProps, mapDispatchToProps)(App);
