const Sequelize = require('sequelize');
const database = require('../config/db');

const sector = database.define('Sector', {
    IDSector: {
    type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
});

module.exports = sector;