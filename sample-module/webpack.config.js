module.exports = {
  entry: './main.js',
  output: {
    path: './build', 
    publicPath: 'http://test.com/', 
    filename: 'awdg_test.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.(png|jpg)$/, loader: 'jsx-loader'},
      { test: /\.js$/, loader: "jsx-loader" }
    ]
  }
};



