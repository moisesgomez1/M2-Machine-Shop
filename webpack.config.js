const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'], ['@babel/preset-react']
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader'
          // Compiles Sass to CSS
          // 'sass-loader'
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    template: 'public/index.html',
    filename: 'index.html'

  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build/'
      /* was this the issue that charlie was having in the live lecture, clearing the cache would fix this behavior.
      Commenting out these fields would not affect anything */
    },
    proxy: {
      '/api': 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '' // Remove the '/api' prefix when forwarding the request
      }
    },
    compress: true,
    historyApiFallback: true
  }
};
