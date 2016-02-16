import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

  constructor(props) {
    super(props);
    //reference these functions
    this.handleOnClick = this.handleOnClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    //save input value
    let inputValue = this.refs.inputfield.value;

    if(inputValue === '') return;
    //pass input value to callback
    this.props.addTodo(inputValue);
    console.log('This is the inputValue: ' + inputValue);
  }

  clearInput() {
    //clears input on clear button
    this.refs.inputfield.value = '';
    console.log('This clears the input value');
  }

  renderTodos() {
    //if items is passed as props
    if(this.props.items) {
      //map each item to have item id and item text
      return this.props.items.map((item) => {
        return (
          //pass removeTodo func to child pass text to child
          <ListItem removeTodo={this.props.removeTodo} key={item.id} text={item.text} />
        );
      });
    }
  }

  render() {
    return (
      <div>
        {/*initiate callback on submit*/}
        <form onSubmit={this.handleOnClick}>
          <input type="text" ref="inputfield"/>
          <input type="submit" value="Add" className="btn btn-primary" />
          <input onClick={this.clearInput} type="submit" value="Clear" className="btn btn-primary" />
        </form>
        <ul>
          {/*render todos*/}
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}
