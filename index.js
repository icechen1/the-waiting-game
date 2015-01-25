var path = require('path');
var app = require('express')();
var server = require('http').createServer(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.broadcast.emit('challenger', 1);
});
server.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
