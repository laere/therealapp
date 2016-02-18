import React, { Component } from 'react';
import List from '../containers/List';
//action creators
import { AddTodo, RemoveTodo, FetchTodos } from '../reducers/reducer_todos';
//reference to store
import { connect } from 'react-redux';
//allows use of action creators directly (without dispatch wrapper)
import { bindActionCreators } from 'redux';


class App extends Component {

  constructor(props) {
    super(props);
    //reference these functions
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentWillMount() {
    // fetch todos
    //then dispatch them to action creator
    this.props.FetchTodos();
  }

  addTodo(text) {
    //add to do
    this.props.AddTodo(text);
    console.log('This is the text passed to the AddTodo AC: ' + text);
  }

  removeTodo(id, e) {
    //remove todo
    this.props.RemoveTodo(id);
    console.log('This is the ID of the removed todo: ' + id);
    console.log(e.type, e.which, e.timeStamp);
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {/*pass down action creators
          pass down items state*/}
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
        RemoveTodo: RemoveTodo,
        FetchTodos: FetchTodos
      }, dispatch);
    }

    let mapStateToProps = (state) => {
      return {
        items: state.items,
        text: state.text
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);
