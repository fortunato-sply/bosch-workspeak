const Sequelize = require('sequelize');
const database = require('../config/db');
const user = require('./user');
const sector = require('./sector');

const post = database.define('Post', {
    IDPost: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Content: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    General: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});

post.belongsTo(user, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDUser'
});
post.belongsTo(sector, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDSector'
});

module.exports = post;