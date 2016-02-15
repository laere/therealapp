import React, { Component } from 'react';
import { AddTodo } from '../reducers/reducer_todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../containers/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    this.props.AddTodo(text);
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
          <List
            items={this.props.items}
            addTodo={this.addTodo}
             />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      AddTodo: AddTodo
    }, dispatch);
}

let mapStateToProps = (state) => {
  return {
    items: state.items,
    text: state.text
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(App);
