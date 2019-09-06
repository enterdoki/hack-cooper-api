const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

const server = app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
const io = require('socket.io')(server);
require('./socket')(io);
        
app.get('/', (req, res, next) => {
    res.send('Hello World!')
})  