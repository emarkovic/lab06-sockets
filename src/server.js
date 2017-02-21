"use strict";
var net = require("net"); //import socket module
;
// create socket server
var server = net.createServer();
// when the server is connected
server.on('connection', function (socket) {
    // when data is sent to the socket
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
    socket.on('close', function () {
        // handle client disconnecting
        socket.write('Goodbye');
        socket.end();
    });
});
//when the server starts listening...
server.on('listening', function () {
    //output to the console the port number on which we are listening
    var addr = server.address();
    console.log('server listening on port %d', addr.port);
});
//start the server
server.listen(3000);
