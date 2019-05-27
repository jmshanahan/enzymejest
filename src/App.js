import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Incrementer from './Incrementer';
import NotFound from './Notfound';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/incrementer" component={Incrementer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
