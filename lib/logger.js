//用来记日志
var log4js = require('log4js');
log4js.loadAppender('file');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'logs/error.log',
            maxLogSize: 1024,
            backups:4,
            category: 'error' 
        }
    ]
});

var log4jser = log4js.getLogger('error');
log4jser.setLevel('ERROR');
 
// log4jser.trace('Entering cheese testing');
// log4jser.debug('Got cheese.');
// log4jser.info('Cheese is Gouda.');
// log4jser.warn('Cheese is quite smelly.');
// log4jser.error('Cheese is too ripe!');
// log4jser.fatal('Cheese was breeding ground for listeria.');

module.exports = log4jser;