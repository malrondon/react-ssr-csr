import React, { Component } from 'react';

import Header from '../../components/header';

class CheckoutLayout extends Component {
  render() {
    return (
      <div>
        <Header type="checkout" />
        <div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default CheckoutLayout;
