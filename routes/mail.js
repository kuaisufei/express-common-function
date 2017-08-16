// 尝试发送email功能
const express = require('express');
const router = express.Router();
const mailService = require('../lib/mailService.js');

console.log('mailService',mailService);

console.log(mailService.sendmail);
/* GET home page. */
router.get('/send', function(req, res, next) {
	mailService.sendmail({to: '2859941342@qq.com'});
});

module.exports = router;
