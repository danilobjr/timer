import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Timer</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width" initial-scale="1" />
          <meta name="theme-color" content="#297acb" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="manifest" href="/static/manifest/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
