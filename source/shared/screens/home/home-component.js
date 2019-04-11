import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { dataLayerPush } from '../../modules';

import AppLayout from '../../layouts/app';

class HomePage extends Component {
  renderHelmet() {
    const title = 'Title';
    const description = 'description';
    const image = '.jpg';
    const url = 'https://www.webapp.com.br/';

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="image_src" href={image} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={image} />
        <meta itemprop="url" content={url} />

        <script>{dataLayerPush('pageCategory', 'Home')}</script>
        <script type="application/ld+json">{`
            {
              "@context": "http://schema.org/",
              "@type": "WebSite",
              "name": "WebApp",
              "url": "https://www.webapp.com.br/"
            }
          `}</script>
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.renderHelmet()}
        <AppLayout>
          <div>Home</div>
        </AppLayout>
      </div>
    );
  }
}

export default HomePage;
