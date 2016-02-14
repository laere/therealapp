import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
}
