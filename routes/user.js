const express = require('express');
const bodyParser = require('body-parser')
const user = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
user.use(bodyParser.json());

const User = require('../database/models/user')

user.get('/', (req, res, next) => {
    res.status(200).send("Hi, this is the user route.");
})

user.post('/login', async(req, res, next) => {
    try {
        const user = await User.findOne({ where: { username:req.body.username } });
    if(user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            let payload = { id: user.id };
            let token = jwt.sign(payload, 'wyaapp');
            res.status(200).send({ user, token });
        }
    }
    else {
        res.status(400).send('Username does not exist or Password is incorrect.');
      }
    } catch(err) {
        res.status(400).send(err);
    }

})

user.post('/signup', async(req, res, next) => {
    try {
        let hash_password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
        let new_user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hash_password
        });
        res.status(201).json(new_user);
    } catch (err) {
        next(err)
    }
});

module.exports= user;