const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;
const ISDEV = NODE_ENV === 'development';

const commonConfig = target => {
  const isClient = target === 'client';
  const devtool = ISDEV ? 'cheap-module-source-map' : 'source-map';
  const cssScopedName = '[name]_[local]_[hash:base64:5]';
  const publicPath = '/';

  return {
    devtool,
    publicPath,
    mode: ISDEV ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: `[name].min.js`,
      chunkFilename: `chunk.min.js`,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    preRule() {
      return [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'eslint-loader',
          },
        },
      ];
    },
    babelRule() {
      return [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
      ];
    },
    cssModulesRule() {
      const modules = true;
      const localIdentName = cssScopedName;
      const sourceMap = !!ISDEV;

      return [
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, '../../source')],
          use: isClient
            ? [
                'css-hot-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules,
                    localIdentName,
                    sourceMap,
                    importLoaders: 2,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')],
                  },
                },
                {
                  loader: 'sass-loader',
                  options: { sourceMap },
                },
              ]
            : [
                {
                  loader: 'css-loader/locals',
                  options: {
                    modules,
                    localIdentName,
                  },
                },
                'sass-loader',
              ],
        },
      ];
    },
    cssRule() {
      return [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, '../../node_modules/<package>/dist/')],
          use: isClient
            ? [
                'css-hot-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                },
              ]
            : [
                {
                  loader: 'css-loader/locals',
                },
              ],
        },
      ];
    },
    fileRule() {
      const loaders = options => [
        {
          loader: 'url-loader',
          options: Object.assign(
            {
              publicPath,
              fallback: 'file-loader',
              limit: 10240,
              emitFile: !!isClient,
            },
            options
          ),
        },
      ];

      return [
        {
          test: /\.(svg|png|jpe?g|gif|ico)(\?.*)?$/i,
          use: loaders({ name: '[name].[ext]' }),
        },
        {
          test: /\.(eot|ttf|woff2?)(\?.*)?$/i,
          use: loaders({ name: '[name].[ext]' }),
        },
      ];
    },
  };
};

module.exports = commonConfig;
