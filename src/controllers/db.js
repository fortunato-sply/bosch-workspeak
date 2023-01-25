const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('projetoJS', 'AulaJS', 'J@SqL0123_QWE',
{
    dialect: 'mssql', host:'localhost', port: 1433
});

database.sync();
module.exports = database;