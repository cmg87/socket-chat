//MERN Chat app Using Socket IO

//Express Server Setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//Middle ware for parsing json
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setup for Scocket IO
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', () => {
	console.log('user connected');

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	io.sockets.emit('message', 'test message');
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
