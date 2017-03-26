var express = require('express');
var router = express.Router();
var log4jser = require('../lib/logger.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	log4jser.error('test logger!');
	log4jser.fatal('test123');
	res.send('logger success');
});

module.exports = router;
