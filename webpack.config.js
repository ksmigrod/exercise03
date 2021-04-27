var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      path.join(__dirname, 'client', 'app/polyfill.js'),
      path.join(__dirname, 'client', 'app/app.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules/],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /react|angluar|lodash|angularjs/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true,
      chunks: ['vendor', 'app']
    })
            //,

            // Automatically move all modules defined outside of application directory to vendor bundle.
            // If you are using more complicated project structure, consider to specify common chunks manually.
//    new webpack.optimize.CommonsChunkPlugin({
//      name: "vendor",
//      minChunks: module => /node_modules/.test(module.resource)
//    })
  ]
};
