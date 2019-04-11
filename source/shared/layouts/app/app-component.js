import React, { Component } from 'react';

import Header from '../../components/header';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header active={this.props.header.get('active')} />
        <div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default AppLayout;
