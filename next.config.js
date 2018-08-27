const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

const resolvePath = value => path.resolve(__dirname, value);

module.exports = withTypescript(withSass(withOffline({
  // TODO: set this dynamically
  // exportPathMap: async () => ({
  //   '/': { page: '/countdowns' },
  // }),
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/timer' : '',
  // dontAutoRegisterSw: true,
  webpack(config, options) {
    return {
      ...config,
      resolve: {
        alias: {
          components: resolvePath('src/components'),
          icons: resolvePath('src/components/common/Icons'),
          models: resolvePath('src/models'),
          src: resolvePath('src'),
          styles: resolvePath('src/styles'),
          utils: resolvePath('src/utils'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
      },
    };
  },
})));
