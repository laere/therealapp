import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    let inputValue = this.refs.inputfield.value;

    if(inputValue === '') return;

    this.props.addTodo(inputValue);
    console.log('This is the inputValue: ' + inputValue);
  }

  clearInput() {
    this.refs.inputfield.value = '';
    console.log('This clears the input value');
  }

  renderTodos() {
    if(this.props.items) {
      return this.props.items.map((item) => {
        return (
          <ListItem removeTodo={this.props.removeTodo} key={item.id} text={item.text} />
        );
      });
    } else { return; }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnClick}>
          <input type="text" ref="inputfield"/>
          <input type="submit" value="Add" className="btn btn-primary" />
          <input onClick={this.clearInput} type="submit" value="Clear" className="btn btn-primary" />
        </form>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}
