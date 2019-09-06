const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://hackcooper:admin1234@hackcooper.clgjnattbiei.us-east-2.rds.amazonaws.com:5432/postgres');

module.exports = db;