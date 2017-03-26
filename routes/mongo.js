var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('mongo router');
});

router.get('/insert',function(req,res){	
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');

	var Cat = mongoose.model('Cat', { name: String });

	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
		if (err) {
		    console.log(err);
		} else {
		    res.send({msg:'success'});
		}
	});
});

module.exports = router;
