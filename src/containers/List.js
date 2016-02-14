import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

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
        <form>
          <input onChange={this.props.handleOnChange} ref="inputfield"/>
          <button onClick={this.props.handleOnClick} >Add</button>
        </form>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}
