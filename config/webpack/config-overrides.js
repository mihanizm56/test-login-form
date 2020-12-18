const path = require('path');
const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  addWebpackPlugin,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// eslint-disable-next-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ReduxMagicConfig = require('@mihanizm56/webpack-magic-redux-modules/lib/loader-config');

const StyleLoaderConfig = ({ use: [, css] }) => {
  // eslint-disable-next-line
  css.options.modules = {
    localIdentName: '[local]-[hash:base64:3]',
  };
};

const addMagicActionsLoader = () => config => {
  const newRules = [...config.module.rules, ReduxMagicConfig()];

  return {
    ...config,
    module: { ...config.module, rules: newRules },
  };
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? override(
        adjustStyleLoaders(StyleLoaderConfig),
        addWebpackPlugin(
          new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.json$|\.html$|\.ico$/,
          }),
        ),
        addWebpackPlugin(
          new CompressionPlugin({
            filename: '[path].br[query]',
            algorithm: 'brotliCompress',
            test: /\.js$|\.css$|\.json$|\.html$|\.ico$/,
            compressionOptions: {
              level: 11,
            },
          }),
        ),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
        addWebpackPlugin(new ProgressBarPlugin()),
      )
    : override(
        adjustStyleLoaders(StyleLoaderConfig),
        addReactRefresh({ disableRefreshCheck: true }),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
      );
