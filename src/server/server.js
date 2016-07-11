var GameClient = require('./GameClient');
var serversInfo = require('./utils/serversInfo');

var gameClient = new GameClient();

serversInfo();

setInterval(serversInfo, 24 * 60 * 60 * 1000);

gameClient.start();
