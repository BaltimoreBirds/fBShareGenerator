/* jshint node: true */
"use strict";

var express = require('express');
// var path    = require('path');
var app 		= express();
app.set('port', process.env.PORT || 3000);

var routes = require('./project/controllers/index');

app.use('/', routes);
app.use( express.static( __dirname + '/project/public' ));

app.listen(process.env.PORT || 3000)

module.exports = app;