// express framwork for a basic http server
//var app = require('express')();
const express = require("express");
const app = express();
// create the http server
//var http = require('http').createServer(app);
// require the socket.io and bind it to a port

const server = app.listen(process.env.PORT || 3005, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://localhost:" + port);
}

/*io.attach(http, {
 pingInterval: 10000,
 pingTimeout: 5000,
 cookie: false
});*/

app.use(express.static("public"));

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log("user connected");

  io.on("disconnect", function () {
    console.log("user disconnected");
  });

  socket.on("message", (data) => {
    console.log("server recieved msg", data);
  });

  socket.on("gyro", (x, y, z) => {
    console.log("server recieved gyro msg", x, y, z);
    console.log("server immediately relaying data to clients");
    io.emit("data", x, y, z);
  });

  let counter = 0;
  setInterval(() => {
    io.emit("test", { msg: "server test message", counter: counter++ });
  }, 8000);
});
