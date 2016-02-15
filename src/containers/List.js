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
    console.log(inputValue);
  }

  clearInput(inputValue) {
    this.refs.inputfield.value = '';
  }

  renderTodos() {
    return this.props.items.map((item) => {
      return (
        <ListItem key={item.id} text={item.text} />
      );
    });
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
