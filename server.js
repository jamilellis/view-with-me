/**
 * Created with JetBrains WebStorm.
 * User: jellis
 * Date: 2/14/14
 * Time: 3:43 PM
 * To change this template use File | Settings | File Templates.
 */
var connect = require('connect');
var io = require('socket.io');

var thePort = process.env.PORT || 3000;

var theServer = connect.createServer(
    connect.static(__dirname + '/dist')
).listen(thePort, function(){
        console.log('Connect server listening on port' + thePort);
    });



//var ioinstance = io.listen(app.listen(app.get('port')));
var ioinstance = io.listen(theServer);


ioinstance.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});