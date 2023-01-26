const express = require('express');
const route = express.Router();

const multer = require("multer");
const config = require('./src/config/multer');

const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const register = require('./src/controllers/register');

route.get('/home', home.pagInicialGet);
route.get('/', login.loadPage);
route.post('/Home', login.loginIn);
route.post('/register', register.register);

module.exports = route;
