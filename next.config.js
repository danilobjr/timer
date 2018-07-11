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
          config: resolvePath('src/config'),
          helpers: resolvePath('src/helpers'),
          styles: resolvePath('src/styles'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
      },
    };
  },
}));
