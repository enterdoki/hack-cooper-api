const Sequelize = require('sequelize');
const db = require('../db');

const Groups = db.define("groups", {
    eventname: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    }
}, {
        timestamps: false
    });

module.exports = Groups;