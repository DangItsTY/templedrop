var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 168;  //  8080, 168

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
})

http.listen(port, function(){
  console.log('listening on *:'+port);
});
