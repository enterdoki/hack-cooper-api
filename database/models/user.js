const Sequelize = require('sequelize');
const db = require('../db');

const Users = db.define("users", {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    username : {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        unique: {
            args: true,
            msg: "Username already taken."
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        len: [2,20]
    }
},{
    timestamps:false
});
  
module.exports = Users;