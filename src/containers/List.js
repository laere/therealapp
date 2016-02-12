import React, { Component } from 'react';

export default class List extends Component {
  //New constructor that replaces componentWillMount
  //Setting initial state of input value;
  constructor(props) {
    super(props);

    this.state = { value: '' };

    //replace this.onInputChange with a bound instance of it.
    //bind returns a bound function
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
            />
          <button onSubmit={this.onSubmit}>Add</button>
        </form>
    );
  }
}

function mapStateToProps(state) {

  return {
    item: state.item
  }
}
