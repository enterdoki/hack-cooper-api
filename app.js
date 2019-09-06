const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res, next) =>{
    res.send('Hello World!')
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))