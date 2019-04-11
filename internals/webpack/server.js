const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const DotenvFlow = require('dotenv-flow-webpack');

const configVars = require('./config');
const webpackCommon = require('./common');

const commonConfig = webpackCommon('server');

const { NODE_ENV } = process.env;
const ISDEV = NODE_ENV === 'development';

const config = {
  name: 'server',
  target: 'node',
  mode: commonConfig.mode,
  devtool: commonConfig.devtool,
  resolve: commonConfig.resolve,
  externals: [nodeExternals()],
  entry: {
    server: ['regenerator-runtime/runtime', path.resolve(__dirname, `../../source/server`, 'index')],
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    libraryTarget: 'commonjs2',
    filename: 'server.min.js',
  },
  optimization: {
    // Prevent Duplication
    splitChunks: {
      chunks: 'all',
    },
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  module: {
    rules: [
      ...commonConfig.preRule(),
      ...commonConfig.babelRule(),
      ...commonConfig.fileRule(),
      ...commonConfig.cssModulesRule(),
      ...commonConfig.cssRule(),
    ],
  },
  plugins: [
    new DotenvFlow({
      environment: ISDEV ? 'development' : 'production',
      systemvars: true,
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.EnvironmentPlugin({
      ...configVars.env,
    }),
  ],
};

module.exports = config;
