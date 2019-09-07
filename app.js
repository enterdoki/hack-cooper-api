require('dotenv').config();  
const express  = require("express");
const cors = require('cors');
const soc = express();
const server = require("http").createServer(soc);
const io = require("socket.io").listen(server);
const port = process.env.PORT || 4000;
const user = require('./routes/user')
const group = require('./routes/group')
const db = require('./database/db')

soc.use(cors());
soc.use('/user', user)
soc.use('/group', group)

io.on("connection", socket => {
    socket.on("chat message", msg =>{
        socket.emit("chat message", msg)
    })
})

// sync model schema with cloud db
// db.sync({
//     force:true
// })

server.listen(port, () => console.log('Server is running on port...'+port));
