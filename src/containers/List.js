import React, { Component } from 'react';
import ListItem from '../src/components/ListItem';


export default class List extends Component {

  render() {

    return (
      <div>
        <form>
          <input type="text" onChange={this.props.updateText}/>
          <button onClick={this.props.addToDo}>Add</button>
        </form>
        <ul>

        </ul>
      </div>
    );
  }
}
