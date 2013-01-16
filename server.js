var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(55555);

function handler (req, res) {
  if (req.url == "/") {
    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;
  }
  if (req.url == "/machine.gif") {
    fs.readFile("machine.gif", function(err, text){
      res.setHeader("Content-Type", "image/gif");
      res.end(text);
    });
    return;
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

var net = require('net');
var client = net.connect(parseInt(process.argv[3]),process.argv[2],function(){
	client.setEncoding('utf8');
	console.log('Connected!!');
	client.on('data',function(chunk){
    chunk = chunk.replace("\n",'').split(" ");
    console.log(chunk);
    if (chunk[0] == "S" && chunk[1] == "MELR") io.sockets.emit('melr', {l: chunk[2], r: chunk[3]});
    if (chunk[0] == "S" && chunk[1] == "IFLR") io.sockets.emit('iflr', {l: chunk[2], r: chunk[3]});
    if (chunk[0] == "S" && chunk[1] == "ISLR") io.sockets.emit('islr', {l: chunk[2], r: chunk[3]});
    if (chunk[0] == "S" && chunk[1] == "IBLCR") io.sockets.emit('iblcr', {l: chunk[2], c: chunk[3], r: chunk[4]});
	});
	process.stdin.resume(); // Activate STDIN
	process.stdin.setEncoding('utf8'); // Set it to string encoding
	process.stdin.on('data',function(chunk){ // Pipe STDIN to Socket.out
		client.write(chunk);
	});
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { msg: 'Connected' });
  socket.on('cmd', function (data) {
    client.write(data.cmd);
    console.log(data);
  });
  socket.on('datas', function (data) {
    console.log(data);
  });
});
