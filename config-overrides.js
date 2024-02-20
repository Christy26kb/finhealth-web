/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// Ignoring below lint error since package is available in yarn.lock
// eslint-disable-next-line import/no-extraneous-dependencies
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config) {
  const loaders = config.module.rules[1].oneOf;

  loaders.splice(loaders.length - 1, 0, {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: {
            plugins: [{ removeViewBox: false }]
          },
          titleProp: true,
          ref: true
        }
      },
      {
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash].[ext]'
        }
      }
    ]
    // issuer: {
    //   and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
    // }
  });

  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@slices': path.resolve(__dirname, 'src/slices')
    },
    // Added below change to allow importing files from outside src folder
    // Ref: https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
    plugins: config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin)
    )
  };

  return config;
};
