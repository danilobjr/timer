const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')

const resolvePath = value => path.resolve(__dirname, value);

module.exports = withTypescript(withSass({
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
}));
