const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

const User = db.define("users", {
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
    password : {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        len: [2,20]
    }
},{
    timestamps:false
});

User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.localPassword);
}


module.exports = User;