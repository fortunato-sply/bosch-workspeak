const express = require('express');
const route = express.Router();

const multer = require("multer");
const config = require('./src/config/multer');

const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const register = require('./src/controllers/register');
const edit = require('./src/controllers/edit');

route.get('/home', home.pagInicialGet);
route.get('/', login.loadPage);
route.post('/Home', login.loginIn);
route.post('/register', register.register);
route.get('/edit', edit.getProfile);
route.post('/save', multer(config).single('attfoto'), edit.saveChanges);
route.post('/changePassword', edit.changePassword);

module.exports = route;
