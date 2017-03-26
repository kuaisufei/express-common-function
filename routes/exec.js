//一个中间层抓取模块
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec; 

/* GET home page. */
router.get('/', function(req, res, next) {
	var cmdStr = 'curl http://localhost:524/sql/user/public/111';
	exec(cmdStr, function(err,stdout,stderr){
	    if(err) {
	        console.log('error:'+stderr);
	    } else {
	        var data = JSON.parse(stdout);
	        res.send(data);
	    }
	});
});

module.exports = router;
