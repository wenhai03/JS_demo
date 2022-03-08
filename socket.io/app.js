var express = require('express');
var app = express();
app.use(express.static(__dirname))


var server = require('http').createServer(app);
var io = require('socket.io')(server);

// 监听客户端的连接事件，当客户端连接上来后，执行回调函数
io.of('/test').on('connection', function (socket) {
  console.log('服务器接收到客户端的连接');
  
  socket.emit('xxxx', 'hell02222')
  // socket.on('message', function (msg) { // 语法糖
  //   console.log(msg);
  //   socket.send('sever:' + msg);
  // });
});
server.listen(3000);
