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
<<<<<<< HEAD
    password : {
=======
    password: {
>>>>>>> a3565d5eb70ba05bb4edb9ec2b455b78f0dc1925
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        len: [2,20]
    }
},{
    timestamps:false
});
<<<<<<< HEAD

User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.localPassword);
}


=======
  
>>>>>>> a3565d5eb70ba05bb4edb9ec2b455b78f0dc1925
module.exports = User;