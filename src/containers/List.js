import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {

  render() {

    return (
      <div>
        <form>
          <input type="text" onChange={this.props.updateText} />
          <button onClick={this.props.addListItem}>Add</button>
        </form>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}
