import React, { Component } from 'react';
import ListItem from '../components/ListItem';

export default class List extends Component {

  render() {

    return (
      <div>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}
