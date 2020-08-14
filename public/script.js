 let X = document.getElementById('X');
 let Y = document.getElementById('Y');
 let Z = document.getElementById('Z');
 let socket;

 socket = io.connect('http://the-tides-pendulum.herokuapp.com');
 //socket = io.connect('localhost:3005');
//socket = io();

   socket.on('message',
   function(msg){
     console.log('Tidal Shifts');
     let x = msg.X;
     X.innerHTML = x;
     let y = msg.Y;
     Y.innerHTML = y;
     let z = msg.Z;
     Z.innerHTML = z;
   });





////////////////////////////////////////////////////////// only send, emulating arduino///
 /*b.onclick = function() {
   console.log('cloc');
   sendMessage();
   // let msg = {
   //   val: 3
   // };
   // socket.emit('message', msg)
 }

////SEND FUNCTION takes and osc adress and single value
function sendMessage() {
  let msg = {
    val: 3
  };
  socket.emit('message', msg)
}*/
