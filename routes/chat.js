var express = require('express');
var router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('chat.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
	    console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
	});
});

module.exports = router;