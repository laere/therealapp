import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

  render() {

    return (
      <div>
        <form className="form-group">
          <input onChange={this.props.handleOnChange} ref="inputfield" type="text" />
          <button onClick={this.props.handleOnClick} className="btn btn-primary">Add</button>
        </form>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}
