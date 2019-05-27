import React, { Component } from 'react';

import './App.css';

const Test = () => <div>Testing</div>;

function fetchBoxes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['First Box', 'Second Box', 'Third Box']);
    }, 1000);
  });
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
      boxes: [],
      lifeCycle: ''
    };
  }
  componentDidMount() {
    this.setState({ lifeCycle: 'componentDidMountut' });

    fetchBoxes().then(boxes => this.setState({ boxes }));
  }
  componentWillReceiveProps() {
    this.setState({ lifeCycle: 'componentWillReceiveProps' });
  }
  handleStrings(str) {
    if (str === 'Hello World') return true;
    else false;
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <h3 className={this.state.mainColor}>Everyone is Welcome</h3>
        <p className="lifeCycle">{this.state.lifeCycle}</p>
        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
        <button onClick={() => this.setState({ on: true })}>Click</button>
        <h2>{this.state.input}</h2>
        <input
          onChange={e => this.setState({ input: e.currentTarget.value })}
          type="text"
        />
      </div>
    );
  }
}
