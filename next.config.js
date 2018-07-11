const path = require('path');
const withTypescript = require('@zeit/next-typescript');

const resolvePath = value => path.resolve(__dirname, value);

module.exports = withTypescript({
  webpack(config, options) {
    return {
      ...config,
      resolve: {
        alias: {
          config: resolvePath('src/config'),
          components: resolvePath('src/components'),
          helpers: resolvePath('src/helpers'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
      },
    };
  },
});
