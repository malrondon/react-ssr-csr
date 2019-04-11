import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AccountLayout from '../../../layouts/account';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Perfil - Web App</title>
        </Helmet>
        <AccountLayout>Perfil</AccountLayout>
      </div>
    );
  }
}

export default ProfilePage;
