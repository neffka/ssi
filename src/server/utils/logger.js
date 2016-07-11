var log4js = require('log4js'),
	path = require('path');

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(path.resolve(__dirname, '../../../logs/users.log')), 'users');
log4js.addAppender(log4js.appenders.file(path.resolve(__dirname, '../../../logs/server.log')), 'server');

var getLogger = logger => {
	return log4js.getLogger(logger);
};

module.exports = {
	getLogger: getLogger
};
