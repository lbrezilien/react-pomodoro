var path = require('path')


module.exports = {

  entry: {
    main: ['./src/dev/index.jsx']
  },
  output: {
    filename: './src/public/[name].js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
  }
}
