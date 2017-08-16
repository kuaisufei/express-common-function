// 发送email功能模块
// nodemailer 文档 https://nodemailer.com/about/
const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport({
	host : 'smtp.qq.com',
  	service: "QQ",
	auth: {
		// 你的QQ邮箱和授权码，授权码需要到QQ邮箱中开启IMAP/SMTP获取，在QQ中会替代邮箱密码使用
    	user: 'xxx@qq.com',
    	pass: 'xxx'
	}
});

/*
  to 发送到的邮箱
  paramsObj 需要替换增加的属性的对象
*/
function sendmail (paramsObj) {
    /**
     * @param {String} recipient 收件人
     * @param {String} subject 发送的主题
     * @param {String} html 发送的html内容
     */
    const option = Object.assign({
        from           : 'xxx@qq.com',
        to             : '2859941342@qq.com',
        subject        : '一封Node Mailer邮件',
        text           : '一封Node Mailer邮件',
        html           : '<h1>这是一封来自神奇的QQ的NodeMailer的邮件！</h1><p>123123123</p>',
        // attachments    : 
        // [
        //     {
        //         filename: 'img1.png',            // 改成你的附件名
        //         path: 'public/images/img1.png',  // 改成你的附件路径
        //         cid : '00000001'                 // cid可被邮件使用
        //     },
        //     {
        //         filename: 'img2.png',            // 改成你的附件名
        //         path: 'public/images/img2.png',  // 改成你的附件路径
        //         cid : '00000002'                 // cid可被邮件使用
        //     },
        // ]
    }, paramsObj);
    mailTransport.sendMail(option, function(err, msg){
        if(err){
            console.log(err);
            res.render('index', { title: err });
        }
        else {
            res.send('success');
        }
    });
}

module.exports = {
    sendmail
};
