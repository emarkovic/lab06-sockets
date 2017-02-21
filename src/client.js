'use strict';
//make the client
var net = require('net'), readline = require('readline'), client = new net.Socket(), io = readline.createInterface(process.stdin, process.stdout);
client.on('data', function (data) {
    console.log('I got some data: ' + data);
});
client.on('close', function () {
    console.log('Connection closed');
});
var HOST = '127.0.0.1';
var PORT = 3000;
//connect to the server
client.connect(PORT, HOST, function () {
    console.log('Connected to: ' + HOST + ':' + PORT);
    client.write('Hello server! I am the client');
});
