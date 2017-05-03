var net = require('net');

var portNumber = process.argv[2];
var fill = function fill(n) {
	return n < 10 ? '0' + n : n 
};

var server = net.createServer(function(socket) {
  d = new Date();
  
  s = d.getFullYear() + "-" + 
    fill(d.getMonth() + 1) + "-" + 
    fill(d.getDate()) + " " + 
    fill(d.getHours()) + ":" +
    fill(d.getMinutes()) + "\n";
  
  socket.end(s);
});

server.listen(portNumber);