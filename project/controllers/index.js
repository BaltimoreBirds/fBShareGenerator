/* jshint node: true */

"use strict";

var express = require('express');
var path = require('path');
var router = express.Router();

router.route('/')
	.get(function(req,res){
		res.sendFile( path.resolve('project/views/index.html') , function(err){
			if(err){
				console.log(err);
				res.status(err.status).end();
			}
		});
	});

module.exports = router;