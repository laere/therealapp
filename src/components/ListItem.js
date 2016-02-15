import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
    <div>
      <li>
        {this.props.text}
      </li>
      <input onClick={this.props.removeTodo} type="submit" value="Remove" className="btn btn-secondary" />
    </div>
    );
  }
}
