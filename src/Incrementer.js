import React, { Component } from 'react';

export default class Incrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));
  increment = this.makeIncrementer(2);
  decrement = this.makeIncrementer(-1);
  render() {
    const { count } = this.state;
    const { increment, decrement } = this;
    return (
      <div>
        <p>Count: {count}</p>
        <button className="increment" onClick={increment}>
          Increment Count
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement Count
        </button>
      </div>
    );
  }
}
