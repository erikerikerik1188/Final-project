/*
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var image = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);



io.on('connection', function (socket) {
    //   for (var i in images) {
    //       io.sockets.emit("display image", images[i]);
    //  }
    socket.on("send image", function (data) {
       // images.push(data);
        io.sockets.emit("display image", data);
    })
});  
*/


var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("/Final project 4/index.html");
});

server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send statistics", function (statistics) {
        fs.appendFileSync("statistics.json", JSON.stringify(statistics) + "\n");
    })
});
