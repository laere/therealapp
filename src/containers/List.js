import React, { Component } from 'react';



export default class List extends Component {

  render() {

    return (
      <div>
        <form>
          <input ref="inputfield" type="text" onChange={this.props.handleOnChange}/>
          <button onClick={this.props.onClick}>Add</button>
        </form>
        <ul></ul>
      </div>
    );
  }
}
