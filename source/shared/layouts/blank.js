import React, { Component } from 'react';

class BlankLayout extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default BlankLayout;
