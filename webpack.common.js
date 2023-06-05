const path = require('path');

const DotenvPlugin = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts'),
    serviceWorker: path.resolve('src/serviceWorker/serviceWorker.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new DotenvPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
    ...getHtmlPlugins([
      'popup',
      'options'
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        const preventChunkingList = ['contentScript, background'];
        return !preventChunkingList.includes(chunk.name);
      }
    },
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'Chrome Extension',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}