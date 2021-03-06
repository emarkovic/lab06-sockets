"use strict";
var net = require("net");
;
var server = net.createServer();
server.on('connection', function (socket) {
    socket.on('data', function (data) {
        var echo = data.toString().toUpperCase();
        if (echo === 'EXIT') {
            socket.write('Goodbye');
            socket.end();
        }
        else {
            socket.write('You said: ' + data.toString());
        }
    });
});
server.on('listening', function () {
    var addr = server.address();
    console.log('server listening on port %d', addr.port);
});
server.listen(3000);
