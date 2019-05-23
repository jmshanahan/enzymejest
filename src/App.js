import React from 'react';
import logo from './logo.svg';
import './App.css';
const Test = () => <div>Testing</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false, input: '' };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <Test />
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

export default App;
