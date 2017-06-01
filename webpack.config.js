module.exports = {

  entry: './src/index.js',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
      loaders: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
    },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    inline: false,
    historyApiFallback: true,
    contentBase: './'
  }
};
