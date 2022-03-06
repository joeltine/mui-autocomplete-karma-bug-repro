var path = require('path');

module.exports = function(config) {
  config.set({
    // use the PhantomJS browser
    browsers: ['Chrome'],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src/',

    // use Jasmine
    frameworks: ['jasmine', 'webpack'],

    // files that Karma will server to the browser
    files: [
      // entry file for Webpack
      '**/*test.js',
    ],

    // before serving test/testHelper.js to the browser
    preprocessors: {
      '**/*test.js': ['webpack'],
    },

    // webpack configuration used by karma-webpack
    webpack: {
      // generate sourcemaps
      devtool: 'inline-source-map',

      module: {
        // use same loaders as Create React App
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
                cacheDirectory: true
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
      }
    }
  })
}
