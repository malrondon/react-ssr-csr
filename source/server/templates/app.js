import { gtmHead, gtmBody } from './vendors/gtm';
import newrelic from './vendors/newrelic';

const applicationVersion = process.env.npm_package_version;

// Não pode haver nenhum caractere antes do <!DOCTYPE html>, nem mesmo espaço em branco.
// Caso contrário a renderização no browser entra em QuirksMode e ficado bugado.

export default ({ state, html, helmet }) => {
  if (!helmet) {
    helmet = {
      title: '',
      meta: '',
      script: '',
      bodyAttributes: '',
    };
  }
  return `<!DOCTYPE html>
  <html>
    <head>
        ${helmet.title.toString()}
        <meta content="IE=edge" http-equiv=X-UA-Compatible>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <meta name="version" content="${applicationVersion}" />
        ${helmet.meta.toString()}
        ${newrelic()}
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://webapp.com.br",
            "logo": "https://webapp.com.br/icon-512x512.png"
          }
        </script>
        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
        <link href="/main.min.css" rel="stylesheet">
        ${helmet.script.toString()}
        ${gtmHead()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        ${gtmBody()}
        <div id="main">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
        </script>
        <script type="text/javascript" src="/main.min.js"></script>
    </body>
  </html>
`;
};
