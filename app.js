const http = require('http');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const server = app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
const io = require('socket.io')(server);
require('./socket')(io);
        
app.get('/', (req, res, next) => {
    res.send('Hello World!')
})  