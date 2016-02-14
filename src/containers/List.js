import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

  renderTodos() {
    return this.props.items.map((item) => {
      return (
        <Listitem key={item.id}>
          {item.text}
        </Listitem>
      );
    });
  }

  render() {

    return (
      <div>
        <ul>
          {this.renderTodos()};
        </ul>
      </div>
    );
  }
}
