import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';
import ServiceWorker from 'next-workbox/service-worker';

// TODO: set head/theme color

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>Timer</title>
          <Manifest themeColor="#297acb" />
          <ServiceWorker
            src="/static/workbox/sw.js"
            scope="../../"
            unregister={process.env.NODE_ENV !== 'production'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
