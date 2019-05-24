import React, { Component } from 'react';

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['First', 'Second', 'Third', 'Fourth']);
    }, 1000);
  });
}

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    fetchData().then(items => this.setState({ items }));
  }
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}
