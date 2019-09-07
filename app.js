// require('dotenv').config();
// const express = require('express')
// const app = express()
// const cors = require('cors');
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// const server = app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
// const io = require('socket.io')(server);
// require('./socket')(io);
        
// app.get('/', (req, res, next) => {
//     res.send('Hello World!')
// })  
const express  = require("express");
const cors = require('cors');
const soc = express();
const server = require("http").createServer(soc);
const io = require("socket.io").listen(server);
const port = process.env.PORT || 4000;
const user = require('./routes/user')

soc.use(cors());
soc.use('/user', user)

io.on("connection", socket => {
    socket.on("chat message", msg =>{
        socket.emit("chat message", msg)
    })
})

server.listen(port, () => console.log('sever is running on port...'+port));
