var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var sqlconfig = require('../config/sqlconfig');
var pool = mysql.createPool(sqlconfig.mysql );

//响应一个JSON数据
var responseJSON = function (res, ret) {
	if(typeof ret === 'undefined') { 
	    res.json({code:'-2',msg:'JSON失败'}); 
	} else { 
	  	res.json(ret); 
	}
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('user router');
});

router.get('/user/:id',function(req,res){
	pool.getConnection(function(err, connection) { 
		var sqlstring = 'select * from member where code = '+req.params.id;
		connection.query( sqlstring , function(err, result) {
	        if(result){
	        	sendmsg = {
		        	status:'1',
		        	msg:result
		        }        
			    responseJSON(res, sendmsg); 
	        }else{
	        	res.send({'status':'0','msg':'code不存在/服务器错误'})
	        }
		    connection.release(); 
		});
	});
});

router.get('/user/public/:id',function(req,res){
	var redis = require('redis'),
	client = redis.createClient(sqlconfig.redis.port,sqlconfig.redis.host,{});
	client.on('connect',function(){
		client.hget("user_public_key_stored","user_code_"+req.params.id, function(err,result){
		    if(err){
		      	console.log('Error:'+ err);
		      	return;
		    }			
		    responseJSON(res, result); 
			client.quit();
		});
	});
});

module.exports = router;
