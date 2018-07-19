const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withManifest = require('next-manifest');
const withWorkbox = require('next-workbox');

const resolvePath = value => path.resolve(__dirname, value);

module.exports = withWorkbox(withManifest(withTypescript(withSass({
  webpack(config, options) {
    return {
      ...config,
      resolve: {
        alias: {
          components: resolvePath('src/components'),
          models: resolvePath('src/models'),
          src: resolvePath('src'),
          styles: resolvePath('src/styles'),
          utils: resolvePath('src/utils'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
      },
    };
  },
  manifest: {
    name: 'Timer',
    'short_name': 'Timer',
    'start_url': '/countdowns',
    'background_color': '#297acb',
    'theme_color': '#297acb',
    icons: {
      src: './static/timer-icon.png',
    },
  },
}))));
