const Sequelize = require('sequelize');
const database = require('../config/db');
const user = require('./user');
const post = require('./post');

const comment = database.define('Comment', {
    IDComment: {
    type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Content: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
});

user.belongsTo(user, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDUser'
});
user.belongsTo(post, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDPost'
});

module.exports = post;