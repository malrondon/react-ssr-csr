import React, { Component } from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../../layouts/app';

import { dataLayerPush } from '../../modules';

class BrowserUpgradePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Navegador não suportado - Web App</title>
          <script>{dataLayerPush('pageCategory', 'Navegador não suportado')}</script>
        </Helmet>
        <AppLayout>
          <div>Upgrade</div>
        </AppLayout>
      </div>
    );
  }
}

export default BrowserUpgradePage;
