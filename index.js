
// express framwork for a basic http server
//var app = require('express')();
const express = require('express');
const app = express();
// create the http server
//var http = require('http').createServer(app);
// require the socket.io and bind it to a port

const server = app.listen(process.env.PORT || 80,listen);

function listen(){

  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://' + host + ':' + port);

}

/*io.attach(http, {
 pingInterval: 10000,
 pingTimeout: 5000,
 cookie: false
});*/

app.use(express.static('public'));

const io = require('socket.io')(server);

io.on('connection', function (socket) {

  console.log('user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('message', function (msg) {
   console.log("message:" +msg.X+ " " + msg.Y+ " " + msg.Z );

   io.sockets.emit('message', msg);
  });
  timeout();
});

function timeout() {
  setTimeout(function () {
   io.emit('reply',"A message from server");
    timeout();
  }, 5000);
}


//http.listen();
