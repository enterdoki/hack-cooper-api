const Users = require("./user");
const Groups = require('./group')
// Make associations here, if necessary;

Groups.belongsToMany(Users);
Users.belongsToMany(Groups);


module.exports = {
  Users,
  Groups
};