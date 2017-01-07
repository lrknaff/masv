const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var $ = require('jquery');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: "mocha!./test/index.js"
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].bundle.js',
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
      },
    },
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.scss$/, loader: 'style!css!sass' },
    { test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    },
  ],
},
devtool: 'source-map',
resolve: {
  extensions: ['', '.js', '.json', '.scss', '.css'],
  root: path.resolve('./node_modules'),
  alias: {
    "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
    "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
    "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
    "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
    "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
    "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
  }
},
paths: {
  'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
  'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
   'TimelineLite': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
   'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
   'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
   'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
   'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    },
plugins: [
      new ExtractTextPlugin("[name].css"),
  ]
};
