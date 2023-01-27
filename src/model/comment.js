const Sequelize = require('sequelize');
const database = require('../config/db');
const user = require('./user');
const post = require('./post');
const sector = require('./sector');

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

comment.belongsTo(user, {
    constraint: true,
    foreignKey: 'IDUser'
});
comment.belongsTo(post, {
    constraint: true,
    foreignKey: 'IDPost'
});
comment.belongsTo(sector, {
    constraint: true,
    foreignKey: 'IDSector'
});

module.exports = comment;