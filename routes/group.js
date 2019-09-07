const express = require('express');
const bodyParser = require('body-parser')
const group = express.Router();
const Group = require('../database/models/Group')

group.use(bodyParser.json());

group.get('/', async(req, res, next) => {
    try {
        const groups = await Group.findAll();
        if(groups) {
            res.status(200).send(groups)
        } else {
            res.status(400).send("No groups")
        }
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports= group;