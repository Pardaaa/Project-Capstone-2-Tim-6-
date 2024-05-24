const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const configPath = path.resolve(__dirname, '..', 'config', 'config.json');
const config = require(configPath)[env];

const db = new Sequelize(config.username, config.password, config.database, {
    host: config.host,
    dialect: 'mysql'
});

module.exports = db;
