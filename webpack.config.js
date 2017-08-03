module.exports = {
   entry: {
      index: './src/index.js'
   },
   output: {
      filename: './build/script/[name].js'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015']
            }
         },
         {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   }
};