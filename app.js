require('dotenv').config();  
const express  = require("express");
const cors = require('cors');
const soc = express();
const server = require("http").createServer(soc);
const io = require("socket.io").listen(server);
const port = process.env.PORT || 3000;
const user = require('./routes/user')

soc.use(cors());
soc.use('/user', user)

io.on("connection", socket => {
    socket.on("chat message", msg =>{
        socket.broadcast.emit('chat message', msg);
    })
    console.log('user connected');
})

server.listen(port, () => console.log('sever is running on port...'+port));
