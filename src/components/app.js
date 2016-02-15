import React, { Component } from 'react';
import { AddTodo } from '../reducers/reducer_todos';
import { RemoveTodo } from '../reducers/reducer_todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../containers/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(text) {
    this.props.AddTodo(text);
    console.log('This is the text passed to the AddTodo AC: ' + text);
  }

  removeTodo(id, e) {
    this.props.RemoveTodo(id);
    console.log('This is the ID of the removed todo: ' + id);
    console.log(e.type, e.which, e.timeStamp);
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
          <List
            items={this.props.items}
            addTodo={this.addTodo}
            removeTodo={this.removeTodo}
             />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      AddTodo: AddTodo,
      RemoveTodo: RemoveTodo
    }, dispatch);
}

let mapStateToProps = (state) => {
  return {
    items: state.items,
    text: state.text
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(App);
