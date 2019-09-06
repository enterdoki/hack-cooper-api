require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;
const person = require('./routes/user')
const db = require('./database/db')
app.use(cors());
app.use('/user', person);

app.get('/', (req, res, next) =>{
    res.status(200).send('This is the default API.')
}) 

// db.sync({force:true});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))