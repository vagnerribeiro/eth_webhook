const Sequelize = require('sequelize');
const DbConfig = require('../config/database');

const dbConnection = new Sequelize(DbConfig);

module.exports = dbConnection;
