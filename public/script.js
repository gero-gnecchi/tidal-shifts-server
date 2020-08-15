let elX = document.getElementById("X");
let elY = document.getElementById("Y");
let elZ = document.getElementById("Z");

const socket = io("localhost:3005");
// const socket = io("ws://the-tides-pendulum.herokuapp.com");

socket.on("connect", () => {
  socket.send("Hello from client!");
});

socket.on("test", (data) => {
  console.log("received test msg on client", data);
});

socket.on("data", (x, y, z) => {
  console.log("recieved gyro on client", x, y, z);
  elX.innerHTML = x;
  elY.innerHTML = y;
  elZ.innerHTML = z;
});

const btn = document.getElementById("btn");

btn.onclick = function () {
  console.log("button clicked - sending random gyro to server");
  const x = Math.random();
  const y = Math.random();
  const z = Math.random();
  socket.emit("gyro", x, y, z);
  socket.send("gyro", x, y, z);
};
