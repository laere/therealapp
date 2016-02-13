import React, { Component } from 'react';

export default class List extends Component {

  render() {

    return (
      <div>
        <form>
          <input onChange={this.props.handleOnChange} ref="inputfield" type="text" />
        <button onClick={this.props.handleOnClick}>Add</button>
        </form>
        <ul>

        </ul>
      </div>
    );
  }
}
