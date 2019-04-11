import React, { Component } from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../../layouts/app';

import { dataLayerPush } from '../../modules';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Página não encontrada - Web App</title>
          <script>{dataLayerPush('pageCategory', 'Não encontrada')}</script>
        </Helmet>
        <AppLayout>
          <div>404</div>
        </AppLayout>
      </div>
    );
  }
}

export default NotFoundPage;
