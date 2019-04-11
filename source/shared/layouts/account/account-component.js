import React, { Component } from 'react';

import Header from '../../components/header';

class AccountLayout extends Component {
  render() {
    return (
      <div>
        <Header menuType="account" />
        <div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default AccountLayout;
