const express  = require("express");
const soc = express;
const server = require("http").createServer(soc);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
    console.log('connected user/////');
})

server.listen(port, () => console.log('sever is running on port...'+port));