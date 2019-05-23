import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}
