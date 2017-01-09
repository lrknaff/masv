var express = require('express');
var path = require('path');

var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/projects/:name', express.static(path.join(__dirname, 'projects')));
// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});

//const params = window.location.pathname.split("/")[2]
//const project = obj[params]
