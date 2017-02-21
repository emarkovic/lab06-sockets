'use strict';
var net = require('net'), readline = require('readline'), client = new net.Socket(), io = readline.createInterface(process.stdin, process.stdout);
client.on('data', function (data) {
    console.log('I got some data: ' + data);
});
var HOST = '127.0.0.1';
var PORT = 3000;
client.connect(PORT, HOST, function () {
    console.log('Connected to: ' + HOST + ':' + PORT);
    io.setPrompt('>');
    io.prompt();
    io.on('line', function (line) {
        switch (line.trim()) {
            case 'exit':
                client.end();
                console.log('client disconnect');
                process.exit(0);
                break;
            default:
                client.write(line);
                break;
        }
    }).on('close', function () {
        client.end();
        console.log('client disconnect');
        process.exit(0);
    });
});
