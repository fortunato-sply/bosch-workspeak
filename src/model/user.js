const Sequelize = require('sequelize');
const database = require('../config/db');
const sector = require('./sector');

const user = database.define('User', {
IDUser: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
EDV: {
    type: Sequelize.INTEGER,
    allowNull: false,
},
Name: {
    type: Sequelize.STRING(50),
    allowNull: false
},
Password: {
    type: Sequelize.STRING(50),
    allowNull: false
},
Role: {
    type: Sequelize.STRING(20),
    allowNull: true
},
Picture: {
    type: Sequelize.STRING(300),
    allowNull: true
},
Description: {
    type: Sequelize.STRING(500),
    allowNull: true
},
});
user.belongsTo(sector, {
    constraint: true,
    foreignKey: 'IDSector',
    allowNull: false,
});

module.exports = user;