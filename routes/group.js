const express = require('express');
const bodyParser = require('body-parser')
const group = express.Router();
const Group = require('../database/models/group')
const User = require('../database/models/user')

group.use(bodyParser.json());

group.get('/', async (req, res, next) => {
    try {
        const groups = await Group.findAll();
        if (groups) {
            res.status(200).send(groups)
        } else {
            res.status(400).send("No groups")
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

group.post('/', async (req, res, next) => {
    try {
        const group = await Group.findOne({ where: { eventname: req.body.eventname } });
        if (!group) {
            const new_group = await Group.create({
                eventname: req.body.eventname,
                location: req.body.location,
                friends: req.body.friends,
                place: req.body.place
            });
            res.status(200).send(new_group);
        } else {
            res.status(400).send("Duplicate event.");
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

group.put('/:id', async (req, res, next) => {
    try {
        const group = await Group.findOne({
            where: { id: req.params.id }
        })
        if (group) {
            await Group.update({

                friends: group.friends + ',' + req.body.friends
            },
                {
                    where: { id: req.params.id }
                })
            await Group.update({
                place: group.place + ',' + req.body.place
            },
                {
                    where: { id: req.params.id },
                })
            res.status(200).send("Added")
        } else {
            res.status(400).send("Not found.")
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

group.delete('/:id', async(req, res, next) => {
    try {
        let result = await Group.findOne({where:{id:req.params.id}});
        if(result) {
            await Group.destroy({
                where:{id:req.params.id}
            })
            res.status(200).send("Deleted.");
        } else {
            res.status(400).send("Not found.");
        }
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = group;