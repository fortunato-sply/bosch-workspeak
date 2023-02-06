const sequelize = require('sequelize');

const database = new sequelize('workSpeak', 'Project', 'etsds10243110',
{
    dialect: 'mssql', host:'localhost', port: 1433 // 49701
});

database.sync();
module.exports = database;