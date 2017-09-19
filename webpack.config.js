module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    // css: "./src/main.css",
    // html: "./src/index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        loader: 'babel-loader',
        query: {
          presets: [ "babel-preset-env" ].map(require.resolve)
        }
      },
      // {
      //   test: /\.(sass|scss)$/, //Check for sass or scss file names
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ]
      // },
      // {
      //   test: /\.json$/,
      //   loader: "json-loader"  //JSON loader
      // }
    ]
  },
  //To run development server
  devServer: {
    contentBase: __dirname + '/src',
  },
  // module: {
    // preLoaders: [
    //     //Eslint loader
    //   { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    // ],
  //   rules: [
  //     { test: /\.html$/,
  //       use: [
  //         {
  //           loader: "file?name=[name]-loader.[ext]"
  //         }
  //       ]
  //     }
  //     { test: /\.css$/,
  //       use: [
  //         {
  //           loader: "file?name=[name]-loader.[ext]"
  //         }
  //       ]
  //     },
  //     { test: /\.jsx?$/,
  //       exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
  //   ],
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
};
