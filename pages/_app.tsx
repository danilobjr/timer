import 'styles';

import * as React from 'react';
import App from 'next/app';
import { AppComponentContext, Container } from 'next/app';
import { Provider } from 'react-redux';
// TODO: fix alias for config folder
import { store } from 'src/redux';
import { Page, Navigation } from 'components';

// TODO: change folder name from src/helpers to src/utils

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppComponentContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Page>
            <Navigation />
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}
